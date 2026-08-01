# Quartz 5 + Vercel 笔记博客搭建指南

> 基于实际生产配置编写。全程 Obsidian 内完成，直接推送 GitHub → Vercel 自动部署。

最终效果: https://notes.raisetsu41.top/

---

## 前置要求

| 工具 | 用途 |
|------|------|
| [Obsidian](https://obsidian.md) | Markdown 笔记编辑器 |
| [GitHub](https://github.com) 账号 | 代码托管 |
| [Vercel](https://vercel.com) 账号 | 部署 + 自定义域名 |
| [Git](https://git-scm.com) | 版本控制（Obsidian Git 插件依赖） |

---

## 一、创建 Obsidian Vault 并初始化 Git

### 1.1 新建 Vault

1. 打开 Obsidian →「打开其他仓库」→「创建新仓库」
2. 命名为 `my-notes`，选择本地路径

### 1.2 安装并配置 Obsidian Git 插件

设置 → 第三方插件 → 关闭安全模式 → 社区插件市场 → 搜索 **Obsidian Git** → 安装 → 启用。

打开插件设置（`Ctrl+P` → `Obsidian Git: Open Source Control View` 或左侧工具栏 Git 图标），配置：

```
commitMessage: "vault backup: {{date}}"
autoCommitMessage: "vault backup: {{date}}"
commitDateFormat: "YYYY-MM-DD HH:mm:ss"
autoSaveInterval: 0
autoPushInterval: 0
autoPullInterval: 0
autoPullOnBoot: true            # 启动时自动拉取
disablePush: false
pullBeforePush: true            # 推送前先拉取
showStatusBar: true
syncMethod: "merge"             # 合并策略
refreshSourceControl: true
showBranchStatusBar: true
```

### 1.3 初始化 Git 仓库

`Ctrl+P` → `Obsidian Git: Initialize repo` → 回车。

### 1.4 关联 GitHub 远程仓库

在 GitHub 新建**私有**仓库（命名如 `notes`）。

`Ctrl+P` → `Obsidian Git: Edit remotes` → 输入：

```
origin https://github.com/<用户名>/<仓库名>.git
```

### 1.5 配置 Git 用户信息

在系统终端执行一次：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 1.6 首次推送

`Ctrl+P` → `Obsidian Git: Commit and push all files`。

---

## 二、Obsidian 插件配置

### 2.1 安装全部社区插件

社区插件市场搜索并安装以下 7 个插件：

| 插件 | 用途 | 必须 |
|------|------|:--:|
| **Obsidian Git** | Git 版本控制 + 自动同步 | ✅ |
| **Templater** | 笔记模板（变量/日期/标题） | ✅ |
| **Dataview** | 笔记索引查询 | 推荐 |
| **Calendar** | 日历视图 | 推荐 |
| **Excalidraw** | 手写/示意图 | 推荐 |
| **Style Settings** | 主题微调 | 推荐 |
| **Tag Wrangler** | 标签管理 | 推荐 |
| **Paste Image Rename** | 粘贴图片自动重命名 | 推荐 |

### 2.2 启用核心插件

设置 → 核心插件 → 启用以下：

```
文件浏览器         ✅   标签面板           ✅
全局搜索           ✅   属性 (Properties)  ✅
快速切换           ✅   页面预览           ✅
关系图谱           ✅   日记               ✅
反向链接           ✅   模板               ✅
白板 (Canvas)      ✅   笔记重组           ✅
出链               ✅   命令面板           ✅
书签               ✅   大纲               ✅
字数统计           ✅   文件恢复           ✅
同步 (Sync)        ✅   网页查看器         ✅
```

### 2.3 Obsidian 外观设置

设置 → 外观：

| 设置 | 值 |
|------|-----|
| 主题 | Border（或其他偏好主题） |
| 正文字体 | `Noto Serif CJK SC` |
| 等宽字体 | `Maple Mono NF CN` |
| 界面字体 | `Noto Serif CJK SC` |

### 2.4 Templater 设置

设置 → Templater：

| 设置 | 值 |
|------|-----|
| Template folder location | `Notes/06-Templates` |
| Trigger Templater on new file creation | ✅ |

### 2.5 附件与文件设置

设置 → 文件与链接：

| 设置 | 值 |
|------|-----|
| 附件文件夹路径 | `Notes/assets` |
| 新建笔记位置 | `Notes/00-Inbox` |

### 2.6 日记设置

设置 → 日记：

| 设置 | 值 |
|------|-----|
| 日记文件夹 | `Notes/04-Diary` |
| 日记模板 | `Notes/06-Templates/diary.md` |

### 2.7 Excalidraw 设置

设置 → Excalidraw：

| 设置 | 值 |
|------|-----|
| Excalidraw 文件夹 | `Notes/Excalidraw` |
| 模板文件路径 | `Notes/Excalidraw/Template.excalidraw` |

---

## 三、笔记目录结构

### 3.1 创建文件夹

Vault 根目录中创建 `Notes/` 文件夹，内容：

```
Notes/
├── 00-Inbox/              # 快速收集（不公开，新笔记默认位置）
├── 01-课程A/              # 按主题分类
├── 02-课程B/
├── 03-数据科学/
├── 04-Diary/              # 日记（不公开）
├── 05-Music/              # 音乐笔记
├── 06-Templates/          # 笔记模板
├── Excalidraw/            # 手写/示意图
├── assets/                # 图片附件
└── index.md               # 博客首页
```

### 3.2 编写首页 `Notes/index.md`

```markdown
---
title: 博客标题
---

欢迎来到我的笔记博客。
```

### 3.3 创建笔记模板

**`Notes/06-Templates/daily-note.md`**（每日课程笔记）：

```markdown
---
title: "<% tp.file.title %>"
date: "<% tp.date.now("YYYY-MM-DD") %>"
tags:
  - 课程笔记
description: ""
publish: true
---

# <% tp.file.title %>

## 笔记正文

### 一、
### 二、
### 三、

## 关键概念

| 术语 | 定义 | 个人理解 |
|------|------|----------|
| | | |

## 重要公式

$$

$$

> [!warning]+ 易错点 / 注意事项
>

## 疑问

- [ ]
- [ ]

## 课后作业

- [ ]

## 延伸阅读

- 论文：
- 参考：
- 下节课预习：

---

> [!summary]- 小结
> 一句话总结今天学到了什么。
```

**`Notes/06-Templates/course-overview.md`**（课程大纲）：

```markdown
---
title: "<% tp.file.title %>"
date: "<% tp.date.now("YYYY-MM-DD") %>"
aliases:
  - "<% tp.file.title %> 大纲"
tags:
  - 课程大纲
course: "<% tp.file.title %>"
description: "<% tp.file.title %> 课程学习全记录，含每日笔记索引与进度追踪。"
publish: true
---

# <% tp.file.title %>

## 课程信息

| 项目 | 内容 |
|------|------|
| **课程名称** | <% tp.file.title %> |
| **授课教师** | |
| **教材** | |

## 课程大纲

1.
2.
3.
4.

## 资源

- 教材 PDF：
- 习题答案：
- 参考论文：
- 相关笔记：[[00-Inbox/README|快速入口]]
```

**`Notes/06-Templates/diary.md`**（日记）：

```markdown
---
title: "<% tp.date.now("YYYY-MM-DD") %>"
date: "<% tp.date.now("YYYY-MM-DD") %>"
tags: [日记]
mood: ""
publish: false
---

# <% tp.date.now("YYYY年M月D日 dddd") %>

> [!tip] 今日心情
>

## 学习

-

## 音乐

-

## 运动

-

## 随想

-

## 明日计划

- [ ]
- [ ]
- [ ]

---

<small>📝 创建于 <% tp.date.now("HH:mm") %></small>
```

**`Notes/06-Templates/music.md`**（音乐笔记）：

```markdown
---
title: "<% tp.file.title %>"
date: "<% tp.date.now("YYYY-MM-DD") %>"
tags: [音乐]
type: ""
artist: ""
genre: ""
difficulty: ""
instrument: ""
publish: true
description: ""
---

# <% tp.file.title %>

> [!info] 基本信息
> - **类型**：`= this.type`
> - **艺术家/作者**：`= this.artist`
> - **风格**：`= this.genre`
> - **乐器**：`= this.instrument`
> - **难度**：`= this.difficulty`

## 背景

## 乐理分析

> [!example]+ 和弦进行
> ```
> Key: C Major
> I - V - vi - IV
> C - G - Am - F
> ```

## Tab 谱 / 练习要点

```

```

## 录音 / 参考

- 原曲链接：
- 翻弹参考：

## 练习日志

| 日期 | 时长 | 重点练习 | 掌握程度 |
|------|:---:|----------|:---:|
| | | |  |

## 相关笔记

- [[ ]]
```

---

## 四、安装 Quartz 5

> 以下在系统终端中完成。

### 4.1 进入 Vault 目录

```bash
cd /path/to/my-notes
```

### 4.2 克隆 Quartz

```bash
git clone https://github.com/jackyzha0/quartz.git blog
```

### 4.3 删除子仓库 Git + 原 content 目录

Quartz 自带 `.git`，必须删除（否则形成子仓库）。`blog/content/` 将被 Junction 替代。

**Windows（PowerShell）：**

```powershell
Remove-Item -Recurse -Force blog\.git
Remove-Item -Recurse -Force blog\content -ErrorAction SilentlyContinue
```

**Linux / Mac：**

```bash
rm -rf blog/.git
rm -rf blog/content
```

### 4.4 创建 Junction / Symlink 连接笔记

**Windows（PowerShell — 管理员权限）：**

```powershell
New-Item -ItemType Junction -Path blog\content -Target Notes
```

> 将 `blog/content` 链接到 Vault 根目录下的 `Notes/` 文件夹。

**Linux / Mac：**

```bash
ln -s ../Notes blog/content
```

### 4.5 验证链接

```powershell
Get-Item blog\content | Format-List Name, LinkType, Target
```

输出应为：

```
Name     : content
LinkType : Junction
Target   : D:\my-notes\Notes
```

### 4.6 安装 npm 依赖

```bash
cd blog
npm ci
```

---

## 五、配置 Quartz

### 5.1 编辑 `blog/quartz.config.default.yaml`

```yaml
configuration:
  pageTitle: "📝 My Notes"
  pageTitleSuffix: ""
  enableSPA: true
  enablePopovers: true
  locale: zh-CN
  baseUrl: your-domain.com               # ⚠️ 不要末尾斜杠
  ignorePatterns:
    - ".git"
    - ".obsidian"
    - "blog"
    - "99-Templates"
    - "vercel.json"
    - ".gitignore"
    - "node_modules"
    - "Excalidraw/Scripts"
    - "Excalidraw/CJK Fonts"
  theme:
    fontOrigin: googleFonts
    cdnCaching: true
    typography:
      header: Noto Serif SC
      body: Noto Sans SC
      code: IBM Plex Mono
    colors:
      lightMode:
        light: "#faf8f8"
        lightgray: "#e5e5e5"
        gray: "#b8b8b8"
        darkgray: "#4e4e4e"
        dark: "#2b2b2b"
        secondary: "#284b63"
        tertiary: "#84a59d"
        highlight: "rgba(143, 159, 169, 0.15)"
        textHighlight: "#fff23688"
      darkMode:
        light: "#161618"
        lightgray: "#393639"
        gray: "#646464"
        darkgray: "#d4d4d4"
        dark: "#ebebec"
        secondary: "#7b97aa"
        tertiary: "#84a59d"
        highlight: "rgba(143, 159, 169, 0.15)"
        textHighlight: "#b3aa0288"

plugins:
  # --- 核心 Markdown ---
  - source: "@quartz-community/obsidian-flavored-markdown"
    enabled: true
    options:
      enableCheckbox: true
    order: 30

  - source: "@quartz-community/github-flavored-markdown"
    enabled: true
    order: 40

  # --- 渲染 ---
  - source: "@quartz-community/syntax-highlighting"
    enabled: true
    options:
      theme:
        light: github-light
        dark: github-dark
      keepBackground: false
    order: 20

  - source: "@quartz-community/latex"
    enabled: true
    options:
      renderEngine: katex
    order: 80

  # --- 页面类型 ---
  - source: "@quartz-community/content-page"
    enabled: true
  - source: "@quartz-community/folder-page"
    enabled: true
  - source: "@quartz-community/tag-page"
    enabled: true
  - source: "@quartz-community/bases-page"
    enabled: true
    order: 50
  - source: "@quartz-community/canvas-page"
    enabled: true

  # --- 导航 ---
  - source: "@quartz-community/explorer"
    enabled: true
    layout:
      position: left
      priority: 50

  - source: "@quartz-community/search"
    enabled: true
    layout:
      position: left
      priority: 20
      group: toolbar
      groupOptions:
        grow: true

  - source: "@quartz-community/table-of-contents"
    enabled: true
    order: 50
    layout:
      position: right
      priority: 30

  - source: "@quartz-community/breadcrumbs"
    enabled: true
    layout:
      position: beforeBody
      priority: 5
      condition: not-index

  - source: "@quartz-community/graph"
    enabled: true
    layout:
      position: right
      priority: 10

  - source: "@quartz-community/backlinks"
    enabled: true
    layout:
      position: right
      priority: 50

  # --- 元数据 ---
  - source: "@quartz-community/created-modified-date"
    enabled: true
    options:
      defaultDateType: modified
      priority: [frontmatter, git, filesystem]
    order: 10

  - source: "@quartz-community/description"
    enabled: true
    order: 70

  - source: "@quartz-community/note-properties"
    enabled: true
    options:
      includeAll: false
      includedProperties: [description, tags, aliases]
      delimiters: "---"
      language: yaml
    order: 5
    layout:
      position: beforeBody
      priority: 15

  - source: "@quartz-community/article-title"
    enabled: true
    layout:
      position: beforeBody
      priority: 10

  - source: "@quartz-community/content-meta"
    enabled: true
    layout:
      position: beforeBody
      priority: 20

  # --- 功能 ---
  - source: "@quartz-community/crawl-links"
    enabled: true
    options:
      markdownLinkResolution: shortest
    order: 60

  - source: "@quartz-community/darkmode"
    enabled: true
    layout:
      position: left
      priority: 30
      group: toolbar

  - source: "@quartz-community/page-title"
    enabled: true
    layout:
      position: left
      priority: 10

  - source: "@quartz-community/quartz-fonts"
    enabled: true

  - source: "@quartz-community/spacer"
    enabled: true
    options: {}
    order: 25
    layout:
      position: left
      priority: 25
      display: mobile-only

  - source: "@quartz-community/reader-mode"
    enabled: true
    layout:
      position: left
      priority: 35
      group: toolbar

  # --- 发布控制 ---
  - source: "@quartz-community/remove-draft"
    enabled: true

  - source: "@quartz-community/explicit-publish"
    enabled: false

  - source: "@quartz-community/alias-redirects"
    enabled: true

  - source: "@quartz-community/unlisted-pages"
    enabled: true
    options: {}
    order: 45

  - source: "@quartz-community/encrypted-pages"
    enabled: true
    options:
      iterations: 600000
      passwordField: password
      outputPath: static/encryptedContentIndex.json
    order: 900

  # --- SEO ---
  - source: "@quartz-community/content-index"
    enabled: true
    options:
      enableSiteMap: true
      enableRSS: true

  - source: "@quartz-community/favicon"
    enabled: true
  - source: "@quartz-community/og-image"
    enabled: true
  - source: "@quartz-community/cname"
    enabled: true

  # --- 尾部 ---
  - source: "@quartz-community/footer"
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
    layout:
      position: footer
      priority: 50

  # --- 关闭 ---
  - source: "@quartz-community/comments"
    enabled: false
  - source: "@quartz-community/recent-notes"
    enabled: false
  - source: "@quartz-community/tag-list"
    enabled: false
  - source: "@quartz-community/citations"
    enabled: false
    order: 85
  - source: "@quartz-community/hard-line-breaks"
    enabled: false
    order: 90
  - source: "@quartz-themes/core"
    enabled: false

layout:
  groups:
    toolbar:
      priority: 35
      direction: row
      gap: 0.5rem
  byPageType:
    "404":
      positions:
        beforeBody: []
        left: []
        right: []
    content: {}
    folder:
      exclude: [reader-mode]
      positions:
        right: []
    tag:
      exclude: [reader-mode]
      positions:
        right: []
    canvas: {}
    bases: {}
```

### 5.2 添加 `build` 脚本

编辑 `blog/package.json`，确保 `scripts` 包含：

```json
"scripts": {
  "prebuild": "npm run install-plugins",
  "build": "npx quartz build",
  ...
}
```

> `prebuild` 钩子确保每次 `npm run build` 前自动安装社区插件依赖。

---

## 六、部署到 Vercel

### 6.1 创建 `vercel.json`

Vault 根目录新建 `vercel.json`：

```json
{
  "cleanUrls": true,
  "buildCommand": "cd blog && npm run build",
  "outputDirectory": "blog/public",
  "installCommand": "cd blog && npm ci"
}
```

### 6.2 创建 `.gitignore`

Vault 根目录新建（或补充）`.gitignore`：

```gitignore
.obsidian/workspace.json
.trash/
node_modules/
blog/public/
```

### 6.3 推送所有文件到 GitHub

Obsidian 中 `Ctrl+P` → `Obsidian Git: Commit and push all files`。

> 首次 add 时 `blog/` 下有大量文件（`node_modules` 除外），正常等待即可。Git 会跟随 Junction 将 `Notes/` 中的实际文件存入 `blog/content/` 路径下。

### 6.4 在 Vercel 中导入项目

1. 打开 [vercel.com/new](https://vercel.com/new)
2. **Import** → GitHub 仓库
3. Framework Preset → **Other**
4. Root Directory → `./`
5. 点击 **Deploy**

构建日志应显示：

```
Cleaned output directory `public`
Loaded XX plugins
  Transformers: ...
  Emitters: Static, Assets, ComponentResources, ...
```

### 6.5 绑定自定义域名

1. Vercel → **Settings** → **Domains** → 添加域名
2. DNS 添加 CNAME 记录：

| 类型 | 名称 | 目标 |
|------|------|------|
| CNAME | `notes` | `cname.vercel-dns.com` |

---

## 七、静态资源（favicon / 背景图 / 自定义脚本）

### 7.1 存放位置

```
blog/quartz/static/
├── icon.png          # 网站图标
├── og-image.png      # 社交分享预览图
└── custom.js         # 自定义脚本
```

> 构建时 Quartz 内置 `Static` emitter 将 `quartz/static/` 复制到 `public/static/`。
> **不是** Vault 根目录下的 `static/`，也不是 `Notes/static/`。

### 7.2 引用方式

```markdown
![图片](/static/my-image.png)
```

```html
<script src="/static/custom.js" defer></script>
```

---

## 八、自定义 CSS

编辑 `blog/quartz/styles/custom.scss`，构建时自动编译注入。

```scss
html {
  background-image: url("/static/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}
```

修改后直接 `git push`。

---

## 九、笔记发布控制

在 `.md` 文件 Frontmatter 中：

```yaml
---
draft: true        # 草稿（remove-draft 插件）
publish: false     # 不发布（explicit-publish 开启后生效）
unlisted: true     # 不在列表显示，可通过链接访问（unlisted-pages 插件）
password: "xxx"    # 密码保护（encrypted-pages 插件）
---
```

---

## 十、日常工作流

```
打开 Obsidian → 写笔记 → Ctrl+P → Obsidian Git: Commit and push
                                                 ↓
                                          GitHub 仓库更新
                                                 ↓
                                        Vercel 自动构建部署
                                                 ↓
                                         博客自动更新 (~30s)
```

---

## 十一、关键注意事项

| 项 | 正确 ✅ | 错误 ❌ |
|-----|---------|----------|
| `baseUrl` | `example.com` | `example.com/` |
| 笔记位置 | `Notes/`（Junction → `blog/content`） | 直接放在 `blog/content/` |
| 静态文件 | `blog/quartz/static/` | `static/` 或 `Notes/static/` |
| `blog/.git` | **必须删除** | 保留 → 子仓库 |
| `blog/content` | Junction / Symlink → `Notes/` | 独立目录 |
| 附件路径 | `Notes/assets` | 默认路径 |
| 构建命令 | `npm run build`（默认读 `content/`） | 不需 `-d` 参数 |
| 仓库 | Private | Public（笔记隐私） |

---

## 十二、完整目录总览

```
my-notes/                                   # Vault 根（Git 仓库）
│
├── .obsidian/                              # Obsidian 全量配置
│   ├── app.json                            # 附件路径/新笔记位置/行号
│   ├── appearance.json                     # 主题/字体
│   ├── core-plugins.json                   # 核心插件开关
│   ├── community-plugins.json              # 社区插件启用列表
│   ├── daily-notes.json                    # 日记文件夹+模板
│   ├── templates.json                      # 模板文件夹
│   ├── graph.json                          # 图谱配置
│   ├── themes/                             # 社区主题
│   └── plugins/
│       ├── obsidian-git/                   # Git 同步
│       ├── templater-obsidian/             # 模板引擎
│       ├── dataview/                       # 数据查询
│       ├── calendar/                       # 日历
│       ├── obsidian-excalidraw-plugin/     # 手写/示意图
│       ├── obsidian-style-settings/        # 主题微调
│       ├── tag-wrangler/                   # 标签管理
│       └── obsidian-paste-image-rename/    # 粘贴图片重命名
│
├── Notes/                                  # 所有笔记（Junction 指向的目标）
│   ├── index.md                            # 博客首页
│   ├── 00-Inbox/                           # 快速收集（不公开）
│   ├── 01-数学/                            # 笔记内容
│   ├── 02-经济学/
│   ├── 03-数据科学/
│   ├── 04-Diary/                           # 日记（不公开）
│   ├── 05-Music/                           # 音乐笔记
│   ├── 06-Templates/                       # 模板
│   │   ├── daily-note.md
│   │   ├── course-overview.md
│   │   ├── diary.md
│   │   └── music.md
│   ├── Excalidraw/                         # 手写图
│   └── assets/                             # 图片附件
│
├── .gitignore
├── vercel.json                             # ⚠️ Vercel 部署配置
│
└── blog/                                   # Quartz 5 源码
    ├── quartz/
    │   ├── styles/
    │   │   └── custom.scss                 # 自定义样式
    │   ├── components/
    │   │   └── Head.tsx                    # <head> 注入点
    │   └── static/                         # ⚠️ 静态资源（favicon/背景图/JS）
    │       ├── icon.png
    │       └── og-image.png
    ├── content/ → [Junction] → ../Notes    # ⚠️ 链接到笔记目录
    ├── quartz.config.default.yaml          # 主配置
    ├── package.json                        # 含 build + prebuild 脚本
    └── public/                             # 构建输出（gitignore）
```
