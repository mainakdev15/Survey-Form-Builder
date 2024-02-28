import React from 'react';

type TextFormFieldProps = {
  label: string;
  name: string;
  type: string;
  required: boolean;
  config: Record<string, any>;
};

const TextFormField: React.FC<TextFormFieldProps> = ({ label, name, type, required, config }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input type={type} name={name} id={name} required={required} {...config} />
    </div>
  );
};

export default TextFormField;
