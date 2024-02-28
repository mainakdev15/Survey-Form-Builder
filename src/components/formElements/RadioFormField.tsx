// components/formElements/RadioFormField.tsx
import React from 'react';

type Option = {
    label: string;
    value: string;
  };
  
type RadioFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  options?: Option[];
};

const RadioFormField: React.FC<RadioFormFieldProps> = ({ label, name, required, options }) => {
  return (
    <div>
      <label>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {options &&
        options.map((opt, optionIndex) => (
          <div key={optionIndex}>
            <input type="radio" name={name} id={`${name}_${optionIndex}`} value={opt.value} />
            <label htmlFor={`${name}_${optionIndex}`}>{opt.label}</label>
          </div>
        ))}
    </div>
  );
};

export default RadioFormField;
