import React from "react";
// import useForm custome hook
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo"
const FormRegister = () => {
  // if after hitting the submit and it refreshes use the e.preventDefault
  // destructure the values from useForm
  // and keep it blank for now
  const { handleChange, handleSubmit, values } = useForm();
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
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
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
            placeholder="Enter your password2"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormRegister;
