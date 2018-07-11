<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="header">
          <span class="headerLeft">注册账户</span>
          <router-link to="Login">登录</router-link>
          <span class="headerRight">我已注册, 现在就</span>
        </div>
        <div class="footer">
            <table>
            <tbody>
             <tr>
              <td class="formLeft">
                用户名
                <!--<span style="color:red">*</span>-->
              </td>
              <td class="formRight">
                <input type="text" v-model="addOptions.data.gm_ui_Name">
              </td>
            </tr>
             <tr>
               <td class="formLeft">
                 密码
                 <!--<span style="color:red">*</span>-->
               </td>
               <td class="formRight">
                 <input type="text" v-model="addOptions.data.gm_ui_Password">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 确认密码
                 <!--<span style="color:red">*</span>-->
               </td>
               <td class="formRight">
                 <input type="text" v-model="addOptions.data.isPassword">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 手机号码
                 <!--<span style="color:red">*</span>-->
               </td>
               <td class="formRight">
                 <input type="text" v-model="addOptions.data.gm_ui_Phone">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 邮箱
                 <!--<span style="color:red">*</span>-->
               </td>
               <td class="formRight">
                 <input type="text" v-model="addOptions.data.gm_ui_Email">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 身份证号
                 <!--<span style="color:red">*</span>-->
               </td>
               <td class="formRight">
                 <input type="text"  v-model="addOptions.data.gm_ui_CertNo">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
               </td>
               <td class="formRight">
                 <input class="tdRadio" type="radio">
                 <span>我已仔细阅读并接受</span>
                 <router-link to="/Comment/UserAgr">《用户使用协议》</router-link>
               </td>
             </tr>
             <tr>
               <td class="formLeft">
               </td>
               <td class="formRight">
                 <input class="register" type="button" value="注册" @click="register">
               </td>
             </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {postPromise,getNewStr} from '@/assets/js/public'
  export default {
    name:'',
    data(){
      return {
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            isPassword:'',
            "gm_ui_Name": "",//用户名
            "gm_ui_Password": "",//密码
            "gm_ui_Phone": "",//手机号
            "gm_ui_CertNo": "",//身份证号
            "gm_ui_Email": "",//邮箱
          }
        }
      }
    },
    methods:{
      register(){
        if(this.addOptions.data.isPassword!==this.addOptions.data.gm_ui_Password){
          alert('两次密码不一致')
          return
        }
        delete this.addOptions.data.isPassword
        postPromise(getNewStr+'/GmUserInfo/Insert',this.addOptions)
          .then(data=>{
            var data = JSON.parse(data);
            if(Number(data.resultcode)==200){
              alert(data.resultcontent)
              const {href} = this.$router.resolve({
                name: 'Login',
              });
              window.open(href, '_blank')
//              this.$router.push({name:'Login'})
            }else {
              alert(data.resultcontent)
            }
          })
      }
    }
  }
</script>
<style>
  .container{
    margin:0 auto;
    width:1200px;
    height:634px;
    /*background-color: rosybrown;*/
    padding:20px 20px;
  }
  .header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
  }
  .headerRight{
    float: right;
  }
  .header>a{
    display: inline-block;
    float: right;
    color: #337ab7;
  }
  .footer{
    padding-top: 30px;
  }
  .formRight>input{
    width: 352px;
    height: 40px;
    border: 1px solid #dddddd;
    padding: 0 10px;
    line-height: 20px;
    color: #a7a7a7;
    margin:10px 0;
  }
  form{
    margin:0 auto;
    /*text-align: center;*/
    width:450px;
    /*padding-top:50px;*/
  }
  from>tbody>tr>td{
    /*margin-top:50px;*/
  }
  .formRight>.tdRadio{
    height:15px;
    width:15px;
  }
  .formRight>a{
    color: #337ab7;
    display: inline-block;
  }
  .formRight>.register{
    width: 352px;
    height: 47px;
    border: none;
    background: #0baefd;
    color: white;
    border-radius: 2px;
    font-size: 18px;
  }
</style>
