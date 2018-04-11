import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
let routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // 登录
  {
    path: '/login',
    component: resolve => require(['@/components/login.vue'], resolve)
  },
  {
    path: '/404',
    component: resolve => require(['@/components/404.vue'], resolve)
  },
  // 首页
  {
    path: '/home',
    // meta: { requireAuth:true},// 添加该字段，表示进入这个路由是需要登录的
    component: resolve => require(['@/components/common/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['@/components/views/home_page.vue'], resolve)
      }
    ]
  },
  // 工作台
  {
    path: '/workbench',
    component: resolve => require(['@/components/common/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['@/components/views/workbench/workbench.vue'], resolve),
        children: [
          {
            path: '/workbench_info',
            component: resolve => require(['@/components/views/workbench/right/right_home.vue'], resolve)
          },
          {
            path: '/eidt_student',
            component: resolve => require(['@/components/views/workbench/right/eidtStudent.vue'], resolve)
          }
        ]
      }
    ]
  },
  // 系统管理
  {
    path: '/system',
    component: resolve => require(['@/components/common/home.vue'], resolve),
    children: [
      {
        // 组织架构
        path: '/tissue',
        component: resolve => require(['@/components/views/system/tissue.vue'], resolve)
      },
      {
        // 组织架构
        path: '/seat',
        component: resolve => require(['@/components/views/system/seat.vue'], resolve)
      },
      {
        // 用户组管理
        path: '/user_group',
        component: resolve => require(['@/components/views/system/user_group.vue'], resolve)
      },
      {
        // 项目管理
        path: '/system_project',
        component: resolve => require(['@/components/views/system/system_project.vue'], resolve)
      },
      {
        // 项目管理 > 班型管理
        path: '/system_project_class',
        component: resolve => require(['@/components/views/system/system_project_class.vue'], resolve)
      },
      {
        // 权限管理
        path: '/power',
        component: resolve => require(['@/components/views/system/power.vue'], resolve)
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true } // 设置 404页面
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('access_token')) {
  window.localStorage.setItem('access_token', window.localStorage.getItem('access_token'))
}
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
// console.log(to.matched[0].meta.role);
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (localStorage.getItem('access_token')) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
   next()
  }
})
export default router
