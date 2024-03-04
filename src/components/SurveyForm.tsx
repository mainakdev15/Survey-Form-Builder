"use client";
// components/SurveyForm.tsx
import React, { FC } from "react";
import { Card } from "./ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TextFormField from "./formElements/TextFormField";
import SelectFormField from "./formElements/SelectFormField";
import CheckboxFormField from "./formElements/CheckboxFormField";
import NumberFormField from "./formElements/NumberFormField";
import RadioFormField from "./formElements/RadioFormField";
import { useForm } from "react-hook-form";
import { toast } from "./ui/use-toast";

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
  const form = useForm();
  const renderFormField = (question: Question, index: number) => {
    switch (question.type) {
      case "text":
      case "email":
      case "textarea":
        return <TextFormField control={form.control} key={index} {...question} />;

      case "select":
        return <SelectFormField control={form.control} key={index} {...question} />;

      case "number":
        return <NumberFormField key={index} {...question} />;

      case "checkbox":
        return <CheckboxFormField key={index} {...question} />;

      case "radio":
        return <RadioFormField key={index} {...question} />;

      default:
        return null;
    }
  };

  const onSubmit = () => {
    const formData = form.getValues();
    toast({
      title: "Survey Form Submitted",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {schema.map((question, index) => renderFormField(question, index))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SurveyForm;
