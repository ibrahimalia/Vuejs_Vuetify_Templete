<template>
  <v-row class="mt-16 justify-center">
    <v-col cols="12" sm="12">
      <v-card flat>
        <v-row justify="center" align="center" class="mt-10">
          <v-col cols="12" sm="12">
            <v-card-title class="red--text text-h4 justify-center">
              Sign In
            </v-card-title>
            <v-card-subtitle class="justify-center text-center"
              >if you don't have account, click her to
              <router-link :to="{ name: 'SignUp' }">sign up</router-link>
            </v-card-subtitle>
          </v-col>
          <v-col cols="12" sm="6">
            <grid-sign-in-form />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import GridSignInForm from "../components/SignIn/GridSignInForm.vue";
export default {
  components: {
    GridSignInForm,
  },
};
</script>

<style></style>
