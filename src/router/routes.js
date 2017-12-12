const routes = [
  {
    path: '/',
    redirect: '/home',
    component: resolve => {
      require(['@/pages/Layout'], resolve)
    },
    children: [
      {
        path: 'home',
        component: resolve => {
          require(['@/pages/Home'], resolve)
        }
      }
    ]
  }
]

export default routes