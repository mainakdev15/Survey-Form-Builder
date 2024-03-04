import React from "react";
import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card";
import ProfileForm from "@/components/ProfileForm";
import SurveyForm from "@/components/SurveyForm";
import survey from "../../survey.json";

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

interface Tab {
  label: string;
  value: string;
  title: string;
  description: string;
  content: React.FC | React.FC<SurveyFormProps> | React.FC<{ schema?: SurveyFormProps }>;
  schema?: SurveyFormProps;
}

const tabs: Tab[] = [
    {
      label: "Account",
      title: "Overview",
      description: "Make changes to your account here",
      value: "account",
      content: ProfileForm,
    },
    {
      label: "Section 2",
      title: "The Survey",
      description: "Start answering the questionnaire",
      value: "survey",
      content: SurveyForm,
      schema: survey,
    },
    {
      label: "Section 3",
      title: "Section 3",
      description: "Section 3",
      value: "questionnaire",
      content: () => ("Section 3"),
    },
  ];

export default tabs;
