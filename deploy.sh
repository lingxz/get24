#!/bin/bash
mkdir _site
cp main.js _site/
cp solver.js _site/
cp styles.css _site/
cp index.html _site/

scp -r _site/* root@165.22.255.104:/var/www/get24-static

rm -rf _site