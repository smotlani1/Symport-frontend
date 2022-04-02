import axios from "axios";

const apiEndpoint = "http://127.0.0.1:8000/api/token/";

export function login(username, password) {
  return axios.post(apiEndpoint, { username, password });
}
