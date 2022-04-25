<template>
  <div class="my-n4">
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <text-field-sign-up-form/>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import TextFieldSignUpForm from "./TextFieldSignUpForm.vue";

export default {
  name: "SignUpForm",
  components: {
    TextFieldSignUpForm,
  },
};
</script>

<style></style>
