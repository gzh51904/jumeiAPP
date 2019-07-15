<template>
  <!-- <h1>首页</h1> -->
  <div class="home">
    <HomeSearch/>
    <HomeNav/>
    <!-- <HomeTabs/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSearch from "@/components/Homes/HomeSearch.vue";
import HomeNav from "@/components/Homes/HomeNav.vue";
// import HomeTabs from "@/components/HomeTabs.vue";

export default {
  name: "home",
  components: {
    HomeSearch,
    HomeNav,
    // HomeTabs
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  // background-color: #f5f5f5;
}
.home {
  // background-color: #f5f5f5;
  // height: 300px;
}
</style>

