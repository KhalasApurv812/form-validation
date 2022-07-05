import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "react-bootstrap";

export default function Search({ filter, handleSearch }) {
  return (
    <Paper component="form" sx={{ p: "2px 4px", display: "flex" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Product"
        inputProps={{ "aria-label": "search product" }}
        value={filter}
        onChange={(e) => handleSearch(e)}
      />
      <Button variant="dark">
        <b>Submit</b>
      </Button>
    </Paper>
  );
}
