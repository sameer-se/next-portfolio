import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";

export default function navbar() {
  return (
    // Navbar Container
    <nav className="bg-background border-border border-b drop-shadow-md">
      <div className="container pt-4 pb-4 shadow-sm flex justify-between">
        {/* Navbar Name */}
        <Link href="/" className=" font-semibold text-2xl">
          <span>SAM33R</span>
        </Link>
        {/* Navbar Linknks */}
        <div className="flex gap-8">
          <Link href="#home" className="text-xl">
            <span>Home</span>
          </Link>
          <Link href="#about" className="text-xl">
            <span>About Me</span>
          </Link>
          <Link href="#skills" className="text-xl">
            Skills
          </Link>
          <Link href="#projects" className=" text-xl">
            <span> Projects</span>
          </Link>
          <Link href="#contact" className="text-xl">
            <span>Contact</span>
          </Link>
        </div>
        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
