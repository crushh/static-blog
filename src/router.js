import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'show',
      component: ()=>import('./components/showBlogs')
    },
    {
      path:'/add',
      name:'add',
      component:()=>import('./components/addBlog')
    },{
    path:'/:id',
    name:'',
    component:()=>import('./components/singleBlog')
  }
  ]
})
