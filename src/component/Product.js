import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import usePagination from "./Pagination";
import Pagination from "@material-ui/lab/Pagination";
import CustomPagination from "./CustomPagination";

export default function Product() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  // pagination method start
  const indexofLastpost = page * PER_PAGE;
  const indexofFirstpost = indexofLastpost - PER_PAGE;
  const currentPosts = data.slice(indexofFirstpost, indexofLastpost);

  //change page of pagination
  const paginate = (pageNumbers) => setPage(pageNumbers);
  // end
  // end

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(currentPosts, PER_PAGE);

  const handleChange = (e, p) => {
    window.scrollTo(0, 0);
    setPage(p);
    _DATA.jump(p);
  };

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
    setLoading(true);
  };

  useEffect(() => {
    apiGet();
  }, []);
  return (
    <>
      <Header Data={_DATA.currentData()} setData={setData} />

      {loading ? (
        <>
          <Container>
            <div style={{ marginTop: "100px" }}>
              <Row className="my-5" xs={1} md={3}>
                {_DATA.currentData().map((newdata) => {
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
              </Row>
            </div>
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

      <CustomPagination
        postperpage={PER_PAGE}
        totalPost={data.length}
        paginate={paginate}
      />
      <br />
      <div className="pagination">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>

      <Footer />
    </>
  );
}
