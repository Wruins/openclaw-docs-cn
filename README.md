# 🦞 OpenClaw 中文文档站

[![OpenClaw](https://img.shields.io/badge/OpenClaw-中文文档-red)](https://openclaw.ai)
[![VitePress](https://img.shields.io/badge/VitePress-静态站点-blue)](https://vitepress.dev)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> 📚 OpenClaw 官方文档的中文翻译和补充，帮助中文用户快速上手

---

## 📖 项目简介

这是 **OpenClaw** 的中文文档站点，使用 [VitePress](https://vitepress.dev) 构建。

**OpenClaw** 是一个开源的 AI Agent 框架，让你能够：
- 🤖 拥有个性化的 AI 助手
- 💬 集成 20+ 聊天平台（WhatsApp/Telegram/飞书/企业微信等）
- 🧠 支持持久化记忆和自动化任务
- 🔌 丰富的插件和技能系统

---

## 🌐 在线文档

访问中文文档站： **[https://docs.openclaw.ai](https://docs.openclaw.ai)**

---

## 📁 文档结构

```
docs/
├── index.md                 # 首页
├── beginner/                # 新手入门
│   ├── install/             # 安装指南
│   │   ├── windows.md       # Windows 安装
│   │   ├── macos.md         # macOS 安装
│   │   └── linux.md         # Linux 安装
│   └── config/              # 配置指南
│       ├── models.md        # AI 模型配置
│       ├── feishu.md        # 飞书集成
│       └── wecom.md         # 企业微信
└── developer/               # 开发者文档
    ├── advanced/            # 高级配置
    └── plugins/             # 插件开发
```

---

## 🚀 本地开发

### 前置要求

- [Node.js](https://nodejs.org) v18+ 
- [pnpm](https://pnpm.io)（推荐）或 npm

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
# 启动本地开发服务器（热重载）
pnpm dev
# 或
npm run dev

# 访问 http://localhost:5173
```

### 构建静态站点

```bash
# 构建生产版本
pnpm docs:build
# 或
npm run docs:build

# 本地预览构建结果
pnpm serve
```

---

## 📝 贡献指南

欢迎贡献中文翻译和改进！

### 添加新文档

1. 在 `docs/beginner/` 或 `docs/developer/` 下创建 `.md` 文件
2. 使用 Frontmatter 配置标题和布局
3. 在侧边栏配置中添加链接

### 翻译原则

- ✅ 准确传达原文含义
- ✅ 使用通俗易懂的中文
- ✅ 保留专业术语的英文原名
- ✅ 提供清晰的代码示例

### 提交流程

```bash
# 1. Fork 仓库
# 2. 创建分支
git checkout -b feat/add-new-doc

# 3. 提交更改
git add .
git commit -m "docs: 添加 XXX 配置指南"

# 4. 推送并创建 Pull Request
git push origin feat/add-new-doc
```

---

## 🛠️ 技术栈

- **[VitePress](https://vitepress.dev)** - Vue 驱动的静态站点生成器
- **[Vue 3](https://vuejs.org)** - 渐进式 JavaScript 框架
- **[Markdown](https://www.markdownguide.org)** - 文档内容格式

---

## 📦 项目命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm docs:build` | 构建静态站点 |
| `pnpm serve` | 本地预览构建结果 |

---

## 🔗 相关链接

- **OpenClaw 官网**: https://openclaw.ai
- **官方文档（英文）**: https://docs.openclaw.ai
- **GitHub 仓库**: https://github.com/openclaw/openclaw
- **Discord 社区**: https://discord.com/invite/clawd
- **技能市场**: https://clawhub.com

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

<div align="center">

**🦞 让中文用户也能轻松使用 OpenClaw**

[查看文档](https://docs.openclaw.ai) · [贡献指南](#-贡献指南) · [加入社区](#-相关链接)

</div>
