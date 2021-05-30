import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        module1: {
            state: {
                count: 1,
                name: '小红'
            },
            mutations: {
                edit(state, v) {
                    state.count = v
                }
            },
            getters:{
                count(state){
                    return "计数:"+state.count
                },
                name(state,getters){
                    return getters.count+'名字:'+state.name
                }
            },
            actions: {
                edit(state, v) {
                    console.log(v, 333)
                    setTimeout(()=>{
                        state.count = v
                    },2000)
                }
            }
        },
        module2: {
            state: {
                count: 2,
                name: '小明'
            },
            mutations: {
                edit(state, v) {
                    state.count = v
                }
            }
        }
    }
})
