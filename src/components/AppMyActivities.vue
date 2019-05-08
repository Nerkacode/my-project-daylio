<template>
  <div class="app-myactivities">
    <div class="mood">
      <span>{{ test }}</span>
    </div>
    <h2>myActivities</h2>
    <span>{{ date }}</span>
    <div>
      <button type="button">
        <span role="img" aria-label="Smile">🏀</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Smile">🎧</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Neutral">🎮</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">🏊</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">☕</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">📖</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">🍏</span>
      </button>
    </div>
    <div>
      <input placeholder="Add Note...">
    </div>
    <div>
      <button type="button">
        <span role="img" aria-label="Smile">✔️</span>
      </button>
    </div>
  </div>
</template>

<script>
import AppMyMood from "./AppMyMood";

export default {
  name: "AppMyActivities",
  computed: {
    date() {
      return new Date().toString().slice(0, 15);
    },
    test() {
      console.log(AppMyMood);
      return AppMyMood.name;
    }
  },
  components: {
    AppMyMood
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
      color: #ff5733;
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
    font-size: 20px;
    color: red;
  }
}
</style>
