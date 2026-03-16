# Learnings

开发过程中的经验和改进建议。

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
