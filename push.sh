#!/bin/bash
cd "C:\Users\draks\Downloads\portfolio"
git remote add origin https://github.com/Rakshitha1427/portfolio.git 2>/dev/null || true
git branch -M main 2>/dev/null || true
git push -u origin main 2>&1
echo "Push complete"
