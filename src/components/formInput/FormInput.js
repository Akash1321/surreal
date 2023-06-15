import inputStyles from "./FormInput.module.css";

const FormInput = (props) => {
  const { id, onChange, label, ...attributes } = props;

  return (
    <>
      <label className={inputStyles.label}>
        <span>
          {label} <span className={inputStyles.required}>{attributes.required && "*"}</span>
        </span>
        <input {...attributes} onChange={onChange} />
      </label>
    </>
  );
};

export { FormInput };
