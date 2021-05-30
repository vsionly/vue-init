import { getAppStats, getYwzTrack } from '@/api'

export default {
    name: 'skillLog',
    data() {
        return {}
    },
    created() {
        this.appid = this.$route.query.app_id
    },
    components: {
        DateSelector
    },
    methods: {}
}