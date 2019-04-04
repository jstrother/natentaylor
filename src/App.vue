<template>
  <div class="app">
    <Header />
    <!-- <Main /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
// import Main from './components/Main.vue';
// import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
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
