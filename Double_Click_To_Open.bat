@echo off
title Kuruva Thulaja Bhavani - Portfolio Dashboard
echo =======================================================
echo   Launching Bhavani's Portfolio Dashboard...
echo =======================================================
echo.

:: Check if port 5173 is already listening
netstat -ano | findstr :5173 >nul
if %errorlevel% equ 0 (
    echo Local development server is already running!
    echo Opening browser at http://localhost:5173 ...
    start "" "http://localhost:5173/"
    exit /b
)

:: If not running, start server in background and open browser
echo Starting local web server...
start /b cmd /c "npm run dev -- --host 127.0.0.1 --port 5173"
timeout /t 2 /nobreak >nul
echo Opening browser at http://localhost:5173 ...
start "" "http://localhost:5173/"

echo.
echo Portfolio is now open in your browser!
echo (You can close this command window anytime.)
timeout /t 3 >nul
exit
