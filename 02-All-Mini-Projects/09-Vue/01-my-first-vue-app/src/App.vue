<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/webaholicsLogo.png">
    <Home1 msg="Data driven VUE.js application"/>
  </div>
</template>

<script>
import Home1 from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  background-color: #2c3e50;
  height: 100vh;
  text-align: center;
  padding-top: 30px;
}
</style>
