"use client";
import React from "react";

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
    <div
      id="skills"
      className="container h-screen flex flex-col justify-evenly"
    >
      <div>
        <p className="text-4xl mb-3 text-center font-normal text-teal-400">
          SKILLS
        </p>
        {/* Icons */}
        <div className="pt-8 text-6xl flex flex-col gap-20">
          {/* Icons First Row */}
          <div className="flex gap-4 justify-evenly">
            <IoLogoJavascript />
            <RiTailwindCssFill />
            <FaReact />
            <RiNextjsFill />
            <SiExpress />
            <FaNodeJs />
            <SiMongodb />
          </div>
          {/* Icons Second Row */}
          <div className="flex gap-4 justify-evenly">
            <FaRust />
            <SiTypescript />
            <FaPython />
            <FaLinux />
            <FaDebian />
            <SiGnubash />
            <FaGitAlt />
          </div>
        </div>
        {/* services */}
        <p className="text-4xl text-center pt-20 font-normal text-teal-400">
          SERVICES
        </p>
        {/* Boxes */}
        <div className="flex gap-6 mt-4 pt-4">
          <div className="flex items-center gap-4 hover:border-border border-teal-400 border-2 rounded-md p-4 w-1/3">
            <span className="text-center text-quaternary text-6xl ">
              <CgWebsite />
            </span>
            <span className="text-center text-2xl font-normal break-normal">
              Web Development
            </span>
          </div>
          <div className="flex items-center gap-4 border-2 hover:border-border border-teal-400  rounded-md  p-4 w-1/3">
            <span className="text-center text-quaternary text-6xl ">
              <FaDatabase />
            </span>
            <span className="text-center  text-2xl font-normal break-normal">
              Backend Development
            </span>
          </div>
          <div className="flex items-center gap-4 border-2 border-teal-400 rounded-md hover:border-border  p-4 w-1/3">
            <span className="text-center text-quaternary text-6xl ">
              <FaCode />
            </span>
            <span className="text-center text-2xl font-normal break-normal">
              Fullstack Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
