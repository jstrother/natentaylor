<template>
  <nav>
    <div class="menuToggle" @click="toggleMenu">
      <p>Menu</p>
      <i class="fas fa-arrow-alt-circle-down icon" :class="{ hidden: !showMenu }"></i>
      <i class="fas fa-arrow-alt-circle-up icon" :class="{ hidden: showMenu }"></i>
    </div>
    <div class="openMenu" :class="{ hidden: showMenu }">
      <div v-for="(menuItem, index) in menuItemData" :key="index" class="menuItem">
        <SubMenu v-if="menuItem.subMenu" :menu-item="menuItem" />
        <router-link
          class="routerLink"
          active-class="active"
          v-else
          :to="menuItem.route"
          @click="updateRoute(menuItem)"
          exact
        >
          {{ menuItem.routeName }}
        </router-link>
      </div>
      <a
        href="https://worldbuildersmarket.com/collections/nate-taylor"
        target="_blank"
        class="routerLink"
      >
        Store
      </a>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';
import SubMenu from './subMenu.vue';
import menuItemData from '../assets/dataFiles/menuItemData.js';

export default {
  components: {
    SubMenu,
  },
  data: function() {
    return {
      menuItemData,
      showMenu: false,
    };
  },
  methods: {
    ...mapMutations(['updateRoute']),
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  font-family: 'FiraSansRegular', sans-serif;
  font-size: 1.25em;
  margin: auto;
  max-width: 66%;
  text-align: center;

  .menuToggle {
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $routerLinkColor;

    p {
      padding-right: $dropDownPadding;
    }
  }

  .menuItem {
    margin: 0.5em;
  }

  .routerLink {
    text-decoration: none;
    color: $routerLinkColor;
  }

  .active {
    color: $activeColor;
  }

  .hidden {
    display: none;
  }

  @media (min-width: $gtTabletP) {
    font-size: 1em;
  }
}
</style>
