import comp from "D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/keyBoard.html.vue"
const data = JSON.parse("{\"path\":\"/faqs/keyBoard.html\",\"title\":\"键盘系列问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"键盘系列问题\",\"description\":\"键盘页面的描述\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"faqs/keyBoard.md\"}")
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
