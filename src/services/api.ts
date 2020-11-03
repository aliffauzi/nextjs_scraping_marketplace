import axios from "./HTTP";
import fs from "fs";

const ISSERVER = typeof window === "undefined";
let userId = null;
if (!ISSERVER) {
  userId = localStorage.getItem("userId");
}

export const loginAction = async (req) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/auth/login`, {
        username: req.username,
        password: req.password,
      })
      .then((res: any) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const getProfile = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/auth/profile/${userId}`)
      .then((res: any) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const searchProduct = async (keyword, page) => {
  console.log(keyword);
  return new Promise((resolve, reject) => {
    axios
      .post(`/marketplace/tokopedia/product/search`, {
        keyword: keyword,
        page: page,
      })
      .then((res: any) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const searchInAllmarket = async (keyword, page) => {
  console.log(keyword);
  return new Promise((resolve, reject) => {
    axios
      .post(`/marketplace/all/product/search`, {
        keyword: keyword,
        page: page,
      })
      .then((res: any) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const exportData = async (keyword, page) => {
  console.log(keyword);
  return new Promise((resolve, reject) => {
    axios
      .get(`/marketplace/all/product/export?keyword=${keyword}&page=${page}`, {
        responseType: "blob",
      })
      .then((res: any) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
