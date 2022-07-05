/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function CustomPagination({
  postperpage,
  totalPost,
  paginate,
  page,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === page ? "active" : ""}`}
            >
              <a
                onClick={() => {
                  paginate(number);
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
