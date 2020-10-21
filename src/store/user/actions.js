import axios from "axios";

export function Login({ commit }, payload) {
  const url = "https://admin.localwobiz.com/login";
  commit("SET_ERROR_GETTING_TOKEN", null);
  return axios
    .post(url, payload)
    .then((result) => {
      commit("SET_ERROR_GETTING_TOKEN", false);
      commit("SET_BEARER_TOKEN", result.data);
    })
    .catch((err) => {
      console.log(err);
      commit("SET_ERROR_GETTING_TOKEN", err);
    });
}
