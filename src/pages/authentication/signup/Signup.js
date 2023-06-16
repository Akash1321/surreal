import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "context/AuthContext";
import { FormInput } from "components";
import authStyles from "pages/authentication/auth.module.css";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const { handleUserSignup } = useAuth();

  const loginInputs = [
    {
        id: 1,
        name: "name",
        placeholder: "Enter Name",
        type: "text",
        label: "Name",
        required: true,
      },
    {
      id: 2,
      name: "username",
      placeholder: "Enter Username",
      type: "text",
      label: "Username",
      required: true,
    },

    {
      id: 3,
      name: "password",
      placeholder: "Enter Password",
      type: "password",
      label: "Password",
      required: true,
    },

    {
        id: 4,
        name: "confirmPassword",
        placeholder: "Enter Confirm Password",
        type: "password",
        label: "Confirm Password",
        required: true,
      },
  ];

  const onChange = (e) => {
    setInputValues((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginForm = (e) => {
    e.preventDefault();

    const { name, username, password } = inputValues;
    handleUserSignup(name, username, password);
  };

  return (
    <div className={authStyles.authContainer}>
      <main>
        <h1 className={authStyles.heading}>Create Profile</h1>
        <form onSubmit={handleLoginForm} className={authStyles.form}>
          {loginInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={authStyles.button}>CREATE</button>
        </form>

        <p className={authStyles.link}>Already have an account? <Link to="/login"> Login</Link></p>
      </main>
    </div>
  );
};

export { Signup };
