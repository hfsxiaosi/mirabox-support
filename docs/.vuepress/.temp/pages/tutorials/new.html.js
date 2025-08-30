import comp from "D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/new.html.vue"
const data = JSON.parse("{\"path\":\"/tutorials/new.html\",\"title\":\"Video Tutorials\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Video Tutorials\"},\"headers\":[{\"level\":2,\"title\":\"N3 Preset Scenes\",\"slug\":\"n3-preset-scenes\",\"link\":\"#n3-preset-scenes\",\"children\":[]},{\"level\":2,\"title\":\"N3 Music Player Control\",\"slug\":\"n3-music-player-control\",\"link\":\"#n3-music-player-control\",\"children\":[]}],\"git\":{\"updatedTime\":1756523571000,\"contributors\":[{\"name\":\"xiaosi\",\"email\":\"512282129@qq.com\",\"commits\":1}]},\"filePathRelative\":\"tutorials/new.md\"}")
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
