"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Home from "@/components/home";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Separator />
      <Skills />
      <Footer />
    </>
  );
}
