<template>
  <div class="subMenuCatcher">
    <router-link class="routerLink" active-class="active" :to="menuItem.route" exact>
      {{ menuItem.routeName }}
    </router-link>
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
    <div
      class="subMenu"
      :class="{ hidden: subMenuHidden }"
      v-for="(subMenuItem, index) in menuItem.subMenu"
      :key="index"
    >
      <router-link class="routerLink" active-class="active" :to="subMenuItem.subRoute" exact>
        {{ subMenuItem.subRouteName }}
      </router-link>
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
    subMenuToggle: function() {
      return !this.subMenuHidden;
    },
  },
};
</script>

<style scoped lang="scss">
.subMenuCatcher {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: auto;

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
