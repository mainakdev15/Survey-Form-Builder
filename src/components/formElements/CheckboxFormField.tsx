// components/formElements/CheckboxFormField.tsx
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

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

const CheckboxFormField: React.FC<CheckboxFormFieldProps> = ({
  label,
  name,
  required,
  options,
}) => {
  const { control } = useForm<FieldValues>();
  return (
    <FormField
      name={name}
      control={control}
      render={() => (
        <FormItem>
          <FormLabel>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FormLabel>
          {options &&
            options.map((opt, optionIndex) => (
              <FormField
                key={opt.value}
                control={control}
                name={""}
                render={({ field }) => {
                  return (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={opt.value}
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(opt.value)}
                          onCheckedChange={(checked) => {
                            const fieldValue = Array.isArray(field.value)
                              ? field.value
                              : [];
                            return checked
                              ? field.onChange([...fieldValue, opt.value])
                              : field.onChange(
                                  fieldValue?.filter(
                                    (value) => value !== opt.value,
                                  ),
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel
                        className="font-normal"
                        htmlFor={`${name}_${optionIndex}`}
                      >
                        {opt.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
        </FormItem>
      )}
    />
  );
};
/* <FormLabel>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </FormLabel>
      {options &&
        options.map((opt, optionIndex) => (
          <div key={optionIndex}>
            <Input type="checkbox" name={name} id={`${name}_${optionIndex}`} value={opt.value} />
            <FormLabel htmlFor={`${name}_${optionIndex}`}>{opt.label}</FormLabel>
          </div>
        ))} */

export default CheckboxFormField;
