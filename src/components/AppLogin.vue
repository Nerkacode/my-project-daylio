<template>
  <div class="app-login">
    <div class="app-login__form">
      <input type="text" placeholder="Nickname">
      <input type="password" placeholder="Password">
      <button type="button">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin"
};
</script>

<style lang="scss">
.app-login {
  display: flex;
  height: 75vh;

  &__form {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;
    min-width: 320px;
    max-width: 720px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    input,
    button {
      margin: 5px;
      padding: 5px 15px;
      line-height: 32px;
      font-size: 24px;
      border: 1px solid #e1e1e1;
      border-radius: 5px;
    }
    button {
      cursor: pointer;
    }
  }
}
</style>
