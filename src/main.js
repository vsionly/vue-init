import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
import {
    Input,
    Select,
    Autocomplete,
    Option
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Autocomplete)
Vue.config.productionTip = false

class Bus{
    constructor(){
        this.evt = {}
    }
    $on(name, fn) {
        this.evt[name] = fn
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
