#!/bin/bash

set -x
set -e

sudo adduser `whoami` plugdev

sudo apt install pmount dcfldd syslinux-efi

echo "May need to `sg plugdev`"