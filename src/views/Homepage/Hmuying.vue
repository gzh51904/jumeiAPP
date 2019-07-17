<template>
  <div class="home">
   
    <!-- <HometThead/> -->
    <HomeSearch/>
    
    <HomeNav/>
     <h1>母婴</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/Homes/HomeNav.vue";
// import HometThead from "@/components/HometThead.vue";
import HomeSearch from "@/components/Homes/HomeSearch.vue";
export default {
  name: "home",
  components: {
    // HelloWorld
    HomeNav,
    // HometThead,
    HomeSearch
  }
};
</script>

<style lang="scss" scoped>
</style>

