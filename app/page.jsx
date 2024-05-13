"use client";

import React from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Body */}
      <div className="container flex justify-between gap-4 m-10">
        {/* My Information */}
        <div className="w-1/2 flex-col space-y-2 justify-between items-center">
          <div className="text-white font-semibold text-3xl">Hello, I am</div>
          <div className="text-white font-semibold text-5xl pt-4">
            Sameer Khadka
          </div>
          <div className="text-white break-normal font-medium text-lg pt-2">
            I am FULL STACK DEVELOPER with a passion for creating innovative and
            efficient digital solutions with experties in JAVASCRIPT, REACT,
            NEXTJS, EXPRESS, NODEJS & MONGODB.
          </div>
          {/* Buttons */}
          <div className="flex gap-6 pt-4">
            <button className="text-white bg-tertiary pt-2 pb-2 pl-4 pr-4 border-2 border-transparent rounded-md hover:scale-105 ">
              About Me
            </button>
            <button className="text-white border-2 pt-2 pb-2 pr-6 pl-6 border-tertiary rounded-md hover:scale-105 ">
              Projects
            </button>
          </div>
        </div>
        {/* Graphics */}
        <div className="w-1/2">
          <Spline scene="https://prod.spline.design/gXdLBMKjyjlGr3Jw/scene.splinecode" />
        </div>
      </div>
    </>
  );
}
