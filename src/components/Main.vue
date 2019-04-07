<template>
  <main>
    <h1>{{ title }}</h1>
    <div v-for="(dataItem, index) in imageData" :key="index" class="imagesDisplay">
      <div v-if="dataItem.subMenu">
        <Section :dataItem="dataItem.subMenu" />
      </div>
      <div v-else-if="title === dataItem.routeName" class="images">
        <div v-for="(image, index) in dataItem.images" :key="index" class="image">
          <Modal v-if="image.name === fullsizeName" :class="{ hidden: modalShow }" />
          <img
            :class="{ hidden: !modalShow }"
            @click="showModal(image.fullsize, image.name)"
            :src="getThumbnailURL(image.thumbnail)"
            :alt="image.name"
          />
        </div>
      </div>
      <div v-else-if="dataItem.name === 'Contact'" class="contact">
        <!-- <Contact /> -->
      </div>
    </div>
  </main>
</template>

<script>
import Modal from './Modal.vue';
import Section from './Section.vue';
// import Contact from './Contact.vue';
import imageData from '../assets/imageData';

export default {
  components: {
    Modal,
    Section,
    // Contact,
  },
  data: function() {
    return {
      imageData,
    };
  },
  methods: {
    getThumbnailURL(thumbnail) {
      return require(`../assets/images/thumbnails/${thumbnail}`);
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

<style scoped lang="scss">
main {
  color: $textColor;
  text-align: center;

  img {
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
}
</style>
