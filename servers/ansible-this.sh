#!/bin/bash

set -euf

./ansible-playbook.sh `hostname` --connection=local "$@"
