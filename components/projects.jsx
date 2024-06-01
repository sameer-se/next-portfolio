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
import Link from "next/link";

export default function projects() {
  return (
    <div
      id="projects"
      className="container h-screen flex flex-col justify-evenly"
    >
      <p className="text-4xl mb-3 text-center font-normal text-teal-400 pt-10">
        PROJECTS:
      </p>
      {/* Cards */}
      <div className="flex mt-20 gap-4">
        {/* C1 */}
        <Card className="w-1/3">
          <CardHeader className="">
            <CardContent className="border-border">
              <Image
                className="rounded-lg shadow-md"
                src="/p2.png"
                alt="portfolio website"
                width={400}
                height={300}
              ></Image>
            </CardContent>
            <CardTitle className="pt-6">Portfolio Website</CardTitle>
            <CardDescription>
              Portfolio website using only HTML, CSS and JavaScript
            </CardDescription>
          </CardHeader>
          {/* Buttons */}
          <div className="flex justify-evenly pb-6 gap-6">
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
        <Card className="w-1/3">
          <CardHeader className="">
            <CardContent className="border-border">
              <Image
                className="rounded-lg shadow-md"
                src="/p1.JPG"
                alt="langing page for VPN"
                width={400}
                height={400}
              ></Image>
            </CardContent>
            <CardTitle className="pt-6">Home Page For VPN</CardTitle>
            <CardDescription>
              Portfolio website using only HTML, CSS and JavaScript
            </CardDescription>
          </CardHeader>
          {/* Buttons */}
          <div className="flex justify-evenly pb-6 gap-6">
            <Button className="flex gap-3 p-6">
              <span className="font-medium text-lg">View Project </span>
              <div className="text-2xl">
                <FaArrowRight />
              </div>
            </Button>
            <Button variant="outline" className="flex gap-3 p-6 bg-teal-400">
              <span className="font-medium text-lg">Code</span>
              <div className="text-2xl">
                <FaGithub />
              </div>
            </Button>
          </div>
        </Card>
        {/* C3 */}
        <Card className="w-1/3">
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
            <Button className="flex gap-3 p-6">
              <span className="font-medium text-lg">View Project </span>
              <div className="text-2xl">
                <FaArrowRight />
              </div>
            </Button>
            <Button variant="outline" className="flex gap-3 p-6 bg-teal-400">
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
