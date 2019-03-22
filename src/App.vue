<template>
  <div class="app">
    <Header />
    <!-- <Main /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/header.vue';
// import Main from './components/main.vue';
// import Footer from './components/footer.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background-color: $backgroundColor;
}
</style>
