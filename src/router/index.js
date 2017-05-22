import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Test1 from '@/views/Test1'
import Test2 from '@/views/Test2'
import Bottst from '@/views/bottstrapTest'
import bAlert from '@/views/bottstrapAlert'
import bBtn from '@/views/bottstrapBtn'
import iview from '@/views/iview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/bottst',
      name: 'bottst',
      component: Bottst,
      children: [{
        path: 'alert',
        name: 'Alert',
        component: bAlert
      },
      {
        path: 'btn',
        name: 'btn',
        component: bBtn
      }]
    },
    {
      path: '/iview',
      name: 'iview',
      component: iview
    }
  ]
})
