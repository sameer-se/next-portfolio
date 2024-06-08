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
    <div id="projects" className="container py-14 lg:py-20">
      <p className="text-4xl mb-3 text-center font-normal text-teal-400 pb-10">
        PROJECTS
      </p>
      {/* Cards */}
      <div className="flex flex-col gap-6 xl:flex-row xl:justify-evenly">
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
          <div className="flex flex-row gap-2 py-4 px-4 size-auto justify-center">
            <Button
              onClick={() => {
                window.open("https:www.sameer-khadka.com.np", "_blank");
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-base">View Project </span>
              <div className="text-base">
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
              <span className="font-medium text-base">Code</span>
              <div className="text-base">
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
          <div className="flex flex-row gap-2 py-4 px-4 justify-center">
            <Button
              onClick={() => {
                window.open("https://laslesvpn-build.netlify.app/", "_blank");
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-base">View Project </span>
              <div className="text-base">
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
              <span className="font-medium text-base">Code</span>
              <div className="text-base">
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
          <div className="flex flex-row gap-2 py-4 px-4 justify-center">
            <Button
              onClick={() => {
                window.open(
                  "https://next-ecommerce-gamma-three.vercel.app/",
                  "_blank"
                );
              }}
              className="flex gap-3 p-6"
            >
              <span className="font-medium text-base">View Project </span>
              <div className="text-base">
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
              <span className="font-medium text-base">Code</span>
              <div className="text-base">
                <FaGithub />
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
