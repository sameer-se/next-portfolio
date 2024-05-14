import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-secondary fixed top-0 left-0 w-full p-6 drop-shadow-xl">
      <nav className="container flex justify-between">
        {/* Navbar Name */}
        <div className="text-white font-semibold text-2xl hover:text-blue-400">
          SAM33R
        </div>
        {/* Navbar Links */}
        <ul className="flex gap-6">
          <li className="text-white hover:text-blue-400 text-xl">Home</li>
          <li className="text-white hover:text-blue-400 text-xl">About Me</li>
          <li className="text-white hover:text-blue-400 text-xl">Projects</li>
          <li className="text-white hover:text-blue-400 text-xl">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
