import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  options?: Option[];
};

const SelectFormField: React.FC<SelectFormFieldProps> = ({
  label,
  name,
  required,
  options,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select name={name} id={name} required={required}>
        <option value="">Select</option>
        {options &&
          options.map((opt, optionIndex) => (
            <option key={optionIndex} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectFormField;
