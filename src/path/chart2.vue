<template>
  <div class="hello">
    <ve-line :data="chartData1"></ve-line>
  </div>
</template>

<script>
//<el-button type="primary" plain @click="del">element ui button</el-button>
export default {
    name: 'CharT2',
    data () {
        return {
        timer1:1,
        map:1,
        day:1,
        chartData1: {
            columns: ["times", "OutputCurrent"],
            rows: [
            { 'times': '0', 'OutputCurrent': 0, },
            ]
        }
        }
    },
    methods: {
        // del() {
        // if(this.chartData1.rows.length > 16){
        //     this.chartData1.rows.pop()
        // }
        // let row = this.$store.state.chartData.rows[0].OutputVoltage
        // this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputVoltage':row})
        // }
    },
    activated() {
        this.chartData1.rows.unshift({ 'times': '0', 'OutputCurrent': 0, })
        this.timer1 = setInterval(()=> {
            this.$store.dispatch('sentData',1)
            if(this.chartData1.rows.length > 16){
                this.chartData1.rows.pop()
            }
            if(this.$store.state.chartData.rows[0].isNew) {
                let row = this.$store.state.chartData.rows[0].OutputCurrent
                this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputCurrent':row})
                this.$store.state.chartData.rows[0].isNew = 0
            }
        },1000)
    },
    deactivated() {
        clearInterval(this.timer1)
        this.day=1
        this.chartData1.rows.splice(0,this.chartData1.rows.length)
    }

}
</script>

<style>

</style>