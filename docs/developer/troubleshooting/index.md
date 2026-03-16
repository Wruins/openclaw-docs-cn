# 故障排除

常见问题和解决方案。

## Gateway 无法启动

```bash
# 检查端口占用
netstat -ano | findstr :3000  # Windows
lsof -i :3000  # macOS

# 重启
openclaw gateway restart
```

## 客户端无法连接

1. 检查 Gateway 状态：`openclaw gateway status`
2. 检查防火墙设置
3. 验证网络配置

## 模型 API 错误

1. 验证 API Key 是否正确
2. 检查网络连接
3. 查看日志：`openclaw logs`

## 查看日志

```bash
# 实时查看
openclaw logs --follow

# 查看最近 100 行
openclaw logs -n 100
```

## 获取帮助

- [GitHub Issues](https://github.com/openclaw/openclaw/issues)
- [Discord 社区](https://discord.gg/openclaw)
