"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComboboxDemo } from "./Combobox";
import ProfileForm from "./ProfileForm";
import SurveyForm from "./SurveyForm";
import survey from "../../survey.json";

type Option = {
  label: string;
  value: string;
};

function Form() {
  const [activeTab, setActiveTab] = useState("account");
  const handleSaveChanges = () => {
    // Add your logic for saving password changes here

    // Switch to the next tab
    const nextTab = getNextTab();
    setActiveTab(nextTab);
  };

  const getNextTab = () => {
    const tabs = ["account", "survey", "questionnaire"];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = currentIndex + 1;
    return tabs[nextIndex];
  };

  const handleTabChange = (value: React.SetStateAction<string>) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        defaultValue="account"
        className="w-[800px]"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          {/* <TabsTrigger value="password">Password</TabsTrigger> */}
          <TabsTrigger value="survey">Section 2</TabsTrigger>
          <TabsTrigger value="questionnaire">Section 3</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when youre done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ProfileForm />
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveChanges}>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/* <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, youll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveChanges}>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent> */}
        <TabsContent value="survey">
          <Card>
            <CardHeader>
              <CardTitle>Survey Questionnaire</CardTitle>
              <CardDescription>
                This is the third section of the survey where a set of questions
                will be provided
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SurveyForm schema={survey} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="questionnaire">
          <Card>
            <CardHeader>
              <CardTitle>Survey Questionnaire</CardTitle>
              <CardDescription>
                This is the third section of the survey where a set of questions
                will be provided
              </CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam et,
              laboriosam animi autem expedita possimus! Deserunt repudiandae,
              fugiat explicabo, quaerat aliquam possimus saepe accusantium cum
              officia sed sit? Quasi, nobis!
              <br />
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Form;
