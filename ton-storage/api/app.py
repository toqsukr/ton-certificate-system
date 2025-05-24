import os
import time
import paramiko
import logging
from flask import Flask, request, send_file, make_response
import json
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
CORS(app, resources={r"/api/*": {"origins": "*", "supports_credentials": False}})
TEMP_DIR = "/app/shared-temp/"
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
    temp_path = None
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
        save_uploaded_file(file, temp_path)

        with ssh_connection() as ssh:
            remote_script = f"python3 /app/process-file.py {temp_path}"
            logger.info(f"Запускаем скрипт: {remote_script}")
            
            # Выполняем команду и получаем вывод
            stdin, stdout, stderr = ssh.exec_command(remote_script)
            exit_status = stdout.channel.recv_exit_status()
            output = stdout.read().decode().strip()
            error_output = stderr.read().decode().strip()

            if exit_status != 0:
                logger.error(f"Ошибка выполнения скрипта: {error_output}")
                return {"error": f"Remote script failed: {error_output}"}, 500

            if not output:
                logger.error("Скрипт не вернул результат")
                return {"error": "Remote script returned empty response"}, 500

            logger.info(f"Успешный результат: {output}")
            response_data = {"bag_id": output}

            response = make_response(json.dumps(response_data))

            response.headers['Content-Type'] = 'application/json'

            return response
            # send_file(
            #     os.path.join(TEMP_DIR, f"{file.filename}-msg"),
            #     as_attachment=True
            # )

    except Exception as e:
        logger.error(f"Ошибка обработки запроса: {str(e)}", exc_info=True)
        return {"error": str(e)}, 500

    finally:
        if temp_path and os.path.exists(temp_path):
            try:
                os.remove(temp_path)
                logger.info(f"Удален временный файл: {temp_path}")
            except Exception as e:
                logger.warning(f"Ошибка удаления файла: {temp_path} - {str(e)}")
                