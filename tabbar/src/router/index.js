import Vue from "vue"
import VueRouter from "vue-router"

/*导入各个组件*/
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const Shopcart = () => import("../views/shopcart/Shopcart")
//1.安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes=[/*配置路由：即组件和路径的对应关系*/
  {/*默认首次进入显示首页*/
    path:'',
    redirect:"/home"
  },
  {
    path: "/home",
    component:Home
  },
  {
    path: "/category",
    component:Category
  },
  {
    path: "/shopcart",
    component:Shopcart
  },
  {
    path: "/profile",
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode:'history'/*将路径修改为history迷失。默认为hash模式即有#*/
})
//3.导出router
export default router
