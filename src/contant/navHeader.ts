// 
// url            为当前页面所在的url
// name           页面中文名
// jumpUrl        表示是否需要跳转打开新页面
// targetUrl      表示跳转的目标url
// menuItem       表示当前导航项内的子菜单项

export default {
  nav: [
    {
      url: '/',
      name: '首页',
      jumpUrl: false,
      targetUrl: '',
      menuItem: [],
    },
    {
      url: '/xbgk',
      name: '校办概况',
      jumpUrl: false,
      targetUrl: '',
      menuItem: [
        {
          url: '/xbjj',
          name: '校办简介',
          jumpUrl: false,
          targetUrl: '',
          menuItem: [],
        },
        {
          url: '/xbld',
          name: '校办领导',
          jumpUrl: false,
          targetUrl: '',
          menuItem: [],
        },
        {
          url: '/xbzz',
          name: '校办职责',
          jumpUrl: false,
          targetUrl: '',
          menuItem: [],
        },
      ],
    },
    {
      url: '/xxgk',
      name: '信息公开',
      jumpUrl: true,
      targetUrl: 'www.baidu.com',
      menuItem: [],
    },
    {
      url: '/bszn',
      name: '办事指南',
      jumpUrl: true,
      targetUrl: 'www.baidu.com',
      menuItem: [
        {
          url: '/yy',
          name: '用印',
          jumpUrl: false,
          targetUrl: '',
          menuItem: [],
        },
        {
          url: '/syfrzs',
          name: '事业法人证书',
          jumpUrl: false,
          targetUrl: '',
          menuItem: [],
        },
      ],
    },
    {
      url: '/dagl',
      name: '档案管理',
      jumpUrl: true,
      targetUrl: 'www.baidu.com',
      menuItem: [],
    },
    {
      url: '/gzzd',
      name: '规章制度',
      jumpUrl: false,
      targetUrl: '',
      menuItem: [],
    },
    {
      url: '/xxdsj',
      name: '学校大事记',
      jumpUrl: false,
      targetUrl: '',
      menuItem: [],
    },
  ]
}