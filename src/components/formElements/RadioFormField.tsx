// components/formElements/RadioFormField.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { useForm } from "react-hook-form";
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

const RadioFormField: React.FC<RadioFormFieldProps> = ({
  label,
  name,
  required,
  options,
}) => {
  const form = useForm();
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex  flex-col"
            >
              {options &&
                options.map((opt, optionIndex) => (
                  <FormItem
                    key={optionIndex}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={opt.value} />
                    </FormControl>
                    <FormLabel htmlFor={`${name}_${optionIndex}`}>
                      {opt.label}
                    </FormLabel>
                  </FormItem>
                ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
    // <div>
    //   <label>
    //     {label} {required && <span style={{ color: "red" }}>*</span>}
    //   </label>
    //   {options &&
    //     options.map((opt, optionIndex) => (
    //       <div key={optionIndex}>
    //         <input
    //           type="radio"
    //           name={name}
    //           id={`${name}_${optionIndex}`}
    //           value={opt.value}
    //         />
    //         <label htmlFor={`${name}_${optionIndex}`}>{opt.label}</label>
    //       </div>
    //     ))}
    // </div>
  );
};

export default RadioFormField;
