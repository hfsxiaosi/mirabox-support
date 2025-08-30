import comp from "D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/tutorials.html.vue"
const data = JSON.parse("{\"path\":\"/tutorials/tutorials.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"tutorials/tutorials.md\"}")
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
