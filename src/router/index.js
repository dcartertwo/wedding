import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Story from '@/components/Story'
import Event from '@/components/Event'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    }
  ]
})
