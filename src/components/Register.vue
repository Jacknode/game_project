<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="header">
          <span class="headerLeft">注册账户</span>
          <a href="javascript:;">登录</a>
          <span class="headerRight">我已注册, 现在就</span>
        </div>
        <div class="footer">
          <form action="">
            <tbody>
             <tr>
              <td class="formLeft">
                用户名
                <span style="color:red">*</span>
              </td>
              <td class="formRight">
                <input type="text" placeholder="请输入用户名">
              </td>
            </tr>
             <tr>
               <td class="formLeft">
                 密码
                 <span style="color:red">*</span>
               </td>
               <td class="formRight">
                 <input type="text" placeholder="请输入不少于8位的密码">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 确认密码
                 <span style="color:red">*</span>
               </td>
               <td class="formRight">
                 <input type="text" placeholder="请再次输入不少于8位的密码">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 真实姓名
                 <span style="color:red">*</span>
               </td>
               <td class="formRight">
                 <input type="text" placeholder="请输入您的真实姓名">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 手机号码
                 <span style="color:red">*</span>
               </td>
               <td class="formRight">
                 <input type="text" placeholder="请输入您的手机号">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
                 身份证号
                 <span style="color:red">*</span>
               </td>
               <td class="formRight">
                 <input type="text" placeholder="请输入18位身份证号">
               </td>
             </tr>
             <tr>
               <td class="formLeft">
               </td>
               <td class="formRight">
                 <input class="tdRadio" type="radio">
                 <span>我已仔细阅读并接受</span>
                 <a href="javascript:;">《用户使用协议》</a>
               </td>
             </tr>
             <tr>
               <td class="formLeft">
               </td>
               <td class="formRight">
                 <input class="register" type="button" value="注册">
               </td>
             </tr>
            </tbody>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getNewStr} from '@/assets/js/public'
  export default {
    name:'',
    data(){
      return {

      }
    },
    methods:[
//      userLogin(){},
    ],

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
