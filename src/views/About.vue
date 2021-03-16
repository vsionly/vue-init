<template>
    <div class="about-us">
        <div class="content mt50 mb150">
            <div class="c-desc">
                北京左医科技有限公司成立于2015年，其核心人员来自百度自然语言处理部、腾讯和国家卫生健康委，是一家专注于人工智能技术在医疗健康领域应用的高科技创新型企业，在打造知识图谱、知识推理、语义理解、智能交互等AI技术方面具有领先优势。
                <div class="c-divider"></div>
                北京左医科技有限公司打造的核心产品——左手医生是国内领先的全科机器人医生，致力于“携技术改变生活，用智能创变医疗”，以智能医疗科技助力“健康中国2030”战略规划。
                <div class="c-divider"></div>
                左手医生将深度学习、大数据处理、语义理解、医疗交互式对话等领先的AI技术与医学相融合，通过AI+数据，赋能医疗健康行业各个环节，实现智慧医疗升级，提升医疗行业的效率和体验。
                <div class="c-divider"></div>
                左手医生开放平台已覆盖医院35个科室中的6000多种常见病，提供智能自诊、智能问药、智能问答、在线咨询、智能导诊、智能预问诊、诊室听译机器人、用药管家、智能诊后随访管理、病历结构化等产品，以及零售连锁药店智慧服务、医院智慧服务、人工智能互联网医院等解决方案，可根据不同需求接入，构建了诊前、诊中、诊后一体化的智能诊疗流程，赋能医疗健康行业。
                <div class="c-divider"></div>
                左手医生开放平台能够为医疗机构、信息化厂商、医药企业、线下药店、家庭医生、智能硬件等提供多种组合式解决方案。
                <div class="c-divider"></div>
                左手医生开放平台作为底层技术，能提供病历结构化等数据结构化服务，嵌入到具有AI和大数据需求的服务模块中进行赋能。
                <div class="c-divider"></div>
                左手医生开放平台受到业内广泛好评，目前已服务超过300多家行业客户，每天服务人次近百万。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        msg: String
    },
    mounted() {
        document.body.className = 'scrolled'
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.about-us {
    padding-top: 570px;
    background: url('../assets/img/banner-us.png') no-repeat;
    background-position: center 0;
    background-size: 100% 569px;
}
.c-desc {
    font-size:18px;
    color: #333;
    line-height:25px;
}
.c-divider {
    height: 25px;
}
</style>
