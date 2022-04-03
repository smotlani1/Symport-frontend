import axios from "axios";
import jwtDecode from "jwt-decode";

const apiEndpoint = "http://127.0.0.1:8000/api/token/";

export function login(username, password) {
  return axios.post(apiEndpoint, { username, password });
}

export function getJWT() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
