import React, { useEffect, useState } from "react";

function Pagination({ currentPage = 0, totalPages = 0, setCurrentPage }) {
  const [pgItems, setPgItems] = useState([]);

  useEffect(() => {
    const _pgItems = [];

    const mapClass = {
      true: "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover-bg-blue-100 hover-text-blue-700 dark-border-gray-700 dark-bg-gray-700 dark-text-white",
      false:
        "flex items-center justify-center px-4 h-10 leading-tight bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white",
    };

    const mapAria = {
      true: "page",
      false: undefined,
    };

    for (let i = 1; i <= totalPages; i++) {
      _pgItems.push(
        <li key={i}>
          <button
            onClick={() => {
              setCurrentPage(i);
            }}
            aria-current={mapAria[i === currentPage]}
            className={mapClass[i === currentPage]}
          >
            {i}
          </button>
        </li>
      );
    }
    setPgItems(_pgItems);
  }, [currentPage, totalPages]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (totalPages === 0) return <></>;
  return (
    <div className="text-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              onClick={prePage}
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
            >
              Previous
            </button>
          </li>
          {pgItems}
          <li>
            <button
              onClick={nextPage}
              className="flex items-center justify-center px-4 h-10 leading-tight bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
