<template>
	<div>
    <div>
      <header>
        <div class="headBox">
          <ul class="navBox">
            <li><a href="javascript:;"><img src="" alt=""></a></li>
            <li v-for="item in headerNavList"><a href="javascript:;">{{item.name}}</a></li>
            <li>本游戏适合18岁 (含) 以上玩家进入</li>
          </ul>
          <div class="loginBox">
            <ul>
              <li class="login"><a href="javascript:;">登录</a></li>
              <li class="register"><a href="javascript:;">注册</a></li>
            </ul>
          </div>
        </div>
      </header>
      <hr style="height:10px;width:100%;border:none;border-top:10px groove skyblue;">
    </div>
      <keep-alive>
        <router-view name="User"></router-view>
      </keep-alive>
    <footer>
      <div class="footerTop">
        <div class="footerNav">
          <ul>
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">公司介绍</a></li>
            <li><a href="javascript:;">游戏下载</a></li>
            <li><a href="javascript:;">充值中心</a></li>
            <li><a href="javascript:;">纠纷处理</a></li>
            <li><a href="javascript:;">用户使用协议</a></li>
            <li><a href="javascript:;">家长监护</a></li>
            <li><a href="javascript:;">联系我们</a></li>
          </ul>
          <div class="rightGo">
            <a href="javascript:;">返回顶部</a>
          </div>
        </div>
      </div>
      <div class="footerBot">
        <div class="footerBotCont">
          <div class="footerContLeft"></div>
          <div class="footerContMiddle"></div>
          <div class="footerContRight"></div>
        </div>
      </div>
    </footer>
	</div>
</template>

<script>
	export default{
		name:'',
    data(){
		  return {
		    //导航菜单列表
        headerNavList:[
          {name:'首页'},
          {name:'公司介绍'},
          {name:'游戏下载'},
          {name:'充值中心'},
          {name:'用户使用协议'},
          {name:'家长监护'},
          {name:'联系我们'},
        ],
        //底部导航菜单列表
        botNavList:[
          {name:'首页'},
          {name:'公司介绍'},
          {name:'游戏下载'},
          {name:'充值中心'},
          {name:'纠纷处理'},
          {name:'用户使用协议'},
          {name:'家长监护'},
          {name:'联系我们'},
        ],
      }
    }
	}
</script>
<style type="text/css">
  .navBox{
    /*background-color: red;*/
    width: 1200px;
    margin:60px auto 0;
    height: 30px;
    /*padding-left: 60px;*/
    position: relative;
  }
  .navBox>li{
    /*background-color: violet;*/
    float: left;
    margin-right: 40px;
  }
  .navBox>li>a{
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .navBox>li>a:hover{
    color: #00aeff;
  }
  .navBox>li:nth-child(1)>a{
    display: block;
    width: 100px;
    height:100px;
    background-color: blue;
    margin-top: -50px;
  }
  .navBox>li:nth-child(2)>a{
    color: #00aeff;
  }
  .navBox>li:nth-last-child(1){
    color: rgb(150, 150, 150);
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
  }
  .loginBox{
    /*width:200px;*/
    height: 30px;
    /*background-color: royalblue;*/
    float: right;
    margin-right: 150px;
  }
  .loginBox>ul>li{
    float: left;
    width:60px;
    /*background-color: bisque;*/
    margin-right: 50px;
  }
  .loginBox>ul>li>a{
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .headBox{
    /*background-color: olivedrab;*/
    width: 1200px;
    margin:0 auto 100px;
  }
  .register>a{
    display: block;
    background: #00aeff;
    color: #fff;
    border-radius: 5px;
  }
  footer{
    height: 270px;
    /*background-color: silver;*/
    background-color: #323639;
  }
  footer>.footerTop{
    /*height: 63px;*/
    background: #282d30;
  }
  .footerNav{
    height: 63px;
    width: 1200px;
    /*background-color: silver;*/
    margin: 0 auto;
  }
  footer>.footerTop{
    /*height: 63px;*/
    /*background: #323639;*/
  }
  .footerBotCont{
    width: 1200px;
    /*background-color: silver;*/
    margin: 0 auto;
    height:207px;
  }
  .footerNav{

  }
  .footerNav>ul{
    background-color: red;
  }
  .footerNav>ul>li{
    float: left;
    margin-right: 30px;
  }
  .footerNav>ul>li>a{
    margin-top:20px;
    width: 84px;
    height: 16px;
    display: block;
    float: left;
    font-size: 14px;
    color: #cacaca;
    border-left: 1px solid #cacaca;
    text-align: center;
    line-height: 16px;
  }
  .rightGo{
    float: right;
    margin-right: 70px;
  }
  .rightGo>a{
    height: 63px;
    width: 163px;
    background: #0baefd;
    color: #fff;
    display: block;
    text-align: center;
    line-height: 63px;
  }
</style>
