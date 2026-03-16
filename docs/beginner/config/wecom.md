# 企业微信配置

将 OpenClaw 集成到企业微信。

## 配置步骤

### 1. 创建企业微信应用

1. 访问 [企业微信管理后台](https://work.weixin.qq.com/)
2. 创建自建应用
3. 获取 CorpID 和 Secret

### 2. 配置回调

在应用配置中添加：
- 回调 URL: `https://your-domain.com/api/wecom/event`
- Token
- EncodingAESKey

### 3. 配置 OpenClaw

```bash
openclaw config wecom
```

输入：
- CorpID
- Secret
- Token
- EncodingAESKey

### 4. 启用应用

在企业微信中启用应用，然后添加到工作台。

## 验证

在企业微信中向机器人发送消息测试。
