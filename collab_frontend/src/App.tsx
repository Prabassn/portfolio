import { motion } from "framer-motion";

import {
  FaGithub,
  FaCode,
  FaTrophy,
  FaServer,
  FaBrain,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Real-Time Collaborative Coding Platform",
    desc: "A scalable collaborative editor with WebSockets, operational synchronization, live room management and real-time code execution.",
    tech: ["React", "SpringBoot", "WebSockets", "Typescript", "Docker" ],
    github: "https://github.com/Prabassn/collaborative-code-editor",
    live: "#",
  },

  {
    title: "Student Event Registration and Management System",
    desc: "A robust full-stack application leveraging Spring Boot Microservices and React with TypeScript to streamline the registration and tracking of student participation in academic events",
    tech: [
      "React",
      "Spring Boot",
      "HTML",
      "TailwindCSS",
      "WebSockets",
    ],
    github: "https://github.com/slimycashcodes/EventoPedia",
    live: "#",
  },

  {
    title: "IPL Match Scheduling System",
    desc: "A pure C-based scheduling engine built to simulate IPL tournament match scheduling using graph theory, greedy algorithms and constraint optimization. Designed mainly to strengthen algorithmic thinking and low-level systems programming skills.",
    tech: [
      "C",
      "Graphs",
      "Greedy Algorithms",
      "Scheduling",
      "Data Structures",
    ],
    github: "https://github.com/Prabassn/IPL-SCHEDULING",
    live: "#",
  }
];

const skills = [
  "React",
  "RestAPI",
  "SpringBoot",
  "MongoDB",
  "WebSockets",
  "TailwindCSS",
  "Typescript",
  "C++",
  "Java",
  "Python",
  "GraphDB",
  "Git"];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/40">
        <h1 className="text-2xl font-bold tracking-wider">PRABAKARAN R</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#cp" className="hover:text-white transition">
            CP
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-8 md:px-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-lg mb-4"
          >
            Backend Engineer • Competitive Programmer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl font-black leading-tight"
          >
            I BUILD
            <br />
            SCALABLE
            <br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed"
          >
            Computer Science student focused on backend engineering,
            distributed systems, competitive programming and AI-driven
            applications. Passionate about building performant systems that
            solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-10 flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Prabassn"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 md:px-24 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <FaServer className="mb-6 text-blue-400" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              Backend Engineering
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Passionate about distributed systems, APIs, databases,
              scalability, caching and system design.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <FaTrophy className="mb-6 text-purple-400" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              Competitive Programming
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Strong problem-solving mindset developed through Codeforces,
              LeetCode and algorithmic thinking.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <FaBrain className="mb-6 text-pink-400" size={40} />

            <h3 className="text-2xl font-bold mb-4">
              AI & Innovation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Interested in AI systems and building impactful products that
              combine intelligence with scalable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CP SECTION */}
      <section id="cp" className="px-8 md:px-24 py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Competitive Programming
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <FaCode className="text-blue-400" />

              <h3 className="text-3xl font-bold">Codeforces</h3>
            </div>

            <p className="text-6xl font-black mb-4">1328+</p>

            <p className="text-gray-400 mb-6">
              Focused on algorithms, data structures and contest problem
              solving.
            </p>

            <a
              href="https://codeforces.com/profile/Piththan"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              Visit Profile <FiExternalLink size={16} />
            </a>
          </div>

         <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 p-10 rounded-3xl">
        <div className="flex items-center gap-4 mb-6">
         <FaCode className="text-purple-400" />

          <h3 className="text-3xl font-bold">CodeChef</h3>
        </div>

        <p className="text-6xl font-black mb-4">1282</p>

        <p className="text-gray-400 mb-6">
          Active competitive programmer focused on improving problem-solving,
          algorithms and contest performance.
        </p>

        <a
          href="https://www.codechef.com/users/cp_don_praveen"
          target="_blank"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
        >
          Visit Profile <FiExternalLink size={16} />
        </a>
      </div>
      </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-24 py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-8 md:px-24 py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={index}
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-8 md:px-24 py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Journey
        </h2>

        <div className="space-y-8 border-l border-white/20 pl-8">
          <div>
            <p className="text-blue-400 text-sm mb-2">2024</p>

            <h3 className="text-2xl font-bold mb-2">
              Started Competitive Programming
            </h3>

            <p className="text-gray-400">
              Focused heavily on algorithms and problem-solving patterns.
            </p>
          </div>

          <div>
            <p className="text-purple-400 text-sm mb-2">2025</p>

            <h3 className="text-2xl font-bold mb-2">
              Built Backend Systems
            </h3>

            <p className="text-gray-400">
              Worked on APIs, real-time systems and distributed architectures.
            </p>
          </div>

          <div>
            <p className="text-pink-400 text-sm mb-2">2026</p>

            <h3 className="text-2xl font-bold mb-2">
              Scaling Engineering Skills
            </h3>

            <p className="text-gray-400">
              Building industrial-grade projects and preparing for top tech
              internships.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 md:px-24 py-32 border-t border-white/10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Contact Me
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
          Interested in collaborating, internships, backend engineering or
          discussing scalable systems? Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:kuralpraba2007@gmail.com"
            className="px-8 py-4 rounded-2xl bg-white text-black font-semibold flex items-center gap-3"
          >
            <MdEmail size={18} />
            Email Me
          </a>

          <a
            href="https://github.com/Prabassn"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition flex items-center gap-3"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-24 py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 PRABA. Built with React & Tailwind.
      </footer>
    </div>
  );
}