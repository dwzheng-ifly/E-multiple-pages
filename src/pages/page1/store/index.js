
import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common'
import item from './modules/item'

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    item,
    common
  },
  strict: debug,
})
