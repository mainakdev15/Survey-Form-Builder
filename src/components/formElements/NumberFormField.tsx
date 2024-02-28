// components/formElements/NumberFormField.tsx
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type NumberFormFieldProps = {
  label: string;
  name: string;
  required: boolean;
  config: Record<string, any>;
};

const NumberFormField: React.FC<NumberFormFieldProps> = ({ label, name, required, config }) => {
  const form = useForm()
  return (
    <FormField
    name={name}
    control ={form.control}
    render={({ field }) => (
      <FormItem>
        <FormLabel htmlFor={name}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </FormLabel>
        <FormControl>
          <Input
            type="number"
            name={name}
            id={name}
            required={required}
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
