export default {
  getMood: state => state.mood,
  getActivity: state => state.activities,
  // getMood: state => localStorage.getItem('mood'),
  // getActivity: state => JSON.parse(localStorage.getItem('activities')),
  getInputvalue: state => state.input
}
