"use client";

import React from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Body */}
      <div className="container flex justify-between gap-4 m-10 pt-16 h-screen">
        {/* My Information */}
        <div className="w-2/3  flex-col space-y-6">
          <div className="text-white font-semibold text-3xl pt-24">
            Hello <span className="">👋🏻 </span>, I am
          </div>
          <div className="text-white font-semibold text-7xl pt-4">
            Sameer Khadka
          </div>
          <div className="text-white break-normal font-medium text-lg pt-2">
            I am FULL STACK DEVELOPER with a passion for creating websites and
            web app with JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB.
          </div>
          {/* Buttons */}
          <div className="flex gap-6 pt-4">
            <button className="text-white bg-tertiary pt-2 pb-2 pl-4 pr-4 border-2 border-transparent rounded-md hover:scale-105 flex items-center gap-2">
              <span>Download CV </span>
              <div className="text-xl">
                <IoMdCloudDownload />
              </div>
            </button>
            <button className="text-white border-2 pt-2 pb-2 pr-6 pl-6 border-tertiary rounded-md hover:scale-105 flex items-center gap-2 ">
              <span>Projects</span>
              <div className="text-xl">
                <FaCode />
              </div>
            </button>
          </div>
          {/* Icons Links */}
          <div className="flex gap-6 mt-10 pt-8">
            <div className="text-white text-4xl text-center">
              <Link href="https://www.linkedin.com/in/sameer-khadka-774757222/">
                <FaGithub />
              </Link>
            </div>
            <div className="text-white text-4xl text-center">
              <Link href="https://github.com/sameer-se">
                <FaLinkedin />
              </Link>
            </div>
            <div className="text-white text-4xl text-center">
              <Link href="https://github.com/sameer-se">
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
        {/* Graphics */}
        <div className="w-1/3 -mt-10 touch-none">
          <Spline scene="https://prod.spline.design/gXdLBMKjyjlGr3Jw/scene.splinecode" />
        </div>
      </div>
      {/* Seperator */}
      <div className="bg-primary w-full p-5 drop-shadow-xl"></div>
      {/* About Me */}
      <div className="container mt-8">
        <div className="text-white font-semibold text-3xl">About me:</div>
        <div className="text-white font-medium text-lg break-normal mt-4">
          Hey, I`m SAMEER. I am FULL STACK DEVELOPER with a passion for creating
          innovative and efficient digital solutions with experties in PYTHON,
          JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB. Still learning
          and staying up-to-date with the latest technologies and trends in the
          industry, continuously expanding my skill set to ensure & tackle any
          challenges.
        </div>
      </div>
      {/* Experiance */}
      <div className="container mt-6 flex gap-6">
        <div className="text-white font-semibold text-8xl">2+</div>
        <div className="text-white text-2xl font-medium break-normal">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </div>
      </div>
      {/* Skills */}
      <div className="container text-white font-semibold mt-8 text-3xl">
        Skills:
      </div>
    </>
  );
}
