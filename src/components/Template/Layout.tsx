import React from "react";

export const Content = ({ children }) => {
  return (
    <div
      style={{ marginLeft: "320px", width: "calc(100% - 320px)" }}
      className="p-10"
    >
      {children}
    </div>
  );
};

export const NavSide = ({ data }) => {
  return (
    <div
      className="bg-indigo-500 hidden md:block p-5 fixed top-0 left-0"
      style={{ width: "20rem", minHeight: "100vh", maxHeight: "100vh" }}
    >
      <div className="flex w-full">
        <div className="bg-white shadow p-3 w-full text-center rounded">
          <h4>Scraping Free</h4>
        </div>
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
