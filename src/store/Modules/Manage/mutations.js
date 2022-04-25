import router from "../../../router/index.js";

export const redirectTo = (state, payload) => {
  router.push({ name: payload });
};

export const changeDrawer = (state) => {
  state.drawer = !state.drawer;
};

export const changeMessage = (state,payload)=>{
  state.message = payload;
}