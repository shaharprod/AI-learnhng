@echo off
chcp 65001 >nul
cd /d "%~dp0"

set MSG=%~1
if "%MSG%"=="" set MSG=עדכון אתר

git add -A
git status
echo.
git commit -m "%MSG%"
git push

pause
