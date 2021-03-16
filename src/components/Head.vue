<template>
    <header>
        <img src="../assets/img/logo.png"/>
        <nav class="fr">
            <ul>
                <li @mousedown="trackEvt('首页')"><router-link to="/">首页</router-link></li>
                <!-- <li class="active" @click="trackEvt('关于我们')">首页</li> -->
                <li><a href="https://open.zuoshouyisheng.com/" target="blank" @click="trackEvt('开放平台')">开放平台</a></li>
                <li><a href="https://app.zuoshouyisheng.com/" target="blank" @click="trackEvt('智能医生')">智能医生</a></li>
                <!-- <li><a href="./us" @click="trackEvt('关于我们')">关于我们</a></li> -->
                <li @mousedown="trackEvt('关于我们')"><router-link to="/about">关于我们</router-link></li>
                <!-- <router-link to="/foo">Go to Foo</router-link> -->
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Head',
    data() {
        return {
            home: '首页',
            about: '关于我们'
        }
    },
    mounted() {
        window.onscroll = () => {
            var scrollH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (!scrollH && this.$route.name !== 'about') document.body.className = ''
            if (document.body.className !== 'scrolled' && scrollH) document.body.className = 'scrolled'
        }
    },
    methods: {
        trackEvt (t) {
            if (this[this.$route.name] !== t) window._hmt.push(['_trackEvent', '点击次数', t]);
        }
    }
}
</script>

<style lang="stylus">
    header
        position fixed
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
        top 0
        // font-size 0
        z-index 100
        width 100%
        height 64px
        padding 0 80px
        padding-top 8px
        // background #000
        img
            display inline-block
            width 151px
            height 48px
        li
            position relative
            display inline-block
            line-height 48px
            font-size 16px
            color #2b324e
            font-weight 500
            &.active
                font-size 18px
                color #3155fc
                font-weight 600
            &.active:after
                content ''
                display block
                position absolute
                bottom 0
                left 0
                right 0
                height 3px
                border-radius 3px
                background #3155fc
        li + li
            margin-left 100px

    .scrolled header
        background: rgba(255, 255, 255, 0.85);
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);

</style>
