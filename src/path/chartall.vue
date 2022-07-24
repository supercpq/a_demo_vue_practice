<template>
  <div class="hello">
    <ve-line :data="chartData1"></ve-line>
  </div>
</template>

<script>
export default {
  name: 'ChartAll',
  data () {
    return {
      map:1,
      timer1:1,
      day:2,
      chartData1: {
        columns: ["times", "OutputVoltage","InputVoltage","OutputCurrent"],
        rows: [
          //{ 'times': '0', 'OutputVoltage': 0, },
        //   { 'times': '1', 'OutputVoltage': 1, 'InputVoltage':2,'OutputCurrent':1},
        //   { 'times': '2', 'OutputVoltage': 2, 'InputVoltage':3,'OutputCurrent':5},
        //   { 'times': '3', 'OutputVoltage': 0, 'InputVoltage':6,'OutputCurrent':7},
        //   { 'times': '4', 'OutputVoltage': 5, 'InputVoltage':7,'OutputCurrent':3},
        //   { 'times': '5', 'OutputVoltage': 1, 'InputVoltage':2,'OutputCurrent':7},
        //   { 'times': '6', 'OutputVoltage': 3, 'InputVoltage':6,'OutputCurrent':1},
        //   { 'times': '7', 'OutputVoltage': 8, 'InputVoltage':2,'OutputCurrent':2},
        //   { 'times': '8', 'OutputVoltage': 2, 'InputVoltage':9,'OutputCurrent':0},
        //   { 'times': '9', 'OutputVoltage': 6, 'InputVoltage':2,'OutputCurrent':7},
        //   { 'times': '10', 'OutputVoltage': 9, 'InputVoltage':1,'OutputCurrent':1},
        //   { 'times': '11', 'OutputVoltage': 0, 'InputVoltage':6,'OutputCurrent':6},

        ]
      }
    }
  },
  methods: {
    
  },
  activated() {
    this.chartData1.rows.unshift({ 'times': '1', 'OutputVoltage': 0, 'InputVoltage':0,'OutputCurrent':0})
    this.timer1 = setInterval(()=> {
      this.$store.dispatch('sentData',1)  //axios
            if(this.chartData1.rows.length > this.$store.state.tableNum){
                this.chartData1.rows.splice(this.$store.state.tableNum)
            }
            if(!this.$store.state.chartData.rows[0].isNew) {
                let row1 = this.$store.state.chartData.rows[0].OutputVoltage
                let row2 = this.$store.state.chartData.rows[0].InputVoltage
                let row3 = this.$store.state.chartData.rows[0].OutputCurrent
                this.chartData1.rows.unshift({ 'times':`${this.day++}`,'OutputVoltage':row1,'InputVoltage':row2,'OutputCurrent':row3})
                this.$store.state.chartData.rows[0].isNew = 1
            }
        },1000)
  },
  deactivated() {
    clearInterval(this.timer1)
    this.day=2
    this.chartData1.rows.splice(0,this.chartData1.rows.length)
    console.log(this.$store)
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
