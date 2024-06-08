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
      className="container h-full flex flex-col justify-evenly py-14"
    >
      <div>
        <p className="text-4xl py-6 text-center font-normal text-teal-400">
          SKILLS
        </p>
        {/* Icons */}
        <div className="pt-8 text-6xl flex flex-col gap-12">
          {/* Icons First Row */}
          <div className="flex gap-4 justify-evenly">
            <IoLogoJavascript className="hover:text-teal-300" />
            <RiTailwindCssFill className="hover:text-teal-300" />
            <FaReact className="hover:text-teal-300" />
            <RiNextjsFill className="hover:text-teal-300" />
            <SiExpress className="hover:text-teal-300" />
            <FaNodeJs className="hover:text-teal-300" />
            <SiMongodb className="hover:text-teal-300" />
          </div>
          {/* Icons Second Row */}
          <div className="flex gap-4 justify-evenly">
            <FaRust className="hover:text-teal-300" />
            <SiTypescript className="hover:text-teal-300" />
            <FaPython className="hover:text-teal-300" />
            <FaLinux className="hover:text-teal-300" />
            <FaDebian className="hover:text-teal-300" />
            <SiGnubash className="hover:text-teal-300" />
            <FaGitAlt className="hover:text-teal-300" />
          </div>
        </div>
        {/* services */}
        <p className="text-4xl text-center pt-16 pb-10 font-normal text-teal-400">
          SERVICES
        </p>
        {/* Boxes */}
        <div className="flex flex-col gap-6 xl:flex xl:flex-row xl:justify-evenly">
          <div className="flex items-center justify-center gap-4 border-2 border-teal-400 rounded-md p-4 xl:px-10">
            <span className="text-center text-quaternary text-4xl xl:text-5xl">
              <CgWebsite />
            </span>
            <span className="text-center text-xl font-normal break-normal xl:text-2xl ">
              Web Development
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 border-2 border-teal-400  rounded-md  p-4 xl:px-10">
            <span className="text-center text-quaternary text-4xl xl:text-5xl">
              <FaDatabase />
            </span>
            <span className="text-center  text-xl font-normal break-normal xl:text-2xl">
              Backend Development
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 border-2 border-teal-400 rounded-md  p-4 xl:px-10">
            <span className="text-center text-quaternary text-4xl xl:text-5xl">
              <FaCode />
            </span>
            <span className="text-center text-xl font-normal break-normal xl:text-2xl">
              Fullstack Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
