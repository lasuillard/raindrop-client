#!/usr/bin/env bash

sudo apt-get update && sudo apt-get install -y bash-completion

pip3 install schemathesis

echo '
if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi
' >>~/.bashrc
