// @ts-ignore
export default {
  '/faqs/': [
    {
      text: 'FAQs',
      collapsable: true,
      children: [
        'space.md', 
        'streamDock.md', 
        'streamVersion.md',
        'lights.md', 
        'keyBoard.md', 
        'dockingStation.md', 
      ],
    },
  ],
  '/announcement/': [
    {
      text: '公告',
      children: [
        'text.md',
      ],
    },
  ],
  '/zh/faqs/': [
    {
      text: '常见问题',
      children: [
        'space.md',
        'streamDock.md', 
        'streamVersion.md',
        'lights.md', 
        'keyBoard.md', 
        'dockingStation.md', 
      ],
    },
  ],
  '/zh/announcement/': [
    {
      text: 'Announcements',
      children: [
        'text.md',
      ],
    },
  ],
}


// export default [
//   {
//     text: '常见问题',
//     path: '/guide/',
//     children: [
//       '/guide/faqs/space',
//       '/guide/faqs/keyBoard',
//       '/guide/faqs/streamDock',
//       '/guide/faqs/lights',
//       '/guide/faqs/dockingStation',
//     ]
//   },
//   {
//     text:"公告",
//     link:'/announcement/text',
//   },
//   {
//     text: 'github',
//     link: 'https://github.com',
//     children: [],
//   },
// ]




// export default {
//   '/faqs/': [
//     {
//       text: '常见问题',
//       // 相对路径会自动追加子路径前缀
//       children: [
//         '/faqs/space.md', // 解析为 /guide/introduction.md
//         '/faqs/streamDock.md', 
//         '/faqs/lights.md', // 解析为 /guide/getting-started.md
//         '/faqs/keyBoard.md', 
//         '/faqs/dockingStation.md', 
//       ],
//     },
//   ],
//   '/announcement/': [
//     {
//       text: '公告',
//       // 相对路径会自动追加子路径前缀
//       children: [
//         'text.md', // 解析为 /guide/introduction.md
//       ],
//     },
//   ],
//   // 默认根据文章标题渲染侧边栏
//   '/': 'auto'
// }

