#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/version/node/v20.5.1/bin

cd /home/ubuntu/monorepo-github-ci-cd
git pull origin master
yarn build
pm2 stop express
pm2 start npm --name "express" -- run "start:express"