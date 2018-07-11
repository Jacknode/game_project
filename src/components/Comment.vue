<template>
	<div>
    <div>
      <header>
        <div class="headBox">
          <ul class="navBox">

            <li><a href="javascript:;"><img src="http://www.lgz18.com/attachment/images/1/2018/03/VeQx4NqNUAhY2beqHn4ENNwNybnZSa.png" alt="" width="100" height="100"></a></li>
            <li v-for="item,index in urlList" @click="change(index)" :class="{active:index==n}">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
            <!--<li><router-link to="/Comment/ParentsCare">首页</router-link></li>-->
            <!--<li><router-link to="/Comment/CompanyIntroduce">公司介绍</router-link></li>-->
            <!--<li><router-link to="/Comment/GameDetails">游戏下载</router-link></li>-->
            <!--&lt;!&ndash;<li><router-link to="/Comment/ParentsCare">充值中心</router-link></li>&ndash;&gt;-->
            <!--<li><router-link to="/Comment/UserAgr">用户使用协议</router-link></li>-->
            <!--<li><router-link to="/Comment/ParentsCare">家长监护</router-link></li>-->
            <!--<li><router-link to="/Comment/ParentsCare">联系我们</router-link></li>-->
            <!--<li v-for="item in headerNavList"><a href="javascript:;">{{item.name}}</a></li>-->
            <li>本游戏适合18岁 (含) 以上玩家进入</li>
          </ul>
          <div class="loginBox">
            <ul>
              <li class="login">
                <router-link to="/Login">登录</router-link>
                <!--<a href="javascript:;">登录</a>-->
              </li>
              <li class="register">
                <router-link to="/Register">注册</router-link>
              </li>
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
            <li v-for="item,index in urlList" @click="change(index)" :class="{active:index==n}">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
            <!--<li><a href="javascript:;">首页</a></li>-->
            <!--<li><a href="javascript:;">公司介绍</a></li>-->
            <!--<li><a href="javascript:;">游戏下载</a></li>-->
            <!--<li><a href="javascript:;">充值中心</a></li>-->
            <!--<li><a href="javascript:;">纠纷处理</a></li>-->
            <!--<li><a href="javascript:;">用户使用协议</a></li>-->
            <!--<li><a href="javascript:;">家长监护</a></li>-->
            <!--<li><a href="javascript:;">联系我们</a></li>-->
          </ul>
          <div class="rightGo">
            <a href="javascript:;" @click="goTop">返回顶部</a>
          </div>
        </div>
      </div>
      <div class="footerBot">
        <div class="footerBotCont">
          <div class="footerContLeft">
            <p style="text-align: center;">
              <a href="javascript:;" target="_blank" textvalue="防赌博说明 ">防赌博说明 </a> | <a href="javascript:;" target="_blank" textvalue="防沉迷说明">防沉迷说明</a></p>
            <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防受骗上当。</p>
            <p>适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
            <p>2018@浙江龙公子旅游有限公司 版权所有，浙江龙公子旅游有限公司</p>
            <p>浙ICP备18008465号-1   联系方式:0576-88224545</p>
          </div>
          <div class="footerContMiddle">
            <strong>0576-88224545</strong>
            <p>9:00~15:00</p>
            <a href="javascript:;" target="_blank" class="kefu">QQ在线客服</a>
          </div>
          <div class="footerContRight">
            <img src="../assets/img/erweima.jpg" alt="" style="width:125px;height:125px;">
            <span>扫描添加</span>
            <span>公众微信平台</span>
          </div>
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
		    urlList:[
          {
            name:'首页',
            to:'/'
          },
          {
            name:'公司介绍',
            to:'/Comment/CompanyIntroduce'
          },
          {
            name:'游戏下载',
            to:'/Comment/GameDetails'
          },
          {
            name:'用户使用协议',
            to:'/Comment/UserAgr'
          },
          {
            name:'家长监护',
            to:'/Comment/ParentsCare'
          }
        ],
		    n:0,
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
      }
    },
    created(){
      this.n = JSON.parse(sessionStorage.getItem('commentNavNum'));
    },
    methods:{
      toTab(index){
        let commentNavNum = JSON.parse(sessionStorage.getItem('indexNumber'));
        sessionStorage.setItem('commentNavNum', index);
        this.n = JSON.parse(sessionStorage.getItem('commentNavNum'));
      },
      change(index){
        this.toTab(index)
        setTimeout(()=>{
          window.location.reload()
        },100)
      },
      menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      },
      //返回顶部
      goTop(){
        if($(document).scrollTop()>300){
          let timer = setInterval(()=>{
            $(document).scrollTop( $(document).scrollTop()-100)
            if($(document).scrollTop()<=0){
              clearInterval(timer)
            }
          },10)
          this.isTop = false
        }
      },
    },
    mounted(){
      window.addEventListener('scroll', this.menu)
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
  .navBox>li.active a{
    color: #00aeff;
  }
  .navBox>li>a:hover{
    color: #00aeff;
  }
  .navBox>li:nth-child(1)>a{
    display: block;
    width: 100px;
    height:100px;
    /*background-color: blue;*/
    margin-top: -50px;
  }
  /*.navBox>li:nth-child(2)>a{*/
    /*color: #00aeff;*/
  /*}*/
  /*.navBox>li:nth-last-child(1){*/
    /*color: rgb(150, 150, 150);*/
    /*height: 30px;*/
    /*text-align: center;*/
    /*line-height: 30px;*/
    /*font-size: 14px;*/
  /*}*/
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
  .footerContLeft{
    width:581px;
    text-align: center;
    margin-top: 50px;
    border-right:1px solid #595959;
    float: left;
  }
  .footerContLeft>p{
    margin-bottom:5px;
    font-size: 12px;
    color: #5b5a58;
  }
  .footerContLeft>p>a{
    color: #337ab7;
    font-size: 12px;
    display: inline-block;
  }
  .footerContMiddle{
    width: 289px;
    float: left;
    padding-left: 45px;
    padding-top: 30px;
  }
  .footerContMiddle>strong{
    height: 40px;
    font-size: 30px;
    color: #5d5c5a;
    line-height: 40px;
    padding-bottom: 10px;
  }
  .footerContMiddle>p{
    font-size: 12px;
    color: #5b5a58;
    margin:10px 0;
  }
  .kefu {
    width: 116px;
    height: 30px;
    display: block;
    background: #016fba;
    color: #fff;
    line-height: 30px;
    text-align: center;
  }
  .footerContRight{
    float: right;
    margin-right: 70px;
    width: 163px;
    height:207px;
    background: #3d4144;
    text-align: center;
  }
  .footerContRight>img{
    margin-top:20px;
  }
  .footerContRight>span{
    margin-top:5px;
    display: block;
    text-align: center;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #fff;
  }
</style>
