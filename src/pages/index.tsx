import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useCookies } from "react-cookie";
import { loginAction } from "../services/api";
import { handleAuth } from "../helpers";
import { ToastContainer } from "react-toastify";
import { notification } from "../helpers/index";

interface DataInput {
  username: string;
  password: string;
}

function Home() {
  const [data, setData] = useState<DataInput>({ username: "", password: "" });
  const [cookies, setCookie] = useCookies(["userId"]);

  const login = async (e) => {
    e.preventDefault();
    await loginAction(data)
      .then((res: any) => {
        setCookie("userId", res.data._id);
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("token", res.data.token);
        Router.push("/home");
      })
      .catch((error) => {
        notification(error.response.data.message);
      });
  };

  return (
    <>
      <div className="h-screen w-2/8 flex justify-center items-center">
        <div className="p-5 rounded shadow-lg">
          <div className="py-4">
            <h4 className="text-gray-800 text-2xl font-bold">Selamat Datang</h4>
            <p className="text-sm mt-2 text-gray-600 font-semibold">
              Scraping data produk dengan mudah dari marketplace pilihan.
            </p>
          </div>
          <form onSubmit={(e) => login(e)}>
            <div className="">
              <input
                type="text"
                name="username"
                value={data.username}
                className="border w-full my-2 px-3 py-2 rounded"
                placeholder="username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              <input
                type="password"
                name="password"
                value={data.password}
                className="border w-full my-2 px-3 py-2 rounded"
                placeholder="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button
                type="submit"
                className="my-2 px-3 py-3 bg-indigo-500 w-full text-white rounded"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  await handleAuth(ctx);

  return {};
};

export default Home;
