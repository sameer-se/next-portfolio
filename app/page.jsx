"use client";

import React from "react";
import Navbar from "@/app/components/navbar";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import Home from "@/app/components/home";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      {/* seperator */}
      <div className="bg-primary p-2"></div>
      <About />
      {/* seperator */}
      <div className="bg-primary p-2"></div>
      <Skills />
    </>
  );
}
