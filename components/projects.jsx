import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function projects() {
  return (
    <div
      id="projects"
      className="container h-dvh min-h-svh flex flex-col justify-evenly"
    >
      <p className="text-4xl mb-3 text-center font-normal text-teal-400 pt-10">
        PROJECTS:
      </p>
      {/* Cards */}
      <div className="grid grid-cols-3  gap-4 mt-20">
        {/* C1 */}
        <Card className="h-full">
          <CardHeader className="grid grid-rows-5">
            <CardContent className="row-span-3 border-border">
              <Image
                className="rounded-lg shadow-md"
                src="/p2.png"
                alt="portfolio website"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
              ></Image>
            </CardContent>
            <CardTitle className=" pt-6">Portfolio Website</CardTitle>
            <CardDescription className="">
              Portfolio website using only HTML, CSS and JavaScript
            </CardDescription>
          </CardHeader>
          {/* Buttons */}
          <div className="row-span-2 flex justify-evenly gap-6">
            <Button
              onClick={() => {
                window.open("https:www.sameer-khadka.com.np", "_blank");
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-lg">View Project </span>
              <div className="text-2xl">
                <FaArrowRight />
              </div>
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://github.com/sameer-se/portfolio-website",
                  "_blank"
                );
              }}
              variant="outline"
              className="flex gap-3 p-6 bg-teal-400"
            >
              <span className="font-medium text-lg">Code</span>
              <div className="text-2xl">
                <FaGithub />
              </div>
            </Button>
          </div>
        </Card>
        {/* C2 */}
        <Card>
          <CardHeader className="grid grid-rows-5">
            <CardContent className="row-span-3 border-border">
              <Image
                className="rounded-lg shadow-md"
                width={400}
                height={300}
                src="/p1.JPG"
                alt="langing page for VPN"
              ></Image>
            </CardContent>
            <CardTitle className="row-span-1 pt-6">Home Page For VPN</CardTitle>
            <CardDescription className="row-span-1">
              Portfolio website using only HTML, CSS and JavaScript
            </CardDescription>
          </CardHeader>
          {/* Buttons */}
          <div className="flex justify-evenly pb-6 gap-6">
            <Button
              onClick={() => {
                window.open("https://laslesvpn-build.netlify.app/", "_blank");
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-lg">View Project </span>
              <div className="text-2xl">
                <FaArrowRight />
              </div>
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://github.com/sameer-se/laslesvpn-website",
                  "_blank"
                );
              }}
              variant="outline"
              className="flex gap-3 p-6 bg-teal-400"
            >
              <span className="font-medium text-lg">Code</span>
              <div className="text-2xl">
                <FaGithub />
              </div>
            </Button>
          </div>
        </Card>
        {/* C3 */}
        <Card className="">
          <CardHeader className="">
            <CardContent className="border-border shadow-md">
              <Image
                className="rounded-lg"
                src="/p3.png"
                alt=""
                width={400}
                height={300}
              ></Image>
            </CardContent>
            <CardTitle className="pt-6">E-commerce Website</CardTitle>
            <CardDescription>
              Portfolio website using NextJS, ReactJS, TailwindCSS and MongoDB.
            </CardDescription>
          </CardHeader>
          {/* Buttons */}
          <div className="flex justify-evenly pb-6 gap-6">
            <Button
              onClick={() => {
                window.open(
                  "https://next-ecommerce-gamma-three.vercel.app/",
                  "_blank"
                );
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-lg">View Project </span>
              <div className="text-2xl">
                <FaArrowRight />
              </div>
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://github.com/sameer-se/next-ecommerce ",
                  "_blank"
                );
              }}
              variant="outline"
              className="flex gap-3 p-6 bg-teal-400"
            >
              <span className="font-medium text-lg">Code</span>
              <div className="text-2xl">
                <FaGithub />
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
