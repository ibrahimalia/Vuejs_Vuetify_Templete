import axios from "axios";

export const redirectTo = ({ commit }, payload) => {
  commit("redirectTo", payload.name);
};

export const changeDrawer = ({ commit }) => {
  commit("changeDrawer");
};

// export const checkFoundUser = async (context, payload) => {
//   let check = await axios.get(
//     `http://localhost:3000/users?email=${payload.email}&password=${payload.password}`
//   );
//   return check;
// };

export const login = async ({ commit }, payload) => {
  payload.v$.$validate();
  if (!payload.v$.$error) {
    let check = await axios.get(
      `http://localhost:3000/users?email=${payload.email}&password=${payload.password}`
    );
    if (check.data.length != 0) {
      localStorage.setItem("userInfo", JSON.stringify(check.data[0].email));
      commit("redirectTo", "Home");
    } else {
      commit(
        "changeMessage",
        "Account not found in database ... please register in website"
      );
    }
  } else {
    commit("changeMessage", "Check please filed and try again");
  }
};
