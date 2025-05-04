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

if len(sys.argv) < 2:
    logging.error("Usage: python3 script.py <filename>")
    sys.exit(1)

try:
    filepath = validate_path(sys.argv[1])
    filename = os.path.basename(filepath)
    target_dir = "/app/shared-temp/"

    logging.info(f"Обработка файла: {filepath}")

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

    child.expect("BagID = ", timeout=30)
    bag_id = child.readline().strip()
    logging.info(f"Получен BagID: {bag_id}")

    msg_path = os.path.join(target_dir, f'{filename}-msg')

    contract_cmd = (
        f"new-contract-message {bag_id} {msg_path} "
        "--query-id 0 --provider 0:3BB3631BD98FB29DC4663820C46F1E2CF19A2FB1E308FF210C0091E5EA5B6DC0"
    )
    logging.info(f"Выполнение: {contract_cmd}")
    child.sendline(contract_cmd)

    child.expect(["Saved message body to file", "Query error"], timeout=10)
    
    # Явное завершение сессии
    child.sendline("exit")
    logging.info("Сессия завершена")

    # Проверка результата
    if not os.path.exists(msg_path):
        raise Exception(f"Файл контракта не создан: {msg_path}")

    print(msg_path)  # Возвращаем путь к файлу

except Exception as e:
    logging.error(f"Ошибка: {str(e)}", exc_info=True)
    sys.exit(1)