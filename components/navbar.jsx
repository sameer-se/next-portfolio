import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function navbar() {
  return (
    // Navbar Container
    <nav className="bg-background border-border border-b drop-shadow-md">
      <div className="container pt-4 pb-4 shadow-sm flex justify-between">
        {/* Navbar Name */}
        <Link href="/" className="font-semibold text-2xl">
          <span>SAM33R</span>
        </Link>
        {/* Navbar Linknks */}
        <div className="flex gap-8">
          <Link href="#home" className="font-semibold text-xl">
            <span>Home</span>
          </Link>
          <Link href="#about" className="font-semibold text-xl">
            <span>About Me</span>
          </Link>
          <Link href="#skills" className="font-semibold text-xl">
            Skills
          </Link>
          <Link href="#projects" className="font-semibold text-xl">
            <span> Projects</span>
          </Link>
          <Link href="#contact" className="font-semibold text-xl">
            <span>Contact</span>
          </Link>
        </div>
        {/* Icons Links */}
        <div className="flex gap-4">
          {/* Mode Toggle */}
          <ModeToggle />
          <div className="text-2xl text-center content-center border hover:bg-primary/10 rounded-sm p-1">
            <Link href="https://github.com/sameer-se">
              <FaGithub />
            </Link>
          </div>
          <div className="text-2xl text-center content-center border hover:bg-primary/10 rounded-sm p-1">
            <Link href="https://www.linkedin.com/in/sameer-khadka-774757222/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
