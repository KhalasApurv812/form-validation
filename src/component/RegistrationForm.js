import alertify from "alertifyjs";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const nevigate = useNavigate();
  const date = new Date();
  const time = date.getTime();

  const localRegisterData = JSON.parse(localStorage.getItem("useRegisterData"));

  const [registerdata, setRegisterdata] = useState({
    id: time,
    Firstname: "",
    Lastname: "",
    gender: "",
    Email: "",
    ContactNumber: "",
    Password: "",
  });

  const validate = () => {
    if (registerdata.Firstname === "" || registerdata.Firstname.length < 3) {
      alert("first name is required or atleast 3 alphabets");
      return false;
    } else if (
      registerdata.Lastname === "" ||
      registerdata.Lastname.length < 3
    ) {
      alert("Last name is required or atleast 3 alphabets");
      return false;
    } else if (registerdata.gender === "") {
      alert("please select valid genders");
      return false;
    }
    const validEmail = (Email) => {
      return !Email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
      );
    };
    if (validEmail(registerdata.Email)) {
      alert("please write your valid email here");
      return false;
    }

    const validNumber = (contactNumber) => {
      return !contactNumber.match(
        /(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})/
      );
    };
    if (
      validNumber(registerdata.ContactNumber) ||
      registerdata.ContactNumber.length > 10
    ) {
      alert("please write your contact number here");
      return false;
    } else if (
      registerdata.Password === "" ||
      registerdata.Password.length < 4
    ) {
      alert("Password is required or atleast contain 4 charecter");
      return false;
    }
    return true;
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setRegisterdata({
      ...registerdata,
      [name]: value,
    });
  };

  let storeRegisterData = () => {
    const data = [];
    const result = data.concat(localRegisterData || [], [registerdata]);
    localStorage.setItem("useRegisterData", JSON.stringify(result));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (localRegisterData !== null) {
      const matchmail = localRegisterData.filter((em) => {
        return em.Email === registerdata.Email;
      });
      if (matchmail.length !== 0) {
        alert("this email is already registered");
      } else {
        if (validate(registerdata)) {
          e.target.reset();
          storeRegisterData();
          alertify.set("notifier", "position", "top-center");
          alertify.success("Registration successfull!!");
          nevigate("/");
          setRegisterdata({
            id: time,
            Firstname: "",
            Lastname: "",
            gender: "",
            Email: "",
            ContactNumber: "",
            Password: "",
          });
        }
      }
    } else {
      if (validate()) {
        e.target.reset();
        storeRegisterData();
        setRegisterdata({
          id: time,
          Firstname: "",
          Lastname: "",
          gender: "",
          Email: "",
          ContactNumber: "",
          Password: "",
        });
      }
    }
  };

  return (
    <>
      <div className="bgimage">
        <form
          style={{ backgroundColor: "#080710", padding: "29px" }}
          onSubmit={handlesubmit}
        >
          <h3 className="registergap">Register Here</h3>
          <label form="firstname">Firstname</label>
          <input
            type="text"
            placeholder="Firstname"
            name="Firstname"
            onChange={handleInput}
          />
          <label form="lastname">Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            name="Lastname"
            onChange={handleInput}
          />
          <div className="genderdiv">
            <div className="form-check" style={{ margin: "3px" }}>
              <input
                name="gender"
                type="radio"
                className="form-check-input"
                defaultValue="Male"
                onChange={handleInput}
              />
              <label className="form-check-label" style={{ marginTop: "1px" }}>
                Male
              </label>
            </div>
            <div className="form-check" style={{ margin: "3px" }}>
              <input
                name="gender"
                type="radio"
                className="form-check-input"
                defaultValue="Female"
                onChange={handleInput}
              />
              <label className="form-check-label" style={{ marginTop: "1px" }}>
                Female
              </label>
            </div>
          </div>
          <label form="email">Email</label>
          <input
            type="email"
            placeholder="Email "
            name="Email"
            onChange={handleInput}
          />
          <label form="email">Contact Number</label>
          <input
            type="number"
            placeholder="ContactNumber "
            name="ContactNumber"
            onChange={handleInput}
          />
          <label form="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleInput}
          />
          <button style={{ marginTop: "13px" }}>Register</button>
          <p style={{ textAlign: "center" }}>
            Already have an Account! <Link to="/">Login Here !</Link>
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
