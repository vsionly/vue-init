import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import store from './store'

// 全局注册icon组件
import SvgIcon from 'components/SvgIcon.vue'
Vue.component('SvgIcon', SvgIcon)
import 'common/js/icon.js'

// element ui引入设置
import { Menu, MenuItem, Submenu, Checkbox, CheckboxGroup, Cascader, Select, Option, Pagination, Table, TableColumn, Dialog, Message, DatePicker, Autocomplete, Switch, Loading, Tooltip, Popover } from 'element-ui'
Vue.use(Menu).use(MenuItem).use(Submenu).use(Checkbox).use(CheckboxGroup).use(Cascader).use(Select).use(Option).use(Pagination).use(Table).use(TableColumn).use(Dialog).use(DatePicker).use(Autocomplete).use(Switch).use(Loading.directive).use(Tooltip).use(Popover)
Vue.prototype.$message = Message
Vue.prototype.$ELEMENT = { size: 'medium' }

import  * as http from './http.js'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')
