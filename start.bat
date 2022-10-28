@echo off
title DM ALL

if exist node_modules\ (
  node index
  pause
) else (
  call npm i >> NUL
  node index
  pause
  exit
)