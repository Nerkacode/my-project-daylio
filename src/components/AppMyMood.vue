<template>
  <div class="app-mymood">
    <h2>So, how was your day?</h2>
    <span>{{ date }}</span>

    <div>
      <router-link to="/myactivities">
        <button type="button" @click="addMood('😈')">
          <span role="img" aria-label="Smile">😈</span>
        </button>
        <button type="button" @click="addMood('😃')">
          <span role="img" aria-label="Smile">😃</span>
        </button>
        <button type="button" @click="addMood('😐')">
          <span role="img" aria-label="Neutral">😐</span>
        </button>
        <button type="button" @click="addMood('😡')">
          <span role="img" aria-label="Sad">😡</span>
        </button>
        <button type="button" @click="addMood('👻')">
          <span role="img" aria-label="Sad">👻</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppMyMood",
  methods: {
    ...mapActions({
      addMood2: "addMood"
    }),
    addMood(moodIcon) {
      this.addMood2(moodIcon);
    }
  },
  computed: {
    date() {
      return new Date().toString().slice(0, 15);
    }
  }
};
</script>

<style lang="scss">
.app-mymood {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0;
  }
  button {
    background-color: whitesmoke;
    cursor: pointer;
    outline: none;
    margin-top: 50px;
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
}
</style>
