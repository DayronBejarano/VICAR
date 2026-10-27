@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
set "PORT=8052"
where py >nul 2>&1
if %errorlevel%==0 (
  set "PYTHON=py"
) else (
  set "PYTHON=python"
)
echo.
echo =====================================================
echo   VICAR V5.2 - Vista previa sin cache anterior
echo =====================================================
echo Carpeta: %CD%
echo Direccion: http://localhost:%PORT%/index.html?v=5.2
echo.
echo Para cerrar el servidor presiona Ctrl + C.
echo.
start "" "http://localhost:%PORT%/index.html?v=5.2"
%PYTHON% -m http.server %PORT%
echo.
echo El servidor se detuvo.
pause
