import _ from 'lodash'
export const getCheckedAll = state => {
  if (!_.isEmpty(state.allIds)) {
    return state.allIds.every(id => state.byId[id].checked)
  }
  return false
}
