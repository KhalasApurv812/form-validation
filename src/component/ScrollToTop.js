import React, { useEffect, useState } from "react";
import { AiFillUpSquare } from "react-icons/ai";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setTopButtton(true);
      } else {
        setTopButtton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            height: "50px",
            right: "50px",
            width: "50px",
            fontSize: "50px",
            justifyContent: "center",
          }}
          onClick={scrollUp}
        >
          <div className="seticon">
            <AiFillUpSquare />
          </div>
        </button>
      )}
    </div>
  );
}
