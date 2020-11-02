import React, { useState, useEffect } from "react";
import { getProfile, searchProduct } from "../../services/api";
import { NavSide, Content } from "../../components/Template/Layout";
import { TableProduct } from "../../components/TableProduct";
import { notification } from "../../helpers/index";
import { ToastContainer } from "react-toastify";

function Index() {
  const [profile, setProfile] = useState({});
  const [keyword, setData]: any = useState("");
  const [pages, setPages]: any = useState("");
  const [product, setDataProduct]: any = useState({});

  const getDataProfile = async () => {
    await getProfile()
      .then((res: any) => setProfile(res.data.data))
      .catch((error) => console.log(error));
  };

  const dispatchSearchProduct = async (e) => {
    e.preventDefault();

    if (keyword === "") {
      notification("Masukan keyword");
    } else {
      setDataProduct({});
      await searchProduct(keyword, pages).then((res: any) => {
        setDataProduct({
          ...product,
          total: res.data.data.query.totalData,
          data: res.data.data.products,
        });
      });
    }
  };

  useEffect(() => {
    const initPage = async () => {
      await getDataProfile();
    };
    initPage();
  }, []);

  return (
    <div className="flex">
      <NavSide data={profile} />
      <Content>
        <div className="bg-white shadow-md p-3 rounded">
          <div className="flex  items-cent p-2 ">
            <h4 className="text-lg font-semibold">Cari product di tokopedia</h4>
            <div className="ml-auto flex">
              <input
                type="text"
                placeholder="Masukan nama item"
                onChange={(e) => setData(e.target.value)}
                className="border px-3 py-2 rounded focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Pages"
                onChange={(e) => setPages(e.target.value)}
                className="border px-3 py-2 rounded focus:outline-none focus:border-indigo-500 mx-3"
              />
              <button
                className="bg-indigo-500 px-3 py-2 text-white rounded mx-3"
                type="button"
                onClick={(e) => dispatchSearchProduct(e)}
              >
                Cari Produk
              </button>
            </div>
          </div>
          <div className="mt-2">
            <TableProduct data={product ? product.data : null} />
          </div>
        </div>
      </Content>
      <ToastContainer />
    </div>
  );
}

export default Index;
