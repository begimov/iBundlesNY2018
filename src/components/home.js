import Payment from '@/components/base/Payment.vue'
import Ytplayer from '@/components/base/Ytplayer.vue'
import Grform from '@/components/base/Grform.vue'
import Countdown from '@/components/base/Countdown.vue'

export default {
    name: 'Home',
    components: {
        Payment,
        Ytplayer,
        Grform,
        Countdown
    },
    data() {
        return {
            // words: [
            //     ['Компания малоуправляема', 1000],
            //     ['Нечетко определены области ответственности', 500],
            //     ['Много совещаний, низкая результативность', 250],
            //     ['Решения не доводятся до результатов', 125],
            //     ['Планы не выполняются', 60],
            //     ['Рабочие процессы плохо организованы', 30],
            //     ['Сотрудники не мотивированы работать на результат', 15],
            //     ['Исполнители безответственны', 7],
            //     ['Ухудшается качество продукции, услуг', 3],
            //     ['Утрачивается лояльность клиентов', 2],
            //     ['Снижается прибыль', 1],
            //     ['Развитие компании замедлено', 1],
            // ],
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
        }
    },
    mounted() {
        //
    }
}