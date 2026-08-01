# Obsidian-Quartz-Notes

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Raisetsu41/Obsidian-Quartz-Notes)

> 一键 Fork，即刻拥有一个基于 Obsidian + Quartz 5 + Vercel 的个人数字花园。
>
> One-click fork → your own digital garden powered by Obsidian + Quartz 5 + Vercel.

[中文](#中文) | [English](#english)

---

## 中文

### ✨ 特性

- **Obsidian 原生写作** — 所有笔记在 Obsidian 中编辑，享受双向链接、图谱、插件生态
- **Quartz 5 渲染** — 将 Markdown 笔记转化为美观的静态网站
- **Vercel 一键部署** — 免费、自动 HTTPS、全球 CDN
- **自有域名支持** — 内置 CNAME 插件
- **双模式配色** — 亮色/暗色模式，自动切换，配色和谐
- **LaTeX 公式** — KaTeX 渲染，学术笔记无压力
- **关系图谱** — 可视化笔记之间的连接
- **全文搜索** — 快速定位内容
- **RSS / Sitemap** — SEO 友好
- **Obsidian Git 自动备份** — 笔记自动同步到 GitHub
- **丰富的测试内容** — 开箱即用的示例笔记，展示全部功能

### 🚀 快速开始

1. 点击上方的 **Deploy with Vercel** 按钮
2. 按提示创建你自己的 Git 仓库
3. Vercel 自动构建并部署
4. 克隆仓库到本地，用 Obsidian 打开
5. 安装推荐插件，开始写作！

详细步骤请见 [SETUP.md](./SETUP.md)。

### 📁 目录结构

```
Obsidian-Quartz-Notes/
├── .obsidian/               # Obsidian 配置
├── Notes/                   # 📝 你的笔记
│   ├── index.md             #   博客主页
│   ├── demo-showcase.md     #   功能展示页（全功能测试）
│   ├── demo-math.md         #   数学公式测试
│   ├── demo-i18n.md         #   多语言测试
│   ├── 00-Inbox/            #   收集箱
│   ├── 01-Courses/          #   课程笔记（含示例）
│   ├── 02-Diary/            #   日记
│   ├── 03-Music/            #   音乐笔记（含示例）
│   ├── 04-Templates/        #   Templater 模板
│   └── assets/              #   附件
├── blog/                    # 🏗️ Quartz 5 引擎
│   ├── quartz.config.default.yaml  # 博客配置
│   ├── quartz/styles/custom.scss   # 自定义样式
│   └── static/              #   静态资源
├── vercel.json              # Vercel 部署配置
├── README.md                # 本文件
└── SETUP.md                 # 详细设置指南
```

### 🎨 客制化

| 项目 | 修改位置 |
|------|----------|
| 博客标题 | `blog/quartz.config.default.yaml` → `pageTitle` |
| 域名 | `blog/quartz.config.default.yaml` → `baseUrl` |
| 配色 | `blog/quartz.config.default.yaml` → `colors` |
| 字体 | `blog/quartz.config.default.yaml` → `typography` |
| 背景图 | 放 `album-cover.jpg` 到 `blog/static/`，取消 `custom.scss` 中的注释 |
| 页脚链接 | `blog/quartz.config.default.yaml` → footer 插件 |

### 🛠️ 技术栈

- [Obsidian](https://obsidian.md) — 知识库 / 笔记编辑器
- [Quartz 5](https://quartz.jzhao.xyz) — Markdown 静态站点生成器
- [Vercel](https://vercel.com) — 托管 & 自动部署
- [Templater](https://github.com/SilentVoid13/Templater) — Obsidian 模板引擎
- [Obsidian Git](https://github.com/Vinzent03/obsidian-git) — 自动 Git 备份

### 📄 许可

MIT License — 自由使用、修改、分发。

---

## English

### ✨ Features

- **Obsidian-Native Writing** — Edit all notes in Obsidian with backlinks, graph view, and plugin ecosystem
- **Quartz 5 Rendering** — Transform Markdown notes into a beautiful static website
- **One-Click Vercel Deploy** — Free, automatic HTTPS, global CDN
- **Custom Domain** — Built-in CNAME plugin
- **Dual-Mode Color Scheme** — Light/dark mode with harmonious palettes
- **LaTeX Math** — KaTeX rendering for academic notes
- **Knowledge Graph** — Visualize connections between notes
- **Full-Text Search** — Find content instantly
- **RSS / Sitemap** — SEO-friendly
- **Auto Git Backup** — Notes synced to GitHub automatically
- **Rich Demo Content** — Ready-to-use sample notes showcasing all features

### 🚀 Quick Start

1. Click the **Deploy with Vercel** button above
2. Follow the prompts to create your own Git repository
3. Vercel builds and deploys automatically
4. Clone the repo locally, open with Obsidian
5. Install recommended plugins, start writing!

For detailed instructions, see [SETUP.md](./SETUP.md).

### 🎨 Customization

| Item | Where to Modify |
|------|-----------------|
| Blog Title | `blog/quartz.config.default.yaml` → `pageTitle` |
| Domain | `blog/quartz.config.default.yaml` → `baseUrl` |
| Colors | `blog/quartz.config.default.yaml` → `colors` |
| Fonts | `blog/quartz.config.default.yaml` → `typography` |
| Background | Place `album-cover.jpg` in `blog/static/`, uncomment in `custom.scss` |
| Footer Links | `blog/quartz.config.default.yaml` → footer plugin |

### 🛠️ Tech Stack

- [Obsidian](https://obsidian.md) — Knowledge base / note editor
- [Quartz 5](https://quartz.jzhao.xyz) — Markdown static site generator
- [Vercel](https://vercel.com) — Hosting & auto-deployment
- [Templater](https://github.com/SilentVoid13/Templater) — Obsidian template engine
- [Obsidian Git](https://github.com/Vinzent03/obsidian-git) — Automatic Git backup

### 📄 License

MIT License — Free to use, modify, and distribute.

---

> 灵感来自 [Quartz](https://quartz.jzhao.xyz) 和无数优秀的数字花园。
> Inspired by [Quartz](https://quartz.jzhao.xyz) and countless beautiful digital gardens.
