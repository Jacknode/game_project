import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes:
    [
      {
        path: '/Comment',
        name: 'Comment',
        component: (resolve) => require(['@/components/Comment'], resolve),
        children: [{
          path: 'Home',
          components: {
            default: (resolve) => require(['@/components/Comment'], resolve),
            User: (resolve) => require(['@/components/Home'], resolve),
          },
          name: 'Home'
        }]
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
