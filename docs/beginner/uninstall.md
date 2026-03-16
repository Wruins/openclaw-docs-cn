# 卸载指南

如需卸载 OpenClaw，请按以下步骤操作。

## Windows

```powershell
# 停止服务
openclaw gateway stop

# 卸载
npm uninstall -g openclaw

# 删除配置目录
Remove-Item -Recurse -Force $env:APPDATA\openclaw
```

## macOS

```bash
# 停止服务
openclaw gateway stop

# 卸载
npm uninstall -g openclaw

# 删除配置目录
rm -rf ~/.openclaw
```

## 验证卸载

```bash
openclaw --version
# 应显示命令未找到
```
