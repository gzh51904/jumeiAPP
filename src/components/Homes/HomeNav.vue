<template>
  <section class="home_nav">
    <!-- <h2>导航栏</h2> -->
    <ul>
      <li>
        <router-link to="/" active-class="active" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/Hmiansui" active-class="active">极速免税店</router-link>
      </li>
      <li>
        <router-link to="/Hmuying" active-class="active">母婴</router-link>
      </li>
      <li>
        <router-link to="/Hqingshe" active-class="active">轻奢</router-link>
      </li>
      <li>
        <router-link to="/Htemai" active-class="active">名品特卖</router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.home_nav {
  width: 100%;
  height: 44px;
  background: #fff;
  border-bottom: #ddd 1px solid;
  ul {
    height: 44px;
    li {
      float: left;
      // position: relative;
      width: auto;
      // padding: 13px;
      text-align: center;
      height: 44px;
      margin: 0 14px;
      a {
        display: inline-block;
        line-height: 44px;
        // padding: 0 0;
        font-size: 14px;
        color: #666;
        &.active {
          border-bottom: 2px solid #fe4070;
          color: #fe4070;
        }
      }
    }
  }
}
</style>
