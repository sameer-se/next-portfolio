import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-primary fixed top-0 left-0 w-full p-6 drop-shadow-xl">
      <nav className="container flex justify-between">
        {/* Navbar Name */}
        <div className="text-white font-semibold text-3xl hover:text-blue-400">
          SAM33R
        </div>
        {/* Navbar Links */}
        <ul className="flex gap-8">
          <li className="text-white hover:text-tertiary text-2xl">Home</li>
          <li className="text-white hover:text-tertiary text-2xl">About Me</li>
          <li className="text-white hover:text-tertiary text-2xl">Projects</li>
          <li className="text-white hover:text-tertiary text-2xl">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
