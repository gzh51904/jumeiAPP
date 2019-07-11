<template>
  <div id="app">
    <Particulars/>
  </div>
</template>

<script>
import Particulars from './components/Particulars.vue';

export default {
  name: 'app',
  components: {
    Particulars
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
