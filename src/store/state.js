export default {
  mood: localStorage.getItem('mood') || null,
  activities: JSON.parse(localStorage.getItem('activities')) || [],
  // mood: null,
  // activities: [],
  input: null
}
