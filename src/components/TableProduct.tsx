export function TableProduct({ data }) {
  return (
    <div className="w-full">
      <table className="table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Nama Produk</th>
            <th className="border px-4 py-2 text-left">Kategori</th>
            <th className="border px-4 py-2 text-left">Harga</th>
            <th className="border px-4 py-2 text-left">Gambar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => (
              <tr>
                <td className="border px-4 py-2">{item.productName}</td>
                <td className="border px-4 py-2">{item.categoryName}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="object-cover h-24"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
