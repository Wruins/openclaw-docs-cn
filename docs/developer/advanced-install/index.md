# 高级安装

## 源码安装

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
npm install
npm run build
npm link
```

## Docker 部署

```bash
docker pull openclaw/openclaw:latest
docker run -d -p 3000:3000 openclaw/openclaw
```

## 生产环境部署

参考 [部署指南](https://openclaw.com/docs/deployment)
