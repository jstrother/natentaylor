<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
import imageData from '../../public/imageData';

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
