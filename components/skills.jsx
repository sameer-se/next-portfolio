"use client";
import React from "react";
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
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="container min-h-screen flex flex-col justify-center py-20"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl md:text-5xl py-6 text-center font-bold text-teal-400 mb-12"
      >
        SKILLS
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 mb-20">
        {skillIcons.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillIcon Icon={skill.Icon} name={skill.name} />
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl md:text-5xl text-center font-bold text-teal-400 mb-12"
      >
        SERVICES
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ServiceBox Icon={service.Icon} title={service.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
