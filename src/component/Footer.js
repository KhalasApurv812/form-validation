import { Box } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, height: "64px" }}
        style={{ backgroundColor: "#1976d2" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white", paddingTop: "12px" }}
        >
          © 2022 YourSite.com - All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
}
