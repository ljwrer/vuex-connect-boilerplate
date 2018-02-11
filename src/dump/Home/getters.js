import {getCheckedAll} from './select'
export const hasChecked = state => id => !!state.byId[id].checked
export const HasCheckedAll = state => getCheckedAll(state)
export const allDataList = state => state.allIds.map(id => state.byId[id])
export const checkedId = state => state.allIds.filter(id => state.byId[id].checked)
export const checkedDataList = (state, getters) => getters.checkedId.map(id => state.byId[id])
export const checkedPlatformList = (state, getters) => getters.checkedDataList.map(item => item.platform)
export const drawIndex = state => state.drawIndex
export const chartData = (state, getters) => {
  const legend = ['pv', 'uv']
  const yAxis = getters.checkedPlatformList
  const series = legend.map(name => ({
    name,
    data: getters.checkedDataList.map(item => item[name])
  }))
  return {
    legend,
    yAxis,
    series
  }
}
