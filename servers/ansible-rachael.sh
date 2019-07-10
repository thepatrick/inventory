#!/bin/bash

set -euf

./ansible-playbook.sh rachael.thepatrick.cloud --connection=local "$@"
