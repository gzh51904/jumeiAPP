<template>
  <section class="home_search">
    <!-- <h2>搜索框</h2> -->
    <a href="#">
      <span>搜索商品 分类 功效</span>
    </a>
    <span>
      <img src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png">
    </span>
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
a {
  text-decoration: none;
}
.home_search {
  width: 100%;
  height: 46px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 80%;
    height: 31px;
    display: inline-block;
    color: #999;
    background: #f5f5f5;
    // box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    border-radius: 24px;
    font-size: 14px;
    line-height: 31px;
    text-align: center;
    span {
        background: url(https://f0.jmstatic.com/btstatic/h5/common/search_btn.png) no-repeat;
        background-position: left 3px;
        padding-left: 18px;
        background-size: 16px 16px;
    }
  }
  span {
    margin-right: 16px;
    width: 24px;
    img {
        width: 100%;
    }
  }
}
</style>
