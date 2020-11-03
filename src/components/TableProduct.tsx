export function TableProduct({ data, loadingData }) {
  return (
    <div className="w-full  overflow-x-auto">
      {loadingData ? (
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      ) : data ? (
        <table className="text-sm" width="100%">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Nama Produk</th>
              <th className="border px-4 py-2 text-left">Nama Toko</th>
              <th className="border px-4 py-2 text-left">Original Link</th>
              <th className="border px-4 py-2 text-left">Market Place</th>
              <th className="border px-4 py-2 text-left">Kategori</th>
              <th className="border px-4 py-2 text-left">Harga</th>
              <th className="border px-4 py-2 text-left">Gambar</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{item.productName}</td>
                  <td className="border px-4 py-2">{item.shop}</td>
                  <td className="border px-4 py-2">
                    <a
                      target="_blank"
                      href={item.url}
                      className="hover:text-indigo-500 text-indigo-500"
                    >
                      Visit
                    </a>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.marketplace === "tokopedia" ? (
                      <img
                        src="https://ecs7.tokopedia.net/assets-about-frontend/master/img/Tokopedia_Mascot-36c1015eabb66a26893edeb227db71e0.png"
                        className="w-8 h-8 text-center inline-block"
                      />
                    ) : (
                      <img
                        src="https://img.involve.asia/ia_logo/1303_pSAkrsnO.svg"
                        className="w-8 h-8 text-center inline-block"
                      />
                    )}
                  </td>
                  <td className="border px-4 py-2">{item.categoryName}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="object-cover h-16 w-16"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="border px-4 py-2 text-center">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
