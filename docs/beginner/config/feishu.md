# 飞书接入配置

> ⭐ **重点内容**: 飞书是 OpenClaw 最常用的集成平台之一，请仔细阅读本指南。

通过飞书集成，你可以在飞书聊天中直接使用 OpenClaw 的 AI 能力，包括智能问答、文档处理、日程管理等。

## 📋 前置要求

- 已安装并启动 OpenClaw Gateway
- 拥有飞书账号（个人版或企业版均可）
- 有创建飞书应用的权限

## 🚀 配置步骤

### 步骤 1: 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 登录你的飞书账号
3. 点击"创建应用"
4. 填写应用信息：
   - **应用名称**: OpenClaw 助手（或自定义）
   - **应用图标**: 可上传 OpenClaw Logo
   - **应用描述**: AI 智能助手

> 📸 **截图位置**: 此处应展示创建应用页面截图

### 步骤 2: 获取应用凭证

创建应用后，在"应用凭证"页面获取：

- **App ID** (应用 ID)
- **App Secret** (应用密钥)

> ⚠️ **重要**: 请妥善保管 App Secret，不要泄露给他人

> 📸 **截图位置**: 此处应展示应用凭证页面截图

### 步骤 3: 配置应用权限

在"权限管理"页面，添加以下权限：

| 权限名称 | 权限标识 | 用途 |
|---------|---------|------|
| 发送消息 | `im:message` | 向用户发送消息 |
| 读取消息 | `im:message:read` | 接收用户消息 |
| 机器人管理 | `im:bot` | 管理机器人 |
| 事件订阅 | `event` | 订阅事件通知 |

点击"申请权限"，等待审核（通常即时通过）。

> 📸 **截图位置**: 此处应展示权限配置截图

### 步骤 4: 配置事件订阅（推荐 WebSocket 长连接模式）

> ⭐ **重要提示**: OpenClaw 支持**WebSocket 长连接模式**，这是**推荐的配置方式**！
>
> **长连接优势**：
> - ✅ **无需公网地址** - 适合内网环境，无需配置 ngrok 等内网穿透
> - ✅ **更安全** - 不需要暴露 webhook URL 到公网
> - ✅ **更稳定** - 保持持久连接，消息实时推送
> - ✅ **配置简单** - 只需在 OpenClaw 中配置，无需在飞书后台设置回调地址

#### 方式 A: WebSocket 长连接模式（推荐）⭐

1. 进入"事件订阅"页面
2. 开启"启用事件订阅"
3. **配置加密密钥（Verification Token）** - 记下这个 Token，稍后在 OpenClaw 配置中使用
4. 订阅以下事件：
   - `im.message.receive_v1` - 接收消息
   - `im.message.read_v1` - 消息已读
5. **不需要配置订阅地址（回调 URL）** - 这是长连接模式的关键！

> 💡 **长连接模式说明**：OpenClaw 会主动与飞书服务器建立 WebSocket 长连接，飞书通过此连接推送事件，无需回调地址。

#### 方式 B: Webhook 回调模式（仅在有公网地址时使用）

如果你有公网地址，也可以使用传统的 Webhook 模式：

1. 配置订阅地址：
   ```
   https://<你的公网地址>/api/feishu/event
   ```
   
   > 💡 如果没有公网地址，可以使用内网穿透工具如 ngrok：
   > ```bash
   > ngrok http 3000
   > ```

2. 配置加密密钥（Verification Token）
3. 订阅事件（同上）

> 📸 **截图位置**: 此处应展示事件订阅配置截图（显示 Verification Token 配置）

### 步骤 5: 添加机器人

1. 进入"机器人"页面
2. 点击"添加机器人"
3. 配置机器人：
   - **机器人名称**: OpenClaw
   - **头像**: 上传 Logo
   - **功能**: 开启"接收并回复消息"

4. 复制 **Webhook 地址**（备用）

> 📸 **截图位置**: 此处应展示机器人配置截图

### 步骤 6: 发布应用

1. 进入"版本管理与发布"
2. 创建新版本
3. 提交审核（个人应用通常自动通过）
4. 发布后，在飞书中搜索你的应用并添加

### 步骤 7: 配置 OpenClaw

在 OpenClaw 中配置飞书集成：

```bash
openclaw config feishu
```

按提示输入：
- App ID
- App Secret
- Verification Token
- **连接模式** - 选择 `websocket`（推荐）或 `webhook`

或者手动编辑配置文件：

```bash
# 编辑配置文件
openclaw config edit
```

#### WebSocket 长连接模式配置（推荐）⭐

```json
{
  "feishu": {
    "appId": "cli_xxxxxxxxxxxxx",
    "appSecret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "verificationToken": "xxxxxxxxxxxxxxxx",
    "connectionMode": "websocket",
    "enabled": true
  }
}
```

> ✅ **优势**：无需配置 `callbackUrl`，OpenClaw 会自动与飞书建立 WebSocket 长连接

#### Webhook 回调模式配置（仅在有公网地址时）

```json
{
  "feishu": {
    "appId": "cli_xxxxxxxxxxxxx",
    "appSecret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "verificationToken": "xxxxxxxxxxxxxxxx",
    "connectionMode": "webhook",
    "callbackUrl": "https://your-domain.com/api/feishu/event",
    "enabled": true
  }
}
```

### 步骤 8: 重启 Gateway

配置完成后，重启 Gateway 使配置生效：

```bash
openclaw gateway restart
```

## ✅ 验证配置

### 测试 1: 发送消息

在飞书中向机器人发送消息：

```
你好
```

应该收到 AI 回复。

### 测试 2: 检查日志

查看 OpenClaw 日志确认事件接收正常：

```bash
openclaw logs --follow
```

应该看到类似输出：

```
[INFO] 收到飞书消息：用户 xxx 发送了 "你好"
[INFO] 处理消息中...
[INFO] 发送回复成功
```

## 🔧 高级配置

### 自定义回复前缀

```json
{
  "feishu": {
    "replyPrefix": "[OpenClaw] ",
    "enabled": true
  }
}
```

### 配置消息格式

支持 Markdown 格式回复：

```json
{
  "feishu": {
    "messageType": "interactive",
    "enabled": true
  }
}
```

### 多机器人支持

可以配置多个飞书应用：

```json
{
  "feishu": {
    "bots": [
      {
        "name": "客服机器人",
        "appId": "cli_xxx1",
        "appSecret": "secret1"
      },
      {
        "name": "内部助手",
        "appId": "cli_xxx2",
        "appSecret": "secret2"
      }
    ]
  }
}
```

## ❓ 常见问题

### 问题 1: 收不到消息

**可能原因**:
- 事件订阅地址不可访问
- 权限未正确配置
- 机器人未添加到群聊

**解决方案**:
1. 检查回调地址是否可访问
2. 验证权限配置
3. 确保机器人已添加到目标群聊

### 问题 2: 回复失败

**错误信息**: `发送消息失败`

**解决方案**:
1. 检查 App Secret 是否正确
2. 验证 access_token 是否过期
3. 查看 OpenClaw 日志获取详细错误

### 问题 3: 签名验证失败

**错误信息**: `签名验证失败`

**解决方案**:
1. 确保 Verification Token 配置正确
2. 检查时间同步（服务器时间应准确）

### 问题 4: 权限不足

**错误信息**: `permission denied`

**解决方案**:
1. 在飞书开放平台重新申请权限
2. 等待权限审核通过
3. 重新发布应用

## 📚 相关资源

- [飞书开放平台文档](https://open.feishu.cn/document/)
- [飞书机器人开发指南](https://open.feishu.cn/document/ukTMzNzL4YDM00SO2eTQzMT0gzU2)
- [OpenClaw 插件开发](/developer/plugins/)

## 📝 下一步

- 💼 [企业微信配置](/beginner/config/wecom)
- ⚙️ [模型配置](/beginner/config/models)
- 🔌 [自定义插件](/developer/plugins/)

---

> 💡 **提示**: 遇到问题？查看 [故障排除](/developer/troubleshooting/) 或加入 [Discord 社区](https://discord.gg/openclaw) 寻求帮助。
