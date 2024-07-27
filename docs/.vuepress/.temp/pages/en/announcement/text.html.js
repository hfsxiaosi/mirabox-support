import comp from "D:/WORK/mirabox/support/docs/.vuepress/.temp/pages/en/announcement/text.html.vue"
const data = JSON.parse("{\"path\":\"/en/announcement/text.html\",\"title\":\"公告\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"公告\",\"description\":\"灯光页面的描述\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"en/announcement/text.md\"}")
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
