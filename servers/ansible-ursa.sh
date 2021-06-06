#!/bin/bash

set -euf

./ansible-playbook.sh ursa.thepatrick.cloud --connection=local "$@"
