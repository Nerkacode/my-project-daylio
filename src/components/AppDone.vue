<template>
  <div class="app-done">
    <h2>myToday's diary</h2>
    <span>{{ date }}</span>
    <div class="mood">
      <span>{{ getMood }}</span>
    </div>
    <div class="mood">
      <span v-for="activity in getActivity">{{ activity }}</span>
    </div>
    <div class="note">{{ getInputvalue }}</div>
    <router-link to="/moodscounter">
      <button type="button">
        <span role="img" aria-label="Evil">moodsCounter</span>
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppDone",
  computed: {
    ...mapGetters({
      getMood: "getMood",
      getActivity: "getActivity",
      getInputvalue: "getInputvalue"
    }),
    date() {
      return new Date().toString().slice(0, 15);
    }
  }
};
</script>

<style lang="scss">
.app-done {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 20px 0 0 0;
  }
  span {
    margin-bottom: 20px;
  }
  .mood span {
    font-size: 55px;
    color: #ff5733;
    margin: 5px;
  }
  .note {
    margin: 20px 0 0 0;
  }
  button {
    background-color: whitesmoke;
    cursor: pointer;
    outline: none;
    margin-top: 50px;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid #aeaaf0;
    font-size: 20px;
    color: black;
    &:hover {
      background-color: #aeaaf0;
      transition: 400ms;
    }
  }
}
</style>
