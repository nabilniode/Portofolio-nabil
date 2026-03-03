import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Server,
  Wind,
  GitBranch,
  Figma,
  Smartphone,
} from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React.js", icon: Code, color: "text-blue-500", hoverColor: "hover:ring-blue-500/20" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500", hoverColor: "hover:ring-yellow-500/20" },
    { name: "Tailwind CSS", icon: Wind, color: "text-cyan-500", hoverColor: "hover:ring-cyan-500/20" },
    { name: "Flutter", icon: Smartphone, color: "text-sky-500", hoverColor: "hover:ring-sky-500/20" },
    { name: "Node.js", icon: Server, color: "text-green-500", hoverColor: "hover:ring-green-500/20" },
    { name: "REST API", icon: Server, color: "text-purple-500", hoverColor: "hover:ring-purple-500/20" },
    { name: "Figma", icon: Figma, color: "text-pink-500", hoverColor: "hover:ring-pink-500/20" },
    { name: "Git & GitHub", icon: GitBranch, color: "text-orange-500", hoverColor: "hover:ring-orange-500/20" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-800/50"
      ref={ref}
    >
      <div className="max-w-[75ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        {/* Skill Focus */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                Frontend Development
              </span>
              <span className="text-sm text-neutral-500">70%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "70%" } : { width: 0 }}
                transition={{ duration: 1 }}
                className="bg-blue-500 h-3 rounded-full"
              />
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                Backend & API Integration
              </span>
              <span className="text-sm text-neutral-500">30%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "30%" } : { width: 0 }}
                transition={{ duration: 1 }}
                className="bg-green-500 h-3 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`flex flex-col items-center p-5 rounded-xl bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl hover:scale-105 hover:ring-2 ${skill.hoverColor} transition-all duration-300`}
            >
              <div className={`w-12 h-12 mb-3 flex items-center justify-center ${skill.color}`}>
                <skill.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}