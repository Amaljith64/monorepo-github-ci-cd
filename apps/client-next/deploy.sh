#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/version/node/v20.5.1/bin

cd /home/ubuntu/monorepo-github-ci-cd
git pull origin master
source ~/.bashrc
yarn build
pm2 stop next
pm2 start npm --name "next" -- run "start:next"