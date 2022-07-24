import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //使用Vue插件

const actions = {
    sentData(context,value){
        axios.get('http://127.0.0.1:8080/api/updata').then(
            res=> {
                if(!res.data.status){
                    // console.log( res.data.data)
                    // console.log( res.data)
                    // console.log( res.data.status)
                    context.commit('SENTDATA',res.data.data)

                }},
            err=>{ console.log(err.message) })
    }
}
const mutations = {
    SETDATA(state,value) {
        state.chartData.rows.pop()
        state.chartData.rows.unshift(value)
    },
    SETNUM(state,value) {
        state.tableNum = Number(value)
    }
}
const state = {
    chartData: {
        rows: [
          { isNew:1 ,OutputVoltage: 0, InputVoltage: 0, OutputCurrent: 0 },
        ]
      },
    tableNum:32
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})