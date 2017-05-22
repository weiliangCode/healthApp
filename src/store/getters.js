export default {
  count: (state) => {
    return state.count
  },
  getOdd: (state) => {
    return !(state.count % 2)
  }
}
