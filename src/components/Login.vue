<template>
  <div>
    <div class="container">
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
            <input type="text" class="input1" name="username" placeholder="请输入用户名" v-model="options.gm_UserKey">
            <span></span>
          </td>
        </tr>
        <tr>
          <td class="tdLeft">密码：</td>
          <td class="tdRight">
            <input type="password" class="input1" name="password" placeholder="请输入密码"
                   v-model="options.gm_ui_Password">
            <span></span>
          </td>
        </tr>
        <tr>
          <td class="tdLeft"></td>
          <td class="tdRight">
            <input class="loginButton" type="submit" value="登录" @click="submit">
            <span></span>
          </td>
        </tr>
        <tr>
          <td class="tdLeft"></td>
          <td class="tdRight lastTd">没有帐号？
            <a href="javascript:;" class="rightRej" @click="Register">立即注册</a>
            <!--<router-link to="/Register" class="rightRej">立即注册</router-link>-->
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import {getNewStr, postPromise} from '@/assets/js/public'
  export default {
    name: '',
    data(){
      return {
        options: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "gm_UserKey": "",//用户名或手机号或邮箱
          "gm_ui_Password": "",//用密码
        },
        inputtext: {}
      }
    },
    methods: {
      submit(){
        postPromise(getNewStr + '/GmUserInfo/GmLogin', this.options)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            alert(data.resultcontent)
            this.$router.push({name:'Home'})

          } else {
            alert(data.resultcontent)
          }
        })
      },
      Register(){
        const {href} = this.$router.resolve({
          name: 'Register',
        });
        window.open(href, '_blank')
      }
    },
  }
</script>
<style>
  .container {
    margin: 0 auto;
    width: 1200px;
    height: 600px;
    padding-left: 650px;
    background: url(../assets/img/login_bg.jpg) no-repeat left center;
    min-height: 600px;
    padding-top: 100px;
  }

  .tdLeft {
    width: 80px;
    text-align: right;
  }

  .tdRight {
    width: 370px;
  }

  input {
    font: inherit;
  }

  .tdRight > .input1 {
    width: 352px;
    height: 40px;
    border: 1px solid #dddddd;
    padding: 0 10px;
    line-height: 20px;
    color: #a7a7a7;
    margin: 5px auto;
  }

  .accountLogin {
    height: 62px;
    padding: 0 5px;
    color: #666;
    font-size: 18px;
    text-align: center;
  }

  .loginTable > tr {
    /*padding:10px auto;*/
  }

  .loginTable > tr > td {
    height: 62px;
    padding: 0 5px;
    color: #666;
  }

  .loginButton {
    width: 352px;
    height: 47px;
    border: none;
    background: #0baefd;
    color: #fff;
    border-radius: 2px;
    font-size: 18px;
  }

  .rightRej {
    color: #337ab7;
    display: inline-block;
  }

  .lastTd {
    text-align: right;
    padding-top: 50px;
    padding-right: 20px;
  }

</style>
