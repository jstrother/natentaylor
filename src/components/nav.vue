<template>
  <nav>
    <div class="menuToggle">
      <p @click="toggleMenu">Menu</p>
      <i
        class="fas fa-arrow-alt-circle-down icon"
        :class="{ hidden: !showMenu }"
        @click="toggleMenu"
      ></i>
      <i
        class="fas fa-arrow-alt-circle-up icon"
        :class="{ hidden: showMenu }"
        @click="toggleMenu"
      ></i>
    </div>
    <div id="openMenu" class="openMenu" :class="{ hidden: showMenu }">
      <div v-for="(imageItem, index) in imageData" :key="index" class="menuItem">
        <div
          class="routerLink"
          :class="{ active: imageItem.routeName === route }"
          @click="menuItemSelect(imageItem.routeName)"
        >
          {{ imageItem.routeName }}
        </div>
      </div>
      <div class="menuItem" @click="storeClicked">
        <a
          href="https://worldbuildersmarket.com/collections/nate-taylor"
          target="_blank"
          class="routerLink"
          >Store</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import imageData from '../assets/imageData';

export default {
  data() {
    return {
      imageData,
      subMenuClosed: 'subMenuClosed',
      subMenuOpen: 'subMenuOpen',
    };
  },
  methods: {
    menuItemSelect(routeName) {
      this.$store.commit('menuItemSelect', routeName);
    },
    toggleMenu() {
      this.$store.commit('showMenu');
    },
    storeClicked() {
      this.$store.commit('storeClicked');
    },
  },
  computed: {
    showMenu() {
      return this.$store.getters.getMenuStatus;
    },
    subMenu() {
      return this.$store.state.subMenuHidden;
    },
    route() {
      return this.$store.state.routeName;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
    color: $textColor;

    p {
      cursor: pointer;
      padding-right: $dropDownPadding;
    }
  }

  .openMenu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: auto;
    margin-top: 13em;
    background-color: $backgroundColor;
    padding: 0.6em;
    position: absolute;
    z-index: 1000;

    .menuItem {
      margin: 0.5em;
      margin-left: -0.5em;
      align-self: center;
      width: 100%;

      .routerLink {
        text-decoration: none;
        color: $textColor;
        cursor: pointer;
      }

      .active {
        color: $activeColor;
      }
    }
  }

  .hidden {
    display: none;
  }

  @media (min-width: $gtTabletP) {
    font-size: 1em;
  }
}
</style>
