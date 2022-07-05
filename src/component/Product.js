import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CustomPagination from "./CustomPagination";
import Sorting from "./Sorting";

export default function Product() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [sorting, setSorting] = useState(false);
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
    setSorting(false);
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
        <Sorting
          Data={currentPosts}
          setOrder={setOrder}
          setSorting={setSorting}
        />
      </div>
      {loading ? (
        <>
          <Container>
            <Row className="my-5" lg={4} xs={1}>
              {sorting ? (
                <>
                  {order.map((newdata) => {
                    return (
                      <Col className="col-md-3 my-2" key={newdata.id}>
                        <Card height="400px" className="ap4">
                          <Card.Img
                            variant="top"
                            height="200px"
                            style={{ objectFit: "cover" }}
                            src={newdata.image}
                          />
                          <Card.Body>
                            <h6> Name: {newdata.name} </h6>
                            <h6> Category: {newdata.category} </h6>
                            <h6> Price: {newdata.price} </h6>
                            <Link to={`/product/${newdata.slug}`}>
                              <Button variant="primary">View Detail</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              ) : (
                <>
                  {currentPosts.map((newdata) => {
                    return (
                      <Col className="col-md-3 my-2" key={newdata.id}>
                        <Card height="400px" className="ap4">
                          <Card.Img
                            variant="top"
                            height="200px"
                            src={newdata.image}
                          />
                          <Card.Body>
                            <h6> Name: {newdata.name} </h6>
                            <h6> Category: {newdata.category} </h6>
                            <h6> Price: {newdata.price} </h6>
                            <Link to={`/product/${newdata.slug}`}>
                              <Button variant="primary">View Detail</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              )}
            </Row>
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
