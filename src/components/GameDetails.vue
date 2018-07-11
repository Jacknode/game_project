<template>
  <div>
    <div id="warp">
      <strong>当前位置： 首页 >> 神游记</strong>
      <div class="clearfix">
        <div class="aboutGame">
          <strong class="title">神游记</strong>
          <span>文章分类：游戏说明 | 网站编辑：| 发表时间：2018-03-29 | </span>
          <strong class="gameInfo">游戏介绍：</strong>
          <p class="pClass">《神游记》的世界里充满了无限期待与挑战，以境界为核心的成长路线，伴随着自身的坐骑、神装、武器、法阵、仙羽与仙侣的法座、幻装、灵弓、羽翼、宝器等十大酷炫外形培养系统逐步开启。多重副本与竞技玩法，收集各种材料针对性培养。四种套装独立穿着，完全实现装备基本靠爆。</p>
          <p class="pClass">神游记专为广大喜爱无限期待与挑战的玩家量身打造。将爽快收于指掌之间，瞬间变身成为排行棒里的“大红人”。</p>
          <p>----星球的天外来客----</p>
          <p>
            掠夺者盯上了美丽而富饶的地球。入侵者派出了蝗虫般的邪恶战机日夜攻击。在对方压倒性的科技军事力量下，地球联邦军节节败退，最终决定尽全力开发可以抗衡外星技术的雷电战机，三位最优秀的精英。驾驶着战机，向敌人的总部发起了冲击！</p>
          <p>丰富的图鉴收集系统与宠物养成满足更类型需求。在修仙中不断进阶，傲视群仙，独占鳌头！</p>
          <p>※排行榜只为英雄准备，和全球玩家比成绩吧！</p>
          <p>※成就多多----挑战成功还会有意外收获哦。</p>
          <p>※配件系统的养成参战让你在游戏中将远离孤独，寂寞。你绝不是一个人在战斗！</p>
          <div class="gamePic">
            <strong>游戏截图：</strong>
            <div class="gamePL clearfix">
              <img
                src="http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764254_360x640.jpg"
                alt="">
              <img
                src="http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764253_360x640.jpg"
                alt="">
              <img
                src="http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764250_360x640.jpg"
                alt="">
            </div>
          </div>
          <div class="downNode clearfix">
            <a href="https://qiankevideo.oss-cn-hangzhou.aliyuncs.com/syj_1529032764249.apk">点击下载 <img
              src="https://www.lgz18.com/attachment/images/1/2018/04/Vk6DgGA9g99l5dU5D5DGgl6dl39lZl.jpg" width="66"
              height="68"></a>
            <img width="166" height="166"
                 src="../assets/img/qrode.png">
          </div>
          <p class="footer">（本游戏只适用安卓手机，二维码请使用浏览器、QQ或其他应用商店扫描）</p>
        </div>
        <div class="recommendGame">
          <strong>相关文章</strong>
          <router-link to="/Comment/ParentsCare">+ 首页</router-link>
          <router-link to="/Comment/CompanyIntroduce">+ 公司介绍</router-link>
          <!--<li><router-link to="/Comment/ParentsCare">充值中心</router-link></li>-->
          <router-link to="/Comment/UserAgr">+ 用户使用协议</router-link>
          <router-link to="/Comment/ParentsCare">+ 家长监护</router-link>
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
      return {}
    },
    methods: {
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
    color: rgb(102, 102, 102)
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
