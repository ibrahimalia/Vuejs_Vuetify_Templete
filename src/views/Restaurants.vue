<template>
  <v-row justify="end" wrap>
    <v-col cols="12" sm="12">
      <add-restaurant />
    </v-col>

    <v-col cols="12" sm="12">
      <v-row>
        <v-col cols="12" sm="12">
          <v-row class="ma-4">
            <v-col cols="12" sm="4" class="d-flex">
              <v-text-field
                v-model="search"
                label="Search Name"
                solo
                class="text"
              ></v-text-field>
              <v-select
                v-model="typeSort"
                :items="sort"
                label="Sort"
                solo
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" class="mt-n16">
          <v-row class="ml-5">
            <v-col
              cols="12"
              sm="4"
              v-for="(restaurant, index) in restaurants"
              :key="index"
            >
              <v-card>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      {{ restaurant.name }}
                    </v-card-title>

                    <v-card-subtitle> {{ restaurant.phone }} </v-card-subtitle>
                    <v-card-text> {{ restaurant.address }}</v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="blue"
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                      >
                        Go in it
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddRestaurant from "../components/Restaurants/AddResraurant.vue";
export default {
  mounted() {
    (async () => {
      await this.getRestaurant();
    })();
  },
  data() {
    return {
      sort: ["name", "address"],
      search: "",
      typeSort: "",
    };
  },
  computed: {
    ...mapState({
      restaurants: (state) => state.Restaurant.searchResults,
    }),
  },
  components: {
    AddRestaurant,
  },
  methods: {
    ...mapActions("Restaurant", ["getRestaurant", "searchR", "sortR"]),
  },
  watch: {
    search: function (newValue) {
      this.searchR(newValue);
    },
    typeSort: function (newValue) {
      this.sortR(newValue);
    },
  },
};
</script>

<style></style>
