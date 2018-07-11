<template>
  <div>
    <div class="container">
      <form action="" method="post" @submit.prevent="submit">
        <table class="loginTable">
          <tbody>
          <tr>
            <td class="tdLeft"></td>
            <td class="accountLogin tdRight">
              帐号登录
            </td>
          </tr>
          <tr>
            <td class="tdLeft">用户名：</td>
            <td class="tdRight">
              <input type="text" class="input1" name="username"placeholder="请输入用户名" value="">
              <span></span>
            </td>
          </tr>
          <tr>
            <td class="tdLeft">密码：</td>
            <td class="tdRight">
              <input type="password" class="input1" name="password"  placeholder="请输入密码" value="">
              <span></span>
            </td>
          </tr>
          <tr>
            <td class="tdLeft"></td>
            <td class="tdRight">
              <input class="loginButton" type="submit" value="登录">
              <span></span>
            </td>
          </tr>
          <tr>
            <td class="tdLeft"></td>
            <td class="tdRight lastTd">没有帐号？<a class="rightRej" href="javascript:;">立即注册</a></td>
          </tr>

          </tbody></table>
      </form>
    </div>
  </div>
</template>
<script>
  import {getNewStr} from '@/assets/js/public'
  export default {
    name:'',
    data(){
      return {
        inputtext:{}
      }
    },
    methods:{
      submit:function () {
        let loginOption = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "gm_UserKey": "",//用户名或手机号或邮箱
          "gm_ui_Password": "",//用密码
        };
//        this.$store.dispatch('initStoreProductData', loginOption)
      },





       },


  }
</script>
<style>
  .container{
    margin:0 auto;
    width:1200px;
    height:600px;
    padding-left: 650px;
    background: url(../assets/img/login_bg.jpg) no-repeat left center ;
    min-height: 600px;
    padding-top: 100px;
  }
  .tdLeft{
    width: 80px;
    text-align: right;
  }
  .tdRight{
    width: 370px;
  }
  input{
    font: inherit;
  }
  .tdRight>.input1{
    width: 352px;
    height: 40px;
    border: 1px solid #dddddd;
    padding: 0 10px;
    line-height: 20px;
    color: #a7a7a7;
    margin: 5px auto;
  }
  .accountLogin{
    height: 62px;
    padding: 0 5px;
    color: #666;
    font-size: 18px;
    text-align: center;
  }
  .loginTable>tr{
    /*padding:10px auto;*/
  }
  .loginTable>tr>td{
    height: 62px;
    padding: 0 5px;
    color: #666;
  }
  .loginButton{
    width: 352px;
    height: 47px;
    border: none;
    background: #0baefd;
    color: #fff;
    border-radius: 2px;
    font-size: 18px;
  }
  .rightRej{
    color: #337ab7;
    display: inline-block;
  }
  .lastTd{
    text-align: right;
    padding-top:50px;
    padding-right:20px;
  }

</style>
