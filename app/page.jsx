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
      <Separator className="hidden lg:block" />
      <Skills />
      <Separator className="hidden lg:block" />
      <Projects />
      <Separator className="hidden lg:block" />
      <Contact />
      <Footer />
    </>
  );
}
