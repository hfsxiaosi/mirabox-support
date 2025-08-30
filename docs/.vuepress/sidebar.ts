// @ts-ignore
export default {
  '/faqs/': [
    {
      text: 'Space FAQs',
      collapsable: true,
      children: [
          'space.md',
      ],
    },
    {
      text: 'Software FAQs',
      children: [
        'streamDock.md', 
      ],
    },
    {
      text: 'Software Version History',
      children: [
        'streamVersion.md', 
        'craftVersion.md', 
      ],
    },
  ],
  '/tutorials/': [
    {
      text: 'Video tutorial',
      children: [
        'new.md',
        'basic.md',
        'scene.md',
        'Toolbox.md',
        'macrokey.md',
        'plugin.md'
      ],
    },
  ],
  // '/announcement/': [
  //   {
  //     text: '公告',
  //     children: [
  //       'text.md',
  //     ],
  //   },
  // ],
  '/zh/faqs/': [
      {
        text: 'Space 常见问题',
        children: [
          'space.md',
        ],
      },
      {
        text: '软件 常见问题',
        children: [
          'streamDock.md', 
        ],
      },
      {
        text: '软件历史版本',
        children: [
          'streamVersion.md', 
          'craftVersion.md', 
        ],
      },
  ],
  // '/zh/announcement/': [
  //   {
  //     text: 'Announcements',
  //     children: [
  //       'text.md',
  //     ],
  //   },
  // ],
  '/zh/tutorials/': [
    {
      text: '视频教程',
      children: [
        'new.md',
        'basic.md',
        'scene.md',
        'Toolbox.md',
        'macrokey.md',
        'plugin.md'
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

