---
layout: base
title: Code snippets
tags: post
---
# Code

## [`fnm`](https://github.com/Schniz/fnm)

```bash
brew install fnm # to install or upgrade
echo 'eval "$(fnm env)"' >> .zshrc # if needed
fnm install lts-latest
fnm use lts-latest
node --version > .node-version
```

## ESXi

Trust certificate of ESXi host

```bash
echo -n | openssl s_client -connect $ESX_ADDR:443 | openssl x509 > my.cert
```
