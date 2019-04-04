<template>
  <header>
    <a href="https://www.natentaylor.com">
      <img
        src="../assets/images/NateTaylor_marketplaceBanner.jpg"
        alt="Nate Taylor and Art Thereby"
        class="banner"
      />
    </a>
    <Nav />
  </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
header {
  margin: auto;

  .banner {
    width: 100%;
    margin: 0;
  }
}
</style>
