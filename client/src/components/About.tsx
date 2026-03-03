import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-12" ref={ref}>
      <div className="max-w-[70ch] mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg leading-relaxed mb-6 text-neutral-600 dark:text-neutral-300"
        >
          I am Muhammad Nabil Niode, an Information Systems student at Universitas Ahmad Dahlan with a strong interest in Software Engineering, particularly Frontend Development. I have experience building web and mobile applications, implementing responsive interfaces, and integrating REST APIs using technologies such as React, Flutter, and Tailwind CSS.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
        >
          Through academic projects and campus involvement, including volunteering at HIMTIKA and participating in P2K FAST UAD, I have strengthened my teamwork, communication, and problem-solving skills, and I am committed to continuously improving as a professional Frontend Developer.
        </motion.p>

      </div>
    </section>
  );
}