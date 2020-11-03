import React, { useState, useEffect } from "react";
import {
  getProfile,
  searchProduct,
  exportData,
  searchInAllmarket,
} from "../../services/api";
import {
  NavSide,
  Content,
  LoadingScreen,
} from "../../components/Template/Layout";
import { TableProduct } from "../../components/TableProduct";
import { notification } from "../../helpers/index";
import { ToastContainer } from "react-toastify";
import Router from "next/router";

function Index() {
  const [profile, setProfile] = useState({});
  const [keyword, setData]: any = useState("");
  const [isLoading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [pages, setPages]: any = useState("");
  const [product, setDataProduct]: any = useState({});

  const getDataProfile = async () => {
    await getProfile()
      .then((res: any) => {
        setProfile(res.data.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          Router.push("/");
        }
      });
  };

  const dispatchSearchProduct = async (e) => {
    e.preventDefault();

    if (keyword === "") {
      notification("Masukan keyword");
    } else {
      setLoadingData(true);
      setDataProduct({});
      await searchInAllmarket(keyword, pages).then((res: any) => {
        setLoadingData(false);
        setDataProduct({
          ...product,
          total: res.data.data.length,
          data: res.data.data,
        });
      });
    }
  };

  const downloadFiles = async (e) => {
    e.preventDefault();
    await exportData(keyword, pages).then((res: any) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Data Product-${keyword}.xlsx`);
      document.body.appendChild(link);
      link.click();
    });
  };

  useEffect(() => {
    const initPage = async () => {
      await getDataProfile();
    };
    initPage();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex">
          <NavSide data={profile} />
          <Content>
            <div className="bg-white shadow-md p-3 rounded">
              <div className="flex flex-col md:flex-row justify-between items-cent p-2 ">
                <h4 className="text-lg font-semibold">
                  Cari produk di (Tokopedia & Bukalapak)
                </h4>
                <div className="ml-0 md:ml-auto flex flex-col md:flex-row">
                  <input
                    type="text"
                    placeholder="Masukan nama item"
                    onChange={(e) => setData(e.target.value)}
                    className="border px-3 py-2 rounded focus:outline-none focus:border-indigo-500 w-2/8 my-2 md:my-0"
                  />

                  <button
                    className="bg-indigo-500 px-3 py-2 text-white rounded mx-0 md:mx-3 my-1 md:my-0"
                    type="button"
                    onClick={(e) => dispatchSearchProduct(e)}
                  >
                    Cari Produk
                  </button>
                  <button
                    className="bg-indigo-500 px-3 py-2 text-white rounded my-1 md:my-0"
                    type="button"
                    onClick={(e) => downloadFiles(e)}
                  >
                    Download Excel
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <TableProduct
                  data={product ? product.data : null}
                  loadingData={loadingData}
                />
              </div>
            </div>
          </Content>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Index;
