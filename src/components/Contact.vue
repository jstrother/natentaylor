<template>
  <form action="" class="contactNate">
    <label for="name">Name:</label>
    <input type="text" class="name" id="name" />
    <label for="email">Email:</label>
    <input type="email" class="email" id="email" />
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      formResponses: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
    },
    message: {
      required,
    },
  },
};
</script>

<style scoped lang="scss"></style>
