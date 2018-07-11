<template>
  <div>
    <div id="warp">
      <strong>当前位置： 首页 >> 公司介绍</strong>
      <div class="clearfix">
        <div class="aboutGame">
          <strong class="title">公司介绍</strong>
          <span>文章分类：游戏说明 | 网站编辑：| 发表时间：2018-03-29 | </span>
          <p>浙江龙公子旅游有限公司成立于2018年，是一家专注于提供最领先的移动游戏和娱乐产品的开发商、运营商和发行商，致力于为全球移动用户提供更好玩、更易用的移动游戏娱乐产品和在线服务，开拓全新的无线互动娱乐生活方式。</p>
          <p>公司创始人团队由一批业界资深的专业人士组成，拥有丰富的手机游戏、PC网络游戏开发和运营经验。</p>
          <p>公司从创立之初，就将打造顶级制作团队和精品游戏研发作为企业发展的核心和重点。围绕着创始人团队，龙公子汇聚了一批喜爱游戏，真正懂得游戏，愿意为创作高品质游戏全心投入的年轻人，并已成长为企业的中坚力量。</p>
          <p>浙江龙公子旅游有限公司将以“成为全球领先的移动网络游戏和娱乐产品的开发商和运营商，打造中国手机网络游戏的国际品牌”目标为指引，努力推陈出新，为全球游戏玩家奉献更多更好的原创手机网络游戏精品！</p>
        </div>
        <div class="recommendGame">
          <strong>相关文章</strong>
          <ul>
            <li v-for="item,index in urlList" @click="change(index)" :class="{active:index==n}">
              <router-link :to="item.to">> {{item.name}}</router-link>
            </li>
          </ul>
          <!--<router-link to="/Comment/GameDetails">+ 游戏下载</router-link>-->
          <!--&lt;!&ndash;<li><router-link to="/Comment/ParentsCare">充值中心</router-link></li>&ndash;&gt;-->
          <!--<router-link to="/Comment/UserAgr">+ 用户使用协议</router-link>-->
          <!--<router-link to="/Comment/ParentsCare">+ 家长监护</router-link>-->
          <!--<a href="JavaScript:;"> + 纠纷处理</a>-->
          <!--<a href="JavaScript:;"> + 防沉迷说明</a>-->
          <!--<a href="JavaScript:;"> + 公司介绍</a>-->
          <!--<a href="JavaScript:;"> + 家长监护</a>-->
          <span>猜你喜欢</span>
          <img width="122" height="92" src="http://uus-img7.android.d.cn/content_pic/201806/behpic/icon/23/1-82023/icon-1529032764251.png" alt="">
          <a href="javascript:;">神游记</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
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
        n:0
      }
    },
    methods: {
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
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  #warp {
    padding: 70px 0 100px 0;
    width: 1200px;
    margin: 0 auto;
  }

  #wrap > strong {
    display: block;
    font: 16px/40px "微软雅黑";
  }

  .aboutGame {
    width: 858px;
    padding: 40px 30px;
    border: 1px solid #dcdcdc;
    float: left;
    margin-top: 40px;

  }

  .title {
    display: block;
    text-align: center;
    font: 20px/2 "微软雅黑";
    padding: 20px 0 10px;
  }

  .aboutGame > span {
    text-align: center;
    display: block;
    font: 12px/2 "微软雅黑";
    color: #999;
  }

  .gameInfo {
    display: block;
    font: bold 18px/2 "微软雅黑";
    margin: 20px 0;
  }

  .pClass {
    text-indent: 2rem;
  }

  .aboutGame > p {
    font: 16px/1.5 "微软雅黑";
    color: rgb(102, 102, 102);
    text-indent: 2em;
  }

  .gamePic > strong {
    display: block;
    font: bold 18px/2 "\5FAE\8F6F\96C5\9ED1";
    margin: 20px 0;
  }

  .gamePL > img {
    float: left;
    width: 246px;
    margin: 0 9px;
  }

  .downNode {
    width: 300px;
    margin: 50px auto 20px;
  }

  .downNode a {
    color: #337ab7;
    font: 16px/68px "微软雅黑";
    display: inline-block;
    margin-top: 50px;
  }

  .downNode img {
    float: right;
  }

  .aboutGame > .footer {
    text-align: center;
  }

  .recommendGame {
    float: right;
    width: 245px;
  }

  .recommendGame > strong {
    display: block;
    height: 30px;
    line-height: 30px;
    margin: 20px 0 0 0;
    font-size: 16px;
    color: #666;
    padding: 0 5px;
  }

  .recommendGame ul li {
    color: #999;
    overflow: hidden;
    height: 22px;
    margin: 5px 0 5px 15px;
    display: block;
  }
  .recommendGame ul li a:hover{
    color: red;
  }

  .recommendGame > span {
    display: block;
    height: 31px;
    border-bototm: 1px solid #ccc;
    background: #e1e1e1;
    padding: 0 5px 0 10px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
  }

  .recommendGame > img {
    display: block;
    margin: 10px auto;
  }
</style>
