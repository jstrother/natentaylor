<template>
  <main>
    <h1>{{ title }}</h1>
    <div v-for="(dataItem, index) in imageData" :key="index" class="display">
      <div v-if="compareRouteName(dataItem.routeName)" class="contact">
        <!-- <Contact /> -->
      </div>
      <div v-else-if="dataItem.images[0].subHeading">
        hello
      </div>
      <div v-else class="images">
        <div v-for="(image, index) in dataItem.images" :key="index" class="images">
          <Modal v-if="image.name === fullsizeName" :class="{ hidden: modalShow }" />
          <img
            :class="{ hidden: !modalShow }"
            @click="showModal(image.fullsize, image.name)"
            :src="getThumbnailURL(image.thumbnail)"
            :alt="image.name"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Modal from './Modal.vue';
// import Contact from './Contact.vue';
import imageData from '../assets/imageData';

export default {
  components: {
    Modal,
    // Contact,
  },
  data() {
    return {
      imageData,
    };
  },
  methods: {
    getThumbnailURL(thumbnail) {
      if (thumbnail !== '') {
        return require(`../assets/images/thumbnails/${thumbnail}`);
      }
    },
    showModal(fullsize, name) {
      this.$store.commit('showModal');
      this.$store.commit('fullsizeImage', fullsize);
      this.$store.commit('fullsizeName', name);
    },
    compareRouteName(routeName) {
      console.log(this.title);
      console.log(routeName);
      return routeName === this.title;
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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
