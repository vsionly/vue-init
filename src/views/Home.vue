<template>
    <div class="home">
        <svg-icon name="check"></svg-icon>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <el-select v-model="canShare">
            <el-option
              :key="2"
              :label="3"
              :value="4">
            </el-option>
        </el-select>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'

export default {
    name: 'Home',
    data() {
        return {
            canShare: 0,
        }
    },
    components: {
        HelloWorld
    }
}
</script>
<style type="text/css" lang="stylus">
    .home
        background $theme
</style>