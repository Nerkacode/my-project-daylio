<template>
  <div class="app-done">
    <div class="mood">
      <div>
        Your mood today:
        <span>{{ getMood }}</span>
      </div>
      <div>
        Your activities today:
        <span v-for="activity in getActivity">{{ activity }}</span>
      </div>
      <div>
        Your note today:
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppDone",
  computed: {
    ...mapGetters({
      getMood: "getMood",
      getActivity: "getActivity"
    })
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
  .mood span {
    font-size: 55px;
    color: #aeaaf0;
    margin: 5px;
  }
}
</style>
