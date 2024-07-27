import comp from "D:/WORK/mirabox/support/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://cdn1.key123.vip/marketplace/website/video/MarketPlace-logo-blue.webm\",\"heroText\":\"Mirabox 帮助文档\",\"tagline\":\"我们是来帮助你的\",\"actionText\":\"开始 →\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"简单\",\"details\":\"使用简单的配置和内容。\"},{\"title\":\"灵活\",\"details\":\"可自定义的主题和插件。\"},{\"title\":\"强大\",\"details\":\"基于 Vue.js，享受其生态系统的强大能力。\"}],\"footer\":\"由我自定义的页脚内容\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"en/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
