
# builder
FROM ubuntu:20.04 as builder
RUN apt-get update && \
 DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential cpulimit cmake clang-12 openssl liblz4-dev libssl-dev libreadline-dev ccache libatomic1 libsodium-dev libsodium23 libgsl-dev libblas-dev libmicrohttpd-dev libsecp256k1-dev  pkg-config zlib1g-dev autoconf automake libtool gperf wget git ninja-build && \
 rm -rf /var/lib/apt/lists/*

ARG TON_REPO
RUN git clone --recursive ${TON_REPO:-https://github.com/ton-blockchain/ton} /ton
WORKDIR /ton
ARG TON_BRANCH
RUN git checkout ${TON_BRANCH:-testnet}

ENV CC clang-12
ENV CXX clang++-12
ENV CCACHE_DISABLE 1
ENV CFLAGS="-Wno-error=missing-braces -Wno-missing-braces"
ENV CXXFLAGS="-Wno-error=missing-braces -Wno-missing-braces"

RUN mkdir build && cd build && \
    cpulimit -l 70 -b -e cmake && \
    cmake -GNinja -DCMAKE_BUILD_TYPE=Release .. && \
    cpulimit -l 70 -b -e ninja && \
    ninja -j1 rldp-http-proxy generate-random-id

# main
FROM ubuntu:20.04
RUN apt-get update && \
 apt-get install -y openssl curl libgsl-dev libsodium23 liblz4-dev libssl-dev libreadline-dev libblas-dev libmicrohttpd-dev libsecp256k1-dev libtool gnupg wget libatomic1 gcc g++ make git supervisor && \
 rm -rf /var/lib/apt/lists/*

COPY --from=builder /ton/build/rldp-http-proxy/rldp-http-proxy /usr/local/bin
COPY --from=builder /ton/build/utils/generate-random-id /usr/local/bin

WORKDIR /app
COPY entrypoint.sh /app
COPY generate_adnl.sh /app
ENTRYPOINT [ "/bin/bash" ]
