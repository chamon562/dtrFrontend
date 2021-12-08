import React, { useState } from "react";
// import useForm custome hook
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo";
import "./Form.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { chainPropTypes } from "@mui/utils";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

const FormLogin = (props) => {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // if after hitting the submit and it refreshes use the e.preventDefault
  // destructure the values from useForm
  // and keep it blank for now
  // const { handleChange, errors, values } = useForm(submitForm, validateInfo);
  let handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
    console.log(email);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(userData);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, userData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        props.nowCurrentUser(decoded);
      })
      .catch((error) => console.log("Login error", error));
  };

  if (props.user) {
    // return <Navigate to="/profile" user={props.user} />;
    navigate("/profile");
  }
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src="images/d2class.jpg" alt="dota-team" />
      </div>
      {/* <FormRegister /> */}

      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign up Here!</h1>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
          <button className="form-input-btn reg" type="submit">
            <span>Login</span>
          </button>
          <span className="form-input-login">
            Dont have an account? Sign Up <Link to="/register">here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
