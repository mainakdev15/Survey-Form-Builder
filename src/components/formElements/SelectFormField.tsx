import React from "react";
import { useForm, UseFormReturn, useController } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type SelectFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  options?: Option[];
  control: UseFormReturn["control"];
};

const SelectFormField: React.FC<SelectFormFieldProps> = ({
  label,
  name,
  required,
  options,
  control,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
    rules: { required: required && "This field is required" },
  });

  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        onChange={onChange}
        value={value}
      >
        <option value="">Select</option>
        {options &&
          options.map((opt, optionIndex) => (
            <option key={optionIndex} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default SelectFormField;
