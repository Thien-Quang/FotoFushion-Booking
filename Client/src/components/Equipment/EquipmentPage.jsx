import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const response = {
  items: [
    {
      id: 1,
      imageUrl:
        "https://designs.vn/wp-content/images/02-07-2020/top-10-may-anh-compact-nho-ma-co-vo-trong-nam-2020.jpg",
      productName: "Máy ảnh",
      category: "",
      currentPrice: "$149",
      originalPrice: "$199", // optional
    },
    {
      id: 2,
      imageUrl:
        "https://designs.vn/wp-content/images/02-07-2020/top-10-may-anh-compact-nho-ma-co-vo-trong-nam-2020.jpg",
      productName: "Máy ảnh",
      category: "",
      currentPrice: "$149",
      originalPrice: "$199", // optional
    },
  ],
  currentPage: 1,
  totalPages: 5,
};

export default function EquipmentPage() {
  const [items, setItems] = useState([]);

  const [pageSize, setPageSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // start in 1
  const [totalPages, setTotalPages] = useState(0);

  const [fillter, setFillter] = useState({
    search: "",
    category: "",
  });

  useEffect(() => {
    const res = response;

    setCurrentPage(res.currentPage);
    setTotalPages(res.totalPages);

    const _items = res.items.map((item, index) => {
      const _item = (
        <ProductCard
          key={index}
          id={item.id}
          imageUrl={item.imageUrl}
          brand={item.brand || null}
          productName={item.productName}
          currentPrice={item.currentPrice}
          originalPrice={item.originalPrice || null}
          onClick={productOnClick}
        />
      );
      return _item;
    });
    setItems(_items);
  }, [fillter, currentPage]);

  const productOnClick = useCallback((event, item) => {
    const { id } = item;
    const baseUrl = "/";
    console.log("Redirecting to " + baseUrl + id);
  }, []);

  return (
    <div>
      <SearchBar setFillter={setFillter} fillter={fillter} />
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {items}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
