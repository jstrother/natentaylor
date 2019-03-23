<template>
  <header>
    <a href="https://www.natentaylor.com">
      <img
        src="../assets/images/NateTaylor_marketplaceBanner.jpg"
        alt="Nate Taylor and Art Thereby"
        class="banner"
      />
    </a>
    <nav>
      <ul>
        <li
          is="router-link"
          v-for="(menuItem, index) in menuItemData"
          :to="menuItem.route"
          :key="index"
        >
          {{ menuItem.routeName }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import menuItemData from '../assets/dataFiles/menuItemData.js';

module.exports = {
  data: function() {
    return {
      menuItemData,
    };
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
