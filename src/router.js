import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// JSON.stringify(process.env)
console.log(process.env)
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/complete',
      name: 'complete',
      component: resolve => require(['@/components/Complete.vue'], resolve)
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve)
    }
  ]
})
