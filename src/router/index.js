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
            path: 'gameDetails',
            components: {
              default: (resolve) => require(['@/components/GameDetails'], resolve),
              User: (resolve) => require(['@/components/GameDetails'], resolve),
            },
            name: 'GameDetails'
          },
          {
            path: 'companyIntroduce',
            components: {
              default: (resolve) => require(['@/components/CompanyIntroduce'], resolve),
              User: (resolve) => require(['@/components/CompanyIntroduce'], resolve),
            },
            name: 'CompanyIntroduce'
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
