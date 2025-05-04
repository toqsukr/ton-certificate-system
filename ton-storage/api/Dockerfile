FROM python:3.11-slim
WORKDIR /app

# Установка зависимостей
RUN apt-get update && apt-get install -y openssh-client

COPY ./api /app

# Установка pip пакетов напрямую
RUN pip install flask flask_cors gunicorn paramiko

COPY ./api/ssl/client.crt /usr/local/share/ca-certificates/
RUN chmod 644 /usr/local/share/ca-certificates/client.crt && \
    update-ca-certificates

# Настройки для корректного логирования
ENV PYTHONUNBUFFERED=1
ENV GUNICORN_ACCESS_LOG=-
ENV GUNICORN_ERROR_LOG=-

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5174", \
     "--access-logfile", "-", \
     "--error-logfile", "-", \
     "--capture-output", \
     "--log-level", "info", \
     "--certfile", "ssl/server.crt", \
     "--keyfile", "ssl/server.key", \
     "--ca-certs", "ssl/client-ca.crt", \
     "app:app"]
