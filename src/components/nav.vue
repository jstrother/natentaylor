<template>
  <nav>
    <div v-for="(menuItem, index) in menuItemData" :key="index">
      <SubMenu v-if="menuItem.subMenu" :menu-item="menuItem" />
      <router-link class="routerLink" active-class="active" v-else :to="menuItem.route" exact>
        {{ menuItem.routeName }}
      </router-link>
    </div>
    <a
      href="https://worldbuildersmarket.com/collections/nate-taylor"
      target="_blank"
      class="routerLink"
      >Store</a
    >
  </nav>
</template>

<script>
import SubMenu from './subMenu.vue';
import menuItemData from '../assets/dataFiles/menuItemData.js';

export default {
  components: {
    SubMenu,
  },
  data: function() {
    return {
      menuItemData,
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  font-family: 'FiraSansRegular', sans-serif;
  font-size: 1.5em;
  margin: auto;
  max-width: 66%;
  text-align: center;

  .routerLink {
    text-decoration: none;
    color: $routerLinkColor;
  }

  .active {
    color: $activeColor;
  }

  @media (min-width: $gtTabletP) {
    font-size: 1em;
  }
}
</style>
