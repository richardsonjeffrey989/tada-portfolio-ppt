@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
echo ============================================
echo  TADA! 作品集 PPT 汇报模式 - 本地启动
echo ============================================
echo.
echo 正在打开本地 PPT 汇报页面...
echo 本地访问地址: file:///%CD:\=/%/presentation.html
echo.
start "" "%CD%\presentation.html"
echo 如果浏览器没有自动打开，请手动双击 presentation.html
echo.
pause
