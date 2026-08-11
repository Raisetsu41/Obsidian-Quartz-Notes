# 详细设置指南 / Setup Guide

[中文](#中文指南) | [English](#english-guide)

---

## 中文指南

> 从零开始，一步步搭建属于你的 Obsidian + Quartz 数字花园。

### 目录

1. [环境准备](#1-环境准备)
2. [Fork 并克隆仓库](#2-fork-并克隆仓库)
3. [Obsidian 配置](#3-obsidian-配置)
4. [安装 Obsidian 插件](#4-安装-obsidian-插件)
5. [笔记目录结构](#5-笔记目录结构)
6. [自定义博客配置](#6-自定义博客配置)
7. [本地测试（可选）](#7-本地测试可选)
8. [部署到 Vercel](#8-部署到-vercel)
9. [绑定自定义域名](#9-绑定自定义域名)
10. [日常使用](#10-日常使用)

---

### 1. 环境准备

你需要：

- **GitHub 账号**：用于存放笔记仓库
- **Vercel 账号**：用于部署博客（免费，推荐用 GitHub 登录）
- **[Obsidian](https://obsidian.md)**：桌面端笔记软件
- **Git**：命令行或 GitHub Desktop
- **Node.js 22+**（仅本地测试需要）

---

### 2. Fork 并克隆仓库

**方法一：Vercel 一键部署（推荐新手）**

1. 点击 README 中的 **Deploy with Vercel** 按钮
2. Vercel 会自动帮你 Fork 仓库并部署
3. 部署完成后，克隆 Vercel 创建的仓库到本地

**方法二：手动 Fork**

1. 访问 [Obsidian-Quartz-Notes](https://github.com/Raisetsu41/Obsidian-Quartz-Notes)
2. 点击右上角 **Fork** → **Create fork**
3. 克隆你的 fork：

```bash
git clone https://github.com/你的用户名/Obsidian-Quartz-Notes.git
cd Obsidian-Quartz-Notes
```

---

### 3. Obsidian 配置

#### 3.1 打开仓库

1. 启动 Obsidian
2. 点击左侧「打开其他仓库」按钮
3. 点击「打开文件夹作为仓库」
4. 选择克隆下来的 `Obsidian-Quartz-Notes/blog/content` 文件夹（它就是 Obsidian 库根目录）
5. 在弹出的「安全模式」提示中点击「信任作者并启用插件」

#### 3.2 配置 Templater

Templater 是模板引擎，需要手动安装：

1. 设置 → 社区插件 → 浏览
2. 搜索 **Templater** → 安装 → 启用
3. 在 Templater 设置中：
   - **Template folder location**: `04-Templates`（相对 Obsidian 库根目录，仓库内实际路径为 `blog/content/04-Templates`）
   - 打开「Trigger Templater on new file creation」
   - 打开「Automatic jump to cursor」

#### 3.3 配置 Obsidian Git（自动备份）

1. 设置 → 社区插件 → 浏览
2. 搜索 **Obsidian Git** → 安装 → 启用
3. 在 Obsidian Git 设置中：
   - **Vault backup interval**：设为 0（手动触发），或设为 30（每 30 分钟自动备份）
   - **Auto pull on boot**：开启（启动时自动拉取远程更新）

> 💡 按 `Ctrl+P` 输入「Obsidian Git: Create backup」手动备份。

---

### 4. 安装 Obsidian 插件

| 插件 | 用途 | 必装 |
|------|------|:---:|
| **Templater** | 模板引擎，快速创建笔记 | ✅ |
| **Calendar** | 日历视图，方便查看日记 | 推荐 |
| **Dataview** | 数据查询，自动聚合笔记 | 推荐 |
| **Excalidraw** | 手绘图表 | 可选 |
| **Style Settings** | 主题微调 | 推荐 |
| **Paste Image Rename** | 粘贴图片自动重命名 | 推荐 |
| **Tag Wrangler** | 标签批量管理 | 可选 |
| **Obsidian Git** | 自动 Git 备份 | ✅ |

安装方法：设置 → 社区插件 → 浏览 → 搜索插件名 → 安装 → 启用。

---

### 5. 笔记目录结构

笔记直接存放在 `blog/content/` 下，它既是 Obsidian 库根目录，也是 Quartz 构建时读取的内容目录，**不需要任何符号链接或额外配置**。

```
blog/content/
├── .obsidian/     # Obsidian 配置（本地，不提交到 git）
├── index.md       # 博客主页
├── 00-Inbox/      # 收集箱
├── 01-Courses/    # 课程笔记
├── 02-Diary/      # 日记（默认不发布）
├── 03-Music/      # 音乐笔记
├── 04-Templates/  # Templater 模板（不发布）
├── 05-Languages/  # 语言学习
├── 06-Katex/      # 数学公式测试
├── 07-Futures/    # 功能测试页
└── assets/        # 附件
```

> 💡 写好笔记后直接 `git add . && git commit && git push`（或使用 Obsidian Git 插件），Vercel 会自动重新构建。

---

### 6. 自定义博客配置

打开 `blog/quartz.config.default.yaml`：

```yaml
pageTitle: "📚 我的博客"       # 浏览器标签页标题
baseUrl: mysite.com            # 你的域名
locale: zh-CN                  # 界面语言
```

#### 配色

```yaml
colors:
  lightMode:              # 亮色模式
    secondary: "#4a6fa5"  # ← 链接/强调色
    tertiary: "#3d8a9a"   # ← 悬停色
  darkMode:               # 暗色模式
    secondary: "#a8c7ff"
    tertiary: "#7fdbff"
```

#### 字体

```yaml
typography:
  header: Noto Serif SC   # 标题字体（需在 Google Fonts 上存在）
  body: Noto Sans SC      # 正文字体
  code: IBM Plex Mono     # 代码字体
```

#### 页脚链接

```yaml
- source: "@quartz-community/footer"
  options:
    links:
      GitHub: https://github.com/你的用户名
      RSS: /index.xml
```

---

### 7. 本地测试（可选）

```bash
cd blog
npm ci                  # 安装依赖（仅第一次）
npx quartz build --serve  # 构建并启动本地服务器
```

浏览器打开 `http://localhost:8080` 预览。

---

### 8. 部署到 Vercel

```bash
git add .
git commit -m "初始化我的数字花园"
git push origin main
```

1. 访问 [vercel.com](https://vercel.com) 登录
2. 点击 **New Project**
3. 选择你的 GitHub 仓库
4. Vercel 会自动识别根目录的 `vercel.json`，**无需任何额外配置**
5. 点击 **Deploy**

几分钟后，你的博客就会在 `xxx.vercel.app` 上线。

---

### 9. 绑定自定义域名

1. Vercel 项目 → Settings → Domains → 添加域名
2. 在你的 DNS 管理面板中添加 CNAME 记录：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | `notes`（或你的子域名） | `cname.vercel-dns.com` |

3. 更新 `blog/quartz.config.default.yaml` 中的 `baseUrl`
4. Commit + Push，Vercel 自动重建

---

### 10. 日常使用

#### 创建课程笔记

1. `Ctrl+N` → 选择「course-overview」模板
2. 填写课程名称，模板自动生成大纲框架
3. 每天学完后：在课程文件夹下 `Ctrl+N` → 选择「daily-note」模板

#### 写日记

点击左侧日历图标 → 点击日期 → 自动套用「diary」模板。

日记默认 `publish: false`，不会出现在博客上。

#### 备份 & 发布

- **手动备份**：`Ctrl+P` →「Obsidian Git: Create backup」
- **自动部署**：push 后 Vercel 在约 30 秒内自动更新
- 你不需要任何额外操作，写完 → 备份 → 博客自动刷新 ✨

---

### 🔧 常见问题

<details>
<summary><b>构建失败，提示找不到 content 目录？</b></summary>

检查 `blog/content` 是否正确链接：
```bash
ls blog/content/index.md
```
不存在则重新执行第 5 步。
</details>

<details>
<summary><b>模板不生效？</b></summary>

1. Templater 已安装并启用
2. 模板文件夹设为 `04-Templates`
3.「Trigger Templater on new file creation」已开启
</details>

<details>
<summary><b>笔记没出现在博客上？</b></summary>

检查：`publish: true`、不在 `ignorePatterns` 中、不在 `.gitignore` 中。
</details>

<details>
<summary><b>自定义 CSS 不生效？</b></summary>

修改 `blog/quartz/styles/custom.scss` 后需重新构建。Vercel 在 push 后自动构建。
</details>

<details>
<summary><b>Obsidian 主题会影响博客外观吗？</b></summary>

不会。Obsidian 主题只改变编辑器界面，博客外观由 `custom.scss` 和 `quartz.config.default.yaml` 控制。
</details>

---

## English Guide

> Step-by-step guide to building your own Obsidian + Quartz digital garden.

### Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Fork & Clone](#2-fork--clone)
3. [Obsidian Setup](#3-obsidian-setup)
4. [Install Plugins](#4-install-plugins)
5. [Notes Directory](#5-notes-directory)
6. [Customize Config](#6-customize-config)
7. [Local Preview](#7-local-preview)
8. [Deploy to Vercel](#8-deploy-to-vercel)
9. [Custom Domain](#9-custom-domain)
10. [Daily Workflow](#10-daily-workflow)

---

### 1. Prerequisites

- **GitHub account** — for hosting your notes repository
- **Vercel account** — for deploying your blog (free, sign in with GitHub recommended)
- **[Obsidian](https://obsidian.md)** — desktop note-taking app
- **Git** — CLI or GitHub Desktop
- **Node.js 22+** — for local testing only

---

### 2. Fork & Clone

**Option A: One-Click Deploy (Recommended for beginners)**

1. Click the **Deploy with Vercel** button in README
2. Vercel forks the repo and deploys automatically
3. Clone the Vercel-created repo to your local machine

**Option B: Manual Fork**

```bash
git clone https://github.com/YOUR_USERNAME/Obsidian-Quartz-Notes.git
cd Obsidian-Quartz-Notes
```

---

### 3. Obsidian Setup

1. Open Obsidian → "Open folder as vault" → select the cloned `blog/content` folder
2. Trust author and enable plugins when prompted
3. Install **Templater** plugin:
   - Settings → Community plugins → Browse → Templater → Install → Enable
   - Set **Template folder location**: `04-Templates` (relative to the vault root, i.e. `blog/content/04-Templates`)
   - Enable "Trigger Templater on new file creation"
4. Install **Obsidian Git** plugin:
   - Settings → Community plugins → Browse → Obsidian Git → Install → Enable
   - Enable "Auto pull on boot"

---

### 4. Install Plugins

| Plugin | Purpose | Required |
|--------|---------|:---:|
| **Templater** | Template engine | ✅ |
| **Calendar** | Calendar view for diary | Recommended |
| **Dataview** | Data query & aggregation | Recommended |
| **Obsidian Git** | Auto Git backup | ✅ |

---

### 5. Notes Directory

Notes live directly in `blog/content/`, which is both the Obsidian vault root and the content directory Quartz reads at build time. **No symlink or extra setup is needed.**

```text
blog/content/
├── .obsidian/     # Obsidian config (local only, not committed)
├── index.md       # Blog home page
├── 00-Inbox/      # Inbox
├── 01-Courses/    # Course notes
├── 02-Diary/      # Diary (hidden by default)
├── 03-Music/      # Music notes
├── 04-Templates/  # Templater templates (not published)
├── 05-Languages/  # Language learning
├── 06-Katex/      # Math demos
├── 07-Futures/    # Feature tests
└── assets/        # Attachments
```

> 💡 After writing, just `git add . && git commit && git push` (or use the Obsidian Git plugin) and Vercel rebuilds automatically.

---

### 6. Customize Config

Edit `blog/quartz.config.default.yaml`:

```yaml
pageTitle: "📚 My Blog"
baseUrl: mysite.com
```

Colors:
```yaml
lightMode:
  secondary: "#4a6fa5"  # link/accent color
darkMode:
  secondary: "#a8c7ff"
```

---

### 7. Local Preview

```bash
cd blog
npm ci
npx quartz build --serve
```

Open `http://localhost:8080`.

---

### 8. Deploy to Vercel

```bash
git add .
git commit -m "Init my digital garden"
git push origin main
```

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Click **Deploy** — no configuration needed

---

### 9. Custom Domain

1. Vercel → Settings → Domains → Add domain
2. Add CNAME record pointing to `cname.vercel-dns.com`
3. Update `baseUrl` in config → commit → push

---

### 10. Daily Workflow

```
Write in Obsidian → Ctrl+P "Obsidian Git: Create backup" → Blog auto-updates on Vercel
```

1. Create notes using templates (`Ctrl+N`)
2. Backup with Obsidian Git
3. Vercel deploys automatically within ~30 seconds

---

### 🔧 FAQ

<details>
<summary><b>Build fails: "content directory not found"?</b></summary>

Check that `blog/content` is committed as a real directory:
```bash
git ls-files blog/content | head
```
If empty, run `git add blog/content && git commit && git push`.
</details>

<details>
<summary><b>Templates not working?</b></summary>

Ensure Templater is installed, template folder is set to `04-Templates`, and "Trigger on new file creation" is enabled.
</details>

<details>
<summary><b>Notes not appearing on blog?</b></summary>

Check: `publish: true` in frontmatter, not in `ignorePatterns`, not in `.gitignore`.
</details>

---

> Questions? [Open an Issue](https://github.com/Raisetsu41/Obsidian-Quartz-Notes/issues)
