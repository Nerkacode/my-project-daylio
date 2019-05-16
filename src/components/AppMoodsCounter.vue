<template>
  <div class="app-moodscounter">
    <h2>moodsCounter</h2>
    <span>{{ date }}</span>
    <div class="mood">
      <span>😈</span>
      <span>😃</span>
      <span>😐</span>
      <span>😡</span>
      <span>👻</span>
    </div>
    <div class="counter">
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
    </div>
    <div class="mood">
      <span>🏀</span>
      <span>🎧</span>
      <span>🎮</span>
      <span>🏊</span>
      <span>☕</span>
      <span>📖</span>
      <span>🍏</span>
    </div>
    <div class="counter">
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
      <span>0</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppMoodCounter",
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
.app-moodscounter {
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
    color: #ffc300;
    margin: 5px;
  }
  .counter {
    margin-bottom: 20px;
    span {
      font-size: 55px;
      color: #7fb49d;
      margin: 5px 17px;
    }
  }
}
</style>
