#!/bin/bash
mkdir _site
cp main.js _site/
cp solver.js _site/
cp styles.css _site/
cp index.html _site/

cd _site
git init
git remote add origin 'ssh://git@178.62.18.237/home/git/get24-static.git'
git add .
git commit -am "new version $(date)" --allow-empty
git push origin --mirror

cd ..
rm -rf _site