<template>
    <footer>
        <div>
            <div class="flex">
                <div class="column1">
                    <img class="logo mb46" src="../assets/img/foot/logo.png" alt="">
                    <h4 class="mb12">北京左医科技有限公司</h4>
                    <span>
                        地址：北京市西城区西环广场A座2层
                    </span>
                </div>
                <div class="column-center">
                    <div class="item">
                        <div class="title">
                            <img class="mr20" width="25" height="25" src="../assets/img/foot/quanwei.png" alt="">
                            <p class="h4">权威认证</p>
                        </div>
                        <div class="inline">
                            <div class="mb18">
                                <img class="except-img" src="../assets/img/foot/djcp.png" alt="">
                                <span>公安部网络安全等级保护</span>
                            </div>
                            <div>
                                <img class="normal-img" src="../assets/img/foot/ISO27017.png" alt="">
                                <span>ISO27017云服务信息安全管理体系</span>
                            </div>
                        </div>
                        <div class="inline">
                            <div class="mb18">
                                <img class="normal-img" src="../assets/img/foot/ISO27001.png" alt="">
                                <span>ISO27001信息安全管理体系</span>
                            </div>
                            <div>
                                <img class="normal-img" src="../assets/img/foot/ISO27018.png" alt="">
                                <span>ISO27018云个人可识别信息信息安全管理体系</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column-last">
                    <div class="title">
                        <img class="mr20" width="25" height="25" src="../assets/img/foot/lianxi.png" alt="">
                        <p class="h4">联系我们</p>
                    </div>
                    <div class="mb18">
                        <img class="contact-img" src="../assets/img/foot/phone.png" alt="">
                        <span>电话：15910789652</span>
                    </div>
                    <div>
                        <img class="contact-img" src="../assets/img/foot/email.png" alt="">
                        <span>邮箱：contact_us@zuoshouyisheng.com</span>
                    </div>
                </div>
            </div>
            <div class="center mt50">
                <span class="copyright">
                    Copyright All Rights Reserved.
                    <a href="http://www.beian.miit.gov.cn">京ICP备15045396号-1</a></span><span>互联网药品信息服务资格证编号(京)-经营性-2018-0005</span>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="stylus">
    footer
        padding 45px 60px 60px
        background-color #0B062E
        font-size 14px
        color #fff
        & > div
            margin 0 auto
            max-width 1400px
        .h4
            color #fff
        .title
            line-height 46px
            margin-bottom 25px
        span
            color #B5B3BF

        img
            margin-right 10px
        .logo
            width 150px
            height 46px
        .except-img
            width 36px
            height 26px
        .normal-img
            width 40px
            height 40px
        .column1
            width 250px
        .column-center
            text-align center
            flex 1
            .item
                display inline-block
                text-align left
            .inline
                line-height 40px
            .inline:nth-child(2)
                margin-right 50px
    .contact-img
        width 22px
        height 22px
    .column-last
        width 315px
        line-height 40px
    .copyright
        border-right 1px solid #fff
        padding-right 25px
        margin-right 25px
</style>
