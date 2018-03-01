import Vuex from 'vuex'
import { store as homeStore, Model as homeModel } from '@/dump/Home'
import Vue from 'vue'
import VuexORM from '@vuex-orm/core'
Vue.use(Vuex)
const database = new VuexORM.Database()
database.register(homeModel, homeStore)
export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
