"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Home from "@/components/home";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      {/* seperator */}
      <div className="bg-primary p-2"></div>
      <Skills />
      {/* seperator */}
      <Footer />
    </>
  );
}
