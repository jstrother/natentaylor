<template>
  <section>
    <div class="subSection" v-bind="$props" v-for="(image, index) in subImages" :key="index">
      <img :src="image.thumbnail" :alt="image.name" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    subImages: {
      type: Array,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
