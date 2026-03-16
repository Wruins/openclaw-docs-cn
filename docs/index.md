---
layout: home
title: OpenClaw 中文文档
titleTemplate: 全中文使用说明 - 从入门到精通
hero:
  name: OpenClaw
  text: 中文文档站
  tagline: 你的个人 AI 助手，任何操作系统，任何平台 🦞
  image:
    src: /logo.png
    alt: OpenClaw Logo
  actions:
    - theme: brand
      text: 👶 新手入门（简单版）
      link: /beginner/
    - theme: alt
      text: 👨‍💻 开发者文档（开发版）
      link: /developer/
features:
  - icon: 🚀
    title: 快速上手
    details: 简单版提供详细的图文教程，5 分钟完成安装配置
  - icon: 💬
    title: 多渠道支持
    details: WhatsApp、Telegram、Discord、飞书等 20+ 聊天平台
  - icon: 🎯
    title: Pi Agent 驱动
    details: 使用最新的 Pi coding agent，支持工具调用和会话管理
  - icon: 🛠️
    title: 开发者友好
    details: 完整的插件系统，支持自定义技能开发
---

## 📖 文档导航

::: tip 👶 新手入门
第一次使用？从 [新手入门](/beginner/) 开始，5 分钟完成安装配置！
:::

### 新手入门（简单版）

适合第一次使用 OpenClaw 的用户，提供详细的安装和配置指南。

| 平台 | 指南 | 说明 |
|------|------|------|
| 📥 | [Windows 安装指南](/beginner/install/windows) | 详细的 Windows 安装步骤 |
| 🍎 | [macOS 安装指南](/beginner/install/macos) | macOS 用户快速上手 |
| ⚙️ | [模型配置](/beginner/config/models) | 配置 AI 模型（推荐 Node 24） |
| 📱 | [飞书接入](/beginner/config/feishu) | **重点！** 飞书集成配置（已捆绑） |
| 💼 | [企业微信](/beginner/config/wecom) | 企业微信集成 |

---

::: info 👨‍💻 开发者文档
有开发经验？查看 [开发者文档](/developer/) 深入定制 OpenClaw！
:::

### 开发者文档（开发版）

适合有开发经验的用户，深入讲解高级配置和插件开发。

| 主题 | 指南 | 说明 |
|------|------|------|
| 🔌 | [插件开发](/developer/plugins/) | 创建自定义技能 |
| 🖥️ | [本地模型](/developer/local-models/) | 部署本地大模型 |
| ⚡ | [高级配置](/developer/configuration/) | 深度定制 OpenClaw |
| 🔍 | [故障排除](/developer/troubleshooting/) | 常见问题解决 |

## 🌟 快速开始

::: tip ⚠️ 安装前必读
**Node.js 是前置依赖**！OpenClaw 需要 Node.js 环境才能运行。

- **推荐版本**: Node.js 24.x
- **最低要求**: Node.js 22.16+ (LTS)
- **下载地址**: [https://nodejs.org/](https://nodejs.org/)

请**先安装 Node.js**，然后再执行下面的安装命令。
:::

### 推荐安装方式

:::tabs
== macOS/Linux

```bash
# 1. 确保已安装 Node.js
node --version

# 2. 运行安装脚本
curl -fsSL https://openclaw.ai/install.sh | bash
```

== Windows PowerShell

```powershell
# 1. 确保已安装 Node.js（以管理员身份运行 PowerShell）
node --version

# 2. 运行安装脚本
iwr -useb https://openclaw.ai/install.ps1 | iex
```

:::

### 配置和启动

```bash
# 运行配置向导（推荐）
openclaw onboard --install-daemon

# 检查网关状态
openclaw gateway status

# 打开控制面板
openclaw dashboard
```

### 可选：连接聊天渠道

```bash
# 添加渠道（如飞书、WhatsApp 等）
openclaw channels add

# 查看配对请求
openclaw pairing list

# 批准配对
openclaw pairing approve <channel> <code>
```

## 🔥 最新更新 (2026-03-16)

- ✅ **Pi Agent** 现为唯一支持的 coding agent
- ✅ **安装脚本** 支持自动检测和升级
- ✅ **飞书插件** 已捆绑，无需单独安装
- ✅ **Tailscale 集成** 支持安全的远程访问
- ✅ **自动更新器** 可选配置（默认关闭）

## 📞 获取帮助

- 📚 [官方文档](https://docs.openclaw.ai) - 英文官方文档（Mintlify）
- 📑 [文档索引](https://docs.openclaw.ai/llms.txt) - 完整文档列表
- 💬 [Discord 社区](https://discord.gg/clawd) - 加入社区讨论
- 🐛 [问题反馈](https://github.com/openclaw/openclaw/issues) - 提交 Bug
- 🏥 [健康检查](https://docs.openclaw.ai/gateway/doctor) - 运行 `openclaw doctor`

## 📋 支持的聊天渠道

| 渠道 | 状态 | 渠道 | 状态 |
|------|------|------|------|
| WhatsApp | ✅ | Feishu (飞书) | ✅ |
| Telegram | ✅ | LINE | ✅ |
| Discord | ✅ | Mattermost | ✅ |
| Slack | ✅ | Nextcloud Talk | ✅ |
| Google Chat | ✅ | Nostr | ✅ |
| Signal | ✅ | Synology Chat | ✅ |
| iMessage | ✅ | Tlon | ✅ |
| BlueBubbles | ✅ | Twitch | ✅ |
| IRC | ✅ | Zalo | ✅ |
| Microsoft Teams | ✅ | WebChat | ✅ |
| Matrix | ✅ | | |

---

> 💡 **提示**：如果你是第一次使用，建议从 [新手入门](/beginner/) 开始！运行 `openclaw doctor` 可以检查配置健康状况。
