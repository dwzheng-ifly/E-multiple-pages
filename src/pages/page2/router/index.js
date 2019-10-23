import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }]
})
