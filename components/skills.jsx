"use client";
import React, { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaDebian, FaDatabase } from "react-icons/fa6";
import {
  FaReact,
  FaNodeJs,
  FaRust,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript, SiGnubash } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";

const SkillIcon = ({ Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col items-center"
  >
    <Icon className="text-4xl md:text-5xl lg:text-6xl text-teal-400 hover:text-teal-300 transition-colors duration-300" />
    <span className="text-xs mt-2">{name}</span>
  </motion.div>
);

const ServiceBox = ({ Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center justify-center gap-4 border-2 border-teal-400 rounded-md p-6 transition-colors duration-300 hover:bg-teal-400/10"
  >
    <Icon className="text-4xl lg:text-5xl text-teal-400" />
    <span className="text-center text-lg lg:text-xl font-medium">{title}</span>
  </motion.div>
);

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

export default function Skills() {
  const skillIcons = [
    { Icon: IoLogoJavascript, name: "JavaScript" },
    { Icon: RiTailwindCssFill, name: "Tailwind" },
    { Icon: FaReact, name: "React" },
    { Icon: RiNextjsFill, name: "Next.js" },
    { Icon: SiExpress, name: "Express" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: FaRust, name: "Rust" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaLinux, name: "Linux" },
    { Icon: FaDebian, name: "Debian" },
    { Icon: SiGnubash, name: "Bash" },
    { Icon: FaGitAlt, name: "Git" },
  ];

  const services = [
    { Icon: CgWebsite, title: "Web Development" },
    { Icon: FaDatabase, title: "Backend Development" },
    { Icon: FaCode, title: "Fullstack Development" },
  ];

  return (
    <div
      id="skills"
      className="container min-h-screen flex flex-col justify-center py-20"
    >
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 transition-colors">
          SKILLS & SERVICES
        </h2>
      </AnimatedSection>

      <AnimatedSection className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-20 mb-20">
        {skillIcons.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SkillIcon Icon={skill.Icon} name={skill.name} />
          </motion.div>
        ))}
      </AnimatedSection>

      <AnimatedSection>
        {/* <h2 className="text-4xl md:text-5xl text-center font-bold text-teal-400 mb-12">
          SERVICES
        </h2> */}
      </AnimatedSection>

      <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ServiceBox Icon={service.Icon} title={service.title} />
          </motion.div>
        ))}
      </AnimatedSection>
    </div>
  );
}
