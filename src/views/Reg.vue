<template>
  <div>
    <div class="warper">
      <section class="views">
        <a id="back" href>
          <img src="../assets/Back_new.png" class="return" />
        </a>
        <h1 class="theme">注册</h1>
        <a
          class="top_right"
          href="/i/mobile/login?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy"
        >登录</a>
      </section>
      <form action autocomplete="off">
        <div class="other-login-outer">
          <div class="other-login">
            <span class="other-title">使用手机注册</span>
          </div>
        </div>
        <input type="hidden" id="focus" name="focus" />
        <div class="jm_row icon_phone">
          <div class="jm_col">
            <input
              type="text"
              class="register_input"
              name="mobile"
              @blur="checkPhone"
              placeholder="请输入11位手机号"
              alertname="请输入手机号码"
              maxlength="11"
              id="account"
              v-model="phonenum"
            />
          </div>
        </div>
        <div class="jm_row">

          <!-- <div class="jm_col jm_col_90px">
            <a class="register_yzm" href="javascript:;">验证</a>
          </div> -->
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
              @blur="checkPWD"
            />
          </div>
        </div>
                  <div class="jm_col">
            <input
              type="password"
              class="register_input"
              placeholder="请确认密码"
              id="mobileVerify"
              alertname="请确认密码"
              name="mobileVerify"
              v-model="checkPass"
              @blur="checkPAS"
            />
          </div>
        <input
          type="submit"
          value="注册"
          class="register_button"
          id="tele_register"
          @click.prevent="reg"
        />
      </form>
      <div class="register_agreement jm_center">
        点击注册，表示同意
        <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
import { createCipheriv } from "crypto";
// import Vue from "vue";
// import { scrypt } from 'crypto';
// import { Script } from 'vm';
// import rem from '../../public/rem'
export default {
  data() {
    return {
    
        phonenum: "",
        password: "",
        send: false
      
    };
  },
    created(){
    this.$store.commit("changeshow",false)
  },
  methods: {
    //  goBack(){
    //  this.$router.go(-1);

    // }
    // ,
  reg() {
    if(this.send==true){
            // 验证通过，发请求到后端，保存用户名到数据库
            let phonenum = this.phonenum;
            let password = this.password;
             let params ={phonenum,password};
            this.$axios.post('/reg',params).then(({data})=>{
                  this.$message("注册成功");
                if(data.code == 1000){
                    //成功跳转登录页
                  
                    this.$router.replace({name:'Login'});
               
                }
            })
       
      }else{
          this.$message("注册失败");
      }
    },



    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phonenum)) {
        this.$message("请输入11位手机号码");
        this.send = false;
      }
      //  else {
      //   let phonenum = this.phonenum;
      //   let params = {phonenum}
      //       this.$axios
      //           .get("http://localhost:1904/reg/check", {
      //              params
      //           })
      //           .then(({ data }) => {
      //           // console.log(data)
            
      //           if(data.code==250){
      //               this.$message("已注册")
      //           }
      //   })
      // }
    },
    checkPWD() {
      const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){6,}$/;
      if (reg.test(this.password)) {
        this.send = true;
      } else {
        // document.getElementsByClassName('password')[0].className="active";
        this.$message("请设置6-16位登录密码，并且包含字母");
      }
    },
   checkPAS(){
     checkPass:{
           let password = this.password;
           let checkPass = this.checkPass;
             if(checkPass != password){
                   this.$message("输入的密码不一致");
                      this.send = false;
                }else{
                 
                }
     }
     
        },
        
    created() {
      this.$store.state.isok = true;
      console.log(this.state)
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
.register_agreement {
  font-size: 12px;
  color: #999999;
  height: 36px;
  line-height: 36px;
}
.jm_center {
  text-align: center;
}
</style>


