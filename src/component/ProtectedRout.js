import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRout(props) {
  const { Authentication } = props;
  const nevigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("userLoginData");

    if (!login) {
      nevigate("/");
    }
  });
  return (
    <>
      <Authentication />
    </>
  );
}
