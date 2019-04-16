<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="imagesDisplay">
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
              <ImageDisplay :image="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ImageDisplay from './ImageDisplay.vue';
import imageData from '../../public/imageData';

export default {
  components: {
    ImageDisplay,
  },
  data() {
    return {
      imageData,
    };
  },
  computed: {
    title() {
      return this.$store.state.routeName;
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
