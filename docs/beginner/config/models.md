# 模型配置

配置 OpenClaw 使用的 AI 模型。

## 支持的模型提供商

### 1. 通义千问 (阿里)

```bash
openclaw config models
```

选择 `qwen`，然后输入 API Key。

**配置示例**:
```json
{
  "model": {
    "provider": "qwen",
    "apiKey": "sk-xxxxxxxx",
    "model": "qwen-plus",
    "endpoint": "https://dashscope.aliyuncs.com"
  }
}
```

### 2. 百度文心一言

```json
{
  "model": {
    "provider": "baidu",
    "apiKey": "xxxxx",
    "secretKey": "xxxxx",
    "model": "ernie-bot-4"
  }
}
```

### 3. OpenAI

```json
{
  "model": {
    "provider": "openai",
    "apiKey": "sk-xxxxx",
    "model": "gpt-4"
  }
}
```

### 4. 本地模型 (Ollama)

```json
{
  "model": {
    "provider": "ollama",
    "model": "llama2",
    "endpoint": "http://localhost:11434"
  }
}
```

## 切换模型

```bash
openclaw config models switch
```

## 测试模型

```bash
openclaw model test "你好"
```
