<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <div style="width:80%;height: 100px;margin-left: 10%;">
        <Sett/>
        <Banner/>
      </div>
  </div>
</template>

<script>
import Sett from "./components/setting.vue"
import Banner from "./components/banner.vue"

export default {
  name: 'App',
  components: {
    Banner,
    Sett,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
