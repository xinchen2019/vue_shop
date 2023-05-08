import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login.vue')
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Welcome.vue')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/User.vue')

const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue')


Vue.use(VueRouter)

const routes = [
  // 重定向路由
  { path: '/', redirect: '/login' },
  // 当用户访问 /login 这个地址时，通过 component 属性指定要展示的组件 Login
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path: '/home', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles }
      // { path: '/categories', component: Cate },
      // { path: '/params', component: Params },
      // { path: '/goods', component: GoodsList },
      // { path: '/goods/add', component: Add },
      // { path: '/orders', component: Order },
      // { path: '/reports', component: Report }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
