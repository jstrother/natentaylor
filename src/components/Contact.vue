<template>
  <div class="contactNate">
    <form action="">
      <section>
        <label for="name">Name:</label>
        <input
          type="text"
          class="name formInput"
          id="name"
          v-model="$v.formResponses.name.$model"
        />
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.name.required">Name is required.</span>
          <span v-if="!$v.formResponses.name.minLength">
            Name must have at least
            {{ $v.formResponses.name.$params.minLength.min }} characters.
          </span>
        </p>
      </section>
      <section>
        <label for="email">Email:</label>
        <input
          type="email"
          class="email formInput"
          id="email"
          v-model="$v.formResponses.email.$model"
        />
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.email.required">Email is required.</span>
        </p>
      </section>
      <section>
        <label for="message">Enter Your Message:</label>
        <textarea
          type="text"
          class="message formInput"
          id="message"
          v-model="$v.formResponses.message.$model"
        />
        <p class="error" v-if="errors">
          <span v-if="!$v.formResponses.message.required">Message is required.</span>
        </p>
      </section>
      <button @click.prevent="submitForm">Submit</button>
      <div class="buttonError">
        <p class="error" v-if="errors">
          The form has errors. Please double-check and submit again.
        </p>
        <p class="error" v-else-if="formTouched === false && uiState === 'Submit Clicked'">
          The form is empty. Please fill out all fields.
        </p>
        <p class="success" v-if="uiState === 'Form Submitted'">Your email was sent to Nate!</p>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
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
        email,
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
      this.empty =
        !this.$v.formResponses.name.$dirty &&
        !this.$v.formResponses.email.$dirty &&
        !this.$v.formResponses.message.$dirty;
      this.uiState = 'Submit Clicked';
      if (this.errors === false && this.formTouched === true && this.empty === false) {
        this.uiState = 'Form Submitted';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contactNate {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  form {
    section {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      margin-bottom: 3em;
    }
    .formInput {
      width: 20em;
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

    .success {
      font-size: 1.5em;
    }
  }
}
</style>
