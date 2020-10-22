import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  // 主页路由
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'form', requireAuth: true }
    }]
  },

  // 登录
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index')
  },

  // 注册
  {
    path: '/register',
    hidden: true,
    component: () => import('@/views/register/index')
  },

  // 租房管理
  {
    path: '/houseList',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'HouseList',
        component: () => import('@/views/houseList/index'),
        meta: { title: '租房管理', icon: 'form' }
      }
    ]
  },

  //用户管理
  {
    path: '/userList',
    component: Layout,
    name: 'UserList',
    meta: { title: '用户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import('@/views/userList/userInfo/index'),
        meta: { title: '用户信息管理', icon: 'el-icon-tickets' }
      },
      {
        path: 'userPower',
        name: 'UserPower',
        component: () => import('@/views/userList/userPower/index'),
        meta: { title: '用户权限管理', icon: 'el-icon-view' }
      }
    ]
  },

  //账单管理
  {
    path: '/collectList',
    component: Layout,
    name: 'CollectList',
    meta: { title: '收款管理', icon: 'el-icon-coin' },
    children: [
      {
        path: 'billCollect',
        name: 'BillCollecy',
        component: () => import('@/views/collectList/billCollect/index'),
        meta: { title: '账单管理', icon: 'el-icon-wallet' }
      },
      {
        path: 'receiptCollect',
        name: 'ReceiptCollect',
        component: () => import('@/views/collectList/receiptCollect/index'),
        meta: { title: '收款单管理', icon: 'el-icon-bank-card' }
      }
    ]
  },

  {
    path: '/other',
    component: Layout,
    redirect: '/other',
    children: [{
      path: 'other',
      name: 'Other',
      component: () => import('@/views/other/index'),
      meta: { title: '其他', icon: 'form', requireAuth: true }
    }]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
