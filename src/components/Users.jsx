import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

import Card from "./Card";
const Users = () => {
  const { filteredData } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  return (
    <>
      <Header />
      <div className="cardlist">
        {currentPosts.map((d, i) => (
          <Card detail={d} key={i} addBtn={true} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Users;
