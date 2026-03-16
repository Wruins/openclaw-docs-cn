# 本地模型

部署本地大模型以保护隐私。

## Ollama 集成

### 安装 Ollama

```bash
# macOS
brew install ollama

# Windows
# 从 https://ollama.ai 下载安装
```

### 拉取模型

```bash
ollama pull llama2
ollama pull qwen:7b
```

### 配置 OpenClaw

```json
{
  "model": {
    "provider": "ollama",
    "model": "llama2",
    "endpoint": "http://localhost:11434"
  }
}
```

## LM Studio

也可以使用 LM Studio 作为本地模型后端。
