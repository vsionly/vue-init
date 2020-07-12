<template>
    <div style="background: #f00;">
        <h4>子组件1</h4>
        <button @click="test()">传播</button>
    </div>
</template>
<script>

    export default {
        name: '',
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                  // Some Swiper option/callback...
                },
                loaded: false
            };
        },
        computed: {
            swiper() {
                // return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper.slideTo)
            // this.swiper.slideTo(3, 1000, false)
        },
        created() {
            this.$bus.$on('ee', (e)=>{console.log(e); this.num = e.data})
        },
        methods: {
            test() {
            }
        }
    };
</script>