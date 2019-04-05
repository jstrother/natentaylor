<template>
  <div class="subMenuCatcher">
    <div class="subMenuTitle">
      <router-link class="routerLink titleName" active-class="active" :to="imageItem.route" exact>
        <span @click="updateRoute(imageItem.routeName)">
          {{ imageItem.routeName }}
        </span>
      </router-link>
      <i
        class="fas fa-arrow-alt-circle-down icon"
        :class="{ hidden: !showSubMenu }"
        @click="toggleSubMenu"
      ></i>
      <i
        class="fas fa-arrow-alt-circle-up icon"
        :class="{ hidden: showSubMenu }"
        @click="toggleSubMenu"
      ></i>
    </div>
    <div
      class="subMenu"
      :class="{ hidden: showSubMenu }"
      v-for="(subMenuItem, index) in imageItem.subMenu"
      :key="index"
    >
      <router-link class="routerLink" active-class="active" :to="subMenuItem.route" exact>
        <span @click="updateRoute(subMenuItem.routeName)">
          {{ subMenuItem.routeName }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'image-item': Object,
  },
  methods: {
    updateRoute: function(routeName) {
      this.$store.commit('updateRoute', routeName);
    },
    toggleSubMenu: function() {
      this.$store.commit('showSubMenu');
    },
  },
  computed: {
    showSubMenu: function() {
      return this.$store.getters.getSubMenuStatus;
    },
  },
};
</script>

<style scoped lang="scss">
.subMenuCatcher {
  margin: auto;

  .subMenuTitle {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .titleName {
      padding-right: $dropDownPadding;
    }
  }

  .subMenu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .routerLink {
    text-decoration: none;
    color: $routerLinkColor;
  }

  .active {
    color: $activeColor;
  }

  .icon {
    color: $routerLinkColor;
  }

  .hidden {
    display: none;
  }
}
</style>
