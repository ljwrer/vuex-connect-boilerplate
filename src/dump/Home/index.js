import * as getters from './getters'
import { mutations, state } from './mutations'
import * as actions from './actions'
import SmartTable from './view/SmartTable'
import SmartList from './view/SmartList'
import SmartChart from './view/SmartChart'
import './index.scss'
const store = {
  getters,
  mutations,
  state,
  actions
}
const view = {
  SmartTable,
  SmartList,
  SmartChart
}

export {
  view,
  store
}
