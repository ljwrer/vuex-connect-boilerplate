import _ from 'lodash'
export const hasChecked = (state, getters) => id => !!getters.find(id).checked
export const hasCheckedAll = (state, getters) => {
  const list = getters.all()
  if (!_.isEmpty(list)) {
    return list.every(({checked}) => checked)
  }
  return false
}
export const allDataList = (state, getters) => getters.all()
export const checkedId = (state, getters) => getters.checkedDataList.map(({id}) => id)
export const checkedDataList = (state, getters) => getters.query().where('checked', true).get()
export const checkedPlatformList = (state, getters) => getters.checkedDataList.map(({platform}) => platform)
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
