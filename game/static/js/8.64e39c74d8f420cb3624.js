webpackJsonp([8],{"6ina":function(t,g,s){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var n={data:function(){return{urlList:[{name:"首页",to:"/"},{name:"公司介绍",to:"/Comment/CompanyIntroduce"},{name:"游戏下载",to:"/Comment/GameDetails"},{name:"用户使用协议",to:"/Comment/UserAgr"},{name:"家长监护",to:"/Comment/ParentsCare"}],n:0}},methods:{toTab:function(t){JSON.parse(sessionStorage.getItem("indexNumber"));sessionStorage.setItem("commentNavNum",t),this.n=JSON.parse(sessionStorage.getItem("commentNavNum"))},change:function(t){this.toTab(t),setTimeout(function(){window.location.reload()},100)},initData:function(){},search:function(){this.initData()}}},e={render:function(){var t=this,g=t.$createElement,s=t._self._c||g;return s("div",[s("div",{attrs:{id:"warp"}},[s("strong",[t._v("当前位置： 首页 >> 神游记")]),t._v(" "),s("div",{staticClass:"clearfix"},[t._m(0),t._v(" "),s("div",{staticClass:"recommendGame"},[s("strong",[t._v("相关文章")]),t._v(" "),s("ul",t._l(t.urlList,function(g,n){return s("li",{class:{active:n==t.n},on:{click:function(g){t.change(n)}}},[s("router-link",{attrs:{to:g.to}},[t._v("> "+t._s(g.name))])],1)})),t._v(" "),s("span",[t._v("猜你喜欢")]),t._v(" "),s("img",{attrs:{width:"122",height:"92",src:"http://uus-img7.android.d.cn/content_pic/201806/behpic/icon/23/1-82023/icon-1529032764251.png",alt:""}}),t._v(" "),s("a",{attrs:{href:"javascript:;"}},[t._v("神游记")])])])])])},staticRenderFns:[function(){var t=this,g=t.$createElement,n=t._self._c||g;return n("div",{staticClass:"aboutGame"},[n("strong",{staticClass:"title"},[t._v("神游记")]),t._v(" "),n("span",[t._v("文章分类：游戏说明 | 网站编辑：| 发表时间：2018-03-29 | ")]),t._v(" "),n("strong",{staticClass:"gameInfo"},[t._v("游戏介绍：")]),t._v(" "),n("p",{staticClass:"pClass"},[t._v("《神游记》的世界里充满了无限期待与挑战，以境界为核心的成长路线，伴随着自身的坐骑、神装、武器、法阵、仙羽与仙侣的法座、幻装、灵弓、羽翼、宝器等十大酷炫外形培养系统逐步开启。多重副本与竞技玩法，收集各种材料针对性培养。四种套装独立穿着，完全实现装备基本靠爆。")]),t._v(" "),n("p",{staticClass:"pClass"},[t._v("神游记专为广大喜爱无限期待与挑战的玩家量身打造。将爽快收于指掌之间，瞬间变身成为排行棒里的“大红人”。")]),t._v(" "),n("p",[t._v("----星球的天外来客----")]),t._v(" "),n("p",[t._v("\n          掠夺者盯上了美丽而富饶的地球。入侵者派出了蝗虫般的邪恶战机日夜攻击。在对方压倒性的科技军事力量下，地球联邦军节节败退，最终决定尽全力开发可以抗衡外星技术的雷电战机，三位最优秀的精英。驾驶着战机，向敌人的总部发起了冲击！")]),t._v(" "),n("p",[t._v("丰富的图鉴收集系统与宠物养成满足更类型需求。在修仙中不断进阶，傲视群仙，独占鳌头！")]),t._v(" "),n("p",[t._v("※排行榜只为英雄准备，和全球玩家比成绩吧！")]),t._v(" "),n("p",[t._v("※成就多多----挑战成功还会有意外收获哦。")]),t._v(" "),n("p",[t._v("※配件系统的养成参战让你在游戏中将远离孤独，寂寞。你绝不是一个人在战斗！")]),t._v(" "),n("div",{staticClass:"gamePic"},[n("strong",[t._v("游戏截图：")]),t._v(" "),n("div",{staticClass:"gamePL clearfix"},[n("img",{attrs:{src:"http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764254_360x640.jpg",alt:""}}),t._v(" "),n("img",{attrs:{src:"http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764253_360x640.jpg",alt:""}}),t._v(" "),n("img",{attrs:{src:"http://uus-img7.android.d.cn/content_pic/201806/behpic/snapshot/23/1-82023/1-82023-2-1529032764250_360x640.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"downNode clearfix"},[n("a",{attrs:{href:"https://qiankevideo.oss-cn-hangzhou.aliyuncs.com/syj_1529032764249.apk"}},[t._v("点击下载 "),n("img",{attrs:{src:"https://www.lgz18.com/attachment/images/1/2018/04/Vk6DgGA9g99l5dU5D5DGgl6dl39lZl.jpg",width:"66",height:"68"}})]),t._v(" "),n("img",{attrs:{width:"166",height:"166",src:s("oWum")}})]),t._v(" "),n("p",{staticClass:"footer"},[t._v("（本游戏只适用安卓手机，二维码请使用浏览器、QQ或其他应用商店扫描）")])])}]};var a=s("VU/8")(n,e,!1,function(t){s("clWZ")},"data-v-f22e26cc",null);g.default=a.exports},clWZ:function(t,g){},oWum:function(t,g){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=8.64e39c74d8f420cb3624.js.map