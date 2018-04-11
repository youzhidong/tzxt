import Vue from 'vue'
import vuex from 'vuex'
import router_set from './modules/router_set.js'

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    router_set
  }
})
