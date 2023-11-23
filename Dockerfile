FROM node:20.9.0-bookworm-slim AS workspace

USER root:root

SHELL ["/bin/bash", "-c"]

# Install core tools
RUN apt-get update && apt-get install --no-install-recommends -y \
    curl \
    git \
    gnupg2 \
    make \
    python3-pip \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/*

ARG WORKSPACE="/workspace"

WORKDIR "${WORKSPACE}"

# Install dev tools
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt --break-system-packages

# Enable PNPM
RUN corepack enable && pnpm config set store-dir ~/.local/share/pnpm/store

# Install deps
COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

VOLUME ["${WORKSPACE}/node_modules"]

# For Devcontainer GPG forwarding
RUN rm -rf ~/.gnupg

RUN git config --system --add safe.directory "${WORKSPACE}"

HEALTHCHECK NONE
