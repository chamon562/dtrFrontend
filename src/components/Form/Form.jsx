import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormSucess from "./FormSuccess";
import "./Form.css";
import CloseIcon from "@mui/icons-material/Close";
import useForm from "./useForm";
import validateInfo from "../validateInfo/validateInfo";
import { Navigate } from "react-router-dom";
import d2TurboImg from "../../assets/images/d2TurboPix.png";
const Form = () => {
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
        <div className="form-content-left">
          <img className="form-img" src={d2TurboImg} alt="dota-team" />
        </div>
        {/* <FormRegister /> */}
        {!isSubmitted ? (
          <FormRegister submitForm={submitForm} />
        ) : (
          // <FormSucess />
          <Navigate to="/login" />
        )}
      </div>
    </>
  );
};

export default Form;
