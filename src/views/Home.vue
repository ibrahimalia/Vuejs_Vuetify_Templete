<template>
  <v-row class="body">
    <v-col cols="12" sm="12" class="section">
      <div class="content">
        <v-scroll-y-transition>
          <h2 v-show="show">Vuetify App</h2>
        </v-scroll-y-transition>
      </div>
    </v-col>
    <v-scroll-y-transition>
      <div v-show="show">
      <v-col  cols="12" sm="12">
        <p class="text-center text-h2 blue-grey--text">Services</p>
      </v-col>
      <v-col cols="12" sm="12">
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12" sm="12">
                <img src="../assets/h_image.jpg" width="100%" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" align-self="center">
            <v-row>
              <v-col cols="12" sm="12">
                <service-home-section />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      </div>
    </v-scroll-y-transition>
  </v-row>
</template>

<script>
// @ is an alias to /src
import ServiceHomeSection from "../components/Home/ServiceHomeSection.vue";
export default {
  name: "Home",
  components: {
    ServiceHomeSection,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = !this.show;
    }, 500);
  },
};
</script>
<style scoped>
.section {
  position: relative;
  width: 100%;
  height: 80vh;
  background: url("../assets/nav1.webp");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  clip-path: circle(140vh at 50% -80vh);
}
.body {
  min-height: 1vh;
}
.content {
  max-width: 1000px;
  text-align: center;
}
.section .content h2 {
  font-size: 3em;
  color: rgb(71, 174, 214);
  font-weight: 500;
}
</style>
