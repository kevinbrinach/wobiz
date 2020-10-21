import axios from "axios";

export function SET_BEARER_TOKEN(state, result) {
  state.bearerToken = result.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;
}

export function SET_ERROR_GETTING_TOKEN(state, payload) {
  state.errorCode = payload.code;
}
