<template>
    <div class="hello" style="background: #0f0;">
        <slot name="top" v-bind:oj="oj">pppppppppp</slot>
        <slot name="foot" v-bind:data="user"></slot>
        <slot name="foot" v-bind:data="oj"></slot>
        <slot name="foot"></slot>
        <slot>111111</slot>
        <slot>222222</slot>
        <button @click="test()">传播</button>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            user: {
                name: '李四',
                gender: '男',
                age: 22
            },
            oj: {
                aa: 111
            }
        }
    },
    created() {

    },
    methods: {
        test() {
            this.$bus.$emit('ee')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
    margin 40px 0 0

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
</style>
