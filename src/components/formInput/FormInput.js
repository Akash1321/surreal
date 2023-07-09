import {useState} from "react";
import inputStyles from "./FormInput.module.css";
import { Eye, EyeOff } from "react-feather";

const FormInput = (props) => {
  const [passwordType, setPasswordType] = useState("password")
  const { id, onChange, label, name, type, nolabel,  ...attributes } = props;

  let typeValue = (name === "password" || name === "confirmPassword") ? passwordType : type;

  const handleShowPassword = () => {
    setPasswordType(prev => prev === "password" ? "text" : "password")
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <>
      <label className={inputStyles.label}>
        {!nolabel && (
          <span>
            {label}{" "}
            <span className={inputStyles.required}>
              {attributes.required && "*"}
            </span>
          </span>
        )}
        <div className={inputStyles.inputContainer}>
          <input
            {...attributes}
            name={name}
            type={typeValue}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
          {(name === "password" || name === "confirmPassword") && (
            <>{passwordType === "password" ? <EyeOff className={inputStyles.icon} onClick={handleShowPassword}/> : <Eye className={inputStyles.icon} onClick={handleShowPassword}/>}</>
          )}
        </div>
      </label>
    </>
  );
};

export { FormInput };
