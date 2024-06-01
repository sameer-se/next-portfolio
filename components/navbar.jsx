import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function navbar() {
  return (
    // Navbar Container
    <nav className="bg-background border-border border-b drop-shadow-md fixed left-0 right-0 top-0">
      <div className="container pt-4 pb-4 shadow-sm flex justify-between">
        {/* Navbar Name */}
        <Link href="/" className="font-normal hover:text-teal-400 text-2xl">
          <span>SAM33R</span>
        </Link>
        {/* Navbar Linknks */}
        <div className="flex gap-10">
          <Link href="#home" className="font-light hover:text-teal-400 text-xl">
            <span>Home</span>
          </Link>
          <Link
            href="#skills"
            className="font-light hover:text-teal-400 text-xl"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="font-light hover:text-teal-400 text-xl"
          >
            <span> Projects</span>
          </Link>
          <Link
            href="#contact"
            className="font-light hover:text-teal-400 text-xl"
          >
            <span>Contact</span>
          </Link>
        </div>
        {/* Icons Links */}
        <div className="flex gap-6">
          {/* Mode Toggle */}
          <ModeToggle />
          <div className="text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1">
            <Link target="_blank" href="https://github.com/sameer-se">
              <FaGithub />
            </Link>
          </div>
          <div className="text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sameer-khadka-774757222/"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
