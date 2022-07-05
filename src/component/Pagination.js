import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;

// material ui pagination

// const count = Math.ceil(data.length / PER_PAGE);
// const _DATA = usePagination(currentPosts, PER_PAGE);

// const handleChange = (e, p) => {
//   window.scrollTo(0, 0);
//   setPage(p);
//   _DATA.jump(p);
//   setSorting(false);
// };

// <div className="pagination">
//   <Pagination
//     count={count}
//     size="large"
//     page={page}
//     variant="outlined"
//     shape="rounded"
//     onChange={handleChange}
//   />
// </div>
