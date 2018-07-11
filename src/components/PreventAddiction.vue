<template>
  <div>
    <div id="warp">
      <strong>当前位置： 首页 >> 防沉迷说明</strong>
      <div class="clearfix">
        <div class="aboutGame">
          <strong class="title">防沉迷说明</strong>
          <span>文章分类：游戏说明 | 网站编辑：| 发表时间：2018-04-03 | </span>
          <p>保护未成年人身心健康，未满18岁的用户将受到防沉迷系统的限制：</p>
          <p>游戏过程，会提示您的累计在线时间。</p>
          <p>累计游戏时间超过3小时，游戏收益（经验，金钱）减半。</p>
          <p>累计游戏时间超过5小时，游戏收益为0。</p>
        </div>
        <div class="recommendGame">
          <strong>相关文章</strong>
          <a href="JavaScript:;"> + 公司介绍</a>
          <a href="JavaScript:;"> + 用户使用协议</a>
          <a href="JavaScript:;"> + 防赌博说明</a>
          <a href="JavaScript:;"> + 纠纷处理</a>
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
    margin-bottom: 30px;
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
