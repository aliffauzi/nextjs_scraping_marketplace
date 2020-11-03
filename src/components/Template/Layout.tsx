import React from "react";
import Router from "next/router";
import { useCookies, Cookies } from "react-cookie";

export const Content = ({ children }) => {
  return <div className="p-8 ml-0 md:ml-72 w-full">{children}</div>;
};

export const NavSide = ({ data }) => {
  const cookie = new Cookies();

  const logout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    cookie.remove("userId");
    Router.push("/");
  };

  return (
    <div
      className="bg-indigo-500 hidden md:block p-5 fixed top-0 left-0"
      style={{ width: "20rem", minHeight: "100vh", maxHeight: "100vh" }}
    >
      <div className="flex w-full">
        <button
          className="bg-white hover:bg-red-500 hover:text-white shadow p-3 w-full text-center rounded"
          onClick={(e) => logout(e)}
        >
          <h4>Logout</h4>
        </button>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <ul>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current text-white w-6 h-6"
            >
              <g data-name="Layer 2">
                <g data-name="person">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
                </g>
              </g>
            </svg>
            <h4 className="ml-3 text-lg font-semibold text-white">
              {data.username}
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h4>Please Wait.</h4>
    </div>
  );
};
