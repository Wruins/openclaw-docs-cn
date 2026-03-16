# macOS 安装指南

本指南将帮助你在 macOS 系统上安装和配置 OpenClaw。

## ⚠️ 前置要求：安装 Node.js

> 🚨 **重要**: OpenClaw **依赖 Node.js 环境**，请**务必先安装 Node.js**，然后再安装 OpenClaw！

### 为什么需要 Node.js？

OpenClaw 是基于 Node.js 构建的，需要 Node.js 运行时环境才能运行。

### 安装 Node.js

**方式 A: 使用 Homebrew 安装（推荐）**

如果你已经安装了 Homebrew：

```bash
brew install node@24
```

或者安装 LTS 版本：

```bash
brew install node
```

**方式 B: 从官网下载**

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载并安装以下版本之一：
   - **推荐**: Node.js 24.x（最新版本）
   - **支持**: Node.js 22 LTS (22.16+)（长期支持版）

**验证安装**

安装完成后，打开终端验证：

```bash
node --version
npm --version
```

应该显示版本号，例如：
```
v24.14.0
10.9.2
```

> 💡 **提示**: 如果尚未安装 Node.js，请先完成此步骤，然后继续下面的 OpenClaw 安装。

> 📸 **截图位置**: 此处应展示 node 和 npm 版本截图

---

## 📋 系统要求

- **操作系统**: macOS 11 (Big Sur) 或更高版本
- **Node.js**: 版本 22.16+ 或 24.x（**必须先安装**）
- **内存**: 至少 4GB RAM
- **磁盘空间**: 至少 500MB 可用空间
- **架构**: 支持 Intel 和 Apple Silicon (M1/M2/M3)

## 🚀 安装步骤

### 步骤 1: 安装 Homebrew（如未安装）

Homebrew 是 macOS 的包管理器，推荐先安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成后，验证：

```bash
brew --version
```

> 📸 **截图位置**: 此处应展示 Homebrew 安装成功截图

### 步骤 2: 安装 OpenClaw

> ✅ **前置要求**: 确保已完成上面的 Node.js 安装并验证版本。

打开终端，执行：

打开终端，执行：

```bash
npm install -g openclaw
```

> 💡 **提示**: 如果遇到权限错误，可以尝试：
> ```bash
> sudo npm install -g openclaw
> ```

> 📸 **截图位置**: 此处应展示 npm install 成功截图

### 步骤 4: 验证安装

```bash
openclaw --version
```

应该显示版本号，例如：`2026.3.13`

> 📸 **截图位置**: 此处应展示 openclaw --version 输出截图

### 步骤 5: 初始化配置

```bash
openclaw init
```

按提示配置：
- 默认 AI 模型
- API 密钥
- 存储路径

> 📸 **截图位置**: 此处应展示 openclaw init 配置截图

### 步骤 6: 启动 Gateway

```bash
openclaw gateway start
```

成功启动后显示：

```
✓ Gateway 服务已启动
✓ 监听端口：3000
✓ 状态：运行中
```

> 📸 **截图位置**: 此处应展示 gateway start 成功截图

### 步骤 7: 连接客户端

#### 方式 A: 扫描二维码

1. 打开 OpenClaw 客户端（手机或电脑）
2. 选择"扫描二维码"
3. 扫描终端显示的二维码

#### 方式 B: 手动输入配对码

1. 在客户端选择"手动连接"
2. 输入终端显示的配对码

> 📸 **截图位置**: 此处应展示二维码连接截图

## ✅ 验证安装

```bash
# 检查 Gateway 状态
openclaw gateway status

# 查看可用技能
openclaw skills list

# 测试对话（在客户端）
```

## ❓ 常见问题

### 问题 1: 权限错误

**错误信息**: `Error: EACCES: permission denied`

**解决方案**:
```bash
# 方案 A: 使用 sudo
sudo npm install -g openclaw

# 方案 B: 修复 npm 权限
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
npm install -g openclaw
```

### 问题 2: Apple Silicon 兼容性问题

如果在 M1/M2/M3 Mac 上遇到问题：

```bash
# 使用 Rosetta 2 运行
arch -x86_64 npm install -g openclaw
```

### 问题 3: Gateway 无法启动

**错误信息**: `Port 3000 is already in use`

**解决方案**:
```bash
# 查找占用端口的进程
lsof -i :3000
# 终止进程（替换 PID）
kill -9 <PID>
# 重新启动
openclaw gateway start
```

### 问题 4: 防火墙阻止连接

**解决方案**:
1. 打开 系统设置 → 网络 → 防火墙
2. 点击"选项"
3. 添加 Terminal 或允许端口 3000

## 🍎 macOS 特定优化

### 添加到启动项

让 Gateway 开机自启动：

```bash
# 创建启动脚本
cat > ~/start-openclaw.sh << 'EOF'
#!/bin/bash
openclaw gateway start
EOF

chmod +x ~/start-openclaw.sh

# 添加到登录项（系统设置 → 通用 → 登录项）
```

### 创建别名

在 `~/.zshrc` 中添加：

```bash
alias oc='openclaw'
alias oc-start='openclaw gateway start'
alias oc-stop='openclaw gateway stop'
alias oc-status='openclaw gateway status'
```

然后执行：
```bash
source ~/.zshrc
```

## 📝 下一步

- ⚙️ [模型配置](/beginner/config/models)
- 📱 [飞书接入](/beginner/config/feishu)
- 💼 [企业微信](/beginner/config/wecom)

---

> 💡 **提示**: 需要更多帮助？查看 [故障排除](/developer/troubleshooting/)
