import comp from "D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/new.html.vue"
const data = JSON.parse("{\"path\":\"/zh/tutorials/new.html\",\"title\":\"视频教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"视频教程\"},\"headers\":[{\"level\":2,\"title\":\"N3预设场景\",\"slug\":\"n3预设场景\",\"link\":\"#n3预设场景\",\"children\":[]},{\"level\":2,\"title\":\"N3控制音乐播放器\",\"slug\":\"n3控制音乐播放器\",\"link\":\"#n3控制音乐播放器\",\"children\":[]}],\"git\":{\"updatedTime\":1756523571000,\"contributors\":[{\"name\":\"xiaosi\",\"email\":\"512282129@qq.com\",\"commits\":1}]},\"filePathRelative\":\"zh/tutorials/new.md\"}")
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
