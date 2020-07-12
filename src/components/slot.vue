<!--
  * 父组件同名v-slot 只会显示最后一个 子组件插槽名可以重复 都会显示出来
  * 具名插槽 是指 父组件中 指定了 v-slot:a 的内容 会渲染到子组件对应的 name="a" 上
 -->
<!-- 父组件 -->
<div class="home">
    <HelloWorld>
        <template v-slot:title></template> <!-- 如果不设置插槽的内容 会展示子组件中 name="title" 的内容 -->
        <span>我是默认值</span> <!-- 所有不指定 v-slot 的内容都放到 defaul(v-slot:default) 插槽中 -->

        <!--
            作用域插槽 slotData 接受子组件 对应插槽传过来的数据  slotData = {data: { name: '李四', gender: '男', age: 5}}
        -->
        <!--
            默认插槽绑定数据时 v-slot:default="slotProps" 可以简写成 v-slot="slotData"
            当默认插槽用于组件上时 不能跟具名插槽混用 不能互相包含
        -->
        <template v-slot:foot="slotData">
            <i>{{slotData}}</i> <!-- {data: { name: '李四', gender: '男', age: 5}} -->
            <p>更上面Copyright 2016 Evan You</p>
        </template>

        <!--
            解构 v-slot:one="{data}" { name: '李四', gender: '男', age: 5}
            重命名 v-slot:one="{data: user}" 用 user 替代 data
            默认值 v-slot:one="{data={name: '王五'}}
        -->
        <template v-slot:one="{data}">
            <i>{{data}}</i>
            <p>更上面Copyright 2016 Evan You</p>
        </template>
        <span>我也是默认值</span>
        <template v-slot:top="slotData">
            <p>王者</p>
        </template>
        <!--
            动态插槽 v-slot:[slotName]
            简写 v-slot:header #header 注意 默认插槽简写 #default
        -->
    </HelloWorld>
</div>

<!-- 子组件 HelloWorld -->
<div class="hello" style="background: #0f0;">
    <slot name="title">我是默认的标题 父组件有标题 我会被替换</slot>
    <slot name="top" v-bind:oj="oj">pppppppppp</slot>
    <h4>子组件2</h4>
    <slot name="foot" v-bind:data="user"></slot>
    <slot name="one" v-bind:data="user"></slot>
    <!--
        作用域插槽 把子组件的数据传给父组件使用 这个可以看做
        {data: { name: '李四', gender: '男', age: 5}}
    -->
    <slot>111111111</slot> <!-- 默认 name=default -->
    <slot>22222222</slot> <!-- 默认 name=default -->
    <h1>{33333333</h1>
    <button @click="test()">传播</button>
    </ul>
</div>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            user: {
                name: '李四',
                gender: '男',
                age: 5
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
