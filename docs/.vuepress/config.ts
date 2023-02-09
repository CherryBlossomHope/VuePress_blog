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
        sidebar: [
            {
                text: 'JavaScript',
                children: [
                    {
                        text: '深拷贝',
                        link: '/javaScript/deepCopy.md',
                    },
                    {
                        text: 'ES13',
                        link: '/javaScript/ES13.md',
                    },
                    {
                        text: 'JS算法',
                        link: '/javaScript/Algorithm.md',
                    },
                ],
            },
            {
                text: 'Vue3',
                children: [
                    {
                        text: 'Vue3',
                        link: '/Vue3/Vue3.md',
                    },
                ],
            },
            {
                text: 'TypeScript',
                children: [
                    {
                        text: 'Event事件类型',
                        link: '/typeScript/eventType.md',
                    },
                ],
            },
        ],
    })
})
