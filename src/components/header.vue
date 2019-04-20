<template>
  <header>
    <a href="https://www.natentaylor.com">
      <img
        src="../../public/images/NateTaylor_marketplaceBanner.jpg"
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
* {
  border: 1px solid red;
}
header {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;

  .banner {
    align-self: center;
    margin: auto;
    max-width: 100%;
    height: auto;
  }
}
</style>
