@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ============================================
echo  TADA! 作品集 - 一键发布到 GitHub Pages
echo ============================================
echo.

if "%GH_TOKEN%"=="" (
  echo [错误] 未找到 GH_TOKEN 环境变量。
  echo 请先运行:
  echo   [Environment]::SetEnvironmentVariable("GH_TOKEN","你的令牌","User")
  echo 然后重新打开终端。
  pause
  exit /b 1
)

set REPO=richardsonjeffrey989/tada-portfolio-ppt
set SITE=https://richardsonjeffrey989.github.io/tada-portfolio-ppt/

echo [1/5] 检查本地页面文件...
if not exist presentation.html (echo [错误] 缺少 presentation.html & pause & exit /b 1)
if not exist index.html (echo [错误] 缺少 index.html & pause & exit /b 1)

echo [2/5] 检查是否误提交令牌...
for %%F in (presentation.html presentation.css presentation.js style.css index.html) do (
  findstr /C:"ghp_" "%%F" >nul 2>&1
  if not errorlevel 1 (echo [错误] %%F 中发现疑似令牌，停止发布。 & pause & exit /b 1)
)

echo [3/5] 暂存修改...
git add -A
git status --short

echo.
set /p MSG=请输入本次提交说明（直接回车使用默认）: 
if "%MSG%"=="" set MSG=Update TADA portfolio site

echo [4/5] 提交并推送...
git commit -m "%MSG%"
if errorlevel 1 (
  echo   没有需要提交的更改，跳过提交。
)
git -c http.version=HTTP/1.1 push https://x-access-token:%GH_TOKEN%@github.com/%REPO%.git HEAD:main
if errorlevel 1 (echo [错误] 推送失败，请检查网络或令牌权限。 & pause & exit /b 1)

echo [5/5] 等待 GitHub Pages 自动部署...
echo 发布完成后访问: %SITE%
echo 通常需要 1-2 分钟。
echo.
pause
