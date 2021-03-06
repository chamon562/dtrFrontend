import React from "react";
// import useForm custome hook
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo";
import "./Form.css";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import SnackBar from "../SnackBar/SnackBar";



const FormRegister = ({ submitForm, handleClose }) => {
  
  // if after hitting the submit and it refreshes use the e.preventDefault
  // destructure the values from useForm
  // and keep it blank for now
  const { handleChange, handleSubmit, errors, values, redirect, snackBar } = useForm(
    submitForm,
    validateInfo
  );
  // const [redirect, setRedirect] = useState(false);
  if (redirect ) {
    return <Navigate to="/login" />  ;
  }
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the info
          below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="friendId" className="form-label">
            Dota 2 friendId
          </label>
          <input
            id="friendId"
            type="text"
            name="friendId"
            className="form-input"
            placeholder="Enter your friendId"
            value={values.friendId}
            onChange={handleChange}
          />
          {/* little trick I learned when useing the && sign it says that
          if errors.friendId is true then its going to return whatever I pass after that
          which is the p tag.
           */}
          {errors.friendId && <p>{errors.friendId}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
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
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Please type in your password again to confirm"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn reg" type="submit">
          <span>Sign Up</span>
        </button>
         
        <span className="form-input-login">
          Already have an account? Login <Link to="/login">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormRegister;
