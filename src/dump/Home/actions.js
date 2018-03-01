import * as types from './mutation-types'
import { sideBarStore } from '@/module/storage'
const tableDataList = [
  {
    id: 1,
    platform: 'pc',
    uv: 10000,
    pv: 20000
  },
  {
    id: 2,
    platform: 'm站',
    uv: 8000,
    pv: 15000
  },
  {
    id: 3,
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

export const init = async ({ dispatch }) => {
  const list = await api.getTableList()
  const cacheList = sideBarStore.getValue()
  dispatch('create', {
    data: list
  })
  cacheList.forEach(id => {
    dispatch('update', {
      id,
      checked: true
    })
  })
}

export const toggleItem = ({ getters, dispatch }, id) => {
  dispatch('update', {
    id,
    checked: !getters.hasChecked(id)
  })
  syncStore({getters}, id)
}

export const toggleAll = ({ getters, dispatch }) => {
  const checked = !getters.hasCheckedAll
  dispatch('update', {
    where: () => true,
    data: { checked }
  })
  getters.all().forEach(({id}) => {
    syncStore({getters}, id)
  })
}

const syncStore = function ({ getters }, id) {
  const checked = getters.hasChecked(id)
  if (checked) {
    sideBarStore.add(id)
  } else {
    sideBarStore.delete(id)
  }
}

export const dropAll = ({ dispatch }) => {
  dispatch('update', {
    where: () => true,
    data: { checked: false }
  })
  sideBarStore.clear()
}

export const draw = ({ commit }) => {
  commit(types.draw)
}
