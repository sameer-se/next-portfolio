import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./modeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed w-full left-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container py-4 flex justify-between items-center mx-auto">
        <Link
          href="/"
          className="font-semibold text-2xl text-teal-400 hover:text-teal-500 transition-colors"
        >
          SAMEER
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-lg hover:text-teal-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <SocialIcon href="https://github.com/sameer-se" icon={<FaGithub />} />
          <SocialIcon
            href="https://www.linkedin.com/in/sameer-khadka-774757222/"
            icon={<FaLinkedin />}
          />
          <button
            className="lg:hidden text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 font-medium text-lg hover:bg-primary/10 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1 transition-colors"
    >
      {icon}
    </Link>
  );
}
