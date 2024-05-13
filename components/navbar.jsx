import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-primary w-full p-6 ">
      <div className="container flex justify-between">
        {/* Navbar Name */}
        <div className="text-white font-semibold text-2xl hover:text-blue-400">
          SAM33R
        </div>
        {/* Navbar Links */}
        <div className="flex gap-6">
          <div className="text-white hover:text-blue-400 text-xl">Home</div>
          <div className="text-white hover:text-blue-400 text-xl">About Me</div>
          <div className="text-white hover:text-blue-400 text-xl">Projects</div>
          <div className="text-white hover:text-blue-400 text-xl">Contact</div>
        </div>
      </div>
    </div>
  );
}
