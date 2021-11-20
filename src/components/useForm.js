// custom hooks, start with useThenWhatever
import { useState, useEffect } from "react";

const useForm = () => {
  // set up our value
  const [values, setValues] = useState({
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
  return { handleChange };
};

export default useForm;
