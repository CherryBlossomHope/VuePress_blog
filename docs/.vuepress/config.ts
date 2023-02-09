import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Shiina Mashiro',
    base: '/wtt.github.io/',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: '/wtt.github.io/img/logo.png' }]],
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/CherryBlossomHope'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/javaScript/': [
                {
                    text: 'JavaScript',
                    children: ['/javaScript/ES13.md', '/javaScript/getting-started.md'],
                },
            ],
        },
    })
})
