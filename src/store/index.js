import Vuex from 'vuex'
import { store as home } from '@/dump/Home'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home: {
      ...home,
      namespaced: true
    }
  }
})
