<template>
<!-- 路由配置匹配后，渲染对应的组件到router-vue -->
  <div id="app">
    <FootNav v-show="isshow"/>
    <router-view/>
  </div>
</template>

<script>
import FootNav from "@/components/FootNav.vue"
// import {mapState} from 'vuex';
export default {
  computed:{
    isshow(){
      return this.$store.state.isok
    }
  },
  components: {
    FootNav
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>


