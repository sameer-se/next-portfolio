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

export default function projects() {
  return (
    <div id="projects" className="container">
      <p className="text-4xl mb-3 text-center font-normal text-teal-400">
        PROJECTS:
      </p>
      {/* Cards */}
      <div className="flex">
        {/* C1 */}
        <Card className="w-1/3">
          <CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
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
