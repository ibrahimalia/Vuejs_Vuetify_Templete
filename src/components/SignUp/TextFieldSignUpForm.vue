<template>
  <div>
    <p class="red--text text-center" v-show="message">{{ message }}</p>
    <v-text-field dense label="Name" v-model="name" class="pa-2"></v-text-field>
    <div class="red--text text-center" v-if="v$.name.$error">
      {{ v$.name.$errors[0].$message }}
    </div>
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
    <v-btn color="blue" @click="sign()" dark block tile>Sign Up</v-btn>
     
    <button-social-form/>
  </div>
</template>

<script>
import axios from "axios";
import ButtonSocialForm from "./ButtonSocialForm.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    ButtonSocialForm,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      message: "",
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      password: { required },
    };
  },
  watch: {
    name: function () {
      this.v$.name.$validate();
    },
    email: function () {
      this.v$.email.$validate();
    },
    password: function () {
      this.v$.password.$validate();
    },
  },
  methods: {
    ...mapActions("Manage", ["redirectTo"]),
    async sign() {
      this.v$.$validate();
      if (!this.v$.$error) {
        //
        let check = await axios.get(
          `http://localhost:3000/users?email=${this.email}`
        );
        //
        if (check.data.length != 0) {
          this.message = "account already found in our database";
          return;
        }
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (result.status == 201) {
          localStorage.setItem("userInfo", JSON.stringify(result.data.email));
          this.redirectTo({ name: "Home" });
        } else {
          this.message = " you faild in enter information try again";
        }
      } else {
        this.message = "Check please filed and try again";
      }
    },
  },
};
</script>

<style></style>
