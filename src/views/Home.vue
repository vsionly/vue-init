<template>
    <div class="home">
        count : {{$store.state.module1.count}}<br>
        <button @click="editV()">改值</button><br>
        name : {{$store.state.module1.name}}
        <p></p>
        count : {{$store.state.module2.count}}<br>
        <button @click="editV()">改值</button><br>
        name : {{$store.state.module2.name}}
        <!-- getter- : {{$store.getters.name}} -->
        <!-- <img alt="Vue logo" src="../assets/img.jpg"> -->
        <p>canvas实现:</p>
        <canvas width="500px" height="400px" style="border: 1px solid #000;" ref="myCanvas"></canvas>


    </div>
</template>

<script>
// @ is an alias to /src
// console.log(process)

// import Complete from '../components/Complete'
// import HelloWorld from '../components/HelloWorld'
export default {
    name: 'home',
    provide() {
        return {
            num: 2
        }
    },
    data() {
        return {
            num: '33',
            name: '',
            newId: 3,
            list: [
                { id: 1, name: '李斯' },
                { id: 2, name: '吕不韦' },
                { id: 3, name: '嬴政' }
            ]
        }
    },
    created() {
    },
    mounted() {
        this.$nextTick(() => {
          const brush = this.$refs.myCanvas
          const ctx = brush.getContext("2d")
          ctx.strokeStyle = 'red'
          ctx.lineCap='round'
          ctx.lineWidth = 10
          // 初始角度,默认是在右边3点钟方向,旋转90度到12点方位
          let startangle = -90*Math.PI/180
          // 初始绘制结束角度
          let end = -80
          let endangle = end*Math.PI/180
          // 进度文字百分比
          let text = 0
          console.log(new Date())
          // 时间需要自己换算,这里我总用时是10秒,需要算的是计时器的时间间隔,总共360°,每秒旋转36°
          // 1s是1000毫秒,为了动画过渡效果顺畅,一般需要在1s内绘制几次,这里的时间拆分为36/n 1000/n.例: 若n为3次,则36/3,每次增加12°;1000/3,每333毫秒执行一次
          // 圆形进度条
          var timer = setInterval(() => {
            // 绘制完360度就停止
            if (startangle > 270*Math.PI/180) {
              console.log(new Date())
              clearInterval(timer)
            }
            ctx.beginPath()
            ctx.arc(200,200,100,startangle, endangle)
            ctx.stroke()
            startangle = endangle
            end += 12
            endangle = `${end}`*Math.PI/1800
          }, 33)

          // 百分比进度
          // 这里的时间计算: 百分比从0-99 执行100次,总用时10S,每秒10次,1000/10,每100毫秒执行一次
          var textTimer = setInterval(() => {
            // 到100%时停止
            if (text > 99) {
              console.log(new Date())
              clearInterval(textTimer)
            }
            // 清除上一次绘制的百分比,这里只清除了文字区域,外围的进度条区域没有清除
            // 你也可以把进度条和百分比的计时器合为一个,每次绘制全部清除,不过进度条结束角度和每次增加的角度需要改变
            ctx.clearRect(150,150,100,100)
            ctx.font = "40px Arial"
            ctx.fillText(`${text}%`, 170, 210)
            text++
          }, 100)
        })
    },
    methods: {
        editV() {
            //注意这里是unshift
            this.$store.commit('edit', 33)
        }
    }
}
</script>
