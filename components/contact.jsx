"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSubmitting(true);
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(
        "Failed to send message. Please contact through email or linkedin."
      );
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div id="contact" className="container py-20 max-w-xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl mb-12 mt-8 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 transition-colors">
          CONTACT
        </h2>
      </AnimatedSection>
      <AnimatedSection>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Textarea
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-36 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              type="submit"
              className="w-full py-4 text-base font-semibold bg-teal-500 hover:bg-teal-600 text-white transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mr-2"
                  >
                    <FaPaperPlane />
                  </motion.div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FaPaperPlane className="mr-2" /> Send Message
                </span>
              )}
            </Button>
          </motion.div>
        </form>
      </AnimatedSection>
    </div>
  );
}
