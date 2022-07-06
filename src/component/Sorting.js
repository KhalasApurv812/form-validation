import { Typography } from "@mui/material";
import * as React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default function Sorting({ Data, setOrder }) {
  const [, setSortingData] = React.useState();

  const sortAscending = () => {
    setSortingData("asc");
    const sortascData = Data.sort(function (a, b) {
      return a.price - b.price;
    });
    setOrder(sortascData);
  };

  const sortDescending = () => {
    setSortingData("dsc");
    const sortdscData = Data.sort(function (a, b) {
      return b.price - a.price;
    });

    setOrder(sortdscData);
  };
  return (
    <>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px", justifyContent: "center" }}
          navbarScroll
        >
          <NavDropdown title="sort by price" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => sortAscending()}>
              <h5> Assending</h5>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => sortDescending()}>
              <h5> Dessending </h5>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Typography>
    </>
  );
}
