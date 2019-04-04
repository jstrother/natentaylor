<template>
  <div class="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style scoped lang="scss">
.app {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: $backgroundColor;
}
</style>
