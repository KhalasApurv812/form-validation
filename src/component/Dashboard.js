/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  const loginName = JSON.parse(localStorage.getItem("userLoginData"));
  const userInformationData = JSON.parse(localStorage.getItem("userInfo"));

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
      {loginName !== null && (
        <>
          <div>
            <h1 style={{ margin: "35px" }}>
              <b>Dashboard</b>
            </h1>
          </div>
          <h1 style={{ margin: "70px" }}>
            {userInformationData !== null && (
              <>
                Your name is {userInformationData?.Firstname}{" "}
                {userInformationData?.Lastname}
              </>
            )}
          </h1>
          <button style={{ width: "150px" }} onClick={logout}>
            Log out
          </button>
        </>
      )}
    </>
  );
}
