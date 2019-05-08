<template>
  <div class="app-mymood">
    <div>
      <h2>So, how was your day?</h2>
      <span>{{ new Date().toString().slice(0, 15) }}</span>
    </div>
    <div>
      <button type="button">
        <span role="img" aria-label="Smile">😈</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Smile">😃</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Neutral">😐</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">😡</span>
      </button>
      <button type="button">
        <span role="img" aria-label="Sad">👻</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMyMood"
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
    background-color: #aaf0d1;
    cursor: pointer;
    outline: none;
    margin: 0;
    padding: 0;
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
