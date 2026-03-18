# Tailscale 远程访问配置指南

> **最后更新**: 2026-03-18  
> **优先级**: 高  
> **前置要求**: Tailscale 已安装并登录

## 概述

OpenClaw 支持通过 Tailscale 实现安全的远程访问，无需暴露公网 IP 或配置端口转发。Gateway 保持绑定在本地回环地址，由 Tailscale 提供 HTTPS 加密和路由。

## 三种访问模式

### 1. Serve 模式（推荐 - Tailnet 内网访问）

**适用场景**: 仅允许同一 Tailnet 内的设备访问

**特点**:
- ✅ 仅限 Tailnet 内网访问
- ✅ 支持 Tailscale 身份头免认证
- ✅ HTTPS 自动加密
- ✅ 配置简单

**配置示例** (`~/.openclaw/openclaw.json`):

```json5
{
  gateway: {
    bind: "loopback",
    tailscale: { mode: "serve" },
  },
}
```

**启动命令**:
```bash
openclaw gateway --tailscale serve
```

**访问方式**:
- Control UI: `https://<magicdns>/`
- WebSocket: `wss://<magicdns>/`

---

### 2. Tailnet IP 直连模式

**适用场景**: 需要直接绑定到 Tailnet IP，不使用 Serve/Funnel

**特点**:
- ⚠️ 无 HTTPS（HTTP 明文）
- ⚠️ 需要 Token 认证
- ⚠️ 回环地址 (127.0.0.1) 无法访问

**配置示例**:

```json5
{
  gateway: {
    bind: "tailnet",
    auth: { mode: "token", token: "your-token" },
  },
}
```

**启动命令**:
```bash
openclaw gateway --port 18789
```

**访问方式**:
- Control UI: `http://<tailscale-ip>:18789/`
- WebSocket: `ws://<tailscale-ip>:18789`

---

### 3. Funnel 模式（公开互联网访问）

**适用场景**: 需要从公网访问（无 Tailnet 设备）

**特点**:
- ⚠️ 公开互联网可访问
- ✅ 强制要求密码认证
- ✅ HTTPS 自动加密
- ⚠️ 仅支持端口 443, 8443, 10000

**配置示例**:

```json5
{
  gateway: {
    bind: "loopback",
    tailscale: { mode: "funnel" },
    auth: { mode: "password", password: "replace-me" },
  },
}
```

**推荐使用环境变量**:
```bash
export OPENCLAW_GATEWAY_PASSWORD="your-secure-password"
openclaw gateway --tailscale funnel --auth password
```

**访问方式**:
- Control UI: `https://<magicdns>/`
- WebSocket: `wss://<magicdns>/`

---

## 前置要求

### Tailscale 安装

**Windows**:
```powershell
winget install tailscale.tailscale
```

**macOS**:
```bash
brew install --cask tailscale
```

**Linux**:
```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

### 登录 Tailscale

```bash
tailscale up
```

按提示访问链接完成设备认证。

### Funnel 模式额外要求

- Tailscale v1.38.3+
- MagicDNS 已启用
- HTTPS 已启用
- Funnel node attribute 已配置

检查版本:
```bash
tailscale --version
```

启用 MagicDNS 和 HTTPS (在 Tailscale 管理后台):
- 访问 https://login.tailscale.com/admin/dns
- 启用 MagicDNS
- 启用 HTTPS

---

## 安全配置

### 认证模式说明

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| `token` | 使用 `OPENCLAW_GATEWAY_TOKEN` 环境变量 | 默认模式 |
| `password` | 使用共享密码 | Funnel 模式必需 |
| `allowTailscale: true` | Serve 模式下使用 Tailscale 身份头免认证 | Tailnet 内网信任环境 |

### 推荐安全配置

**Serve 模式（Tailnet 内网）**:
```json5
{
  gateway: {
    bind: "loopback",
    tailscale: { 
      mode: "serve",
      resetOnExit: true  // 退出时自动清理 Serve 配置
    },
    auth: {
      allowTailscale: true  // 允许 Tailscale 身份头认证
    }
  },
}
```

**Funnel 模式（公开访问）**:
```json5
{
  gateway: {
    bind: "loopback",
    tailscale: { 
      mode: "funnel",
      resetOnExit: true
    },
    auth: {
      mode: "password"  // 强制密码认证
    }
  },
}
```

---

## 浏览器控制（远程 Gateway + 本地浏览器）

如果 Gateway 运行在一台机器上，但需要在另一台机器上驱动浏览器：

1. 在浏览器机器上运行 **node host**
2. 确保两台机器在同一 Tailnet
3. Gateway 会将浏览器操作代理到 node

**无需单独配置 Serve URL**。

```bash
# 在浏览器机器上
openclaw nodes serve
```

---

## 故障排除

### 检查 Tailscale 状态

```bash
# 查看设备状态
tailscale status

# 查看 IP 地址
tailscale ip

# 测试连接
tailscale ping <magicdns>
```

### Serve 模式问题

**问题**: Serve 无法启动

**检查**:
```bash
# 确认 HTTPS 已启用
tailscale netcheck

# 手动测试 Serve
tailscale serve https --remove /
tailscale serve https 18789
```

### Funnel 模式问题

**问题**: Funnel 拒绝启动

**原因**: 未配置密码认证

**解决**:
```json5
{
  gateway: {
    auth: { mode: "password", password: "your-password" }
  }
}
```

**问题**: Funnel 不支持当前端口

**解决**: Funnel 仅支持端口 443, 8443, 10000。使用 Serve 模式或更改端口。

---

## 参考资料

- [Tailscale Serve 官方文档](https://tailscale.com/kb/1312/serve)
- [Tailscale Funnel 官方文档](https://tailscale.com/kb/1223/tailscale-funnel)
- [OpenClaw 远程访问指南](https://docs.openclaw.ai/gateway/remote)
- [OpenClaw Tailscale 配置](https://docs.openclaw.ai/gateway/tailscale)

---

## 下一步

- [ ] 配置 Tailscale 并测试连接
- [ ] 选择适合的访问模式（推荐 Serve）
- [ ] 设置强密码或 Token
- [ ] 测试远程访问 Control UI
- [ ] （可选）配置自动更新器

> 💡 **提示**: 运行 `openclaw doctor` 可以检查配置健康状况，包括 Tailscale 配置。
