import comp from "D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/announcement/text.html.vue"
const data = JSON.parse("{\"path\":\"/announcement/text.html\",\"title\":\"announcement\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"announcement\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"announcement/text.md\"}")
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