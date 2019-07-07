#!/bin/sh

set -euf

if [ "$#" -lt 1 ]; then
    echo "You must specify at least a limit (e.g. ansible-up.sh hostname)"
    exit
fi

# TODO: clone PLAYBOOK_REPO if not present, git pull if it is.
PLAYBOOK_REPO=../../debconf-ansible

PLAYBOOKS="$PLAYBOOK_REPO/site.yml site.yml"

LIMIT_FILTER=$1
shift

ansible-playbook \
    --diff \
    --inventory-file=hosts \
    --become \
    --vault-password-file vault_password \
    --ask-become-pass \
    --user videoteam \
    --limit=$LIMIT_FILTER \
    $PLAYBOOKS \
    "$@"