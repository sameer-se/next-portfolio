import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/button";
import { Outlines } from "@react-three/drei";
// Home Component
export default function Home() {
  return (
    <div id="home" className="container flex gap-8 justify-between h-screen">
      <div className="w-2/3 flex flex-col gap-4 justify-evenly pt-10 pb-24">
        {/* Gretings */}
        <div className="flex flex-col gap-6">
          <div className="font-semibold text-3xl">
            Hello <span>👋🏻 </span>, I am
          </div>
          <div className="font-semibold text-7xl">Sameer Khadka</div>
        </div>
        {/* My Informaton */}
        <div className="flex flex-col gap-4">
          <div className="text-justify break-normal font-medium text-xl">
            I am FULL STACK DEVELOPER with a passion for creating websites and
            web app with JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB.
          </div>
          {/* Experiance */}
          <div className="flex gap-6">
            <div className="font-semibold text-teal-400 text-8xl">2+</div>
            <div className="text-justify text-xl font-medium break-normal mt-4">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-6">
          <Button className="flex gap-3">
            <span>Download CV </span>
            <div className="text-xl">
              <IoMdCloudDownload />
            </div>
          </Button>
          <Button className="flex gap-3 bg-teal-400">
            <span>Contact</span>
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
