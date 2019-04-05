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
        <router-link class="routerLink" active-class="active" v-else :to="imageItem.route" exact>
          <span @click="updateRoute(imageItem.routeName)">
            {{ imageItem.routeName }}
          </span>
        </router-link>
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
      this.$store.commit('setRoute', routeName);
    },
    toggleMenu: function() {
      this.$store.commit('showMenu');
    },
  },
  computed: {
    showMenu: function() {
      return this.$store.getters.getMenuStatus;
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
    margin-bottom: 0.5em;
    width: 100%;
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
