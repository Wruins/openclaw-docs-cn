# 配置详解

## 配置文件位置

- Windows: `%APPDATA%\openclaw\config.json`
- macOS: `~/.openclaw/config.json`

## 完整配置示例

```json
{
  "model": {
    "provider": "qwen",
    "apiKey": "sk-xxx"
  },
  "feishu": {
    "enabled": true,
    "appId": "cli_xxx",
    "appSecret": "xxx"
  },
  "gateway": {
    "port": 3000,
    "host": "0.0.0.0"
  }
}
```

## 环境变量

```bash
export OPENCLAW_MODEL_PROVIDER=qwen
export OPENCLAW_API_KEY=sk-xxx
```
