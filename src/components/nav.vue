<template>
  <nav>
    <div class="menuToggle">
      <p>Menu</p>
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
    <div class="openMenu" :class="{ hidden: showMenu }">
      <div v-for="(imageItem, index) in imageData" :key="index" class="menuItem">
        <SubMenu v-if="imageItem.subMenu" :image-item="imageItem" />
        <div
          v-else
          class="routerLink"
          :class="{ active: imageItem.routeName === route }"
          @click="updateRoute(imageItem.routeName)"
        >
          {{ imageItem.routeName }}
        </div>
      </div>
      <div class="menuItem">
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
import SubMenu from './SubMenu.vue';
import imageData from '../../public/imageData';

export default {
  components: {
    SubMenu,
  },
  data: function() {
    return {
      imageData,
    };
  },
  methods: {
    updateRoute: function(routeName) {
      this.$store.commit('updateRoute', routeName);
    },
    toggleMenu: function() {
      this.$store.commit('showMenu');
    },
  },
  computed: {
    showMenu: function() {
      return this.$store.getters.getMenuStatus;
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
    color: $textColor;

    p {
      padding-right: $dropDownPadding;
    }
  }

  .openMenu {
    margin: auto;
    background-color: $backgroundColor;
    padding: 0.25em;
    position: absolute;
    z-index: 1000;

    .menuItem {
      margin: 0.5em;
      margin-left: -0.5em;
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
