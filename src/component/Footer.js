import { Box } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ backgroundColor: " rgb(103 175 247)" }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          This is footer
        </Typography>
      </Box>
    </>
  );
}
