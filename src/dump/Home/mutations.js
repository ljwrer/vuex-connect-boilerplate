import _ from 'lodash'
import { init, sync, toggleItem, toggleAll, dropAll, draw } from './mutation-types'
import { getCheckedAll } from './select'
export const state = {
  byId: {},
  allIds: [],
  drawIndex: 0
}

export const mutations = {
  [init] (state, list) {
    state.allIds = list.map(item => item.id)
    state.byId = list.reduce((map, item) => {
      item.checked = false
      map[item.id] = item
      return map
    }, {})
  },

  [sync] (state, cacheList) {
    cacheList.forEach(id => {
      if (_.has(state.byId, id)) {
        state.byId[id].checked = true
      }
    })
  },

  [toggleItem] (state, id) {
    const item = state.byId[id]
    item.checked = !item.checked
  },

  [toggleAll] (state) {
    const status = !getCheckedAll(state)
    state.allIds.forEach(id => {
      state.byId[id].checked = status
    })
  },

  [dropAll] (state) {
    state.allIds.forEach(id => {
      state.byId[id].checked = false
    })
  },

  [draw] (state) {
    state.drawIndex++
  }
}
