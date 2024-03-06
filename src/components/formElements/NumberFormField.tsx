// components/formElements/NumberFormField.tsx
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
import { UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type NumberFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  config: Record<string, any>;
  control: UseFormReturn["control"];
};

const NumberFormField: React.FC<NumberFormFieldProps> = ({
  label,
  name,
  required,
  config,
  control
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FormLabel>
          <FormControl>
            <Input
              type="number"
              id={name}
              required={required}
              {...field}
              {...config}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NumberFormField;
