import { Github, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/nabilniode", 
      hoverColor: "hover:text-gray-600 dark:hover:text-gray-300" 
    },
    { 
      icon: Mail, 
      href: "mailto:2300016109@webmail.uad.ac.id", 
      hoverColor: "hover:text-purple-500" 
    },
  ];

  return (
    <footer className="py-12 px-4 md:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[65ch] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Muhammad Nabil Niode. Built with passion and code.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neutral-400 ${social.hoverColor} transition-colors duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}