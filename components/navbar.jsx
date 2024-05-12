import React from "react";

export default function navbar() {
  return (
    // Navbar Container
    <div className="bg-primary flex justify-around pt-6 pb-6 shadow-xl">
      {/* Navbar Name */}
      <div className="text-tertiary font-semibold text-2xl hover:text-white">
        Sameer Khadka
      </div>
      {/* Navbar Links */}
      <div className="flex gap-4">
        <div className="text-tertiary hover:text-white text-xl">Home</div>
        <div className="text-tertiary hover:text-white text-xl">About Me</div>
        <div className="text-tertiary hover:text-white text-xl">Projects</div>
        <div className="text-tertiary hover:text-white text-xl">Contact</div>
      </div>
    </div>
  );
}
