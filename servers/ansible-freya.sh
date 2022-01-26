#!/bin/bash

set -euf

./ansible-playbook.sh freya.thepatrick.cloud --connection=local "$@"
