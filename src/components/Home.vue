<template>
  <div>
    <div id="wrap">
      <div class="imgBox">
        <img src="http://img1.ali213.net/webgamepic/ztpic_b/2013-07-15/137385541241370.jpg" width="100%"
             height="400">
        <img src="http://images.enet.com.cn/egames/articleimage/201304/20130415011149246.jpg" width="100%" height="400">
        <img src="http://img5.imgtn.bdimg.com/it/u=3633531759,2636903706&fm=27&gp=0.jpg" width="100%" height="400">
        <img src="http://img4.imgtn.bdimg.com/it/u=3347714591,701277893&fm=27&gp=0.jpg" width="100%" height="400">
      </div>
      <div class="title">
        <strong>游戏下载</strong>
      </div>
      <div class="gameCon">
        <div class="gameC">
          <!--<strong >神游记</strong>-->
          <a href="https://qiankevideo.oss-cn-hangzhou.aliyuncs.com/syj_1529032764249.apk">神游记</a>
          <div class="aboutG">
            <span>游戏说明</span>
            <em>|</em>
            <span>2018-03-29</span>
          </div>
          <p>
            游戏介绍：神游记以抵抗来至地球以外的入侵者进攻为游戏背景，小伙伴们勇敢的驾驶着自己的战机和外星人进行对抗，途中充满了
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  #wrap {
    overflow: hidden;
  }
  .title {
    padding-top: 71px;
    text-align: center;
    font: 40px/59px "微软雅黑";
    border-bottom: 1px solid #e4e4e4;
  }

  .title > strong {
    display: inline-block;
    border-bottom: 2px solid #989898;
    padding-bottom: 10px;
    margin-bottom: -2px;
  }

  .gameCon {
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0 50px 0;
  }

  .gameC {
    width: 373px;
    height: 242px;
    padding: 20px 20px 0 25px;
    background-color: #f9f9f9;
  }

  .gameC > a {
    color: #0baefd;
    font: 16px/34px "微软雅黑";
  }

  .aboutG {
    font: 12px/31px "微软雅黑";
    color: #868686;
    margin: 10px 0;
  }

  .gameC > p {
    font: 14px/21px "微软雅黑";
    color: #4d4d4d;
  }

  .imgBox {
    width: 400%;
    height:400px;
    animation: myfirst 10s infinite;
  }

  .imgBox > img {
    width: 25%;
    float: left;
  }

  @keyframes myfirst
  {
    20% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-25%);
    }
    45% {
      transform: translateX(-25%);
    }
    50% {
      transform: translateX(-50%);
    }
    70% {
      transform: translateX(-50%);
    }
    75% {
      transform: translateX(-75%);
    }
    95% {
      transform: translateX(-75%);
    }
    100% {
      transform: translateX(0);
    }
  }

</style>
