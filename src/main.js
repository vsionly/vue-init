import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
import '@/common/css/index.styl'

Vue.config.productionTip = false

class Bus{
    constructor(){
        this.evt = {}
    }
    $on(name, fn) {
        if (!this.evt[name]) {
            this.evt[name] = []
        }
        this.evt[name].push(fn)

    }
    $emit(name, arg) {
        // this.evt[name](arg)
        this.evt[name].forEach(v => {
            console.log(v, 1111111111)
        })
    }
}

// Vue.prototype.$bus = new Vue()
Vue.prototype.$bus = new Bus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
