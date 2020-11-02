import axios from "axios";
import Router from "next/router";

const ISSERVER = typeof window === "undefined";
const API_URL = process.env.NEXT_APP_API_URL;
let token = ``;

if (!ISSERVER) {
  token = localStorage.getItem("token");
}

axios.defaults.baseURL = "http://localhost:3010/api";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Authorization"] = token;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
