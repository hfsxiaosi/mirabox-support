export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/announcement/text.html", { loader: () => import(/* webpackChunkName: "announcement_text.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/announcement/text.html.js"), meta: {"title":"announcement"} }],
  ["/faqs/craftVersion.html", { loader: () => import(/* webpackChunkName: "faqs_craftVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/craftVersion.html.js"), meta: {"title":"Craft Download"} }],
  ["/faqs/dockingStation.html", { loader: () => import(/* webpackChunkName: "faqs_dockingStation.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/dockingStation.html.js"), meta: {"title":"dockingStation 系列问题"} }],
  ["/faqs/keyBoard.html", { loader: () => import(/* webpackChunkName: "faqs_keyBoard.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/keyBoard.html.js"), meta: {"title":"键盘系列问题"} }],
  ["/faqs/lights.html", { loader: () => import(/* webpackChunkName: "faqs_lights.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/lights.html.js"), meta: {"title":"灯光系列问题"} }],
  ["/faqs/space.html", { loader: () => import(/* webpackChunkName: "faqs_space.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/space.html.js"), meta: {"title":"Product market series problems"} }],
  ["/faqs/streamDock.html", { loader: () => import(/* webpackChunkName: "faqs_streamDock.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamDock.html.js"), meta: {"title":"streamDock series problems"} }],
  ["/faqs/streamDock_1.html", { loader: () => import(/* webpackChunkName: "faqs_streamDock_1.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamDock_1.html.js"), meta: {"title":"streamDock series problems"} }],
  ["/faqs/streamVersion.html", { loader: () => import(/* webpackChunkName: "faqs_streamVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamVersion.html.js"), meta: {"title":"StreamDock Download"} }],
  ["/faqs/streamVersion_1.html", { loader: () => import(/* webpackChunkName: "faqs_streamVersion_1.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/faqs/streamVersion_1.html.js"), meta: {"title":"streamDock Imprint"} }],
  ["/tutorials/basic.html", { loader: () => import(/* webpackChunkName: "tutorials_basic.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/basic.html.js"), meta: {"title":"Basic Function"} }],
  ["/tutorials/macrokey.html", { loader: () => import(/* webpackChunkName: "tutorials_macrokey.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/macrokey.html.js"), meta: {"title":"Macro Keys / Workflow"} }],
  ["/tutorials/new.html", { loader: () => import(/* webpackChunkName: "tutorials_new.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/new.html.js"), meta: {"title":"Video Tutorials"} }],
  ["/tutorials/plugin.html", { loader: () => import(/* webpackChunkName: "tutorials_plugin.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/plugin.html.js"), meta: {"title":"Plugins"} }],
  ["/tutorials/scene.html", { loader: () => import(/* webpackChunkName: "tutorials_scene.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/scene.html.js"), meta: {"title":"Scene Setting"} }],
  ["/tutorials/Toolbox.html", { loader: () => import(/* webpackChunkName: "tutorials_Toolbox.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/tutorials/Toolbox.html.js"), meta: {"title":"Toolbox"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":""} }],
  ["/zh/announcement/text.html", { loader: () => import(/* webpackChunkName: "zh_announcement_text.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/announcement/text.html.js"), meta: {"title":"公告"} }],
  ["/zh/faqs/craftVersion.html", { loader: () => import(/* webpackChunkName: "zh_faqs_craftVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/craftVersion.html.js"), meta: {"title":"Craft 下载"} }],
  ["/zh/faqs/dockingStation.html", { loader: () => import(/* webpackChunkName: "zh_faqs_dockingStation.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/dockingStation.html.js"), meta: {"title":"dockingStation 系列问题"} }],
  ["/zh/faqs/keyBoard.html", { loader: () => import(/* webpackChunkName: "zh_faqs_keyBoard.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/keyBoard.html.js"), meta: {"title":"键盘系列问题"} }],
  ["/zh/faqs/lights.html", { loader: () => import(/* webpackChunkName: "zh_faqs_lights.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/lights.html.js"), meta: {"title":"灯光系列问题"} }],
  ["/zh/faqs/space.html", { loader: () => import(/* webpackChunkName: "zh_faqs_space.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/space.html.js"), meta: {"title":"Space 产品市场系列问题"} }],
  ["/zh/faqs/streamDock.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamDock.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamDock.html.js"), meta: {"title":"streamDock系列问题"} }],
  ["/zh/faqs/streamDock_1.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamDock_1.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamDock_1.html.js"), meta: {"title":"streamDock系列问题"} }],
  ["/zh/faqs/streamVersion.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamVersion.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamVersion.html.js"), meta: {"title":"StreamDock Download"} }],
  ["/zh/faqs/streamVersion_1.html", { loader: () => import(/* webpackChunkName: "zh_faqs_streamVersion_1.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/faqs/streamVersion_1.html.js"), meta: {"title":"streamDock 版本说明"} }],
  ["/zh/tutorials/basic.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_basic.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/basic.html.js"), meta: {"title":"基础功能"} }],
  ["/zh/tutorials/macrokey.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_macrokey.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/macrokey.html.js"), meta: {"title":"宏按键/操作流"} }],
  ["/zh/tutorials/new.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_new.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/new.html.js"), meta: {"title":"视频教程"} }],
  ["/zh/tutorials/plugin.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_plugin.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/plugin.html.js"), meta: {"title":"插件"} }],
  ["/zh/tutorials/scene.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_scene.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/scene.html.js"), meta: {"title":"场景设置"} }],
  ["/zh/tutorials/Toolbox.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_Toolbox.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/Toolbox.html.js"), meta: {"title":"工具箱"} }],
  ["/zh/tutorials/tutorials.html", { loader: () => import(/* webpackChunkName: "zh_tutorials_tutorials.html" */"D:/WORK/mirabox/mirabox-support/docs/.vuepress/.temp/pages/zh/tutorials/tutorials.html.js"), meta: {"title":""} }],
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
