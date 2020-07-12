<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>来自远方的你{{num}}</p>
        <complete></complete>
    </div>
</template>

<script>
// @ is an alias to /src
// console.log(process)

import Complete from '../components/Complete'
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
        Complete
    },
    created() {
        this.$bus.$on('console', (e)=>{console.log(e); this.num = e.data})
    },
    methods: {
    }
}
</script>
