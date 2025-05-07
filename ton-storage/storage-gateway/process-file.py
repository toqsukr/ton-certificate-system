#!/usr/bin/env python3
import pexpect
import sys
import os
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('storage_daemon.log'),
        logging.StreamHandler()
    ]
)

def validate_path(path):
    if not os.path.exists(path):
        raise ValueError(f"Файл не существует: {path}")
    return os.path.abspath(path)

def copy_with_open(src, dst):
    """Копирование файла"""
    with open(src, 'rb') as src_file:
        with open(dst, 'wb') as dst_file:
            dst_file.write(src_file.read())
    return dst

if len(sys.argv) < 2:
    logging.error("Usage: python3 script.py <filename>")
    sys.exit(1)

try:
    filepath = validate_path(sys.argv[1])
    filename = os.path.basename(filepath)
    target_dir = "/exchange/"
    target_msg_dir = "/app/shared-temp/"

    logging.info(f"Обработка файла: {filename}")

    copy_with_open(filepath, os.path.join(target_dir, filename))

    logging.info(f"Файл {filename} сохранен в {target_dir}")

    child = pexpect.spawn(
        "storage-daemon-cli -I 127.0.0.1:5555 "
        "-k /data/ton-storage/cli-keys/client "
        "-p /data/ton-storage/cli-keys/server.pub",
        encoding='utf-8',
        timeout=60
    )

    child.expect("Connected", timeout=30)
    logging.info("Подключение установлено")

    create_cmd = f"create {os.path.join(target_dir, filename)}"
    logging.info(f"Выполнение: {create_cmd}")
    child.sendline(create_cmd)

    child.expect(["BagID = ", 'Query error: Cannot add torrent: duplicate hash '], timeout=10)
    bag_id = child.readline().strip()
    logging.info(f"Получен BagID: {bag_id}")

    msg_path = os.path.join(target_msg_dir, f'{filename}-msg')

    contract_cmd = (
        f"new-contract-message {bag_id} {msg_path} "
        "--provider 0:8C21A0017D763959CB3BB1671AADE9AE104E5597870DAEC94CA539702C244F6B"
    )
    logging.info(f"Выполнение: {contract_cmd}")
    child.sendline(contract_cmd)

    index = child.expect(["Saved message body to file", "Query error"], timeout=10)

    logging.info('Successfull saved' if index == 0 else "Saving error")

    # Явное завершение сессии
    child.sendline("exit")
    logging.info("Сессия завершена")

    print(bag_id)  # Возвращаем путь к файлу

    # Проверка результата
    if not os.path.exists(msg_path):
        raise Exception(f"Файл контракта не создан: {msg_path}")

except Exception as e:
    logging.error(f"Ошибка: {str(e)}", exc_info=True)
    sys.exit(1)