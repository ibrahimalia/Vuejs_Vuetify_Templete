<template>
  <div>
    <v-dialog transition="dialog-top-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex justify-end ma-4">
          <v-btn text outlined color="primary" v-bind="attrs" v-on="on"
            >ADD</v-btn
          >
        </div>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar dark>Add New Restaurant</v-toolbar>
          <p class="red--text text-center" v-show="message">{{ message }}</p>

          <v-card-text>
            <v-text-field
              solo
              label="Name"
              v-model="name"
              class="mt-5"
            ></v-text-field>
            <div class="red--text text-center" v-if="v$.name.$error">
              {{ v$.name.$errors[0].$message }}
            </div>
          </v-card-text>
          <v-card-text>
            <v-text-field
              solo
              label="Phone"
              v-model="phone"
              class="mt-n4"
            ></v-text-field>
            <div class="red--text text-center" v-if="v$.phone.$error">
              {{ v$.phone.$errors[0].$message }}
            </div>
          </v-card-text>
          <v-card-text>
            <v-text-field
              solo
              label="address"
              v-model="address"
              class="mt-n4"
            ></v-text-field>
            <div class="red--text text-center" v-if="v$.address.$error">
              {{ v$.address.$errors[0].$message }}
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
            <v-btn text @click="add()">Add</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
    };
  },
  validations() {
    return {
      name: { required },
      phone: { required },
      address: { required },
    };
  },
  computed: {
    ...mapState({
      message: (state) => state.Manage.message,
    }),
  },
  watch: {
    name: function () {
      this.v$.name.$validate();
    },
    phone: function () {
      this.v$.phone.$validate();
    },
    address: function () {
      this.v$.address.$validate();
    },
  },
  methods: {
    ...mapActions("Restaurant", ["addRestaurant"]),
    add() {
      this.addRestaurant({
        v$: this.v$,
        name: this.name,
        phone: this.phone,
        address: this.address,
      });
    },
  },
};
</script>

<style scoped>
.v-btn.v-btn--outlined.v-btn--text.theme--light.v-size--default.primary--text {
  height: 49px;
}
</style>
