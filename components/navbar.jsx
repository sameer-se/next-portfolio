import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-primary fixed top-0 w-full p-6 drop-shadow-xl">
      <nav className="container flex justify-between">
        {/* Navbar Name */}
        <div
          href="/"
          className="text-white font-semibold text-2xl hover:text-blue-400"
        >
          SAM33R
        </div>
        {/* Navbar Linknks */}
        <ul className="flex gap-8">
          <Link href="/" className="text-white hover:text-tertiary text-xl">
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-tertiary text-xl"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-tertiary text-xl"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-tertiary text-xl"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-tertiary text-xl"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
