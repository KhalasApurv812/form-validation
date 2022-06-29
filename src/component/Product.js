import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <Header />
      {loading ? (
        <>
          <Container>
            <div style={{ marginTop: "95px" }}>
              <Row className="my-5" xs={1} md={3}>
                {data.map((newdata) => {
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
      <Footer />
    </>
  );
}
