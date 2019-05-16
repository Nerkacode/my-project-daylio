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
        :class="[isActive1 ? 'active': 'inActive']"
        @click="addActivity('🏀'), changeColor('isActive1')"
      >
        <span role="img" aria-label="Basketball">🏀</span>
      </button>
      <button
        type="button"
        :class="[isActive2 ? 'active': 'inActive']"
        @click="addActivity('🎧'), changeColor('isActive2')"
      >
        <span role="img" aria-label="Headphones">🎧</span>
      </button>
      <button
        type="button"
        :class="[isActive3 ? 'active': 'inActive']"
        @click="addActivity('🎮'), changeColor('isActive3')"
      >
        <span role="img" aria-label="Joystic">🎮</span>
      </button>
      <button
        type="button"
        :class="[isActive4 ? 'active': 'inActive']"
        @click="addActivity('🏊'), changeColor('isActive4')"
      >
        <span role="img" aria-label="Swimer">🏊</span>
      </button>
      <button
        type="button"
        :class="[isActive5 ? 'active': 'inActive']"
        @click="addActivity('☕'), changeColor('isActive5')"
      >
        <span role="img" aria-label="Cup">☕</span>
      </button>
      <button
        type="button"
        :class="[isActive6 ? 'active': 'inActive']"
        @click="addActivity('📖'), changeColor('isActive6')"
      >
        <span role="img" aria-label="Book">📖</span>
      </button>
      <button
        type="button"
        :class="[isActive7 ? 'active': 'inActive']"
        @click="addActivity('🍏'), changeColor('isActive7')"
      >
        <span role="img" aria-label="Apple">🍏</span>
      </button>
    </div>
    <div>
      <input v-model="message" placeholder="Add Note...">
    </div>
    <div class="check">
      <router-link to="/summary">
        <button type="button" v-on:click="inputvalue(message)">
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
  data() {
    return {
      message: "",
      isActive1: JSON.parse(localStorage.getItem("isActive1")),
      isActive2: JSON.parse(localStorage.getItem("isActive2")),
      isActive3: JSON.parse(localStorage.getItem("isActive3")),
      isActive4: JSON.parse(localStorage.getItem("isActive4")),
      isActive5: JSON.parse(localStorage.getItem("isActive5")),
      isActive6: JSON.parse(localStorage.getItem("isActive6")),
      isActive7: JSON.parse(localStorage.getItem("isActive7"))
    };
  },
  methods: {
    ...mapActions({
      addActivity2: "addActivity",
      inputvalue2: "inputvalue"
    }),
    addActivity(activityIcon) {
      this.addActivity2(activityIcon);
    },
    inputvalue(value) {
      this.inputvalue2(value);
    },
    changeColor(event) {
      if (this[event]) {
        this[event] = false;
        localStorage.setItem(event, this[event]);
      } else {
        this[event] = true;
        localStorage.setItem(event, this[event]);
      }
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
    color: #ff5733;
  }
  .active {
    color: #ff5733;
  }
  .inActive {
    color: #aeaaf0;
  }
  .check span {
    &:hover {
      color: #ff5733;
      transition: 400ms;
    }
  }
}
</style>
