<template>
  <div>
    <div id="warp">
      <strong>当前位置： 首页 >> 家长监护</strong>
      <div class="clearfix">
        <div class="aboutGame">
          <strong class="title">家长监护</strong>
          <span>文章分类：家长监护|网站编辑：|发表时间：2018-04-13|</span>
          <p> "网络游戏未成年人家长监护工程"是一项由浙江小飞象网络科技有限公司根据国家有关规定而发起的一个项目，由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。</p>
          <p><strong class="title">《未成年人健康参与网络游戏提示》</strong></p>
          <p> 随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：</p>
          <p>
            <strong>一、</strong>
            主动控制游戏时间。游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。
          </p>
          <p>
            <strong>二、</strong>
            不参与可能耗费较多时间的游戏设置。不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。
          </p>
          <p>
            <strong>三、</strong>
            不要将游戏当作精神寄托。尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。
          </p>
          <p>
            <strong>四、</strong>
            养成积极健康的游戏心态。克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。
          </p>
          <p>
            <strong>五、</strong>
            注意保护个人信息。包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。
          </p>
          <p><strong class="title">家长监护申请流程</strong></p>
          <p>家长监护系统充分考虑家长的实际需求，当家长发现自己的孩子玩游戏过于沉迷的时候，由家长提供合法的监护人资质证明、游戏名称账号、以及家长对于限制强度的愿望等信息，可对处于孩子游戏沉迷状态的账号采取几种限制措施，解决未成年人沉迷网游的不良现象，如限制孩子每天玩游戏的时间区间和长度，也可以限制只有周末才可以游戏，或者完全禁止。</p>
          <img src="../assets/img/jiaZhangJianHuPic.jpg" alt="">
          <p><strong class="title">家长监护进度查询</strong></p>
          <p> 如果您已经申请家长监护服务，您可以通过我们的客户服务进行查询，了解您所提交的服务申请最新处理进展，如：传真是否收到，是否需要后续提交信息，账号是否已经进行处理等。服务期间，如果您对需要提交的信息或者处理结果有疑问，或者其他任何问题，您均可以随时联系我们，我们将由专门负责的客服主管为您提供咨询解答服务，或者配合、指导您解决问题。</p>
          <p><strong class="title">监护通道</strong></p>
          <p> 如果您已经申请家长监护服务，您可以通过我们的客户服务进行查询，了解您所提交的服务申请最新处理进展，如：传真是否收到，是否需要后续提交信息，账号是否已经进行处理等。服务期间，如果您对需要提交的信息或者处理结果有疑问，或者其他任何问题，您均可以随时联系我们，我们将由专门负责的客服主管为您提供咨询解答服务，或者配合、指导您解决问题。</p>
          <p><span>公司名称：浙江小飞象网络科技有限公司</span></p>
          <p><span>公司地址：浙江省台州市椒江市府大道618号浙江大学台州研究院3号楼206</span></p>
          <!--<p><span>邮编：318000</span></p>-->
          <p><span>联系人：颜先生</span></p>
          <p><span>联系电话：0576-88227789</span></p>
          <p class="lastP">
            <a class="a1" href="https://lgz18.com/jzjh.zip">
              <img src="https://www.lgz18.com/attachment/images/1/2018/04/Czce4e88E88jeTDeM6838zMdMD989E.jpg" width="146" alt="家长监护工程.jpg" height="33" style="width: 146px; height: 33px;">
            </a>
            <a class="a2" href="https://lgz18.com/jzjh.zip" target="_self">点击下载</a>
            （被监护人信息表明书、家长监护申请书和监护人信息表明书）
          </p>
        </div>
        <div class="recommendGame">
          <strong>相关文章</strong>
          <ul>
            <li v-for="item,index in urlList" @click="change(index)" :class="{active:index==n}">
              <router-link :to="item.to">> {{item.name}}</router-link>
            </li>
          </ul>
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
        n:0,
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
  .aboutGame>img{
    display: block;
    margin:0 auto;
  }

  .title {
    display: block;
    text-align: center;
    font: 20px/2 "微软雅黑";
    padding: 20px 0 10px;
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
  .aboutGame > p > strong{
    text-align: left;
    margin-left:-2rem;
    font-weight: 700;
    font-size: 16px;
    color: #333;
  }
  .aboutGame > p > span{
    display: block;
    text-align: left;
    margin-left:-2rem;
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
  .lastP{
    line-height:33px;
    text-align: left;
    font-size: 14px;
  }
  .lastP>a{
    display: block;
    float: left;
    color: #337ab7;
    font-size: 14px;
    margin : 0 auto 0 -2rem;
    text-align: left;
    line-height:33px;
  }

</style>
