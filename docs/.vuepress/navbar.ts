// @ts-ignore
export default {
  '/': [
    {
      text: 'Video tutorial',
      link: '/tutorials/new',
    },
    {
      text: 'FAQs',
      link: '/faqs/space',
      children: [
        // { text: 'Product Market Issues', link: '/faqs/space#Space product market series problems' },
        // {text:'Why do you like Space',link:'/faqs/space#why-do-you-like-space'},
        // {text:'How do I access your order history',link:'/faqs/space#how-do-i-access-your-order-history'},
        // {text:'Stream Dock scene problem',link:'/faqs/streamDock#how-to-use-scene-module-correctly'},
        // {text:'Stream Dock version description',link:'/faqs/streamVersion#streamDock-Imprint'}
        {
          text: 'Space FAQs',
          link: '/faqs/space',
          children: [
            {text: 'Product Market Issues', link: '/faqs/space#Space product market series problems' },
            {text:'Why do you like Space Space',link:'/faqs/space#why-do-you-like-space'},
            {text:'How do I access your order history',link:'/faqs/space#how-do-i-access-your-order-history'},
          ],
        },
        {
          text: 'Software FAQs',
          children: [
            {text:'streamDock series problems',link:'/faqs/streamDock'},
          ],
        },
      ],
    },
    {
      text: 'Software Version History',
      children: [
        {text:'Stream Dock Version History',link:'/faqs/streamVersion'},
        {text:'Craft Version History',link:'/faqs/craftVersion'}
      ],
    },
    {
      text: 'Contact Us',
      link: 'https://bbs.key123.vip/',
    },
  ],
  '/zh/': [
    {
      text: '视频教程',
      link: '/zh/tutorials/new',
    },
    {
      text: '常见问题',
      link: '/zh/faqs/space',
      children: [
        // {text: '产品市场系列问题', link: '/zh/faqs/space#Space-产品市场系列问题' },
        // {text:'为什么你会喜欢 Space',link:'/zh/faqs/space#_1-为什么你会喜欢space'},
        // {text:'如何访问您的订单历史记录',link:'/zh/faqs/space#_2-如何访问您的订单历史记录'},
        // {text:'Stream Dock 系列问题',link:'/zh/faqs/streamDock#如何正确使用场景模块'},
        // {text:'Stream Dock 历史版本',link:'/zh/faqs/streamVersion#StreamDock 历史版本'},
        // {text:'Craft 历史版本',link:'/zh/faqs/craftVersion#Craft 历史版本'}
        {
          text: 'Space 常见问题',
          link: '/zh/faqs/space',
          children: [
            {text: '产品市场系列问题', link: '/zh/faqs/space#Space-产品市场系列问题' },
            {text:'为什么你会喜欢 Space',link:'/zh/faqs/space#_1-为什么你会喜欢space'},
            {text:'如何访问您的订单历史记录',link:'/zh/faqs/space#_2-如何访问您的订单历史记录'},
          ],
        },
        {
          text: '软件 常见问题',
          children: [
            {text:'Stream Dock 系列问题',link:'/zh/faqs/streamDock'},
          ],
        },
      ],
    },
    {
      text: '软件历史版本',
      children: [
        {text:'Stream Dock 历史版本',link:'/zh/faqs/streamVersion#StreamDock 历史版本'},
        {text:'Craft 历史版本',link:'/zh/faqs/craftVersion#Craft 历史版本'}
      ],
    },
    {
      text: '联系我们',
      link: 'https://bbs.key123.vip?lang=zh',
    },
  ],
};
