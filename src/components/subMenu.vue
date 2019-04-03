<template>
  <div class="subMenuCatcher">
    <div class="subMenuTitle">
      <router-link
        class="routerLink titleName"
        active-class="active"
        :to="imageItem.route"
        @click="updateRoute(imageItem)"
        exact
        >{{ imageItem.routeName }}</router-link
      >
      <i
        class="fas fa-arrow-alt-circle-down icon"
        :class="{ hidden: !subMenuHidden }"
        @click="subMenuToggle"
      ></i>
      <i
        class="fas fa-arrow-alt-circle-up icon"
        :class="{ hidden: subMenuHidden }"
        @click="subMenuToggle"
      ></i>
    </div>
    <div
      class="subMenu"
      :class="{ hidden: subMenuHidden }"
      v-for="(subMenuItem, index) in imageItem.subMenu"
      :key="index"
    >
      <router-link
        class="routerLink"
        active-class="active"
        :to="subMenuItem.route"
        @click="updateRoute(imageItem.routeName)"
        exact
        >{{ subMenuItem.routeName }}</router-link
      >
    </div>
  </div>
</template>

<script>
const subMenuHidden = true;

export default {
  props: {
    'menu-item': Object,
  },
  data: function() {
    return {
      subMenuHidden,
    };
  },
  methods: {
    updateRoute: function(routeName) {
      this.$store.dispatch('setRoute', routeName);
    },
    subMenuToggle: function() {
      this.subMenuHidden = !this.subMenuHidden;
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
