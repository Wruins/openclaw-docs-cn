# 插件开发

创建自定义 OpenClaw 技能。

## 插件结构

```
my-plugin/
├── SKILL.md
├── index.js
└── package.json
```

## 示例插件

```javascript
export default {
  name: 'my-plugin',
  description: '我的自定义技能',
  
  async execute(input) {
    return `收到：${input}`;
  }
}
```

## 注册插件

```bash
openclaw plugins install ./my-plugin
```

## 开发文档

查看 [官方插件开发指南](https://openclaw.com/docs/plugins)
