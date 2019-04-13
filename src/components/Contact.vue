<template>
  <div class="contactNate">
    <form action="">
      <label for="name">Name:</label>
      <div class="nameError">
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.name.required">This field is required.</span>
          <span v-if="!$v.formResponses.name.minLength"
            >This field must have at least
            {{ $v.formResponses.name.$params.minLength.min }} characters.</span
          >
        </p>
      </div>
      <input
        type="text"
        class="name formInput"
        id="name"
        v-model.lazy="$v.formResponses.name.$model"
      />
      <label for="email">Email:</label>
      <div class="emailError">
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.email.required">This field is required.</span>
        </p>
      </div>
      <input
        type="email"
        class="email formInput"
        id="email"
        v-model.lazy="$v.formResponses.email.$model"
      />
      <label for="message">Enter Your Message:</label>
      <div class="messageError">
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.message.required">This field is required.</span>
        </p>
      </div>
      <textarea
        type="text"
        class="message formInput"
        id="message"
        v-model.lazy="$v.formResponses.message.$model"
      />
      <button @click.prevent="submitForm">Submit</button>
      <div class="buttonError">
        <p class="error" v-if="errors">
          The form has errors. Please double-check and submit again.
        </p>
        <p class="error" v-else-if="!formTouched && uiState === 'submit clicked'">
          The form is empty. Please fill out all fields.
        </p>
        <p class="success" v-if="uiState === 'Form Submitted'">Your email was sent to Nate!</p>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      uiState: 'Submit NOT Clicked',
      errors: false,
      empty: true,
      formTouched: false,
      formResponses: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  validations: {
    formResponses: {
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
  },
  methods: {
    submitForm() {
      this.formTouched = this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = 'Submit Clicked';
      if (this.errors === false && this.formTouched === true) {
        this.uiState = 'Form Submitted';
      }
      this.formResponses.name = '';
      this.formResponses.email = '';
      this.formResponses.message = '';
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .formInput {
    width: 20em;
    margin-bottom: 3em;
  }

  .message {
    height: 12em;
  }

  button {
    margin-bottom: 1em;
  }

  .error {
    color: red;
    text-transform: uppercase;
  }
}
</style>
