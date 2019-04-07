<template>
  <div class="modal">
    <div class="closeModal" @click="closeModal">Close</div>
    <img :src="getFullsizeURL(fullsizeImage)" :alt="fullsizeName" />
  </div>
</template>

<script>
export default {
  methods: {
    getFullsizeURL(fullsize) {
      if (fullsize !== '') {
        return require(`../assets/images/fullsize/${fullsize}`);
      }
    },
    showModal() {
      this.$store.state.modalHidden;
    },
    closeModal() {
      this.$store.commit('closeModal');
    },
  },
  computed: {
    fullsizeImage() {
      return this.$store.getters.getFullsizeImage;
    },
    fullsizeName() {
      return this.$store.state.getFullsizeName;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  background-color: $backgroundColor;
  color: $textColor;
  text-align: center;
  z-index: 9999999;

  .closeModal {
    padding: 0.5em;
    cursor: pointer;
    position: relative;
    left: 30em;
  }
}
</style>
