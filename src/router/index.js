import VueRouter from 'vue-router'

import chart1 from '../path/chart1'
import chart2 from '../path/chart2'
import chartall from '../path/chartall'


export default new VueRouter({
    routes: [
        {
            path:'/chart1',
            component:chart1
        },
        {
            path:'/chart2',
            component:chart2
        },
        {
            path:'/chartall',
            component:chartall
        }
    ]
})