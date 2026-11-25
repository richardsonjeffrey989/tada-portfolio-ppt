# TADA! 作品集网站部署与维护说明

## 1. 基本信息

- GitHub 仓库：`https://github.com/richardsonjeffrey989/tada-portfolio-ppt`
- 公开网址（首页 / PPT 汇报模式）：`https://richardsonjeffrey989.github.io/tada-portfolio-ppt/`
- PPT 汇报模式直达：`https://richardsonjeffrey989.github.io/tada-portfolio-ppt/presentation.html`
- 普通作品集网页模式：`https://richardsonjeffrey989.github.io/tada-portfolio-ppt/portfolio/`
- 部署方式：GitHub Pages，从 `main` 分支根目录发布（`legacy` branch deploy）
- 仓库公开范围：**公开仓库**。GitHub Pages 免费方案要求公开仓库；仅发布网站运行必需文件。

## 2. 本地启动

1. 双击 `start-local.cmd`，会自动用默认浏览器打开 `presentation.html`。
2. 或直接打开 `presentation.html`。
3. 本地访问地址：`file:///<项目目录>/presentation.html`

本地版本不依赖网络即可查看页面、图片、流程图与本地视频。第七章线上产品 iframe 依赖网络；网络不可用时会自动切换到本地保底演示视频。

## 3. 发布机制

当前使用 GitHub Pages 的分支部署模式：推送到 `main` 分支后，Pages 自动重新构建并更新原网址。无需 GitHub Actions，也不需要 `workflow` 权限。

## 4. 一键发布

在 PowerShell 中设置一次令牌（用户级，不写入项目文件）：

```powershell
[Environment]::SetEnvironmentVariable("GH_TOKEN","你的令牌","User")
```

重新打开终端后，在项目目录运行：

```cmd
publish.cmd
```

脚本会执行：检查入口文件 → 扫描疑似令牌 → `git add` → 提交 → 推送 `main` → 等待 Pages 自动部署。

也可以手动执行：

```powershell
git add -A
git commit -m "Update site"
git -c http.version=HTTP/1.1 push https://x-access-token:$env:GH_TOKEN@github.com/richardsonjeffrey989/tada-portfolio-ppt.git HEAD:main
```

## 5. 恢复历史版本

```powershell
git log --oneline -10
git checkout <提交的短SHA> -- presentation.html presentation.css presentation.js
publish.cmd
```

## 6. 产品功能依赖

- 第七章 iframe 指向 `https://shoucang.165-22-254-236.sslip.io/?frame=0`，依赖线上服务与网络。
- 若 iframe 5 秒内未加载或被拦截，自动切换到本地 `assets/showcase/full-flow-faststart.mp4` 演示视频。
- GitHub Pages 只提供静态文件，不提供后端 API；真实产品后端不在 Pages 上。

## 7. 当前仍需注意

- 令牌仅在环境变量中保存，不要写入仓库任何文件；如令牌泄露应立即在 GitHub 撤销并重新生成。
- 67 MB 演示视频超过 GitHub 建议的 50 MB 单文件阈值，但已成功上传并可通过 Pages 访问。
- 当前公开仓库中未包含浏览器缓存、临时截图与原始大视频副本。
