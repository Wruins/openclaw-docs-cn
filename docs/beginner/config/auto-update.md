# 自动更新器配置指南

> **最后更新**: 2026-03-18  
> **优先级**: 高  
> **功能状态**: 核心功能（非插件），默认关闭

## 概述

OpenClaw 提供可选的自动更新器功能，可以在检测到新版本时自动应用更新。这是 Gateway 的核心功能，无需安装额外插件。

**默认状态**: 关闭（需手动配置启用）

---

## 更新频道说明

OpenClaw 提供三个更新频道：

| 频道 | NPM Tag | 说明 | 适用场景 |
|------|---------|------|----------|
| `stable` | `latest` | 稳定版（带版本标签，如 `v2026.3.18`） | **生产环境推荐** |
| `beta` | `beta` | 预发布版（`vYYYY.M.D-beta.N`） | 测试新功能 |
| `dev` | `dev` | 开发版（main 分支 HEAD） | 开发者测试 |

---

## 配置自动更新器

### 基本配置

编辑 `~/.openclaw/openclaw.json`:

```json5
{
  update: {
    channel: "stable",  // 更新频道：stable | beta | dev
    auto: {
      enabled: true,  // 启用自动更新
      stableDelayHours: 6,  // stable 频道延迟小时数
      stableJitterHours: 12,  // stable 频道随机抖动小时数
      betaCheckIntervalHours: 1  // beta 频道检查间隔小时数
    }
  }
}
```

### 配置项详解

#### `update.channel`

指定要跟踪的更新频道：

- `"stable"`: 稳定版，适合生产环境
- `"beta"`: 预发布版，适合测试
- `"dev"`: 开发版，适合开发者

#### `update.auto.enabled`

- `true`: 启用自动更新
- `false`: 禁用自动更新（默认）

#### `update.auto.stableDelayHours`

**仅适用于 stable 频道**

检测到新版本后，等待的小时数才开始更新。

**默认值**: 6 小时

**目的**: 让新版本先被其他用户测试，降低遇到 Bug 的风险。

#### `update.auto.stableJitterHours`

**仅适用于 stable 频道**

在延迟基础上，添加随机抖动时间（0 到指定小时数）。

**默认值**: 12 小时

**目的**: 避免所有用户在同一时间更新，分散服务器负载。

**示例**: 
- 配置 `stableDelayHours: 6`, `stableJitterHours: 12`
- 实际等待时间 = 6 小时 + 随机 (0-12) 小时 = 6-18 小时

#### `update.auto.betaCheckIntervalHours`

**仅适用于 beta 频道**

检查更新的间隔小时数。

**默认值**: 1 小时

**行为**: beta 频道检测到更新会立即应用，无延迟。

---

## 行为说明

### Stable 频道

1. 检测到新版本发布
2. 等待 `stableDelayHours` (默认 6 小时)
3. 添加随机抖动 `stableJitterHours` (默认 0-12 小时)
4. 自动下载并应用更新
5. 重启 Gateway

**总等待时间**: 6-18 小时（默认配置）

### Beta 频道

1. 每 `betaCheckIntervalHours` (默认 1 小时) 检查一次
2. 检测到更新立即应用
3. 重启 Gateway

### Dev 频道

- **不会自动更新**
- 需手动执行 `openclaw update`

---

## 手动更新命令

### 预览更新（推荐）

在启用自动更新前，先预览更新内容：

```bash
openclaw update --dry-run
```

### 手动更新

```bash
# 更新到当前频道最新版
openclaw update

# 切换到指定频道
openclaw update --channel stable
openclaw update --channel beta
openclaw update --channel dev

# 更新到特定版本
openclaw update --tag v2026.3.18

# 更新到 GitHub main 分支最新
openclaw update --tag main
```

### 全局安装更新

如果使用 npm/pnpm 全局安装：

```bash
# npm
npm install -g openclaw@latest

# pnpm (推荐)
pnpm add -g openclaw@latest

# 指定版本
pnpm add -g openclaw@2026.3.18
```

### 源码安装更新

如果从 GitHub 克隆源码：

```bash
cd ~/.openclaw/workspace-architect/openclaw  # 或你的源码目录
git pull
pnpm install
pnpm build
pnpm ui:build
openclaw doctor
openclaw gateway restart
```

---

## 推荐更新方式

### 方式 1: 重新运行安装脚本（推荐）

官方推荐的更新方式是重新运行安装脚本：

**macOS/Linux**:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows PowerShell**:
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**优点**:
- 自动检测现有安装
- 原地升级
- 自动运行 `openclaw doctor`
- 处理配置迁移

**可选参数**:
```bash
# 不运行 onboarding
curl -fsSL https://openclaw.ai/install.sh | bash -s -- --no-onboard

# 源码安装
curl -fsSL https://openclaw.ai/install.sh | bash -s -- --install-method git --no-onboard
```

---

## 更新后检查

更新完成后，运行以下命令验证：

```bash
# 检查配置和迁移
openclaw doctor

# 重启 Gateway
openclaw gateway restart

# 检查健康状态
openclaw health

# 查看日志
openclaw logs --follow
```

---

## 版本回滚

如果更新后遇到问题，可以回滚到之前的版本。

### 查看当前版本

```bash
openclaw --version
```

### 回滚到指定版本

```bash
# 查看可用版本
npm view openclaw versions

# 安装指定版本（npm）
npm install -g openclaw@2026.3.17

# 安装指定版本（pnpm）
pnpm add -g openclaw@2026.3.17

# 重启并检查
openclaw doctor
openclaw gateway restart
```

### 源码安装回滚

```bash
# 找到问题提交之前的 commit
git log --oneline -20

# 回滚到指定 commit
git checkout <commit-hash>

# 重新安装依赖并构建
pnpm install
pnpm build
openclaw gateway restart
```

### 按日期回滚

```bash
# 回滚到指定日期之前的最新 commit
git checkout "$(git rev-list -n 1 --before="2026-03-17" origin/main)"

# 重新安装
pnpm install
pnpm build
openclaw gateway restart
```

---

## 禁用自动更新

如果已启用自动更新但想禁用：

```json5
{
  update: {
    auto: {
      enabled: false
    }
  }
}
```

或者禁用启动时检查：

```json5
{
  update: {
    checkOnStart: false
  }
}
```

---

## 故障排除

### 问题：自动更新未触发

**检查**:
1. 确认 `update.auto.enabled: true`
2. 检查网络连接
3. 查看日志：`openclaw logs --follow`

### 问题：更新失败

**解决**:
```bash
# 手动更新
openclaw update

# 检查错误
openclaw doctor

# 查看日志
openclaw logs --tail 100
```

### 问题：配置迁移失败

**解决**:
```bash
# 运行 doctor 进行迁移
openclaw doctor

# 如果仍有问题，手动检查配置
# 备份配置
cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.backup

# 参考官方配置示例重新配置
```

---

## 最佳实践

1. **生产环境使用 stable 频道**
   - 启用自动更新，设置合理的延迟（6-12 小时）
   - 避免使用 beta/dev 频道

2. **测试环境使用 beta 频道**
   - 可以快速获取新功能
   - 每小时检查一次更新

3. **开发环境使用 dev 频道**
   - 手动更新，控制更新时机
   - 便于调试和测试

4. **定期运行 `openclaw doctor`**
   - 即使启用自动更新，也建议定期手动检查
   - 确保配置迁移正确

5. **备份配置文件**
   - 更新前备份 `~/.openclaw/openclaw.json`
   - 便于回滚

---

## 参考资料

- [官方更新指南](https://docs.openclaw.ai/install/updating)
- [开发频道说明](https://docs.openclaw.ai/install/development-channels)
- [Gateway 运行手册](https://docs.openclaw.ai/gateway)
- [故障排除](https://docs.openclaw.ai/gateway/troubleshooting)

---

> 💡 **提示**: 启用自动更新后，可以通过 `openclaw logs --follow` 查看更新日志。更新通常在后台静默进行，完成后会自动重启 Gateway。
