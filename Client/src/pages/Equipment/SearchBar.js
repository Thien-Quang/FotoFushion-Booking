import React, { useEffect, useState } from "react";

function SearchBar({
  fillter = {
    search: "",
    category: "",
  },
  setFillter = () => {},
}) {
  const [search, setSearch] = useState(fillter.search);
  const [category, setCategory] = useState(fillter.category);

  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    setFillter({ search, category });
  }, [search, category]);

  useEffect(() => {
    setListCategory([
      {
        name: "Máy ảnh",
        value: "may anh",
      },
    ]);
  }, []);

  return (
    <div className="mx-auto w-full w-3/4 lg:w-5/6 xl:w-2/3 shadow p-5 rounded-lg bg-white">
      <div className="relative">
        <div className="absolute flex items-center ml-2 h-full">
          <svg
            className="w-4 h-4 fill-current text-primary-gray-dark"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>

        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search by listing, location, bedroom number..."
          className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-black focus:text-white focus:ring-0 text-sm"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button
          onClick={() => setCategory({ name: "Máy ảnh", value: "may anh" })}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
        >
          Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-black focus:text-white focus:ring-0 text-sm"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">All Type</option>
            {listCategory.map((c, i) => (
              <option key={i} value={c.value}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => setCategory("may anh")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-black focus:text-white focus:ring-0 text-sm"
          >
            Máy Ảnh
          </button>

          <button
            onClick={() => setCategory("phong nen")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-black focus:text-white focus:ring-0 text-sm"
          >
            Phông nền
          </button>

          <button
            onClick={() => setCategory("cap ket noi")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-black focus:text-white focus:ring-0 text-sm"
          >
            Cáp kết nối
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
