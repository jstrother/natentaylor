<template>
  <div class="subMenuCatcher">
    <div class="subMenuTitle">
      <div
        class="routerLink titleName"
        :class="{ active: imageItem.routeName === route }"
        @click="menuItemSelect(imageItem.routeName)"
      >
        {{ imageItem.routeName }}
      </div>
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
      class="subMenuItem"
      :class="{ hidden: showSubMenu }"
      v-for="(subMenuItem, index) in imageItem.subMenu"
      :key="index"
    >
      <div
        class="routerLink"
        :class="{ active: subMenuItem.routeName === route }"
        @click="menuItemSelect(subMenuItem.routeName)"
      >
        {{ subMenuItem.routeName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageItem: Object,
  },
  methods: {
    menuItemSelect(routeName) {
      this.$store.commit('menuItemSelect', routeName);
    },
    toggleSubMenu() {
      this.$store.commit('showSubMenu');
    },
  },
  computed: {
    showSubMenu() {
      return this.$store.getters.getSubMenuStatus;
    },
    route() {
      return this.$store.state.routeName;
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
    margin-bottom: 0.5em;

    .titleName {
      padding-right: $dropDownPadding;
    }
  }

  .subMenuItem {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 0.5em;
  }

  .routerLink {
    text-decoration: none;
    color: $textColor;
    cursor: pointer;
  }

  .active {
    color: $activeColor;
  }

  .icon {
    color: $textColor;
  }

  .hidden {
    display: none;
  }
}
</style>
