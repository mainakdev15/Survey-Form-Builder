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
 import { Input } from "../ui/input";
 import { UseFormReturn, useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod";
 
type TextFormFieldProps = {
  label: string;
  name: string;
  type: string;
  required: boolean;
  config: Record<string, any>;
  control: UseFormReturn["control"];
};

const TextFormField: React.FC<TextFormFieldProps> = ({
  label,
  name,
  type,
  required,
  config,
  control
}) => {
  return (
    <div>
      <FormField
      name={name}
       control={control}
       render={({ field }) =>(
        <FormItem>
          <FormLabel htmlFor={name}>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FormLabel>
          <FormControl>
            <Input 
              type={type}
              id={name}
              required={required}
              {...field}
              {...config} 
            />
          </FormControl>
        </FormItem>
       )}
      />
    </div>
  );
};

export default TextFormField;
