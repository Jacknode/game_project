import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes:
    [
      {
        path: '/Comment',
        name: 'Comment',
        component: (resolve) => require(['@/components/Comment'], resolve),
        children: [
          {
            path: 'Home',
            components: {
              default: (resolve) => require(['@/components/Comment'], resolve),
              User: (resolve) => require(['@/components/Home'], resolve),
            },
            name: 'Home'
          },
          {
            path: 'ParentsCare',
            components: {
              default: (resolve) => require(['@/components/Comment'], resolve),
              User: (resolve) => require(['@/components/ParentsCare'], resolve),
            },
            name: 'ParentsCare'
          },
          {
            path: 'gameDetails',
            components: {
              default: (resolve) => require(['@/components/Comment'], resolve),
              User: (resolve) => require(['@/components/GameDetails'], resolve),
            },
            name: 'GameDetails'
          },
          {
            path: 'companyIntroduce',
            components: {
              default: (resolve) => require(['@/components/Comment'], resolve),
              User: (resolve) => require(['@/components/CompanyIntroduce'], resolve),
            },
            name: 'CompanyIntroduce'
          },
          {
            path: 'preventAddiction',
            components: {
              default: (resolve) => require(['@/components/PreventAddiction'], resolve),
              User: (resolve) => require(['@/components/PreventAddiction'], resolve),
            },
            name: 'PreventAddiction'
          },
          {
            path: 'userAgr',
            components: {
              default: (resolve) => require(['@/components/UserAgr'], resolve),
              User: (resolve) => require(['@/components/UserAgr'], resolve),
            },
            name: 'UserAgr'
          },
          {
            path: 'antiGambling',
            components: {
              default: (resolve) => require(['@/components/AntiGambling'], resolve),
              User: (resolve) => require(['@/components/AntiGambling'], resolve),
            },
            name: 'AntiGambling'
          }
        ]
      },
      {
        path: '/',
        hidden: true,
        redirect: {
          name: 'Home'
        }
      },
      {
        path: '/404',
        name: '404',
        component: (reslove) => require(['@/components/404'], reslove)
      },
      {
        path: '*',
        redirect: '/404',
        hidden: true
      }
    ]
})
