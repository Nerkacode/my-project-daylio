export default {
  setMood (state, mood) {
    state.mood = mood
  },
  setActivity (state, activity) {
    if (!state.activities.includes(activity)) {
      state.activities.push(activity)
    } else {
      state.activities = state.activities.filter(x => x !== activity)
    }
  }
}
