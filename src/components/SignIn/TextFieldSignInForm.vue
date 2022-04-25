<template>
  <div>
    <p class="red--text text-center" v-show="message">{{ message }}</p>
    <v-text-field
      dense
      label="Email"
      v-model="email"
      class="pa-2"
    ></v-text-field>
    <div class="red--text text-center" v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </div>
    <v-text-field
      dense
      label="Password"
      v-model="password"
      class="pa-2"
    ></v-text-field>
    <div class="red--text text-center" v-if="v$.password.$error">
      {{ v$.password.$errors[0].$message }}
    </div>
    <v-btn color="blue" @click="signIn()" dark block tile>Sign Up</v-btn>

    <button-social-form />
  </div>
</template>

<script>
// import axios from "axios";
import ButtonSocialForm from "../SignUp/ButtonSocialForm.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions, mapState } from "vuex";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    ButtonSocialForm,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  computed: {
    ...mapState({
      message: (state) => state.Manage.message,
    }),
  },
  watch: {
    email: function () {
      this.v$.email.$validate();
    },
    password: function () {
      this.v$.password.$validate();
    },
  },
  methods: {
    ...mapActions("Manage", ["redirectTo", "login"]),
    signIn() {
      this.login({
        v$: this.v$,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
