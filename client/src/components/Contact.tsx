import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Github, Mail } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      detail: "081242700600",
      link: "https://wa.me/6281242700600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "GitHub",
      icon: Github,
      detail: "github.com/nabilniode",
      link: "https://github.com/nabilniode",
      bgColor: "bg-gray-100 dark:bg-gray-900/30",
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      name: "Email",
      icon: Mail,
      detail: "2300016109@webmail.uad.ac.id",
      link: "mailto:2300016109@webmail.uad.ac.id",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-800/50"
      ref={ref}
    >
      <div className="max-w-[65ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Contact me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center"
        >
          

          <p className="text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
            Mahasiswa Sistem Informasi Universitas Ahmad Dahlan yang memiliki
            minat pada bidang front-end dan pengembangan sistem berbasis web.
          </p>

          <div className="flex justify-center gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.3 + 0.1 * index,
                }}
                className={`w-14 h-14 ${contact.bgColor} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon
                  className={`w-6 h-6 ${contact.iconColor}`}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}