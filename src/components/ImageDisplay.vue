<template>
  <div>
    <Modal v-if="image.name === fullsizeName" :class="{ hidden: modalShow }" />
    <img
      :class="{ hidden: !modalShow }"
      @click="showModal(image.fullsize, image.name)"
      :src="getThumbnailURL(image.thumbnail)"
      :alt="image.name"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  methods: {
    getThumbnailURL(thumbnail) {
      if (thumbnail) {
        return require(`../../public/images/thumbnails/${thumbnail}`);
      }
    },
    showModal(fullsize, name) {
      this.$store.commit('showModal');
      this.$store.commit('fullsizeImage', fullsize);
      this.$store.commit('fullsizeName', name);
    },
  },
  computed: {
    title() {
      return this.$store.state.routeName;
    },
    fullsizeImage() {
      return this.$store.state.fullsizeImage;
    },
    fullsizeName() {
      return this.$store.state.fullsizeName;
    },
    modalShow() {
      return this.$store.state.modalHidden;
    },
  },
};
</script>

<style lang="scss" scoped></style>
