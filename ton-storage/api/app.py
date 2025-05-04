import os
import time
import paramiko
import logging
from flask import Flask, request, send_file
from flask_cors import CORS
from io import BytesIO
from contextlib import contextmanager

# Настройка логгера
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('api.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)
TEMP_DIR = "/app/shared-temp"
os.makedirs(TEMP_DIR, exist_ok=True)

# SSH конфигурация
GATEWAY_SSH = {
    'hostname': 'gateway',  # Имя сервиса в docker-compose или IP
    'port': 22,
    'username': 'root',
    'password': '12345',  # Пароль, который вы установили через chpasswd
    'allow_agent': False,  # Отключаем использование SSH-агента
    'look_for_keys': False,  # Не ищем ключи в системе
    'timeout': 30  # Таймаут подключения
}
@contextmanager
def ssh_connection():
    """Контекстный менеджер для SSH соединения"""
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect(**GATEWAY_SSH)
        logger.info("SSH соединение установлено")
        yield ssh
    finally:
        ssh.close()
        logger.info("SSH соединение закрыто")

def save_uploaded_file(file, path):
    """Безопасное сохранение загруженного файла"""
    try:
        with open(path, 'wb') as f:
            file.save(f)
        logger.info(f"Файл сохранен: {path}")
    except Exception as e:
        logger.error(f"Ошибка сохранения файла: {str(e)}")
        raise

@app.route('/upload', methods=['POST'])
def upload_file():
    temp_path = msg_path = None
    try:
        logger.info("Начало обработки запроса /upload")
        
        if 'file' not in request.files:
            logger.error("Файл не предоставлен")
            return {"error": "No file provided"}, 400

        file = request.files['file']
        if not file.filename:
            logger.error("Пустое имя файла")
            return {"error": "Empty filename"}, 400

        temp_path = os.path.join(TEMP_DIR, file.filename)
        msg_path = f"{temp_path}-msg"
        
        save_uploaded_file(file, temp_path)

        with ssh_connection() as ssh:
            remote_script = f"/app/process-file.py {temp_path}"
            logger.info(f"Запускаем скрипт: {remote_script}")
            
            stdin, stdout, stderr = ssh.exec_command(remote_script)
            exit_status = stdout.channel.recv_exit_status()
            
            if exit_status != 0:
                error_msg = stderr.read().decode()
                logger.error(f"Ошибка выполнения скрипта: {error_msg}")
                raise Exception(f"Script failed: {error_msg}")

            logger.info(f"Результат выполнения: {stdout.read().decode()}")

        if not os.path.exists(msg_path):
            raise Exception(f"Файл сообщения не создан: {msg_path}")

        logger.info(f"Отправка файла: {msg_path}")
        return send_file(
            msg_path,
            as_attachment=True,
            download_name=temp_path
        )

    except Exception as e:
        logger.error(f"Ошибка обработки запроса: {str(e)}", exc_info=True)
        return {"error": str(e)}, 500

    finally:
        for path in [temp_path, msg_path]:
            if path and os.path.exists(path):
                try:
                    # os.remove(path)
                    logger.info(f"Удален временный файл: {path}")
                except Exception as e:
                    logger.warning(f"Ошибка удаления файла: {path} - {str(e)}")