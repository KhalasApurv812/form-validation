/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import CustomPagination from "./CustomPagination";
import Sorting from "./Sorting";
import ProductData from "./ProductData";

export default function Product() {
  const [data, setData] = useState([]);
  const [, setOrder] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  // pagination method start
  const indexofLastpost = page * PER_PAGE;
  const indexofFirstpost = indexofLastpost - PER_PAGE;
  const currentPosts = data.slice(indexofFirstpost, indexofLastpost);

  //change page of pagination
  const paginate = (pageNumbers) => {
    setPage(pageNumbers);
  };
  // end
  // end

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setSearchInput(response);
      });
    setLoading(true);
  };

  useEffect(() => {
    apiGet();
  }, []);
  return (
    <>
      <Header Data={data} setData={setData} searchInput={searchInput} />
      <div style={{ marginTop: "50px" }}>
        <Sorting Data={data} setOrder={setOrder} />
      </div>
      {loading ? (
        <>
          <Container>
            <ProductData Data={(data, currentPosts)} />
          </Container>
        </>
      ) : (
        <>
          <div style={{ display: "flex", marginTop: "95px" }}>
            <Spinner animation="border" role="status"></Spinner>
            <h1>Loading...</h1>
          </div>
        </>
      )}
      <div className="my-3">
        <CustomPagination
          postperpage={PER_PAGE}
          totalPost={data.length}
          paginate={paginate}
          page={page}
        />
      </div>
      <Footer />
    </>
  );
}
