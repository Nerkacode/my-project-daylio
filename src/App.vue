<template>
  <div id="app">
    <AppHeader msg="#myMood"/>
    <router-view></router-view>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
</style>
