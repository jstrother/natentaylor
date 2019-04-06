<template>
  <main>
    <h1>{{ title }}</h1>
    <div v-for="(imageItem, index) in imageData" :key="index" class="imagesDisplay">
      <div v-if="title === imageItem.routeName" class="images">
        <div v-for="(image, index) in imageItem.images" :key="index" class="image">
          <Modal :fullsize="image.fullsize" :name="image.name" />
          <img :src="image.thumbnail" :alt="image.name" />
        </div>
      </div>
      <div v-else-if="imageItem.name === 'Contact'" class="contact">
        <Contact />
      </div>
    </div>
  </main>
</template>

<script>
import imageData from '../assets/imageData';

export default {
  data: function() {
    return {
      imageData,
    };
  },
  computed: {
    title: function() {
      return this.$store.state.routeName;
    },
  },
};
</script>

<style scoped lang="scss">
main {
  color: $textColor;
  text-align: center;
}
</style>
