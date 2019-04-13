<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="imagesDisplay" :class="{ hidden: contactPageHidden }">
      <div v-for="(dataItem, index) in imageData" :key="index" class="display">
        <div v-if="title === dataItem.routeName" class="imageDisplay">
          <div v-for="(image, index) in dataItem.images" :key="index" class="images">
            <div v-if="image.subHeading">
              <h3 class="subHeading" :class="{ hidden: !modalShow }">
                {{ image.subHeading }}
              </h3>
              <div v-for="(subImage, index) in image.subImages" :key="index" class="subImages">
                <Modal v-if="subImage.name === fullsizeName" :class="{ hidden: modalShow }" />
                <img
                  :class="{ hidden: !modalShow }"
                  @click="showModal(subImage.fullsize, subImage.name)"
                  :src="getThumbnailURL(subImage.thumbnail)"
                  :alt="subImage.name"
                />
              </div>
            </div>
            <div v-else>
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
      </div>
    </div>
    <div class="contact" :class="{ hidden: !contactPageHidden }">
      <Contact />
    </div>
  </main>
</template>

<script>
import Modal from './Modal.vue';
import Contact from './Contact.vue';
import imageData from '../assets/imageData';

export default {
  components: {
    Modal,
    Contact,
  },
  data() {
    return {
      imageData,
    };
  },
  methods: {
    getThumbnailURL(thumbnail) {
      if (thumbnail) {
        return require(`../assets/images/thumbnails/${thumbnail}`);
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
    contactPageHidden() {
      return this.$store.state.showContactPage;
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
