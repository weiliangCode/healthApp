import * as types from './types'

export default {
  increment: ({
    commit
  }) => {
    commit(types.INCREMENT)
  },
  decrement: ({
    commit
  }) => {
    commit(types.DECREMENT)
  },
  clickOdd: ({
    commit
  }) => {
    commit(types.CLICKODD)
  }
}
