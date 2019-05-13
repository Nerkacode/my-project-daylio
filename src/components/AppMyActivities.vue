<template>
  <div class="app-myactivities">
    <div class="mood">
      <span>{{ getMood }}</span>
      <!-- <span v-for="activity in getActivity">{{ activity }}</span> -->
    </div>
    <h2>myActivities</h2>
    <span>{{ date }}</span>
    <div>
      <button
        type="button"
        @click="addActivity('🏀'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Basketball">🏀</span>
      </button>
      <button
        type="button"
        @click="addActivity('🎧'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Headphones">🎧</span>
      </button>
      <button
        type="button"
        @click="addActivity('🎮'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Joystic">🎮</span>
      </button>
      <button
        type="button"
        @click="addActivity('🏊'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Swimer">🏊</span>
      </button>
      <button type="button" @click="addActivity('☕'), $event.target.classList.toggle('activities')">
        <span role="img" aria-label="Cup">☕</span>
      </button>
      <button
        type="button"
        @click="addActivity('📖'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Book">📖</span>
      </button>
      <button
        type="button"
        @click="addActivity('🍏'), $event.target.classList.toggle('activities')"
      >
        <span role="img" aria-label="Apple">🍏</span>
      </button>
    </div>
    <div>
      <input placeholder="Add Note...">
    </div>
    <div>
      <router-link to="/summary">
        <button type="button">
          <span role="img" aria-label="Smile">✔️</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "AppMyActivities",
  methods: {
    ...mapActions({
      addActivity2: "addActivity"
    }),
    addActivity(activityIcon) {
      this.addActivity2(activityIcon);
    }
  },
  computed: {
    ...mapGetters({
      getMood: "getMood",
      getActivity: "getActivity"
    }),
    date() {
      return new Date().toString().slice(0, 15);
    }
  }
};
</script>

<style lang="scss">
.app-myactivities {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 20px 0 0 0;
  }
  button {
    background-color: whitesmoke;
    cursor: pointer;
    outline: none;
    margin: 50px 0;
    padding: 0;
    width: 75px;
    border-radius: 50%;
    border: 1px solid whitesmoke;
    font-size: 55px;
    color: #aeaaf0;
    &:hover {
      transform: scale(1.1, 1.1);
      transition: 400ms;
    }
  }
  input {
    outline: none;
    font-size: 14px;
    padding-left: 5px;
    width: 250px;
    height: 25px;
    border-radius: 4px;
    border: 1px solid grey;
  }
  .mood span {
    font-size: 55px;
    color: #aeaaf0;
  }
  .activities {
    color: #ff5733;
  }
}
</style>
