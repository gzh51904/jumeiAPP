import Vue from 'vue'

// VueRouter的使用步骤
// 1. 引入
import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Home from '../views/Home.vue';
import Group from '../views/Group.vue';
import Cart from '../views/Cart.vue';
import Mine from '../views/Mine.vue';
// import Login from '../views/Login.vue';
// import Reg from '../views/Reg.vue';
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
        //  children:[
        //     {
        //         name:'reg',
        //         path:'reg',
        //         component:Reg
        //     }
        // ]
    },
    {
        name: 'Login',
        path: '/login',
        // component: Login,
        component: () => import(/* webpackChunkName: "rouSearch" */ '../views/Login.vue'),
        // 等效于：<Cart v-bind="route.params"/> == ：<Cart v-bind="{a:100,b:200}"/> == <Cart v-bind:a="100" v-bind:b="200"/>
        // props: true
    },{
        name: 'Reg',
        path: '/reg',
        component: () => import(/* webpackChunkName: "rouSearch" */ '../views/Reg.vue'),
    }
    // {
    //     name: 'Reg',
    //     path: '/reg',
    //     component: Reg,
    //     // props: function (route) {
    //     //     if (route.query.username) {
    //     //         return {
    //     //             username: route.query.username.toUpperCase()
    //     //         }
    //     //     }
    //     //     return {
    //     //         className: '1904'
    //     //     }
    //     // }
    // },
    // {
    //     name: 'Goods',
    //     path: '/goods/:id',
    //     component: Goods
    // },
]





});

// const express = require('express');

// const Router = express.Router();

// const goodsRouter = require('./goods');
// const regRouter = require('./reg');
// const loginRouter = require('./login');
// const uploadRouter = require('./upload');

// const {formatData,token:{verify}} = require('../utils');


// Router.use(express.urlencoded({extended:false}),express.json());

//运行:127.0.0.1:1904,localhost:1904,baidu.com

// let allowOrigin = ['http://127.0.0.1:1904','http://baidu.com','http://localhost:8080']

// Router.use((req,res,next)=>{
//     // req.header保存前端发来的请求头信息,包含host,origin
//     console.log(req.headers)
//     // 设置跨域响应头
//     // 判断当前域名是否在allowOrigin当中,如果在,则设置响应头,否则不设置
//     let idx;
//     let has = allowOrigin.some((item,i)=>{
//         console.log(item,i,req.headers.origin)
//         idx = i;
//         return item.includes(req.headers.origin)
//     });
//     // if(has){
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//         res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     // }

//     // 跨域请求CORS中的预请求
//     // OPTIONS:预请求(当跨域请求为复杂请求时,浏览器自动发起,目的是询问服务器是否支持这样的跨域请求)
//     if(req.method=="OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else{
        
//         next();
//     }

    
// })

// 数据接口
// Router.use('/goods',goodsRouter);
// Router.use('/reg',regRouter);
// Router.use('/login',loginRouter);
// Router.use('/upload',uploadRouter);

// 校验token
// Router.use('/verify',(req,res)=>{
//     // 校验token
//     // 成功：放行
//     // 失败：
//     let token = req.headers.authorization;console.log('mytoken:',token)
//     if(!verify(token)){
//         res.send(formatData({code:401,msg:'unauthorized'}))
//     }else{
//         res.send(formatData())
//     }
// });


export default router;