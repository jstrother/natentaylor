<template>
  <section>
    <div
      class="sectionDisplay"
      v-bind="$props"
      v-for="(item, index) in subMenu"
      :key="index"
      :class="{ hidden: !hideSubSection }"
    >
      <div class="subMenu" @click="goToSubSection(item.routeName)">
        <img :src="getThumbnailURL(item.thumbnail)" :alt="item.routeName" />
      </div>
    </div>
    <SubSection
      :class="{ hidden: hideSubSection }"
      :subImages="subMenu.subImages"
      :routeName="routeName"
    />
  </section>
</template>

<script>
import SubSection from './SubSection.vue';
export default {
  components: {
    SubSection,
  },
  props: {
    subMenu: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getThumbnailURL(thumbnail) {
      if (thumbnail !== '') {
        return require(`../assets/images/thumbnails/${thumbnail}`);
      }
    },
    goToSubSection(routeName) {
      this.$store.commit('menuItemSelect', routeName);
      this.$store.commit('showSubSection');
    },
  },
  computed: {
    hideSubSection() {
      return this.$store.state.subSectionHidden;
    },
    routeName() {
      return this.$store.state.routeName;
    },
  },
};
</script>

<style scoped lang="scss">
section {
  .hidden {
    display: none;
  }
}
</style>
