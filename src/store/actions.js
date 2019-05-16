export default {
  addMood ({ commit }, mood) {
    commit('setMood', mood)
  },
  addActivity ({ commit }, activity) {
    commit('setActivity', activity)
  },
  inputvalue ({ commit }, input) {
    commit('setInputvalue', input)
  }
}
