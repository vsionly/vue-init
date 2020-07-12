<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>来自远方的你{{num}}</p>
        <complete></complete>
        <HelloWorld>
            <div>333</div>
            <template v-slot:foot="data">
                <i>{{data}}</i>
                <p>11111111111111</p>
            </template>
            <div>1111</div>
            <template v-slot:top>
                <p>王者</p>
            </template>
            <div>2222</div>
        </HelloWorld>
    </div>
</template>

<script>
// @ is an alias to /src
// console.log(process)

import Complete from '../components/Complete'
import HelloWorld from '../components/HelloWorld'
export default {
    name: 'home',
    provide() {
        return {
            num: 2
        }
    },
    data() {
        return {
            num: '33'
        }
    },
    components: {
        Complete,
        HelloWorld
    },
    created() {
    },
    methods: {
    }
}
</script>
