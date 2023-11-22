#!/bin/bash

set -euf

./ansible-playbook.sh mia.thepatrick.cloud --connection=local "$@"
