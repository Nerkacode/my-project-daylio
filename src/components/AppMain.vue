<template>
  <div class="app-main">
    <div class="mood">
      <span>{{ getMood }}</span>
    </div>
    <h2>Add new myMood event?</h2>
    <span>{{ date }}</span>
    <div>
      <router-link to="/mymood">
        <button type="button">+</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppMain",
  computed: {
    ...mapGetters({
      getMood: "getMood"
    }),
    date() {
      return new Date().toString().slice(0, 15);
    }
  }
};
</script>

<style scoped lang="scss">
.app-main {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 20px 0 0 0;
  }
  button {
    background-color: #aaf0d1;
    cursor: pointer;
    outline: none;
    margin: 50px;
    padding: 0;
    width: 71px;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 60px;
    &:hover {
      transform: rotate(180deg);
      transition: 300ms;
    }
  }
  .mood span {
    font-size: 55px;
    color: #ffc300;
    margin: 5px;
  }
}
</style>
