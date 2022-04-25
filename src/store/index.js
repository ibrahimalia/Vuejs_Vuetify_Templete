import Vue from "vue";
import Vuex from "vuex";
import Manage  from "./Modules/Manage/index.js";
import Restaurant  from "./Modules/Restaurant/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Manage,
    Restaurant
  },
});
