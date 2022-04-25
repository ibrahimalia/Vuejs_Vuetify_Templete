<template>
  <v-row align="center" justify="center" class="mt-16 pa-16">
    <v-col cols="12" sm="12">
      <p class="text-h2 text-center red--text">Page Not Found</p>
      <div class="d-flex align-center justify-center">
        <router-link :to="{ name: 'Home' }">
          <v-btn color="green" text outlined>Go Back Home</v-btn>
        </router-link>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import CryptoJS from "crypto-js";
// in data section :
// x: CryptoJS.AES.encrypt("ddfdf", 'secret key 123').toString()
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style></style>
