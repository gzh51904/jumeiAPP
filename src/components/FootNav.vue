<template>
  <div id="footer">
    <footer class="bottom-nav">
      <router-link class="home" to="/" active-class="active" exact>首页</router-link>
      <router-link class="group" to="/group" active-class="active">拼团</router-link>
      <router-link class="cart" to="/cart" active-class="active">购物车</router-link>
      <router-link class="mine" to="/mine" active-class="active">我的</router-link>
    </footer>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
*{
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
#footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(238, 238, 238);
  .bottom-nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      width: 20%;
      height: 50px;
      background: #bcbc;
      text-align: center;
      background-position: center 10px;
      box-sizing: border-box;
      padding-top: 30px;
      color: rgb(153, 153, 153);
      
    }
    .home {
      background: url(../assets/footnav/foot_nav_icon_home.png) no-repeat;
      background-position: center 10px;
      background-size: 22px 20px;
      &.active {
        background: url(../assets/footnav/foot_nav_icon_home_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
        background-size: 22px 20px;
        text-decoration: none;
      }
    }
    .group {
      background: url(../assets/footnav/foot_nav_icon_group.png) no-repeat;
      background-position: center 10px;
      background-size: 22px 20px;

      &.active {
        background: url(../assets/footnav/foot_nav_icon_group_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
        text-decoration: none;
        background-size: 22px 20px;

      }
    }
    .cart {
      background: url(../assets/footnav/foot_nav_icon_cart.png) no-repeat;
      background-position: center 10px;
      background-size: 22px 20px;

      &.active {
        background: url(../assets/footnav/foot_nav_icon_cart_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
        text-decoration: none;
        background-size: 22px 20px;

      }
    }
    .mine {
      background: url(../assets/footnav/foot_nav_icon_mine.png) no-repeat;
      background-position: center 10px;
      background-size: 22px 20px;

      &.active {
        background: url(../assets/footnav/foot_nav_icon_mine_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
        text-decoration: none;
        background-size: 22px 20px;

      }
    }
  }
}
</style>
