<template>
  <footer class="app-footer">© myProject {{ new Date().getFullYear() }}</footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped lang="scss">
.app-footer {
  position: absolute;
  bottom: 0;
  background-color: #aaf0d1;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
</style>
