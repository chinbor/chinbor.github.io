import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'Chinbor\'s site',
  description: 'Enjoy life, and do what you want to do.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'chinbor',
    authorAvatar: '/avatar.png',
    docsRepo: 'https://github.com/chinbor/chinbor.github.io',
    docsBranch: 'gh-pages-source',
    autoAddCategoryToNavbar: true,
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'uNOBTOqW3vsJCgGYONGmUkBg-gzGzoHsz',
        appKey: 't9IapElpemuH1XP7RGHP2XTD',
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        recordIP: true,
        hideComments: true // 全局隐藏评论
      },
    },
  }),
  lang: 'zh-CN',
})
