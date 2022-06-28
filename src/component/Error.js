import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Error() {
  const nevigate = useNavigate();

  const backToHome = () => {
    nevigate("/");
  };
  return (
    <>
      <Image
        style={{ cursor: "pointer" }}
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
        onClick={backToHome}
      ></Image>
    </>
  );
}
