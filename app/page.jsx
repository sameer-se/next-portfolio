"use client";

import React from "react";
import Navbar from "../components/navbar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Home from "@/components/home";

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
