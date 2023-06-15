import loginImage from "assets/loginImage.png";

import { useAuth } from "context/AuthContext";
import { useState } from "react";
import authStyles from "pages/authentication/auth.module.css";
import { FormInput } from "components";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const { handleUserLogin } = useAuth();

  const loginInputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Enter Username",
      type: "text",
      label: "Username",
      required: true,
    },

    {
      id: 2,
      name: "password",
      placeholder: "Enter Password",
      type: "password",
      label: "Password",
      required: true,
    },
  ];

  const onChange = (e) => {
    setInputValues((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGuestLogin = () => {
    setInputValues({username: "adarshbalika", password: "adarshBalika123"})
  }

  const handleLoginForm = (e) => {
    e.preventDefault();

    const { username, password } = inputValues;
    handleUserLogin(username, password);
  };

  return (
    <div className={authStyles.authContainer}>
      <main>
        <h1 className={authStyles.heading}>Login</h1>
        <form onSubmit={handleLoginForm} className={authStyles.form}>
          {loginInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={authStyles.button}>LOGIN</button>
          <button className={`${authStyles.guestButton} ${authStyles.button}`} onClick={handleGuestLogin}>
            LOGIN AS GUEST
          </button>
        </form>

        <p className={authStyles.link}>Don't have an account? <Link> Register</Link></p>
      </main>
    </div>
  );
};

export { Login };
