import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Apoman",
      description:
        "Aplikasi web untuk pengelolaan data obat pada apotek/klinik kecil. Mendukung fitur CRUD data obat secara terorganisir dan responsif.",
      image: "/images/apoman.jpg",
      tech: ["React", "Tailwind CSS", "Node.js"],
      link: "https://github.com/nabilniode/apoman_tekweb.git",
      techColors: [
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-400",
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
      ]
    },
    {
      id: 2,
      title: "Monitoring Kesehatan Anak",
      description:
        "Dashboard sekolah dan manajemen data siswa berbasis web dengan integrasi REST API serta fitur CRUD dan role-based access.",
      image: "/images/monitoring.jpg",
      tech: ["React.js", "REST API", "JavaScript"],
      link: "https://github.com/nurwhyusuci/monitoring_kesehatan_anak.git",
      techColors: [
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
      ]
    },
    {
      id: 3,
      title: "TamuQ",
      description:
        "Aplikasi Buku Tamu Digital berbasis Flutter dengan fitur form kunjungan, riwayat tamu, dashboard statistik, dan export PDF.",
      image: "/images/tamuq.jpg",
      tech: ["Flutter", "Dart", "REST API"],
      link: "https://github.com/AdriIhwanHidayah/TamuQ.git",
      techColors: [
        "bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-400",
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400",
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
      ]
    },
    {
      id: 4,
      title: "Adisty UAD (Redesign)",
      description:
        "Melakukan UX Research dan redesign fitur jadwal & kehadiran agar lebih efisien dan ramah bagi mahasiswa.",
      image: "/images/adisty.jpg",
      tech: ["Figma", "UX Research", "Prototyping"],
      link: "https://www.figma.com/design/0BWOhY7U1mYLbds1syG743/prototype-rdpp",
      techColors: [
        "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400",
        "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400",
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-12" ref={ref}>
      <div className="max-w-[75ch] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center"
        >
          Project Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${project.techColors[i]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="text-sm font-medium">Lihat Project</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}