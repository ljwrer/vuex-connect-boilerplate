import * as types from './mutation-types'
import { sideBarStore } from '@/module/storage'
const tableDataList = [
  {
    id: 0,
    platform: 'pc',
    uv: 10000,
    pv: 20000
  },
  {
    id: 1,
    platform: 'm站',
    uv: 8000,
    pv: 15000
  },
  {
    id: 2,
    platform: 'android',
    uv: 30000,
    pv: 40000
  },
  {
    id: 4,
    platform: 'ios',
    uv: 40000,
    pv: 50000
  }
]
const api = {
  getTableList () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(tableDataList)
      }, 200)
    })
  }
}

export const init = async ({ commit }) => {
  const list = await api.getTableList()
  const cacheList = sideBarStore.getValue()
  commit(types.init, list)
  commit(types.sync, cacheList)
}

export const toggleItem = ({ commit, state }, id) => {
  commit(types.toggleItem, id)
  syncStore({state}, id)
}

export const toggleAll = ({ commit, state }) => {
  commit(types.toggleAll)
  state.allIds.forEach(id => {
    syncStore({state}, id)
  })
}

const syncStore = function ({ state }, id) {
  const { checked } = state.byId[id]
  if (checked) {
    sideBarStore.add(id)
  } else {
    sideBarStore.delete(id)
  }
}

export const dropAll = ({ commit }) => {
  commit(types.dropAll)
  sideBarStore.clear()
}

export const draw = ({ commit }) => {
  commit(types.draw)
}
