"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Home from "@/components/home";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Separator />
      <Skills />
      {/* <Separator /> */}
      {/* <Projects /> */}
      {/* <Separator /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
