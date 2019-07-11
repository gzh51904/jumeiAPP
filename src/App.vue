<template>
<!-- 路由配置匹配后，渲染对应的组件到router-vue -->
  <div class="app">
    <!-- <nav>
        <ul>
          <li v-for="item in pages" :key="item.name">
            <router-link 
            :to="item.path" 
            active-class="active"
            tag="span">{{item.title}}</router-link>
          </li>
        </ul>
    </nav> -->
    <footer class="bottom-nav">
        <!-- <ul>
          <li v-for="item in pages" :key="item.name">
            <router-link 
            :to="item.path" 
            active-class="active"
            tag="span">
            {{item.title}}
            </router-link>
          </li>
        </ul> -->
        <router-link class="ee" to="/" active-class="active" exact>首页</router-link>
        <router-link class="rr" to="/discover" active-class="active">拼团</router-link>
        <router-link class="tt" to="/cart" active-class="active">购物车</router-link>
        <router-link class="aa" to="/mine" active-class="active">我的</router-link>
    </footer>
    <router-view/>
  </div>
</template>

<script>
import vue from "vue"
// import {mapState} from 'vuex';
import {
  Menu,
  MenuItem,
  Row,
  Col,
  Link,
  Container,
  Header,
  Aside,
  Main,
  Form,
  FormItem,
  Button,
  Input,
  Badge
} from "element-ui";
// Vue.use(Menu);
// Vue.use(MenuItem);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Link);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Button);
// Vue.use(Input);
// Vue.use(Badge);

export default {
  name: 'app',
  //   data() {
  //   return {
  //     pages: [
  //       {
  //         title: "首页",
  //         path: "/home",
  //         name: "Home"
  //       },
  //       {
  //         title: "拼团",
  //         path: "/discover",
  //         name: "Discover"
  //       },
  //       {
  //         title: "购物车",
  //         path: "/cart",
  //         name: "Cart"
  //       },
  //       {
  //         title: "我的",
  //         path: "/mine",
  //         name: "Mine"
  //       }
  //     ],
  //     active: "/home",
  //     logined: false
  //   };
  // },
  // components: {

  // }
}
</script>

<style>
.active {
  font-weight: bold;
  color:  rgb(254, 64, 112);
}
.bottom-nav {
    width: 100%;
    height: 42px;
    position: fixed;
    z-index: 17;
    left: 0;
    bottom: 0;
    text-align: center;
    box-sizing: border-box;
    border-top: 1px solid rgb(238, 238, 238);
}
.bottom-nav a {
    background: #fff;
    
    display: inline-block;
    width: 25%;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center .3rem;
    background-size: 1.2rem 1.07rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /* padding-top: 1.5rem; */
    line-height: 42px;
    font-size: 10px;
    text-decoration: none;
    font-family: Arial,helvetica,"微软雅黑","Microsoft Yahei",sans-serif;
}
</style>
