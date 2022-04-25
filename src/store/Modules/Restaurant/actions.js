import axios from "axios";
// use global commit
// export const test = ({commit})=>{
//   commit("Manage/changeMessage","sdsd" , {root:true});
// }
export const addRestaurant = async ({ commit }, payload) => {
  payload.v$.$validate();
  if (!payload.v$.$error) {
    let results = await axios.post("http://localhost:3000/restaurants", {
      name: payload.name,
      phone: payload.phone,
      address: payload.address,
    });
    if (results.status == 201) {
      commit("Manage/changeMessage", "succeess add restaurant", { root: true });
      // commit("Manage/redirectTo", "Restaurants", { root: true });
      location.reload();
    } else {
      commit("Manage/changeMessage", "something wrong try agin ", {
        root: true,
      });
    }
  } else {
    commit("Manage/changeMessage", "Check please filed and try again", {
      root: true,
    });
  }
};

//
export const getRestaurant = async ({ commit }) => {
  let results = await axios.get("http://localhost:3000/restaurants");
  if (results.status == 200) {
    commit("changeRestaurant", results.data);
    commit("changeSearchResults", results.data);
  }
};

export const searchR = ({ commit, getters }, payload) => {
  let results = null;
  if (!payload) {
    results = getters.getRestaurants;
    commit("changeSearchResults", results);
  } else {
    let regexp = new RegExp(`${payload}`, "i");
    results = getters.getRestaurants.filter((item) => {
      if (regexp.test(item.name)) {
        return item;
      }
    });
    commit("changeSearchResults", results);
  }
};

export const sortR = ({ state }, payload) => {
  if (payload == "name") {
    state.searchResults.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    state.searchResults.sort((a, b) => a.address.localeCompare(b.address));

  }
};
