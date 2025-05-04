#builder
FROM ubuntu:20.04 as builder
RUN apt-get update && \
 DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential cpulimit cmake clang-12 openssl liblz4-dev libssl-dev libreadline-dev ccache libatomic1 libsodium-dev libsodium23 libgsl-dev libblas-dev libmicrohttpd-dev libsecp256k1-dev  pkg-config zlib1g-dev autoconf automake libtool gperf wget git ninja-build && \
 rm -rf /var/lib/apt/lists/*

ARG TON_REPO
RUN git clone --recursive ${TON_REPO:-https://github.com/ton-blockchain/ton} /ton
WORKDIR /ton
ARG TON_BRANCH
RUN git checkout ${TON_BRANCH:-master}

ENV CC clang-12
ENV CXX clang++-12
ENV CCACHE_DISABLE 1
ENV CFLAGS="-Wno-error=missing-braces -Wno-missing-braces"
ENV CXXFLAGS="-Wno-error=missing-braces -Wno-missing-braces"

RUN mkdir build && cd build && \
    cpulimit -l 50 -b -e cmake && \
    cmake -GNinja -DCMAKE_BUILD_TYPE=Release .. && \
    cpulimit -l 50 -b -e ninja && \
    ninja -j1 storage-daemon storage-daemon-cli

# main
FROM ubuntu:20.04
RUN apt-get update && \
 apt-get install -y openssl curl libgsl-dev liblz4-dev libssl-dev libreadline-dev libblas-dev libmicrohttpd-dev libsecp256k1-dev libtool gnupg wget libsodium23 libatomic1 gcc g++ make git supervisor python3 python3-pip && \
 rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
 apt-get install -y nodejs && \
 rm -rf /var/lib/apt/lists/*

# Копируем бинарники из builder
COPY --from=builder /ton/build/storage/storage-daemon/storage-daemon-cli /usr/local/bin/
COPY --from=builder /ton/build/storage/storage-daemon/storage-daemon /usr/local/bin/

RUN pip install pexpect

# Копируем API
WORKDIR /app
COPY api /app/api
COPY storage-gateway /app/
RUN npm install

RUN sed -i 's/\r//g' /app/process-file.py

# Копируем скрипты и конфиги
COPY docker/scripts /scripts
COPY docker/supervisord.conf /etc/supervisor/supervisord.conf

# Установка SSH и supervisor
RUN apt-get update -o Acquire::AllowInsecureRepositories=true && \
    DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get install -y --allow-unauthenticated \
    openssh-server supervisor && \
    mkdir -p /var/run/sshd && \
    echo 'root:12345' | chpasswd && \
    sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
    ssh-keygen -A

# Конфигурация supervisor для запуска SSH и основного сервиса
RUN echo "[program:sshd]" >> /etc/supervisor/conf.d/sshd.conf && \
    echo "command=/usr/sbin/sshd -D" >> /etc/supervisor/conf.d/sshd.conf && \
    echo "autostart=true" >> /etc/supervisor/conf.d/sshd.conf && \
    echo "autorestart=true" >> /etc/supervisor/conf.d/sshd.conf && \
    echo "stderr_logfile=/var/log/sshd.err.log" >> /etc/supervisor/conf.d/sshd.conf && \
    echo "stdout_logfile=/var/log/sshd.out.log" >> /etc/supervisor/conf.d/sshd.conf

# Копируем основной конфиг supervisord
COPY docker/supervisord.conf /etc/supervisor/supervisord.conf

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
