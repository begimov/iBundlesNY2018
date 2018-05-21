import Payment from '@/components/base/Payment.vue'
import Ytplayer from '@/components/base/Ytplayer.vue'
import Grform from '@/components/base/Grform.vue'
import Countdown from '@/components/base/Countdown.vue'
import Magnet from '@/components/base/Magnet.vue'

export default {
    name: 'Home',
    components: {
        Payment,
        Ytplayer,
        Grform,
        Countdown,
        Magnet
    },
    data() {
        return {
            magnet: false
        }
    },
    methods: {
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
        deadline() {
            const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
            let date = (new Date())
            date.setHours(date.getHours() + 5)
            return months[date.getMonth()] + ' ' + date.getDate() + ', 2018 ' + date.getHours() + ':' + date.getMinutes() + ':00'
        },
        mouseLeave(e) {
            console.log(e)
            if (e.relatedTarget == null) {
                this.magnet = true
            }
        }
    },
    mounted() {
        //
    }
}