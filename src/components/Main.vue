<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="imagesDisplay">
      <div v-for="(dataItem, index) in imageData" :key="index" class="display">
        <div v-if="title === dataItem.routeName" class="imageDisplay">
          <div v-for="(image, index) in dataItem.images" :key="index" class="images">
            <div v-if="image.subHeading" class="subImagesDisplay">
              <h3 class="subHeading" :class="{ hidden: !modalHidden }">{{ image.subHeading }}</h3>
              <div class="subImageDisplay">
                <div v-for="(subImage, index) in image.subImages" :key="index" class="subImage">
                  <Modal v-if="subImage.name === fullsizeName" :class="{ hidden: modalHidden }" />
                  <img
                    :class="{ hidden: !modalHidden }"
                    @click="showModal(subImage.fullsize, subImage.name)"
                    :src="getThumbnailURL(subImage.thumbnail)"
                    :alt="subImage.name"
                  />
                </div>
              </div>
              <br />
            </div>
            <div v-else>
              <Modal v-if="image.name === fullsizeName" :class="{ hidden: modalHidden }" />
              <img
                :class="{ hidden: !modalHidden }"
                @click="showModal(image.fullsize, image.name)"
                :src="getThumbnailURL(image.thumbnail)"
                :alt="image.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Modal from './Modal.vue';
import imageData from '../../public/imageData';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      imageData,
    };
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
    modalHidden() {
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
  align-items: center;
  color: $textColor;
  text-align: center;
  width: 100%;

  .imagesDisplay {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    max-width: 85%;

    .imageDisplay {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: space-evenly;

      .subImagesDisplay {
        display: flex;
        flex-flow: column nowrap;

        .subImageDisplay {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-content: space-evenly;
          width: 95vw;
          margin-bottom: 5em;

          .subImage {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-content: space-evenly;
          }
        }
      }
    }
  }

  img {
    cursor: pointer;
    margin: 1em;
    border: $borderStyle;
  }

  .hidden {
    display: none;
  }
}
</style>
