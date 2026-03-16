# Windows 安装指南

本指南将帮助你在 Windows 系统上安装和配置 OpenClaw。

## ⚠️ 前置要求：安装 Node.js

> 🚨 **重要**: OpenClaw **依赖 Node.js 环境**，请**务必先安装 Node.js**，然后再安装 OpenClaw！

### 为什么需要 Node.js？

OpenClaw 是基于 Node.js 构建的，需要 Node.js 运行时环境才能运行。

### 安装 Node.js

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载并安装以下版本之一：
   - **推荐**: Node.js 24.x（最新版本）
   - **支持**: Node.js 22 LTS (22.16+)（长期支持版）
3. 运行安装程序，使用默认设置
4. 安装完成后，打开 PowerShell 验证：

```powershell
node --version
npm --version
```

应该显示版本号，例如：
```
v24.14.0
10.9.2
```

> 💡 **提示**: 如果尚未安装 Node.js，请先完成此步骤，然后继续下面的 OpenClaw 安装。

> 📸 **截图位置**: 此处应展示 node 和 npm 版本输出截图

---

## 📋 系统要求

- **操作系统**: Windows 10 或 Windows 11
- **Node.js**: 版本 22.16+ 或 24.x（**必须先安装**）
- **内存**: 至少 4GB RAM
- **磁盘空间**: 至少 500MB 可用空间

## 🚀 安装步骤

> ✅ **完成前置要求后**，继续下面的 OpenClaw 安装步骤。

### 步骤 1: 安装 OpenClaw

打开 PowerShell（建议以管理员身份运行），执行：

```powershell
npm install -g openclaw
```

> 💡 **提示**: 如果遇到权限错误，可以尝试：
> ```powershell
> npm install -g openclaw --force
> ```

> 📸 **截图位置**: 此处应展示 npm install 成功完成的截图

### 步骤 3: 验证安装

安装完成后，验证 OpenClaw 是否正确安装：

```powershell
openclaw --version
```

应该显示版本号，例如：`2026.3.13`

> 📸 **截图位置**: 此处应展示 openclaw --version 输出截图

### 步骤 4: 初始化配置

首次运行需要初始化配置：

```powershell
openclaw init
```

系统会提示你配置：
- 默认 AI 模型
- API 密钥
- 存储路径

> 📸 **截图位置**: 此处应展示 openclaw init 交互式配置截图

### 步骤 5: 启动 Gateway

配置完成后，启动 OpenClaw Gateway 服务：

```powershell
openclaw gateway start
```

启动成功后，你会看到类似输出：

```
✓ Gateway 服务已启动
✓ 监听端口：3000
✓ 状态：运行中
```

> 📸 **截图位置**: 此处应展示 gateway start 成功截图

### 步骤 6: 连接客户端

#### 方式 A: 扫描二维码

1. 在手机或电脑上打开 OpenClaw 客户端
2. 选择"扫描二维码"
3. 扫描终端显示的二维码

#### 方式 B: 手动输入配对码

1. 在客户端选择"手动连接"
2. 输入终端显示的配对码

> 📸 **截图位置**: 此处应展示二维码和配对码截图

## ✅ 验证安装

完成所有步骤后，进行以下验证：

1. **检查 Gateway 状态**:
   ```powershell
   openclaw gateway status
   ```

2. **测试对话**:
   在客户端发送一条消息，确认能收到回复

3. **检查技能**:
   ```powershell
   openclaw skills list
   ```

## ❓ 常见问题

### 问题 1: npm 安装失败

**错误信息**: `EPERM: operation not permitted`

**解决方案**:
```powershell
# 以管理员身份运行 PowerShell
# 清除 npm 缓存
npm cache clean --force
# 重新安装
npm install -g openclaw
```

### 问题 2: Gateway 无法启动

**错误信息**: `Port 3000 is already in use`

**解决方案**:
```powershell
# 查找占用端口的进程
netstat -ano | findstr :3000
# 终止进程（替换 PID 为实际进程 ID）
taskkill /PID <PID> /F
# 重新启动
openclaw gateway start
```

### 问题 3: 客户端无法连接

**可能原因**:
- 防火墙阻止连接
- Gateway 服务未启动
- 网络配置问题

**解决方案**:
1. 检查 Gateway 状态：`openclaw gateway status`
2. 检查防火墙设置，允许端口 3000
3. 尝试重启 Gateway：`openclaw gateway restart`

## 📝 下一步

安装完成后，继续配置：

- ⚙️ [模型配置](/beginner/config/models) - 配置 AI 模型
- 📱 [飞书接入](/beginner/config/feishu) - 集成飞书
- 💼 [企业微信](/beginner/config/wecom) - 集成企业微信

---

> 💡 **提示**: 遇到问题？查看 [故障排除](/developer/troubleshooting/) 获取更多帮助。
