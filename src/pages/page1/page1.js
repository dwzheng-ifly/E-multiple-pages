// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';

Vue.config.productionTip = false

window.globalStore = store;
// window.globalRouter = router;
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  data: {
    tedemo:"dddddddddddddd"
  },

  // components:{
  //   HelloWorld
  // },
  computed:{
    dialogMask(){
        return this.$store.state.item.dialogMask;
    }
  },
  created: function () {
    "use strict";

  },
  mounted() {
    globalStore.dispatch('setDialogMask', {type: -1, pattern: false});
  },

})
