#!/bin/bash

set -euf

./ansible-playbook.sh harper.thepatrick.cloud --connection=local "$@"
