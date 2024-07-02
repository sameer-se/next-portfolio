import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imageSrc, projectUrl, codeUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col justify-between overflow-hidden group">
        <div>
          <CardHeader className="p-0">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110"
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="fit"
              />
            </div>
            <Separator />
            <div className="p-6">
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
        </div>
        <CardContent className="p-6 pt-0 mt-auto">
          <div className="flex flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open(projectUrl, "_blank")}
              className="flex-1 gap-2"
            >
              <span>View Project</span>
              <FaArrowRight />
            </Button>
            <Button
              onClick={() => window.open(codeUrl, "_blank")}
              variant="outline"
              className="flex-1 gap-2 bg-teal-400 hover:bg-teal-500"
            >
              <span>Code</span>
              <FaGithub />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Portfolio website using only HTML, CSS and JavaScript",
      imageSrc: "/p2.png",
      projectUrl: "https://www.sameer-khadka.com.np",
      codeUrl: "https://github.com/sameer-se/portfolio-website",
    },
    {
      title: "Home Page For VPN",
      description: "Landing page for VPN using HTML, CSS and JavaScript",
      imageSrc: "/p1.png",
      projectUrl: "https://laslesvpn-build.netlify.app/",
      codeUrl: "https://github.com/sameer-se/laslesvpn-website",
    },
    {
      title: "E-commerce Website",
      description:
        "E-commerce website using NextJS, ReactJS, TailwindCSS and MongoDB",
      imageSrc: "/p3.png",
      projectUrl: "https://next-ecommerce-gamma-three.vercel.app/",
      codeUrl: "https://github.com/sameer-se/next-ecommerce",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="container py-20"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl md:text-5xl mb-12 text-center font-bold text-teal-400"
      >
        PROJECTS
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
