import axios from "axios";

const ISSERVER = typeof window === "undefined";
let token = ``;

if (!ISSERVER) {
  token = localStorage.getItem("token");
}

axios.defaults.baseURL = "https://sc2.digitaltech.id/api";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Authorization"] = token;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
