export default {
  setMood (state, mood) {
    state.mood = mood
    localStorage.setItem('mood', mood)
  },
  setActivity (state, activity) {
    if (!state.activities.includes(activity)) {
      state.activities.push(activity)
      localStorage.setItem('activities', JSON.stringify(state.activities))
      // console.log(state.activities)
      // console.log(localStorage)
    } else {
      state.activities = state.activities.filter(x => x !== activity)
      localStorage.setItem('activities', JSON.stringify(state.activities))
      // console.log(state.activities)
      // console.log(localStorage)
    }
  },
  setInputvalue (state, inputvalue) {
    if (inputvalue === '') {
      state.input = 'no notes today...'
    } else {
      state.input = inputvalue
    }
  }
}
