import inputStyles from "./FormInput.module.css";

const FormInput = (props) => {
  const { id, onChange, label, nolabel, ...attributes } = props;

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      e.preventDefault();
    }
  }

  return (
    <>
      <label className={inputStyles.label}>
        {!nolabel && <span>
          {label} <span className={inputStyles.required}>{attributes.required && "*"}</span>
        </span>}
        <input {...attributes} onChange={onChange} onKeyDown={handleKeyDown}/>
      </label>
    </>
  );
};

export { FormInput };
