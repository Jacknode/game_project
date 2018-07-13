<template>
  <div>
    <div id="warp">
      <strong>当前位置： 首页 >> 防赌博说明</strong>
      <div class="clearfix">
        <div class="aboutGame">
          <strong class="title">防赌博说明</strong>
          <span class="span1">文章分类：游戏说明 | 网站编辑：| 发表时间：2018-04-03 | </span>
          <p>龙乐币： </p>
          <span>龙乐币是龙公子旅游有限公司发行指定和唯一的虚拟货币。不能参与游戏结算。不能够交易、转让，且游戏中没有开放或设有对龙乐币进行交易、转让的功能。该道具不可以兑换实物奖品，且游戏官方不进行任何形式兑换或回收。</span>
          <p>充值限制： </p>
          <span>对每个账号的每天充值进行限制，每个账号每天通过网银、充值卡等有效的支付方式进行充值时，其金额总和限制为人民币0-3000元整，如果账号超过该限制范围，则当日该账号将不能够通过任何方式进行游戏充值。</span>
          <p>防沉迷游戏时间设置：</p>
          <span>对每个账号每天游戏时间进行限制(含所有账号)，每个账号每天游戏时间限制为0-5小时，如账号游戏时间超过该限制范围，则当日该账号将不能再继续进行游戏。</span>
          <p>游戏中禁止游戏币交易或贩卖行为，主要方式如下：</p>
          <span>1、游戏房间内5分钟/次发送循环系统消息对游戏所有用户进行"严禁交易龙乐币、严禁利用龙公子旅游有限公司赌博"的相关内容的提醒，并提倡绿色游戏，合理安排休闲时间，倡导健康娱乐生活。</span>
          <span>2、屏蔽有关"龙乐币交易、贩卖"等相关字样内容的消息发布以及有关"政治、淫秽、反党反社会"等内容的消息；如发现利用技术手段或其他语言绕过屏蔽限制，发送有关"龙乐币交易、贩卖"内容以及有关"政治、淫秽、反党反社会"内容的账号，将对该账号进行永久封号处理，情节严重者将上报公安机关。</span>
          <span>3、游戏账号昵称内容中带有"龙乐币、交易、银商、网银、银库、倒卖"等相关字样，以及带有 QQ号、电话号等联系方式字样的游戏账号直接进行永久封停处理，并扣除其所有龙乐币。</span>
          <span>4、根据用户的举报和管理人员发现的倒卖龙乐币的账号信息，将其QQ号等联系方式以及银行账号等（此信息通过用户举报）不定期的提供给龙公子旅游有限公司充值的销售单位及经销商，并正式书面告知其不允许对与提供的信息相符的个人或团体销售龙乐币，如发现经销商违背告知内容，将封停该经销商所有的龙乐币，解除合作关系，并上报公安机关。</span>
        </div>
        <div class="recommendGame">
          <strong>相关文章</strong>
          <ul>
            <li v-for="item,index in urlList" @click="change(index)" :class="{active:index==n}">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
          </ul>
          <!--<a href="JavaScript:;"> + 家长监护</a>-->
          <!--<a href="JavaScript:;"> + 用户使用协议</a>-->
          <!--<a href="JavaScript:;"> + 防赌博说明</a>-->
          <!--<a href="JavaScript:;"> + 公司介绍</a>-->
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

  .aboutGame > .span1 {
    text-align: center;
    display: block;
    font: 12px/2 "微软雅黑";
    color: #999;
    margin-bottom: 30px;
  }

  .aboutGame > p {
    font: bold 16px/1.5 "微软雅黑";
    color: #000;
    margin: 10px 0;
  }

  .aboutGame > span {
    font: 14px/1.5 "微软雅黑";
    margin: 20px 0;
    display: block;
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

  .recommendGame > a {
    color: #999;
    overflow: hidden;
    height: 22px;
    display: block;
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
