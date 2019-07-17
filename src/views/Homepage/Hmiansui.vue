<template>
  <div class="home">
    <!-- <h1>极速免税店</h1> -->
    <HometThead/>
    <HomeSearch/>
    <HomeNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/Homes/HomeNav.vue'
// import HometThead from '@/components/Homes/HometThead.vue'
import HomeSearch from '@/components/Homes/HomeSearch.vue'
export default {
  name: 'home',
  components: {
    HomeNav,
    // HometThead,
    HomeSearch
  }
}
</script>

<style lang="scss" scoped>

</style>
