import React from "react";
import SnackBar from "../SnackBar/SnackBar";

const validateInfo = (values) => {
  let errors = {};
 
  if (!values.friendId) {
    errors.friendId = "Friend Id is required";
  }
  if (!values.name.trim()) {
    // if values.name is not true
    errors.name = "Name required";
  }
  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    // if the user doesnt include .com or an @ symbol this error should pop
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    //   if user types less than 6 characters please pop this error
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    //   if confirmed password does not match the original password
    errors.password2 = "Passwords do not match";
  }
  return errors;
};

export default validateInfo;
