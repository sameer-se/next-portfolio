import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="container py-14 min-h-screen flex flex-col justify-center lg:flex-row lg:items-center lg:py-20"
    >
      <div className="lg:w-3/5 flex flex-col gap-10 lg:gap-16">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex flex-col gap-2"
        >
          <h2 className="font-normal text-center text-3xl lg:text-start lg:text-4xl">
            Hello <span className="animate-wave inline-block">👋🏻</span>, I am
          </h2>
          <h1 className="font-bold text-4xl text-center py-2 text-teal-400 lg:text-start lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Sameer Khadka
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <p className="text-justify font-light text-lg lg:text-2xl leading-relaxed">
            FULL STACK DEVELOPER with a passion for creating websites and web
            apps with{" "}
            <span className="font-medium text-teal-400">
              JAVASCRIPT, REACT, NEXTJS, EXPRESS, NODEJS & MONGODB
            </span>
            .
          </p>
          <div className="flex items-center gap-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-bold text-teal-400 text-6xl lg:text-8xl">2+</p>
            <p className="text-sm text-justify lg:text-xl font-light">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center lg:justify-start"
        >
          <Button
            onClick={() => window.open("/Sameer_Khadka_Resume.pdf", "_blank")}
            className="flex gap-3 py-6 px-6 bg-teal-500 hover:bg-teal-600 transition-colors duration-300"
          >
            <span className="font-medium text-lg">Download CV</span>
            <IoMdCloudDownload className="text-2xl" />
          </Button>
          <Button
            onClick={() => (window.location.href = "#contact")}
            variant="outline"
            className="flex gap-3 py-6 px-6 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-colors duration-300"
          >
            <span className="font-medium text-lg">Contact</span>
            <MdEmail className="text-2xl" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:flex lg:w-2/5 lg:justify-center lg:items-center"
      >
        <Image
          src="/cd.svg"
          alt="code"
          width={600}
          height={700}
          className="drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
