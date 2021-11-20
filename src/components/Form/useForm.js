// custom hooks, start with useThenWhatever
import { useState, useEffect } from "react";
import validateInfo from "../validateInfo/validateInfo";

const useForm = (validate) => {
  // set up our value
  const [values, setValues] = useState({
    friendId: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  // make a useState with our errors
  // set it to an empty object
  const [errors, setErrors] = useState({});

  // whenever i change something want this to update the values
  // handleChange function that

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
    // this is where I want to display the values of validateInfo
    // pass validate as a parameter in the useForm function and set the state of Errors take validate function and set the values that I had added 
    setErrors(validateInfo(values))
  };

  return { handleChange, handleSubmit, errors, values };
};

export default useForm;
