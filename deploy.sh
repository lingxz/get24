#!/bin/bash
set -x
set -e
set -o pipefail

echo -e "\nBuilding Jekyll site:"
rm -rf _site
jekyll build

if [ ! -e _site ]; then
  echo -e "\nJekyll didn't generate anything in _site!"
  exit -1
fi

cd _site
git init
git remote add origin 'ssh://git@178.62.18.237/home/git/get24-static.git'
git add .
git commit -am "new version $(date)" --allow-empty
git push origin --mirror
