import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-primary w-full p-6 ">
      <div className="container flex justify-between">
        {/* Navbar Name */}
        <div className="text-tertiary font-semibold text-2xl hover:text-white">
          SAM33R
        </div>
        {/* Navbar Links */}
        <div className="flex gap-4">
          <div className="text-tertiary hover:text-white text-xl">Home</div>
          <div className="text-tertiary hover:text-white text-xl">About Me</div>
          <div className="text-tertiary hover:text-white text-xl">Projects</div>
          <div className="text-tertiary hover:text-white text-xl">Contact</div>
        </div>
      </div>
    </div>
  );
}
