// 登录
import Login from '@/pages/Login'

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default routes
