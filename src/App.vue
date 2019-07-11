<template>
<<<<<<< HEAD
<!-- 路由配置匹配后，渲染对应的组件到router-vue -->
  <div id="app">
    <FootNav/>
    <router-view/>
=======
  <div id="app">
    <Particulars/>
>>>>>>> 5b1c4c9d259971a651205225fd7e27c2c7eb2519
  </div>
</template>

<script>
<<<<<<< HEAD
import FootNav from "@/components/FootNav.vue"
// import {mapState} from 'vuex';
export default {
  components: {
    FootNav
=======
import Particulars from './components/Particulars.vue';

export default {
  name: 'app',
  components: {
    Particulars
>>>>>>> 5b1c4c9d259971a651205225fd7e27c2c7eb2519
  }
}
</script>
<style>
<<<<<<< HEAD
*{
  margin: 0;
  padding: 0;
=======
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
>>>>>>> 5b1c4c9d259971a651205225fd7e27c2c7eb2519
}
</style>


