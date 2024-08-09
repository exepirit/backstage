# [Backstage](https://backstage.io)

To start the app, run:

```sh
yarn install
yarn dev
```

## Installation

1. Build image
```shell
ansible-playbook ansible/build.yml
```

2. Deploy container on remote host
```shell
ansible-playbook --key-file {key_path} --inventory {server_ip}, -u {ansible_user} ansible/deploy_podman.yml
```