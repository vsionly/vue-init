import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store' // vuex
import '@/common/css/index.styl' // 全局样式

// 全局注册icon组件
import SvgIcon from '@/components/SvgIcon.vue'
Vue.component('SvgIcon', SvgIcon)
import '@/assets/icons/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
