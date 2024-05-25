"use client";
import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

import { IoLogoJavascript } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaDebian, FaDatabase } from "react-icons/fa6";
import {
  FaReact,
  FaNodeJs,
  FaRust,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript, SiGnubash } from "react-icons/si";

export default function Skills() {
  return (
    <div className="container h-screen flex p-6 gap-4">
      <div className="w-1/2 text-white  font-semibold mt-14">
        <span className="text-6xl mb-3"> SKILLS :</span>
        {/* Icons */}
        <div className="pt-8 text-6xl">
          {/* Icons First Row */}
          <div className="flex gap-4 justify-between">
            <IoLogoJavascript />
            <RiTailwindCssFill />
            <FaReact />
            <RiNextjsFill />
            <SiExpress />
            <FaNodeJs />
            <SiMongodb />
          </div>
          {/* Icons Second Row */}
          <div className="flex gap-4 mt-6 justify-between">
            <FaRust />
            <SiTypescript />
            <FaPython />
            <FaLinux />
            <FaDebian />
            <SiGnubash />
            <FaGitAlt />
          </div>
        </div>
        {/* seperator */}
        <div className="bg-primary p-1 mt-10 rounded-md"></div>
        <div className="mt-8 text-4xl"> Things I Do : </div>
        {/* Boxes */}
        <div className="flex gap-2 mt-4 pt-4">
          <div className="flex-col items-center justify-center align-middle border-2 rounded-md border-quaternary w-1/3 p-4">
            <span className="text-center text-quaternary text-6xl ">
              <CgWebsite />
            </span>
            <span className="text-center text-white text-xl break-normal">
              Web Development
            </span>
          </div>
          <div className=" border-2 rounded-md border-quaternary w-1/3 p-4">
            <span className="text-center text-quaternary text-6xl ">
              <FaDatabase />
            </span>
            <span className="text-center text-white text-xl break-normal">
              Backend Development
            </span>
          </div>
          <div className=" border-2 rounded-md border-quaternary w-1/3 p-4">
            <span className="text-center text-quaternary text-6xl ">
              <FaCode />
            </span>
            <span className="text-center text-white text-xl break-normal">
              Fullstack Development
            </span>
          </div>
        </div>
      </div>
      {/* Graphics */}
      <div className="w-1/2">
        <Spline scene="https://prod.spline.design/lVjr8JzU59lWLX2e/scene.splinecode" />
      </div>
    </div>
  );
}
