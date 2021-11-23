import React from "react";
// import useForm custome hook
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo"
import "./Form.css"

const FormLogin = ({submitForm, handleClose}) => {
  // if after hitting the submit and it refreshes use the e.preventDefault
  // destructure the values from useForm
  // and keep it blank for now
  const { handleChange, handleSubmit, errors, values } = useForm(submitForm, validateInfo);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Sign up Here!
        </h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button  className="form-input-btn reg" type="submit">
          <span >Login</span>
        </button>
        <span className="form-input-login">
          Dont have an account? Sign Up <a href="#FormRegister">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
