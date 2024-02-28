// components/formElements/CheckboxFormField.tsx
import React from 'react';

type Option = {
    label: string;
    value: string;
  };
  
type CheckboxFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  options?: Option[];
};

const CheckboxFormField: React.FC<CheckboxFormFieldProps> = ({ label, name, required, options }) => {
  return (
    <div>
      <label>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {options &&
        options.map((opt, optionIndex) => (
          <div key={optionIndex}>
            <input type="checkbox" name={name} id={`${name}_${optionIndex}`} value={opt.value} />
            <label htmlFor={`${name}_${optionIndex}`}>{opt.label}</label>
          </div>
        ))}
    </div>
  );
};

export default CheckboxFormField;
