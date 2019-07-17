<template>
  <div class="warper">
    <section class="views">
      <a id="back" href="javascript:void(0);">
        <img
          src="https://f1.jmstatic.com/static_passport/dist/v1.0.137928/touch/login_series/images/NavButtonBack_new.png"
          class="return"
        />
      </a>
      <h1 class="theme">登录</h1>
      <a
        class="top_right"
        href="/i/mobile/register?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy"
      >注册</a>
    </section>
    <form action autocomplete="off"></form>
    <form id="login-dynamic-form">
        <div id="iphone_login">
            <div class="other-login-outer">
                <div class="other-login">
                    <span class="other-title">使用手机登录</span>
                </div>
                </div>
                <div class="jm_row icon_phone">
                    <div class="jm_col">
                        <input type="text" class="register_input" name="dynamic_mobile" value="" id="dynamic_mobile" placeholder="请输入11位手机号" alertname="手机号" v-model="phonenum">
                    </div>

                </div>
                <div class="jm_row">
                    <div class="jm_col">
                           <input
              type="password"
              class="register_input"
              name="password"
              placeholder="6-16位登录密码"
              alertname="请设置密码"
              maxlength="16"
              autocomplete="new-password"
              v-model="password"
            />
                    </div>
               
                </div>
                <div class="jm_row register_jumei_account">
                    <a class="jm_col jm_left" id="use_jumei_account">使用聚美帐号登录</a>
                    <div class="jm_col jm_right">30天内自动登录</div>
                </div>
                <input type="submit" value="登录" class="register_button" id="ga_dynamic_login" @click.prevent="login">
            </div>
       
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import { scrypt } from "crypto";
import { Script } from "vm";

export default {
      data() {
    return {
        password: "",
        phonenum: "",
    }
  },
  created(){
    this.$store.commit("changeshow",false)
  },
    methods:{

      login(){
          let phonenum = this.phonenum;
          let password = this.password;
           let params = {phonenum,password};
       this.$axios
            .get("/login", {
              params
            }).then(( res ) => {
                let {data,headers} = res
                  console.log(res);
              if(data.code == 250) {
                // this.$message("用户名或密码错误");
           alert('用户名或密码错误！')
              } else if(data.code === 1000) {
                // this.$message("登录成功");
                //  alert('登录成功');
                      // 保存登录信息
                    localStorage.setItem('Authorization',data.data);
                     // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    this.$router.replace({path:'/home'});
                    // this.$router.replace({name:'/home'})
              }
          
      });
      }
  }
};
</script>

<style>
html {
  background: #fff;
}
body {
  color: #999;
}
a {
  color: #808080;
  text-decoration: none !important;
}
.warper {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
  background: #fff;
  padding-bottom: 80px;
}
.views {
  text-align: left;
  height: 44px;
  position: relative;
  background: #fff;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #eee;
}
#back {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 44px;
}
.views .return {
  top: 13px;
  left: 10px;
  width: 7px;
  height: 13px;
  position: absolute;
}
section .theme {
  display: block;
  text-align: center;
  margin: 0px 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  color: #666;
  height: 44px;
  line-height: 44px;
}
.top_right {
  position: absolute;
  line-height: 45px;
  right: 10px;
  top: 0px;
  color: #333;
  font-size: 15px;
}
/* ------------------ */
form {
  margin: 0 12%;
}
.other-login-outer {
  padding: 0 10%;
}
.other-login {
  position: relative;
  height: 58px;
  line-height: 58px;
  text-align: center;
}
.other-login::before {
  content: "";
  font-size: 0px;
  border-bottom: solid 1px #f5f5f5;
  position: absolute;
  top: 29px;
  left: 0px;
  width: 100%;
  z-index: -1;
}
.other-title {
  padding: 0px 5px;
  background: #fff;
  font-size: 14px;
}
.jm_row {
  display: flex;
  width: 100%;
}
/* 手机注册 */
.jm_col {
  flex: 1;
  display: flex;
  width: 100%;
}
input {
  border: none;
  font-size: 14px;
  outline: none;
  outline: medium;
  text-transform: none;
}
.register_input {
  background: #f5f5f5;
  border-radius: 20px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  color: #999999;
  text-align: left;
  text-indent: 21px;
  margin-top: 18px;
}
.jm_col_90px {
  flex: 0 0 90px;
  max-width: 90px;
  margin: 18px 0 0 10px;
}
.register_yzm {
  background: #ffffff;
  border: 1px solid #feb2c5;
  border-radius: 20px;
  width: 97%;
  height: 35px;
  font-size: 14px;
  color: #feb2c5;
  line-height: 35px;
  text-align: center;
  display: block;
}
.register_button {
  background: #feb2c5 !important;
  border-radius: 20px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  color: #ffffff;
  line-height: 14px;
  text-align: center;
  margin: 18px auto 0 auto;
  display: block;
}
.register_jumei_account {
    font-size: 12px;
    height: 32px;
    line-height: 44px;
    width: 100%;
}
.register_jumei_account .jm_left {
    color: #fe4070;
    padding-left: 7px;
}
.jm_left {
    text-align: left;
}
.register_jumei_account .jm_right {
    color: #999999;
    padding-right: 7px;
}
.jm_right {
    text-align: right;
}
</style>


