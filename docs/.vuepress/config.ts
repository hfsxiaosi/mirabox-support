import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
// import { getDirname} from 'vuepress/utils'
import {searchPlugin} from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import navbar from './navbar'
import sidebar from "./sidebar";


// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'Help Mirabox',
  bundler: viteBundler(),  //使用vite作为打包工具
  theme: defaultTheme({
    logo: 'https://cdn1.key123.vip/marketplace/website/image/LOGO.png',
    sidebar,
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar: sidebar['/'],
        navbar: navbar['/'],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        sidebar: sidebar['/zh/'],
        navbar: navbar['/zh/'],
      },
    },
  }),
  alias: {
    // 定义组件的别名，方便引入自定义组件
    // '@theme/Header.vue': path.resolve(__dirname, './components/Header.vue'),
    // '@theme/Footer.vue': path.resolve(__dirname, './components/Footer.vue'),
  },
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  plugins: [
    // searchPlugin({
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //     '/zh/': {
    //       placeholder: '搜索',
    //     },
    //   },
    //   maxSuggestions: 100,
    //   hotKeys: ['s', '/'],
    // }),
    // docsearchPlugin({
    //   appId: '你的应用ID',
    //   apiKey: '你的API密钥',
    //   indexName: '你的索引名称',
    //   locales: {
    //     '/': {
    //       placeholder: 'Search Documentation',
    //     },
    //     '/zh/': {
    //       placeholder: '搜索文档',
    //     },
    //   },
    // })
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Mirabox help documentation',
      description: 'Mirabox help documentation',
    },
    '/zh/': {
      lang: 'zh-CN',
      
      title: 'Mirabox 帮助文档',
      description: 'Mirabox 帮助文档',
    },
  },
});