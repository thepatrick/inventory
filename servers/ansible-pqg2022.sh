#!/bin/bash

set -euf

./ansible-playbook.sh pqg2022.corp.kasada.io --connection=local "$@"
