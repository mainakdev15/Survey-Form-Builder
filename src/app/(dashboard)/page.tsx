import CreateFormButton from "@/components/CreateFormButton";
import Image from "next/image";
import SurveyForm from "@/components/SurveyForm";
import survey from '../../../survey.json'
import Form from "@/components/Form";
import ProfileForm from "@/components/ProfileForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <CreateFormButton/> */}
      {/* <SurveyForm schema={survey}/> */}
      <Form/>
      {/* <ProfileForm/> */}
    </div>
  );
}
