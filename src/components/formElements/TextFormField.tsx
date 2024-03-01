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
 import { useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod";
 
type TextFormFieldProps = {
  label: string;
  name: string;
  type: string;
  required: boolean;
  config: Record<string, any>;
};

const TextFormField: React.FC<TextFormFieldProps> = ({
  label,
  name,
  type,
  required,
  config,
}) => {
  const form = useForm();
  return (
    <div>
      <FormField
      name={name}
       control={form.control}
       render={() =>(
        <FormItem>
          <FormLabel htmlFor={name}>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FormLabel>
          <FormControl>
            <Input 
              type={type}
              name={name}
              id={name}
              required={required}
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
