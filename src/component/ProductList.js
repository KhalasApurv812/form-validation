import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [user, setUser] = useState([]);

  const { slug } = useParams();

  const apiGet = async () => {
    await fetch(
      `https://60ff90a3bca46600171cf36d.mockapi.io/api/products?slug=${slug}`
    )
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  };

  useEffect(() => {
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user.length === 1 && (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title style={{ width: "456px" }}>
              <img className="card-img" src={user[0].image} alt=" not found" />
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h5 className="card-title">Name : {user[0].name}</h5>
            <h5 className="card-title">Category : {user[0].category}</h5>
            <h5 className="card-title">Price : {user[0].price}</h5>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/product">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
}
