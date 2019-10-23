// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false
import router from './router/index'
router.beforeEach((to, from, next) => {
  next();

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {

  },
  mounted(){

  },
methods: {
  test(){
    alert("test")
  },
  goUrl(){
    this.$router.push({path: '/HelloWorld'});
    // globalRouter.push({path: '/HelloWorld'});
  }
}
})


