import {
  INCREMENT,
  DECREMENT,
  CLICKODD
} from './types'
import getters from './getters'

const state = {
  count: 20
}

const mutations = {
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  },
  [CLICKODD] (state) {
    if (!(state.count % 2)) {
      state.count++
    }
  }
}

export default {
  state,
  mutations,
  getters
}
