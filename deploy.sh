#!/bin/bash

ssh marlon@52.149.126.14 "
  cd /home/marlon/express_marlon
  git pull
  npm install
  pm2 restart express_marlon --update-env
"
