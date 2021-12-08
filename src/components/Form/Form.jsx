import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormSucess from "./FormSuccess";
import "./Form.css";
import CloseIcon from "@mui/icons-material/Close";
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo";
import { Redirect } from "react-router-dom";
const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // this is the function taht will set isSubmitted to true
  function submitForm() {
    //   go back to form signup and destructure pass in the function submitForm
    // pass submitForm in useForm
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, errors, values, redirect } = useForm(
    submitForm,
    validateInfo
  );

  return (
    <>
      <div className="form-container">
        <span className="close-btn" onClick={props.handleClose}></span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="images/d2TurboPix.png"
            alt="dota-team"
          />
        </div>
        {/* <FormRegister /> */}
        {!isSubmitted ? (
          <FormRegister
            handleClose={props.handleClose}
            submitForm={submitForm}
          />
        ) : (
          // <FormSucess />
          <Redirect to="/login" />
        )}
      </div>
    </>
  );
};

export default Form;
