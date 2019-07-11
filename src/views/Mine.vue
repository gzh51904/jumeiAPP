<template>

    <div id="wrapper">
        <header class="head-wrap" style="display: block; background: transparent;">
            <div class="head-left"><a href=""></a></div>
            <div class="head-title">我的聚美</div>
            <div class="head-right">
                <a href="http://m.jumei.com">&nbsp;</a>
            </div>
        </header>
        <div class="user-unlogin">
            <div class="noportrait"></div>
            <div class="operation">
            <!-- <router-link class="signup" @click.native.prevent.stop="goto('Reg')">注册</router-link> -->
            <router-link to="Reg" class="signup">注册</router-link>
            <!-- <a class="signup" href="" @click="goto(item)">注册</a> -->
            <div style="margin-top:-5px;" class="separator"></div>
            <!-- <a class="login" href="">登录</a> -->
            <router-link to="Login" class="login">登录</router-link>
        </div>
        <div class="order block">
            <div class="block-title">
                <i class="block-title-icon myorder"></i>
                我的订单
                <a href="/m/order/list" class="block-title-nav">
                    <span>查看我的全部订单</span>
                    <i class="arrow-right"></i>
                </a>
            </div>
            <div class="block-content">
                <a class="block-item" href="/m/order/list?status=1">
                    <i class="unpaid"></i>
                    <span>待付款</span>
                </a>
                <a class="block-item" href="/m/order/list?status=2">
                    <i class="unconfirm"></i>
                    <span>待收货</span>
                </a>
                <a class="block-item" href="/m/order/list?status=3">
                    <i class="uncomment"></i>
                    <span>待评价</span>
                </a>
                <a class="block-item" href="/m/RMA/list">
                    <i class="refund"></i>
                    <span>退货/退款</span>
                </a>
            </div>
        </div>
        <div class="fund block">
        <div class="block-title">
            <i class="block-title-icon myfund"></i>
            我的资产
        </div>
        <div class="block-content">
                <a class="block-item" href="/h/promocard/list">
                <div class="value"></div>
                <span>现金券</span>
            </a>
                <a class="block-item" href="/h/red_envelope/list">
                <div class="value"></div>
                <span>红包</span>
            </a>
            <a class="block-item" href="/m/account/balance">
                <div class="value"></div>
                <span>聚美余额</span>
            </a>
            <a class="block-item" href="/m/giftcard/list">
                <div class="value"></div>
                <span>礼品卡</span>
            </a>
        
        </div>  
        </div>
        <div class="block list">
        <a class="list-item" href="/m/RMA/service">
            <i class="list-item-icon rmaservice"></i>
            <span>售后服务</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="/m/feedback/show_add">
            <i class="list-item-icon feedback"></i>
            <span>意见反馈</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="/h/address/index">
            <i class="list-item-icon address"></i>
            <span>收货地址</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item logout" href="https://passport.jumei.com/i/mobile/logout?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy">
            <i class="list-item-icon logout"></i>
            <span>退出登录</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="tel: 400-123-8888">
            <i class="list-item-icon tel"></i>
            <span>400-123-8888</span>
            <i class="arrow-right"></i>
        </a>
    </div>
        <div class="hint" style="padding-bottom:3.0625rem">
            客服热线400-123-8888 (8:00-22:00)<br>拨打前请记录您的UID  0    </div>
        </div>
         <!-- <router-view/> -->
    </div>
    
</template>

<script>

import Vue from "vue";
import { scrypt } from 'crypto';
import { Script } from 'vm';
import rem from '../../public/rem'

export default {
    
    data(){

    },
     created() {
    console.log('$route:',this.$route);
    let baseUrl = this.$route.path;
    this.cat = this.cat.map(item=>{
      return {
        ...item,
        path:baseUrl+ '/' + item.name.toLowerCase()
      }
    })
    // if (this.$route.params.category) {
    //   this.cat = this.$route.params.category;
    // }

    // this.$axios.get('/goods').then(res=>{
    //   console.log('res:',res)
    // })
  },
//     methods: {
//     handleSelect(index, indexPaht) {
//       console.log(index, indexPaht);
//       this.active = index;
//     },
//     goto(name) {
//       this.$router.push({
//         name,
//         // path:'/'+name.toLowerCase(),
//         params: { a: 100, b: 200 } //params只能通过name方式跳转时传参
//       });
//     },
//     logout() {
//       this.logined = false;
//       localStorage.removeItem("Authorization");
//     }
//   },
}
</script>
<style >
*{
    margin: 0;
    padding: 0;
}
html{
       background: #f2f2f2;
}
#wrapper {
    /* top: 0; */
    position: relative;
    width: 100%;

}
.head-wrap {
    /* zoom: 1; */
    z-index: 1;
    background: transparent;
    height: 38px;
    background: #fff;
     width: 100%;
    font-size: 14px;
    color: #333;
    line-height: 38px;
    text-align: center;
    position: relative;

}
.head-left {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 38px;
    height: 38px;
    box-sizing: border-box;
}
.head-left a {

    background: url(../assets/back.png) no-repeat;
    background-size: 24px 24px;
    padding-left: 40px;

}
.head-title {
    background: transparent;
    position: absolute;
    color: #fff;
    float: left;
    width: 100%;
    text-align: center;
    line-height: 38px;
}
.head-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 38px;
    height: 38px;
    background: url(../assets/home.png) center center no-repeat;
        background-size: auto;
    background-size: 24px 24px;

}
/* 登录注册 */
.user-unlogin {
    padding-top: 50px;
    width: 100%;
    box-sizing: border-box;
    height: 158px;
    background-image: -webkit-linear-gradient(294deg,#fd465f 0,#fc5e9f 100%);
    /* background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%); */
    /* padding-top: 15px; */
    position: absolute;
    top: 0;
    left: 0;
}
.noportrait {
    background-image: url(../assets/noportrait.png);
    width: 60px;
    height: 60px;
    background-size: 60px;
    margin: auto;
}
.user-unlogin .operation {
    padding: 10px;
    width: 200px;
    margin: auto;
}
.user-unlogin .operation a {

    line-height: 25px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 95px;

}
.user-unlogin .operation .separator {

    background: #fff;
    width: 1px;
    display: inline-block;
    height: 15px;
    vertical-align: middle;

}
/* ----------- */
.block {

    background: #fff;
    margin-top: 12px;
}
.block-title {
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
}
i.myorder {
    background-image: url(../assets/myorder.png);
}
i.block-title-icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-size: 20px;
    margin-right: 10px;
}
.block-title-nav {
    float: right;
    text-decoration: none;
    color: #999;
    font-size: 12px;
    margin-right: 5px;
}
i.arrow-right {

    background-image: url(../assets/advance_bg.png);
    background-size: 20px;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;

}
.fund .block-item, .order .block-item {
    width: 25%;
    text-align: center;
    display: inline-block;
    margin: 0;
    padding: 10px 0;
    text-decoration: none;
    font-size: 12px;
    color: #666;
}
.order .block-item i {

    display: block;
    width: 24px;
    height: 24px;
    margin: 5px auto;
    background-size: 24px;

}
i.unpaid {
    background-image: url(../assets/unpaid.png);
}
i.unconfirm {
    background-image: url(../assets/unconfirm.png);
}
i.uncomment {
    background-image: url(../assets/uncomment.png);
}
i.refund {
    background-image: url(../assets/refund.png);
}
/* -------------- */
.block {
    background: #fff;
    margin-top: 12px;
}
i.myfund {
    background-image: url(../assets/myfund.png);
}
.fund .value {
    font-size: 16px;
    font-weight: 700;
    margin: 5px 0;
    color: #000;
}
.list-item {
    display: block;
    text-decoration: none;
    color: #333;
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
}
i.list-item-icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-size: 20px;
    margin-right: 10px;
}
i.rmaservice {
    background-image: url(../assets/rmaservice.png);
}
i.feedback {
    background-image: url(../assets/feedback.png);
}
i.address {
    background-image: url(../assets/address.png);
}
i.logout {
    background-image: url(../assets/logout.png);
}
i.tel {
     background-image: url(../assets/tel.png);
}
.list-item .arrow-right {
    float: right;
    margin-top: 6px;
    margin-right: 6px;
}
/* ---------------- */
.hint {

    color: #999;
    font-size: 11px;
    margin: 15px;
    line-height: 15px;

}

</style>
