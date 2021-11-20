import React from "react";

const FormRegister = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get started with us today! Create your account by filling out the info
          below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">Username</label>
          <input
          id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
          <input
          id="email"
            type="email"
            name="username"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
