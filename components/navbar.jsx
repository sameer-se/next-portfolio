import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./modeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
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
          className="font-honk font-semibold sm:text-3xl text-lg text-teal-400 hover:text-teal-500 transition-colors"
        >
          sameer-se
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex gap-8 items-center"
        >
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              isActive={activeSection === item.href.slice(1)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 items-center"
        >
          <ModeToggle />
          <SocialIcon href="https://github.com/sameer-se" icon={<FaGithub />} />
          <SocialIcon
            href="https://www.linkedin.com/in/sameer-khadka2008/"
            icon={<FaLinkedin />}
          />
          <motion.button
            className="lg:hidden text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                {...item}
                isActive={activeSection === item.href.slice(1)}
                onClick={() => setIsOpen(false)}
                isMobile
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ name, href, isActive, onClick, isMobile }) {
  return (
    <Link
      href={href}
      className={`relative font-medium text-lg transition-colors ${
        isMobile ? "block py-3 px-4 hover:bg-primary/10" : ""
      } ${isActive ? "text-teal-400" : "hover:text-teal-400"}`}
      onClick={onClick}
    >
      {name}
      {isActive && !isMobile && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.div className="flex items-center justify-center">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-center content-center border bg-background hover:bg-primary/10 rounded-md p-1 transition-colors duration-300"
      >
        {icon}
      </Link>
    </motion.div>
  );
}
