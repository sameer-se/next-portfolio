import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

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
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="container py-20 max-w-xl mx-auto"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl md:text-5xl mb-12 text-center font-bold text-teal-400"
      >
        CONTACT
      </motion.h2>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 rounded-md"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-md"
        />
        <Textarea
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-36 rounded-md"
        />
        <Button
          type="submit"
          className="py-4 text-base font-semibold bg-teal-500 hover:bg-teal-600 transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
      </motion.form>
    </motion.div>
  );
}
