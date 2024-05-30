import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/button";
// Home Component
export default function Home() {
  return (
    <div id="home" className="container flex gap-8 justify-between h-screen">
      <div className="w-2/3 flex flex-col gap-4 justify-evenly pt-10 pb-24">
        {/* Gretings */}
        <div className="flex flex-col gap-6">
          <div className="font-normal text-4xl">
            Hello <span>👋🏻 </span>, I am
          </div>
          <div className="font-semibold text-7xl text-teal-400">
            Sameer Khadka
          </div>
        </div>
        {/* My Informaton */}
        <div className="flex flex-col gap-4">
          <div className="text-justify break-normal font-light text-2xl pr-14">
            FULL STACK DEVELOPER with a passion for creating websites and web
            app with JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB.
          </div>
          {/* Experiance */}
          <div className="flex gap-6">
            <p className="font-medium text-teal-400 text-8xl">2+</p>
            <p className="text-justify text-2xl font-extralight break-normal mt-4 pr-14">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-6">
          <Button className="flex gap-3 w-1/5 p-6">
            <span className="font-normal text-lg">Download CV </span>
            <div className="text-xl">
              <IoMdCloudDownload />
            </div>
          </Button>
          <Button
            variant="outline"
            className="flex gap-3 w-1/5 p-6 bg-teal-400"
          >
            <span className="font-normal text-lg">Contact</span>
            <div className="text-xl">
              <MdEmail />
            </div>
          </Button>
        </div>
      </div>
      {/* Graphics */}
      <div className="w-1/3 -mt-52  justify-center">
        <Spline scene="https://prod.spline.design/gXdLBMKjyjlGr3Jw/scene.splinecode" />
      </div>
    </div>
  );
}
