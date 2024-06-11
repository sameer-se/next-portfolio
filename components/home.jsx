import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/button";
// Home Component
export default function Home() {
  return (
    <div
      id="home"
      className="container py-14 h-full xl:flex gap-6 xl:h-screen xl:min-h-[720px] xl:max-h-[820px]  xl:pt-20"
    >
      <div className="xl:w-2/3 flex flex-col gap-14 xl:gap-16">
        {/* Gretings */}
        <div className="flex flex-col gap-2 pt-14">
          <div className="font-normal text-center text-3xl xl:text-start xl:text-4xl">
            Hello <span>👋🏻 </span>, I am
          </div>
          <div className="font-semibold text-4xl text-center py-2 text-teal-400 xl:text-start xl:text-8xl">
            Sameer Khadka
          </div>
        </div>
        {/* My Informaton */}
        <div className="flex flex-col gap-4 -mt-8">
          <div className="text-justify break-normal font-normal text-base xl:text-2xl">
            FULL STACK DEVELOPER with a passion for creating websites and web
            app with JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB.
          </div>
          {/* Experiance */}
          <div className="flex gap-4 items-center">
            <p className="font-medium text-teal-400 text-6xl xl:text-8xl">2+</p>
            <p className="text-justify text-sm font-light break-normal xl:text-2xl">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 justify-center xl:justify-start">
          <Button
            onClick={() => {
              window.open("/Sameer_khadka_Resume.pdf", "_blank");
            }}
            className="flex gap-3 py-6 px-4"
          >
            <span className="font-medium text-lg">Download CV </span>
            <div className="text-2xl">
              <IoMdCloudDownload />
            </div>
          </Button>
          <Button
            onClick={() => {
              let href = "#contact"; // Declare the href variable
              window.location.href = href; // Assign the value to href
            }}
            variant="outline"
            className="flex gap-3 bg-teal-400 py-6"
          >
            <span className="font-medium text-lg">Contact</span>
            <div className="text-2xl">
              <MdEmail />
            </div>
          </Button>
        </div>
      </div>
      {/* Graphics */}
      <div className="hidden xl:flex xl:w-1/3 xl:-mt-32">
        <Spline scene="https://prod.spline.design/gXdLBMKjyjlGr3Jw/scene.splinecode" />
      </div>
    </div>
  );
}
