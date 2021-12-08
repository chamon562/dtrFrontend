// custom hooks, start with useThenWhatever
import { useState, useEffect } from "react";
import validateInfo from "../validateInfo/validateInfo";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SnackBar from "../SnackBar/SnackBar";
import jwt_decode from "jwt-decode";

const useForm = (callback, validate) => {
  // set up our value
  const [values, setValues] = useState({
    friendId: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // make a useState with our errors
  // set it to an empty object
  const [errors, setErrors] = useState({});

  // set to false because its not submitted yet
  const [isSubmitting, setIsSubmitting] = useState(false);
  // whenever i change something want this to update the values
  // handleChange function that
  const [redirect, setRedirect] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // spread in the values
    // and want e.target.name
    // its targeting each input in the input form name="username"
    // also targeting the input name="email" name="password"
    setValues({ ...values, [name]: value });
  };
  // if after hitting the submit and it refreshes use the e.preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
    // if logic for register if the password 1 === password 2 make a new user and do an axios call
    if (values.password === values.password2) {
      const newUser = values;

      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, newUser)
        .then((res) => {
          console.log(res);
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // this is where I want to display the values of validate
    // pass validate as a parameter in the useForm function and set the state of Errors take validate function and set the values that I had added
    setErrors(validate(values));
    // underneath handle submit lets create a state for
    // once submitted setIsSubmitted to true
    // this will be used for a function that will let us see that the submit is successful or not
    setIsSubmitting(true);
    console.log(values);
  };
  useEffect(() => {
    // if there is zero errors then return isSubmitting
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // run call back function
      callback();
    }
    // only want it to trigger when it updates the error
  }, [errors]);

  
  return { handleChange, handleSubmit, errors, values };
};

export default useForm;
