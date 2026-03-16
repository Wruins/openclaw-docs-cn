import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  lang: 'zh-CN',
  title: 'OpenClaw 中文文档',
  description: 'OpenClaw 全中文使用说明 - 从入门到精通',
  base: '/openclaw-docs-cn/',
  
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', link: '/beginner/' },
      { text: '开发者文档', link: '/developer/' },
      { text: '官方文档', link: 'https://openclaw.com' }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/beginner/': [
        {
          text: '新手入门',
          items: [
            { text: '简介', link: '/beginner/' },
            {
              text: '安装指南',
              items: [
                { text: 'Windows', link: '/beginner/install/windows' },
                { text: 'macOS', link: '/beginner/install/macos' }
              ]
            },
            {
              text: '配置',
              items: [
                { text: '模型配置', link: '/beginner/config/models' },
                { text: '飞书接入', link: '/beginner/config/feishu' },
                { text: '企业微信', link: '/beginner/config/wecom' }
              ]
            },
            { text: '卸载', link: '/beginner/uninstall' },
            {
              text: '技能',
              items: [
                { text: '热门技能', link: '/beginner/skills/popular' }
              ]
            }
          ]
        }
      ],
      '/developer/': [
        {
          text: '开发者文档',
          items: [
            { text: '简介', link: '/developer/' },
            { text: '高级安装', link: '/developer/advanced-install/' },
            { text: '配置详解', link: '/developer/configuration/' },
            { text: '插件开发', link: '/developer/plugins/' },
            { text: '本地模型', link: '/developer/local-models/' },
            { text: '故障排除', link: '/developer/troubleshooting/' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openclaw' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 OpenClaw'
    },
    
    // 搜索配置
    search: {
      provider: 'local'
    }
  }
})
