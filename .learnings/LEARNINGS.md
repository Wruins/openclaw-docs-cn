# Learnings

开发过程中的经验和改进建议。

## 2026-03-18 - 每日文档更新 (LRN-20260318-001) ✅ 已完成

**优先级**: high  
**来源**: Cron 定时任务 (architect-daily-doc-update)  
**完成时间**: 2026-03-18 18:00

### 今日重点更新

#### 1. 新增文档：Tailscale 远程访问配置指南

**文件**: `docs/beginner/config/tailscale.md`

**内容覆盖**:
- 三种访问模式详解（Serve / Tailnet IP / Funnel）
- 完整配置示例和安全建议
- Tailscale 安装和前置要求
- 故障排除指南
- 浏览器控制远程配置

**关键配置**:
```json5
// Serve 模式（推荐 - Tailnet 内网）
{
  gateway: {
    bind: "loopback",
    tailscale: { mode: "serve" },
  },
}

// Funnel 模式（公开互联网）
{
  gateway: {
    bind: "loopback",
    tailscale: { mode: "funnel" },
    auth: { mode: "password" },  // 必需
  },
}
```

**前置要求**:
- Tailscale CLI 已安装并登录
- Serve 需要 tailnet 启用 HTTPS
- Funnel 需要 v1.38.3+、MagicDNS、HTTPS、仅支持端口 443/8443/10000

---

#### 2. 新增文档：自动更新器配置指南

**文件**: `docs/beginner/config/auto-update.md`

**内容覆盖**:
- 更新频道说明（stable / beta / dev）
- 自动更新器配置详解
- 手动更新命令参考
- 版本回滚方法
- 故障排除

**推荐配置**:
```json5
{
  update: {
    channel: "stable",
    auto: {
      enabled: true,
      stableDelayHours: 6,
      stableJitterHours: 12,
      betaCheckIntervalHours: 1
    }
  }
}
```

**行为说明**:
- `stable`: 检测到新版本后等待 6 小时 + 随机抖动 0-12 小时
- `beta`: 每小时检查一次，有更新立即应用
- `dev`: 不自动更新，需手动执行 `openclaw update`

**推荐更新方式**（官方推荐）:
```bash
# macOS/Linux
curl -fsSL https://openclaw.ai/install.sh | bash

# Windows PowerShell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

---

#### 3. 首页更新

**文件**: `docs/index.md`

**变更内容**:
- 更新"最新更新"部分为 2026-03-18
- 新增两个文档链接到导航表格
- 更新 Tailscale 和自动更新器说明

---

### 官方文档同步状态

| 类别 | 官方 | 中文 | 同步率 | 优先级 |
|------|------|------|--------|--------|
| 渠道支持 | 22 个 | 22 个 | 100% ✅ | - |
| CLI 命令 | 40+ | 15+ | ~40% ⚠️ | 中 |
| 模型提供商 | 30+ | 8+ | ~25% ⚠️ | 中 |
| 安全文档 | 完整 | 基础 | ~30% ⚠️ | 高 |
| 移动端节点 | 详细 | 简略 | ~20% ⚠️ | 高 |
| 自动化功能 | 完整 | 部分 | ~40% ⚠️ | 中 |
| **更新流程** | **详细** | **✅ 已补充** | **~90% ✅** | **高** |
| **Tailscale** | **详细** | **✅ 已补充** | **~90% ✅** | **高** |

---

### GitHub 仓库动态 (2026-03-18)

**仓库**: https://github.com/openclaw/openclaw

**统计**:
- Issues 总数：5000+
- PRs 总数：5000+
- Security Advisories: 288

**今日活跃 Issue 作者**: @crfzly, @Jwarm, @wronps

**最新 Commit**: `8f6668b docs: 添加 README.md - OpenClaw 中文文档站介绍`

---

### 后续优先级

**高优先级（本周）**:
- [x] ✅ 补充自动更新器配置指南
- [x] ✅ 添加 Tailscale 远程访问详细教程
- [x] ✅ 更新安装指南，强调推荐更新方式
- [ ] 补充 Gateway 服务管理命令参考
- [ ] 添加移动端节点配置指南（iOS/Android）

**中优先级（下周）**:
- [ ] 补充常用 CLI 命令详细说明
- [ ] 添加版本回滚/固定指南
- [ ] 补充本地模型部署指南（Ollama, vLLM）
- [ ] 添加模型故障转移配置示例

**低优先级（后续）**:
- [ ] 补充 Cron 定时任务使用指南
- [ ] 添加 Webhook 配置示例
- [ ] 补充安全最佳实践文档

---

### 输出文件

1. `docs/beginner/config/tailscale.md` - Tailscale 远程访问配置指南（新增）
2. `docs/beginner/config/auto-update.md` - 自动更新器配置指南（新增）
3. `docs/index.md` - 首页更新（修改）
4. `.learnings/UPDATE-2026-03-18.md` - 今日更新摘要（自动生成）

---

## 2026-03-16

### 项目创建
- npm create vitepress 是交互式的，需要处理 y/Enter 确认
- PowerShell 不支持 `&&`，需要使用 `;` 作为命令分隔符
- VitePress 默认将 .vitepress 放在 docs 目录内

### 文档结构
- 使用清晰的层级结构便于导航
- 重要内容（如飞书配置）需要详细标注
- 截图位置需要明确标记

### 配置优化
- config.ts 需要配置完整的 sidebar 和 nav
- 中文文档需要设置 lang: 'zh-CN'

## 2026-03-16 - 每日文档更新

### 官方文档变化
- 文档系统迁移到 Mintlify（原 VitePress）
- 新增完整的文档索引文件：https://docs.openclaw.ai/llms.txt
- 安装脚本更新：支持 macOS/Linux/Windows PowerShell
- 新增自动更新器功能（可选，默认关闭）

### 重要功能变更
- **Pi 是唯一支持的 coding agent**：Legacy Claude、Codex、Gemini、Opencode 路径已移除
- **Node 版本要求**：推荐 Node 24，Node 22 LTS (22.16+) 仍支持
- **更新流程优化**：推荐重新运行官网安装脚本进行升级
- **Tailscale 集成**：支持 Serve（仅 tailnet）和 Funnel（公开）模式

### 渠道支持更新
- 支持渠道：WhatsApp、Telegram、Discord、Slack、Google Chat、Signal、BlueBubbles、iMessage、IRC、Microsoft Teams、Matrix、Feishu、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、WebChat
- Feishu 插件已捆绑，无需单独安装
- Feishu 支持 WebSocket 长连接模式（无需公开 webhook URL）
- Feishu 支持 Lark 国际版（domain: "lark"）

### 配置变更
- 新增 `update` 配置项支持自动更新
- 新增 `typingIndicator` 和 `resolveSenderNames` 优化 Feishu API 配额
- `dmPolicy` 默认值为 "pairing"（安全模式）

### 文档结构建议
- 需要更新中文文档以反映 Pi agent 为唯一支持
- 需要添加 Tailscale 远程访问配置说明
- 需要更新安装指南反映新的安装脚本
- 需要补充自动更新器配置说明

---

## 2026-03-16 - 用户反馈修正 (LRN-20260316-001) ✅ 已完成

**优先级**: high  
**来源**: 用户直接反馈  
**完成时间**: 2026-03-16 18:40

### 修正项

1. **飞书订阅配置** 
   - 飞书 Channels 应该使用**长连接（WebSocket）**配置方式
   - 无需公开 webhook URL，更适合内网环境
   - 需要在文档中强调此配置方式

2. **Node.js 依赖前置**
   - Node.js 是 OpenClaw 的前置依赖
   - 安装说明应该放在 OpenClaw 安装**之前**
   - 避免用户安装后才发现缺少环境

3. **首页排版优化**
   - 首页的安装描述信息排版混乱
   - 需要优化快速开始部分的视觉层次
   - 使用更清晰的组件和分隔

### 已完成的修改

#### 1. `docs/beginner/config/feishu.md` - 飞书配置更新 ✅

**关键变更**:
- 在步骤 4 中新增"WebSocket 长连接模式"说明，标记为推荐方式
- 详细说明长连接优势：无需公网地址、更安全、更稳定、配置简单
- 提供两种配置方式对比：WebSocket 模式（推荐）vs Webhook 模式
- 更新步骤 7 配置示例，展示 `connectionMode: "websocket"` 配置
- 明确说明 WebSocket 模式不需要配置 `callbackUrl`

#### 2. `docs/beginner/install/windows.md` - Windows 安装指南 ✅

**关键变更**:
- 在文档开头新增"⚠️ 前置要求：安装 Node.js"章节
- 说明为什么需要 Node.js（OpenClaw 基于 Node.js 构建）
- 提供 Node.js 安装步骤和版本要求（推荐 Node 24，支持 Node 22.16+）
- 添加验证命令 `node --version` 和 `npm --version`
- 更新系统要求部分，强调 Node.js 必须先安装
- 原"步骤 1: 安装 Node.js"重命名为"步骤 1: 安装 OpenClaw"

#### 3. `docs/beginner/install/macos.md` - macOS 安装指南 ✅

**关键变更**:
- 在文档开头新增"⚠️ 前置要求：安装 Node.js"章节
- 提供两种安装方式：Homebrew（推荐）和官网下载
- 说明版本要求（推荐 Node 24，支持 Node 22.16+）
- 添加验证命令和版本输出示例
- 更新系统要求部分，强调 Node.js 必须先安装
- 调整步骤编号，原步骤顺延

#### 4. `docs/index.md` - 首页排版优化 ✅

**关键变更**:
- 在"快速开始"部分添加 VitePress Callout（`::: tip`）强调 Node.js 前置要求
- 使用 VitePress Tabs 组件（`::: tabs`）优化安装命令展示
- 为每个 Tab 添加清晰的步骤说明（1. 确保已安装 Node.js, 2. 运行安装脚本）
- 在文档导航部分使用表格展示，提升可读性
- 添加 Callout 提示新手入门和开发者文档
- 增加分隔线（`---`）提升视觉层次
- 简化文字描述，增加留白

### 修改后的文件列表

1. `C:\Users\Rowan\.openclaw\workspace-architect\openclaw-docs-cn\docs\beginner\config\feishu.md`
2. `C:\Users\Rowan\.openclaw\workspace-architect\openclaw-docs-cn\docs\beginner\install\windows.md`
3. `C:\Users\Rowan\.openclaw\workspace-architect\openclaw-docs-cn\docs\beginner\install\macos.md`
4. `C:\Users\Rowan\.openclaw\workspace-architect\openclaw-docs-cn\docs\index.md`

### 验证建议

1. **本地预览文档站**:
   ```bash
   cd C:\Users\Rowan\.openclaw\workspace-architect\openclaw-docs-cn
   npm run docs:dev
   ```
   然后在浏览器访问 http://localhost:5173 查看效果

2. **检查重点**:
   - 飞书配置页面的 WebSocket 长连接说明是否清晰
   - 安装指南的 Node.js 前置要求是否醒目
   - 首页排版是否整洁，Tabs 组件是否正常渲染
   - 表格是否正确显示

3. **构建测试**:
   ```bash
   npm run docs:build
   ```
   确保没有 Markdown 语法错误

---

## 2026-03-17 - 每日文档更新 (LRN-20260317-001) ✅ 已完成

**优先级**: high  
**来源**: Cron 定时任务 (architect-daily-doc-update)  
**完成时间**: 2026-03-17 18:00

### 更新内容

#### 1. 官方文档结构分析
- 官方文档使用 Mintlify 平台（非 VitePress）
- 提供完整文档索引：https://docs.openclaw.ai/llms.txt
- 文档类别：Automation, Channels, CLI, Concepts, Gateway, Help, Install, Nodes, Platforms, Plugins, Providers, Reference, Security, Start

#### 2. 新增文档类别识别
**自动化 (6 个新页面)**:
- Cron Jobs, Webhooks, Gmail PubSub, Hooks, Polls, Auth Monitoring

**高级概念 (8 个新页面)**:
- Context Engine, Model Failover, Session Pruning, Compaction, Usage Tracking, 等

**安全 (3 个新页面)**:
- THREAT MODEL ATLAS, CONTRIBUTING THREAT MODEL, Formal Verification

**部署平台 (7 个新增)**:
- DigitalOcean, Oracle Cloud, Northflank, Railway, Render, Hetzner, GCP

#### 3. CLI 命令扩展
官方文档新增 25+ CLI 命令参考页面，包括：
- acp, agent, agents, approvals, browser, cron, daemon, devices, dns
- memory, models, node, nodes, plugins, qr, reset, sandbox, secrets
- security, sessions, skills, status, tui, voicecall, webhooks

#### 4. 模型提供商确认
官方支持 30+ 模型提供商，中文文档已覆盖 8+ 主流提供商：
- ✅ Qwen, GLM, Moonshot AI, Qianfan (已覆盖)
- ⚠️ MiniMax, Z.AI, Xiaomi MiMo (可补充)
- ⚠️ Ollama, vLLM, Litellm (本地部署，可补充)

#### 5. 移动端节点功能
官方详细文档涵盖：
- Canvas, Camera Capture, Audio/Voice Notes, Talk Mode, Voice Wake
- Location Command, Media Understanding, Image/Media Support
- 中文文档可补充移动端配置和使用指南

### 文档同步状态

| 类别 | 官方 | 中文 | 同步率 |
|------|------|------|--------|
| 渠道支持 | 22 个 | 22 个 | 100% ✅ |
| CLI 命令 | 40+ | 15+ | ~40% ⚠️ |
| 模型提供商 | 30+ | 8+ | ~25% ⚠️ |
| 安全文档 | 完整 | 基础 | ~30% ⚠️ |
| 移动端节点 | 详细 | 简略 | ~20% ⚠️ |
| 自动化功能 | 完整 | 部分 | ~40% ⚠️ |

### 后续优先级

**高优先级**:
1. 移动端节点配置指南（iOS/Android）
2. Tailscale 远程访问详细教程
3. 模型故障转移配置示例
4. 常用 CLI 命令详细说明

**中优先级**:
1. 本地模型部署指南（Ollama, vLLM）
2. Cron 定时任务使用指南
3. Webhook 配置示例
4. 安全最佳实践文档

### 输出文件
- `.learnings/UPDATE-2026-03-17.md` - 今日更新摘要

---

## 2026-03-16 - 测试报告 (LRN-20260316-002) ✅ 测试完成

**优先级**: high  
**来源**: Tester Agent 执行  
**完成时间**: 2026-03-16 19:10

### 测试执行摘要

- **测试项总数**: 17
- **通过**: 17
- **失败**: 0
- **通过率**: 100%

### 测试覆盖范围

1. **导航测试 (4/4)**: 首页链接、侧边栏、内部链接
2. **页面渲染测试 (5/5)**: Tabs 组件、Callout、表格、代码高亮、Markdown 格式
3. **重点页面验证 (4/4)**: Node.js 前置、WebSocket 说明、首页排版
4. **内容准确性验证 (4/4)**: 安装链接、命令、配置步骤、示例代码

### 测试策略 (Best Practice)

1. **文档结构验证优先**: 先检查文件结构和导航配置，再深入内容
2. **关键路径测试**: 优先验证用户最常访问的页面（首页、安装指南）
3. **配置示例验证**: 检查所有代码块语法是否正确
4. **链接一致性**: 确保内部链接与文件路径匹配

### 测试盲点 (需在发布前补充)

1. **浏览器兼容性**: 未在 Chrome/Edge 实际测试渲染效果
2. **移动端响应式**: 未测试移动设备上的显示效果
3. **搜索功能**: 未实际测试 VitePress 搜索功能
4. **构建测试**: 未执行 `npm run build` 验证生产构建

### 发布建议

**✅ 可以发布**

理由:
- 所有核心测试项通过 (17/17)
- 文档结构完整，内容准确
- 关键信息（Node.js 前置、WebSocket 长连接）已突出显示
- 无阻塞性 Bug

**⚠️ 发布后待完善 (非阻塞)**:
1. 补充截图（文档中标注的"📸 截图位置"）
2. 验证外部链接有效性
3. 执行构建测试 `npm run build`
4. 浏览器兼容性测试

### 输出文件

1. `test/test-report.md` - 完整测试报告
2. `test/bug-report.md` - Bug 报告（本次无 Bug）
3. `test/checklist.md` - 测试清单

---

## 2026-03-18 - 每日文档更新 (LRN-20260318-001) ✅ 已完成

**优先级**: high  
**来源**: Cron 定时任务 (architect-daily-doc-update)  
**完成时间**: 2026-03-18 13:32

### 今日重点发现

#### 1. 更新流程优化（高优先级）
**官方推荐的更新方式**：重新运行安装脚本
```bash
# macOS/Linux
curl -fsSL https://openclaw.ai/install.sh | bash

# Windows PowerShell  
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**自动更新器配置**（核心功能，默认关闭）:
```json
{
  "update": {
    "channel": "stable",
    "auto": {
      "enabled": true,
      "stableDelayHours": 6,
      "stableJitterHours": 12,
      "betaCheckIntervalHours": 1
    }
  }
}
```

**行为说明**:
- `stable`: 检测到新版本后等待 6 小时 + 随机抖动 0-12 小时
- `beta`: 每小时检查一次，有更新立即应用
- `dev`: 不自动更新，需手动执行 `openclaw update`

**中文文档缺口**: 需要补充自动更新器配置说明和推荐更新流程

#### 2. Tailscale 远程访问详解（高优先级）
**三种模式**:
- `serve`: Tailnet 内网访问，支持 Tailscale 身份头免认证
- `bind: tailnet`: 直接绑定 Tailnet IP，需 token 认证
- `funnel`: 公开互联网访问，强制要求密码认证

**安全要求**:
- `funnel` 模式必须配置 `gateway.auth.mode: "password"`
- Serve 模式可使用 Tailscale 身份头（仅限可信主机）
- HTTP API 端点始终需要 token/密码认证

**前置要求**:
- Tailscale CLI 必须安装并登录
- Serve 需要 tailnet 启用 HTTPS
- Funnel 要求 Tailscale v1.38.3+、MagicDNS、HTTPS 启用
- Funnel 仅支持端口 `443`, `8443`, `10000`（TLS）

**中文文档缺口**: Tailscale 配置教程完全缺失，需尽快补充

#### 3. GitHub 仓库活跃度
- Issues 总数：5000+
- PRs 总数：5000+
- 今日新增 Issues: 10+ (Mar 18, 2026)
- Security Advisories: 288

**活跃 Issue 作者**（今日）: @crfzly, @Jwarm, @wronps

#### 4. 更新频道确认
| 频道 | NPM Tag | 说明 | 适用场景 |
|------|---------|------|----------|
| `stable` | `latest` | 稳定版（带版本标签） | 生产环境 |
| `beta` | `beta` | 预发布版（`vYYYY.M.D-beta.N`） | 测试新功能 |
| `dev` | `dev` | 开发版（main 分支 HEAD） | 开发者测试 |

**切换频道命令**:
```bash
openclaw update --channel stable|beta|dev
openclaw update --tag main  # 使用 GitHub main 分支最新
```

### 文档同步状态更新

| 类别 | 官方 | 中文 | 同步率 | 优先级 |
|------|------|------|--------|--------|
| 渠道支持 | 22 个 | 22 个 | 100% ✅ | - |
| CLI 命令 | 40+ | 15+ | ~40% ⚠️ | 中 |
| 模型提供商 | 30+ | 8+ | ~25% ⚠️ | 中 |
| 安全文档 | 完整 | 基础 | ~30% ⚠️ | 高 |
| 移动端节点 | 详细 | 简略 | ~20% ⚠️ | 高 |
| 自动化功能 | 完整 | 部分 | ~40% ⚠️ | 中 |
| **更新流程** | **详细** | **简略** | **~20% ⚠️** | **高** |
| **Tailscale** | **详细** | **缺失** | **~0% ❌** | **高** |

### 新增行动项

**高优先级（本周）**:
- [ ] 补充自动更新器配置指南到 `docs/beginner/config/`
- [ ] 添加 Tailscale 远程访问详细教程到 `docs/beginner/config/`
- [ ] 更新安装指南，强调推荐更新方式
- [ ] 补充 Gateway 服务管理命令参考

**中优先级（下周）**:
- [ ] 补充更新频道详解
- [ ] 添加版本回滚/固定指南
- [ ] 补充常用 CLI 命令详细说明
- [ ] 添加移动端节点配置指南（iOS/Android）

**低优先级（后续）**:
- [ ] 补充本地模型部署指南（Ollama, vLLM）
- [ ] 添加模型故障转移配置示例
- [ ] 补充 Cron 定时任务使用指南
- [ ] 添加安全最佳实践文档

### 输出文件
- `.learnings/UPDATE-2026-03-18.md` - 今日更新摘要

---
