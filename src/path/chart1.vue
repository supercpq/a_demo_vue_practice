<template>
  <div class="hello">
    <ve-line :data="chartData1"></ve-line>
  </div>
</template>

<script>
//<el-button type="primary" plain @click="del">element ui button</el-button>
export default {
  name: 'CharT1',
  data () {
    return {
      map:1,
      timer1:1,
      day:1,
      chartData1: {
        columns: ["times", "OutputVoltage"],
        rows: [
          { 'times': '0', 'OutputVoltage': 0, },
        ]
      }
    }
  },
  methods: {
    // del() {
    //   if(this.chartData1.rows.length > 16){
    //     this.chartData1.rows.pop()
    //   }
    //   let row = this.$store.state.chartData.rows[0].OutputVoltage
    //   this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputVoltage':row})
    // }
  },
  activated() {
    this.chartData1.rows.unshift({ 'times': '0', 'OutputVoltage': 0, })
    this.timer1 = setInterval(()=> {
      this.$store.dispatch('sentData',1)
            if(this.chartData1.rows.length > 16){
                this.chartData1.rows.pop()
            }
            if(this.$store.state.chartData.rows[0].isNew) {
                let row = this.$store.state.chartData.rows[0].OutputVoltage
                this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputVoltage':row})
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
