<template>
  <div class="app-main">
    <h2>Add new myMood event?</h2>
    <span>{{ new Date().toString().slice(0, 15) }}</span>
    <div>
      <router-link to="/mymood">
        <button type="button">+</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMain"
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
    margin: 0;
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
      color: black;
      transform: rotate(180deg);
      transition: 300ms;
    }
  }
}
</style>
