<template>
  <!-- <h1>首页</h1> -->
  <div class="home">
    <HomeSearch />
    <HomeNav />
    <!-- <HomeTabs/> -->
  </div>
</template>
<script>
import HomeSearch from "@/components/Homes/HomeSearch.vue";
import HomeNav from "@/components/Homes/HomeNav.vue";
// import HomeTabs from "@/components/Homes/HomeTabs.vue";
export default {
  name: "home",
  components: {
    // HelloWorld
    HomeSearch,
    HomeNav
    // HomeTabs
  },
  create() {
    this.$store.commit("changeshow", true);
  }
};
</script>
