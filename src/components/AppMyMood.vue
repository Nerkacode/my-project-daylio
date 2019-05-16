<template>
  <div class="app-mymood">
    <h2>So, how was your day?</h2>
    <span>{{ date }}</span>

    <div>
      <router-link to="/myactivities">
        <button
          type="button"
          :class="[active1 ? 'active': 'inActive']"
          @click="addMood('😈'), changeColor('active1')"
        >
          <span role="img" aria-label="Evil">😈</span>
        </button>
        <button
          type="button"
          :class="[active2 ? 'active': 'inActive']"
          @click="addMood('😃'), changeColor('active2')"
        >
          <span role="img" aria-label="Smile">😃</span>
        </button>
        <button
          type="button"
          :class="[active3 ? 'active': 'inActive']"
          @click="addMood('😐'), changeColor('active3')"
        >
          <span role="img" aria-label="Neutral">😐</span>
        </button>
        <button
          type="button"
          :class="[active4 ? 'active': 'inActive']"
          @click="addMood('😡'), changeColor('active4')"
        >
          <span role="img" aria-label="Sad">😡</span>
        </button>
        <button
          type="button"
          :class="[active5 ? 'active': 'inActive']"
          @click="addMood('👻'), changeColor('active5')"
        >
          <span role="img" aria-label="Gost">👻</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppMyMood",
  data() {
    return {
      message: "",
      active1: JSON.parse(localStorage.getItem("active1")),
      active2: JSON.parse(localStorage.getItem("active2")),
      active3: JSON.parse(localStorage.getItem("active3")),
      active4: JSON.parse(localStorage.getItem("active4")),
      active5: JSON.parse(localStorage.getItem("active5"))
    };
  },
  methods: {
    ...mapActions({
      addMood2: "addMood"
    }),
    addMood(moodIcon) {
      this.addMood2(moodIcon);
    },
    changeColor(event) {
      localStorage.removeItem("active1");
      localStorage.removeItem("active2");
      localStorage.removeItem("active3");
      localStorage.removeItem("active4");
      localStorage.removeItem("active5");
      this[event] = true;
      localStorage.setItem(event, this[event]);
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
  .active {
    color: #ff5733;
  }
  .inActive {
    color: #aeaaf0;
  }
}
</style>
