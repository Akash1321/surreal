import inputStyles from "./FormInput.module.css";

const FormInput = (props) => {
  const { id, onChange, label, nolabel, ...attributes } = props;

  return (
    <>
      <label className={inputStyles.label}>
        {!nolabel && <span>
          {label} <span className={inputStyles.required}>{attributes.required && "*"}</span>
        </span>}
        <input {...attributes} onChange={onChange} />
      </label>
    </>
  );
};

export { FormInput };
