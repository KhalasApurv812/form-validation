import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductData({ Data }) {
  return (
    <>
      <Row className="my-5" lg={4} xs={1}>
        {Data.map((newdata) => {
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
      </Row>
    </>
  );
}
