import Vue from 'vue'

// VueRouter的使用步骤
// 1. 引入
import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Home from '../components/Home.vue';
import Group from '../components/Group.vue';
import Cart from '../components/Cart.vue';
import Mine from '../components/Mine.vue';
import Login from '../components/Login.vue';
import Reg from '../components/Reg.vue';
// import Goods from '../components/Goods.vue';

import axios from 'axios';


// 3. 实例化router并配置参数
let router = new VueRouter({
    routes:[
        {
        name: 'Home',
        path: '/',//当浏览器地址为#/home时，渲染Home组件
        //component: Home,

        // 多路由视图的处理
        components:{
            default:Home,
            bottom:{template:'<h4>Bottom</h4>'}
      }
    },
    // 重定向
    {
        path: '/',
        // component:{template:'<div>404</div>'}
        redirect: { name: 'Home' }
    },
    {
        name: 'Group',
        path: '/group',
        component: Group,

        // 嵌套路由（子路由）
        // children:[
        //     {
        //         name:'Phone',
        //         path:'phone',
        //         component:Phone
        //     },{
        //         name:'Computer',
        //         path:'computer',
        //         component:Computer
        //     },{
        //         name:'Tablet',
        //         path:'tablet',
        //         component:Tablet
        //     },{
        //         name:'Acc',
        //         path:'acc',
        //         component:Acc
        //     }
        // ]
    },
    {
        name: 'Cart',
        path: '/cart',
        component: Cart,
        // meta: { requiresAuth: true },

        // //等效于<Cart username="laoxie"/>
        // props: {
        //     username: 'laoxie'
        // },
        // beforeEnter(to,from,next){
        //     console.log('Cart路由独享：beforeEnter')
        //     next();
        // }


    },
    {
        name: 'Mine',
        path: '/mine',
        component: Mine,
        // 本组件需要登录权限才可访问
        // meta: { requiresAuth: true }
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        // 等效于：<Cart v-bind="route.params"/> == ：<Cart v-bind="{a:100,b:200}"/> == <Cart v-bind:a="100" v-bind:b="200"/>
        // props: true
    },
    {
        name: 'Reg',
        path: '/reg',
        component: Reg,
        // props: function (route) {
        //     if (route.query.username) {
        //         return {
        //             username: route.query.username.toUpperCase()
        //         }
        //     }
        //     return {
        //         className: '1904'
        //     }
        // }
    },
    // {
    //     name: 'Goods',
    //     path: '/goods/:id',
    //     component: Goods
    // },
]





});
export default router;