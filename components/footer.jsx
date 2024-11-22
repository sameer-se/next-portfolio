import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sameer-se", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sameer-khadka-774757222/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:sameerkhadka2008@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 border-t-2 border-teal-400 py-8 px-4"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon className="text-2xl" />
            </motion.a>
          ))}
        </div>
        <motion.p
          className="text-center font-light text-sm md:text-base text-gray-600 dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {currentYear} Sameer Khadka. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
