import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //使用Vue插件

const actions = {
    sentData(context,value){
        axios.get({
            url:'http://127.0.0.1:8080/api/updata',
            method: 'get',
            timeout: 1020
        })
        .then(res=> {
            console.log(res)
            context.commit('SENTDATA',res)
        })
        .catch(err=>{ console.log(err.message) })
    }
}
const mutations = {
    SETDATA(state,value) {
        state.chartData.rows.pop()
        state.chartData.rows.unshift(value)
    }
}
const state = {
    chartData: {
        rows: [
          { isNew:1 ,OutputVoltage: 0, InputVoltage: 0, OutputCurrent: 0 },
        ]
      }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})