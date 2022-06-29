import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const nevigate = useNavigate();

  const userRegiterDatas = JSON.parse(localStorage.getItem("useRegisterData"));
  const userLoginData = JSON.parse(localStorage.getItem("userLoginData"));

  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const clear = () => {
    setLoginData({
      Email: "",
      Password: "",
    });
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // store the login information and set the login user information
  let storeLoginData = () => {
    const data = [];
    const result = data.concat(userLoginData || [], [loginData]);
    localStorage.setItem("userLoginData", JSON.stringify(result));
    // eslint-disable-next-line array-callback-return
    userRegiterDatas.map((newdata) => {
      if (newdata.Email === loginData.Email) {
        let finaldata = newdata;
        localStorage.setItem("userInfo", JSON.stringify(finaldata));
      }
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("test");
    // register data not null then check the email is already register or not
    if (userRegiterDatas !== null) {
      const userData = userRegiterDatas.filter((rd) => {
        return (
          rd.Email === loginData.Email && rd.Password === loginData.Password
        );
      });

      if (userData && userData.length !== 0) {
        if (loginData.Email !== "" && loginData.Password !== "") {
          alert("Login success");
          storeLoginData();
          nevigate("/dashboard");
          e.target.reset();
          clear();
        }
      } else {
        if (loginData.Email === "") {
          alert("email is required");
        } else if (loginData.Password === "") {
          alert("password is required");
        } else {
          alert("username and password is not match");
        }
      }
    } else {
      alert("please Registered");
    }
  };

  return (
    <>
      <div className="bgimage">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form
          style={{ backgroundColor: "#080710" }}
          className="form"
          onSubmit={handlesubmit}
        >
          <h3>Login Here</h3>

          <label form="username">Username</label>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            onChange={handleInput}
          />

          <label form="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleInput}
          />

          <button className="button" style={{ marginTop: "13px" }}>
            Log In
          </button>
          <p style={{ textAlign: "center" }}>
            Don't have an Account! {"  "}
            <Link to="/registration">Register here!</Link>
          </p>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
