<template>
    <div>
        <head-c></head-c>
        <router-view/>
        <foot-c></foot-c>
    </div>
</template>

<script>
// @ is an alias to /src
import HeadC from '../components/Head'
import FootC from '../components/Foot'

export default {
    name: 'Index', // 大驼峰
    components: {
        HeadC,
        FootC
    }
}
</script>
