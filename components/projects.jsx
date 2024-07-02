"use client";
import React, { useEffect } from "react";
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
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectCard = ({ title, description, imageSrc, projectUrl, codeUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group">
        <div className="flex-grow">
          <CardHeader className="p-0">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <Separator />
            <div className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl mb-2">
                {title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
        </div>
        <CardContent className="p-4 sm:p-6 mt-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              onClick={() => window.open(projectUrl, "_blank")}
              className="flex-1 gap-2 text-xs sm:text-sm"
              aria-label={`View ${title} project`}
            >
              <span>View Project</span>
              <FaArrowRight />
            </Button>
            <Button
              onClick={() => window.open(codeUrl, "_blank")}
              className="flex-1 gap-2 bg-teal-400 hover:bg-teal-500 text-xs sm:text-sm"
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

const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, staggerChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Portfolio website using only HTML, CSS and JavaScript",
      imageSrc: "/p2.png",
      projectUrl: "https://sameer-se.netlify.app/",
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
    <div id="projects" className="container py-10 sm:py-20">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center font-bold text-teal-400">
          PROJECTS
        </h2>
      </AnimatedSection>
      <AnimatedSection className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </AnimatedSection>
    </div>
  );
};

export default Projects;
