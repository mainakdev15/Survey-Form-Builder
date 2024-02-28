"use client"
// components/SurveyForm.tsx
import React, { FC } from 'react';
import { Card } from './ui/card';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import TextFormField from './formElements/TextFormField';
import SelectFormField from './formElements/SelectFormField';
import CheckboxFormField from './formElements/CheckboxFormField';
import NumberFormField from './formElements/NumberFormField';
import RadioFormField from './formElements/RadioFormField';
import { useForm } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type Question = {
  type: string;
  name: string;
  label: string;
  required: boolean;
  config: Record<string, any>;
  options?: Option[];
};

type SurveyFormProps = {
  schema: Question[];
};

const SurveyForm: FC<SurveyFormProps> = ({ schema }) => {
  const form = useForm()
  const renderFormField = (question: Question, index: number) => {
    switch (question.type) {
      case 'text':
      case 'email':
      case 'textarea':
        return <TextFormField key={index} {...question} />;

      case 'select':
        return <SelectFormField key={index} {...question} />;

      case 'number':
        return <NumberFormField key={index} {...question} />;

      case 'checkbox':
        return <CheckboxFormField key={index} {...question} />;

      case 'radio':
        return <RadioFormField key={index} {...question} />;

      default:
        return null;
    }
  };

  return (
    <Card>
      <Form {...form}>
        <form>
      {schema.map((question, index) => renderFormField(question, index))}
      <button type="submit">Submit</button>
      </form>
    </Form>
    </Card>
    
  );
};

export default SurveyForm;
