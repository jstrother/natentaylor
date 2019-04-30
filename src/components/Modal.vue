<template>
  <div class="modal">
    <div class="closeModal" @click="closeModal">X</div>
    <img :src="getFullsizeURL(fullsizeImage)" :alt="fullsizeName" />
  </div>
</template>

<script>
export default {
  methods: {
    getFullsizeURL(fullsize) {
      if (fullsize !== '') {
        return require(`@/images/fullsize/${fullsize}`);
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
  margin: auto;
  padding-bottom: 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: $backgroundColor;
  color: $textColor;
  text-align: center;
  z-index: 9999999;
  max-width: 85%;

  img {
    max-width: 95%;
    border: $borderStyle;
  }

  .closeModal {
    align-self: flex-end;
    padding-right: 0.7em;
    cursor: pointer;
    font-weight: 900;
    font-size: 1.5em;
  }
}
</style>
