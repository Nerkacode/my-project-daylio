<template>
  <div class="app-header">
    <header class="app-header__container container">
      <div class="app-header__logo">
        <router-link to="/">
          <h3>{{ msg }}</h3>
        </router-link>
        <router-link to="/summary">
          <h3>myMood</h3>
        </router-link>
        <router-link to="/moodscounter">
          <h3>moodsCounter</h3>
        </router-link>
      </div>

      <div class="app-header__login">
        <router-link to="/login">
          <h3>login</h3>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppHeader",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.app-header {
  z-index: 2;
  display: flex;
  align-items: center;
  height: 64px;
  background-color: #aaf0d1;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  width: 100%;
  margin-bottom: 30px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo,
  &__login {
    display: flex;
    flex-direction: row;
    h3 {
      margin: 0 15px;
    }

    a:link,
    a:visited,
    a:active {
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: whitesmoke;
      transition: 200ms;
    }
  }
}
</style>
