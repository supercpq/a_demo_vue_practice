<template>
  <div class="hello">
    <!-- <el-button type="primary" plain @click="del">element ui button</el-button> -->
    <ve-line :data="chartData1"></ve-line>
  </div>
</template>

<script>
//
export default {
    name: 'CharT2',
    data () {
        return {
        timer1:32,
        map:1,
        day:2,
        chartData1: {
            columns: ["times", "OutputCurrent"],
            rows: [
            //{ 'times': '0', 'OutputCurrent': 0, },
            // { 'times': '1', 'OutputCurrent': 17, },
            // { 'times': '2', 'OutputCurrent': 6, },
            // { 'times': '3', 'OutputCurrent': 3, },
            // { 'times': '4', 'OutputCurrent': 2, },
            // { 'times': '5', 'OutputCurrent': 5, },
            // { 'times': '6', 'OutputCurrent': 20, },
            // { 'times': '7', 'OutputCurrent': 60, },
            // { 'times': '8', 'OutputCurrent': 51, },
            // { 'times': '9', 'OutputCurrent': 22, },
            // { 'times': '10', 'OutputCurrent': 60, },
            // { 'times': '11', 'OutputCurrent': 33, },
            // { 'times': '12', 'OutputCurrent': 67, },
            
            ]
        }
        }
    },
    methods: {
        //测试代码
        // del() {
        // if(this.chartData1.rows.length > 32){
        //     this.chartData1.rows.pop()
        // }
        // let row = this.$store.state.chartData.rows[0].OutputVoltage
        // this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputCurrent':33})
        // }
    },
    activated() {
        //初始化一个（0，0）点
        this.chartData1.rows.unshift({ 'times': '1', 'OutputCurrent': 0, })
        this.timer1 = setInterval(()=> {
            //每秒向服务器发送请求获取数据
            this.$store.dispatch('sentData',1)
            //维护数组长度
            if(this.chartData1.rows.length > this.$store.state.tableNum){
                this.chartData1.rows.splice(this.$store.state.tableNum)
            }
            //向数组中添加数据以更新v-charts
            if(!this.$store.state.chartData.rows[0].isNew) {
                let row = this.$store.state.chartData.rows[0].OutputCurrent
                this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputCurrent':row})
                this.$store.state.chartData.rows[0].isNew = 1
            }
        },1000)
    },
    deactivated() {
        //停止定时器
        clearInterval(this.timer1)
        //重新设置编号
        this.day=2
        //清空数组
        this.chartData1.rows.splice(0,this.chartData1.rows.length)
    }

}
</script>

<style>

</style>