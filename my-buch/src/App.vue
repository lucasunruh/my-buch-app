<template>
  <div id="app">
    <Navbar title="MyBuch"/>
    <History />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import History from './components/History.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    History
  }
}
</script>

<style>
#xapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
