import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountDown from '@/components/CountDown'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'count-down',
      component: CountDown,
    },
  ]
})
