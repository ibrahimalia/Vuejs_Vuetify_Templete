// export const getmessage = (state,getters,rootState,rootGetters)=>{
//     return rootGetters["Manage/gmessage"];
// }

export const getRestaurants = (state) => {
  return state.restarants;
};

export const getSearchResults = (state) => {
  return state.searchResults;
};
