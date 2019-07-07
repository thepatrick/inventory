#!/bin/bash

set -euf

./ansible-playbook.sh kmbp.thepatrick.cloud --connection=local "$@"
