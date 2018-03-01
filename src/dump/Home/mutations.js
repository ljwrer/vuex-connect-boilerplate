import { draw } from './mutation-types'
export const state = {
  drawIndex: 0
}

export const mutations = {
  [draw] (state) {
    state.drawIndex++
  }
}
