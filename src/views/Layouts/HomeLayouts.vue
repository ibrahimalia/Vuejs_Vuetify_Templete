<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <app-bar />
        <app-side-bar />
      </v-col>
      <router-view />

        <Footer/>
    </v-row>
  </div>
</template>

<script>
import AppBar from "../../components/NavBar/AppBar.vue";
import AppSideBar from "../../components/NavBar/AppSideBar.vue";
import Footer from "../../components/Footer/Footer.vue";
export default {
  components: {
    AppBar,
    AppSideBar,
    Footer
  },
};
</script>

<style></style>
