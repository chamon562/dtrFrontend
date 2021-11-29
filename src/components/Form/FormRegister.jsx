import React, { useState, useEffect } from "react";
// import useForm custome hook
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo";
import "./Form.css";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";
import axios from "axios";

const FormRegister = ({ submitForm, handleClose }) => {
  const [friendId, setFriendId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFriendId = (e) => {
    setFriendId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      let newUser = { friendId, name, email, password };
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, newUser)
        .then((response) => {
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error);
        });
        setErrors(validateInfo(newUser));
    }
    // underneath handle submit lets create a state for
    // once submitted setIsSubmitted to true
    // this will be used for a function that will let us see that the submit is successful or not
    setIsSubmitting(true);
  };
  useEffect((callback) => {
    // if there is zero errors then return isSubmitting
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // run call back function
      callback();
    }
    // only want it to trigger when it updates the error
  }, [errors]);
  // return { handleSubmit, errors, values };
  // if after hitting the submit and it refreshes use the e.preventDefault
  // destructure the values from useForm
  // and keep it blank for now

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
            value={friendId}
            onChange={handleFriendId}
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
            value={name}
            onChange={handleName}
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
            value={email}
            onChange={handleEmail}
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
            value={password}
            onChange={handlePassword}
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
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          {/* {<p>{error}</p>} */}
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
