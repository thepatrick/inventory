#!/bin/bash

set -euf

./ansible-playbook.sh serenity.thepatrick.cloud --connection=local "$@"
