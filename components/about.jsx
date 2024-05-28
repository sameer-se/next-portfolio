const { Rufina } = require("next/font/google");
import React from "react";
import Spline from "@splinetool/react-spline";

export default function about() {
  return (
    <div id="about" className="flex h-screen gap-4 container mt-6">
      {/* graphics */}
      <div className="w-1/2">
        <Spline scene="https://prod.spline.design/sgKJHbcvxbMLqMEx/scene.splinecode" />
      </div>
      {/* About Me */}
      <div className="w-1/2 pt-16">
        <div className="text-white font-semibold text-6xl">About Me:</div>
        <div className="text-white text-justify font-medium text-lg break-normal mt-4 pt-4 pb-4">
          Hey, I`m SAMEER. I am FULL STACK DEVELOPER with a passion for creating
          innovative and efficient digital solutions with experties in PYTHON,
          JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB. Still learning
          and staying up-to-date with the latest technologies and trends in the
          industry, continuously expanding my skill set to ensure & tackle any
          challenges.
        </div>
        {/* seperator */}
        <div className="bg-primary p-1 mt-10 mb-10 rounded-md"></div>
        {/* Experiance */}
        <div className="mt-10 flex gap-6 pt-8">
          <div className="text-quaternary font-semibold text-9xl">2+</div>
          <div className="text-white text-justify text-2xl font-medium break-normal mt-4">
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </div>
        </div>
      </div>
    </div>
  );
}
