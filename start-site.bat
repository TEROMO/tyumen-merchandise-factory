@echo off
chcp 65001 >nul
cd /d "%~dp0"

where pnpm >nul 2>&1
if errorlevel 1 (
  echo Не найден pnpm. Установите Node.js и выполните: npm install -g pnpm
  pause
  exit /b 1
)

echo Сайт запускается по адресу http://localhost:8443
echo Не закрывайте это окно, пока работаете с сайтом.
pnpm run start

if errorlevel 1 pause
