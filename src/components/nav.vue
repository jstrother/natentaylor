<template>
  <nav>
    <div v-for="(menuItem, index) in menuItemData" :key="index">
      <SubMenu v-if="menuItem.subMenu" :menu-item="menuItem" />
      <!-- <router-link
        v-else-if="(menuItem.route = store)"
        :to="menuItem.route"
        target="_blank"
      ></router-link> -->
      <router-link class="routerLink" active-class="active" v-else :to="menuItem.route" exact>
        {{ menuItem.routeName }}
      </router-link>
    </div>
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
  margin: auto;
  text-align: center;

  .routerLink {
    text-decoration: none;
    color: $routerLinkColor;
  }

  .active {
    color: $activeColor;
  }
}
</style>
