#!/bin/bash
echo "# FMDS_2024-2_AULA-08" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ivanlppires/FMDS_2024-2_AULA-08.git
git push -u origin main
