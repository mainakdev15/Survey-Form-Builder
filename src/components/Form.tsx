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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tabs from "@/schemas/tabSchema";

type Option = {
  label: string;
  value: string;
};

function Form() {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const handleSaveChanges = () => {
    // Add your logic for saving password changes here

    // Switch to the next tab
    const nextTab = getNextTab();
    setActiveTab(nextTab);
  };

  const getNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    return tabs[nextIndex].value;
  };

  const handleTabChange = (value: React.SetStateAction<string>) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        defaultValue={tabs[0].value} 
        className="w-[800px]"
      >
        <TabsList className="grid w-full grid-cols-3">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card>
              <CardHeader>
                <CardTitle>{tab.title}</CardTitle>
                <CardDescription>{tab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {tab.content({ schema: tab.schema })}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Form;
