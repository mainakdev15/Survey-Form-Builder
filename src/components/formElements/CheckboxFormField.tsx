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
import { useForm, FieldValues, UseFormReturn } from "react-hook-form";
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
  control: UseFormReturn["control"];
  defaultValue?: FieldValues;
};

const CheckboxFormField: React.FC<CheckboxFormFieldProps> = ({
  label,
  name,
  required,
  options,
  control,
  defaultValue,
}) => {
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
                key={optionIndex}
                control={control}
                name={name}
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
                          {...field}
                          {...control}
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

export default CheckboxFormField;
