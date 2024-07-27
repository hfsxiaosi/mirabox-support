export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/announcement/text.html", { loader: () => import(/* webpackChunkName: "announcement_text.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/announcement/text.html.js"), meta: {"title":"announcement"} }],
  ["/faqs/dockingStation.html", { loader: () => import(/* webpackChunkName: "faqs_dockingStation.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/dockingStation.html.js"), meta: {"title":"dockingStation 系列问题"} }],
  ["/faqs/keyBoard.html", { loader: () => import(/* webpackChunkName: "faqs_keyBoard.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/keyBoard.html.js"), meta: {"title":"键盘系列问题"} }],
  ["/faqs/lights.html", { loader: () => import(/* webpackChunkName: "faqs_lights.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/lights.html.js"), meta: {"title":"灯光系列问题"} }],
  ["/faqs/space.html", { loader: () => import(/* webpackChunkName: "faqs_space.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/space.html.js"), meta: {"title":"Product market series problems"} }],
  ["/faqs/streamDock.html", { loader: () => import(/* webpackChunkName: "faqs_streamDock.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamDock.html.js"), meta: {"title":"streamDock series problems"} }],
  ["/faqs/streamVersion.html", { loader: () => import(/* webpackChunkName: "faqs_streamVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamVersion.html.js"), meta: {"title":"streamDock Imprint"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":""} }],
  ["/zh/announcement/text.html", { loader: () => import(/* webpackChunkName: "zh_announcement_text.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/announcement/text.html.js"), meta: {"title":"公告"} }],
  ["/zh/faqs/dockingStation.html", { loader: () => import(/* webpackChunkName: "zh_faqs_dockingStation.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/dockingStation.html.js"), meta: {"title":"dockingStation 系列问题"} }],
  ["/zh/faqs/keyBoard.html", { loader: () => import(/* webpackChunkName: "zh_faqs_keyBoard.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/keyBoard.html.js"), meta: {"title":"键盘系列问题"} }],
  ["/zh/faqs/lights.html", { loader: () => import(/* webpackChunkName: "zh_faqs_lights.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/lights.html.js"), meta: {"title":"灯光系列问题"} }],
  ["/zh/faqs/space.html", { loader: () => import(/* webpackChunkName: "zh_faqs_space.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/space.html.js"), meta: {"title":"Space 产品市场系列问题"} }],
  ["/zh/faqs/streamDock.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamDock.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamDock.html.js"), meta: {"title":"streamDock系列问题"} }],
  ["/zh/faqs/streamVersion.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamVersion.html.js"), meta: {"title":"streamDock 版本说明"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
