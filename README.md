# inventory

## Tips & Tricks

### Running ansible-playbook

Each folder should have an `ansible-playbook.sh` to make it easy to run ansible on a given host over SSH.

### Grabbing roles from galaxy

Use `--roles-path` to install in to this repo: e.g. `ansible-galaxy install --roles-path (pwd)/roles geerlingguy.docker`
