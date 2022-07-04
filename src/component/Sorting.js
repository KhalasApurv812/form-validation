import * as React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default function Sorting({ sortAscending, sortDescending }) {
  return (
    <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <NavDropdown title="sort by price" id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={() => sortAscending()}>
            Assending
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => sortDescending()}>
            Dessending
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
}
