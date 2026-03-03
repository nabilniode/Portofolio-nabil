import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Frontend Developer",
    "System analysis",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(prev => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12">
      <div className="max-w-[65ch] mx-auto text-center">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <img
            src="/images/nabil.jpg" 
            alt="Profile Photo"
            className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-neutral-200 dark:border-neutral-700 shadow-xl"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          muhammad nabil niode
        </motion.h1>

        {/* Age & Location */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 mb-2"
        >
          19 Years Old • yogyakarta, Indonesia
        </motion.p>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 h-8"
        >
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg italic text-neutral-500 dark:text-neutral-400 mb-8"
        >
          "Building clean, responsive, and modern web experiences."
        </motion.p>

        {/* GitHub Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href=" https://github.com/nabilniode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}