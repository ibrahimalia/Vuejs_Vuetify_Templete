<template>
  <v-app-bar
    app
    dark
    light
    elevation="6"
    dense
    flat
    outlined
    elevate-on-scroll
    color="primary"
  >
    <v-app-bar-nav-icon
      class="d-flex d-sm-none"
      @click="changeDrawer()"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Vuetify App</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-list class="d-none d-sm-flex align-center transparent">
      <v-list-item
        exact
        link
        v-for="(item, index) in menu"
        :key="index"
        :to="{ name: item.route }"
      >
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-btn @click="logout()" icon>
      <v-icon>fa fa-sign-out</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      menu: [
        { title: "Home", route: "Home" },
        { title: "About", route: "About"},
        { title: "Restaurant", route: "Restaurants"},

      ],
    };
  },
  methods: {
    ...mapActions("Manage", ["changeDrawer", "redirectTo"]),
    logout() {
      localStorage.removeItem("userInfo");
      this.redirectTo({ name: "SignUp" });
    },
  },
};
</script>

<style></style>
