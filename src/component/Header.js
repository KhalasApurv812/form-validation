import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Sorting from "./Sorting";

export default function Header({ Data, setData }) {
  let navigate = useNavigate();
  const loginName = JSON.parse(localStorage.getItem("userLoginData"));
  const [, setSortingData] = useState();

  const sortAscending = () => {
    setSortingData("asc");
    const sortascData = Data.sort(function (a, b) {
      return a.price - b.price;
    });
    setData(sortascData);
  };

  const sortDescending = () => {
    setSortingData("dsc");
    const sortdscData = Data.sort(function (a, b) {
      return b.price - a.price;
    });

    setData(sortdscData);
  };

  // this is use for without login search in url to nevigate to login
  useEffect(() => {
    if (loginName === null) {
      navigate("/");
    }
  }, [loginName, navigate]);

  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    let log = confirm("Are you sure?");
    if (log) {
      localStorage.removeItem("userLoginData");
      localStorage.removeItem("userInfo");
      navigate("/");
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <div>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>

              <div style={{ marginRight: "10px", color: "white" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textDecoration: "none",
                    color: "White",
                  }}
                  as={Link}
                  to="/dashboard"
                >
                  Home
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, textDecoration: "none", color: "White" }}
                  as={Link}
                  to="/product"
                >
                  Product
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, textDecoration: "none", color: "White" }}
                >
                  <Sorting
                    sortAscending={sortAscending}
                    sortDescending={sortDescending}
                  />
                </Typography>
              </div>
            </Toolbar>

            <Button
              color="inherit"
              variant="h6"
              onClick={logout}
              sx={{ width: "150px", float: "right", marginTop: "-50px" }}
            >
              LogOut
            </Button>
          </div>
        </AppBar>
      </Box>
    </>
  );
}
