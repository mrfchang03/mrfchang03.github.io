"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import {
  FaGithub,
  FaLinkedinIn,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiMysql,
  SiC,
  SiScikitlearn,
  SiR,
} from "react-icons/si";

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "Rave Routes",
    category: "Full-Stack",
    description:
      "Web app for music fans to track artists' live events and plan travel. Integrates OpenAI for personalized itineraries and Amadeus API for real-time flight and hotel data.",
    stack: ["React", "Flask", "Python", "OpenAI API"],
    github: "https://github.com/mrfchang03/Rave-Routes",
  },
  {
    title: "Retail Sales Predictor",
    category: "Machine Learning",
    description:
      "ML-powered web app that forecasts retail sales from user-supplied parameters. Trained prediction model served via a Flask REST API with an interactive visualization frontend.",
    stack: ["Python", "Flask", "scikit-learn"],
    github: "https://github.com/sya191/RetailSalesPredictor",
  },
  {
    title: "Canadian IR Landscape Research",
    category: "Data Engineering",
    description:
      "ETL pipeline processing 1.3M Canadian postal codes for a published peer-reviewed geospatial study on interventional radiology access disparities across census divisions.",
    stack: ["Python", "pandas", "SQL"],
    github: "https://github.com/mrfchang03/Population_Geographical-Statistics",
  },
  {
    title: "Pomodoro Chrome Extension",
    category: "Frontend",
    description:
      "Chrome extension combining the Pomodoro technique with lo-fi YouTube streams. Features multi-tab sync and visual work/rest cycle progress indicators.",
    stack: ["JavaScript", "HTML", "CSS", "YouTube API"],
    github: "https://github.com/zachjohnston/pomodoro-extension",
  },
];

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiScikitlearn />, name: "scikit-learn" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiC />, name: "C" },
  { icon: <SiR />, name: "R" },
];

const services = [
  {
    title: "Backend Development",
    description:
      "Building reliable REST APIs and server-side systems using Python (Flask) and Node.js, with experience in database design and third-party API integration.",
  },
  {
    title: "Machine Learning",
    description:
      "Applying ML techniques for predictive modeling, data analysis, and pattern recognition using Python, scikit-learn, and statistical methods.",
  },
  {
    title: "Data Engineering",
    description:
      "Designing and building ETL pipelines to process, clean, and transform large datasets using Python, pandas, and SQL for analysis-ready outputs.",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Developing end-to-end web applications with React/Next.js frontends and Python or Node.js backends, styled with Tailwind CSS.",
  },
];

const categoryStyles = {
  "Full-Stack":        "bg-[#c8dff0] text-[#1a4a6a]",
  "Machine Learning":  "bg-[#cccef0] text-[#2a2a72]",
  "Data Engineering":  "bg-[#c8e8e4] text-[#1a4a48]",
  "Frontend":          "bg-[#ccdaf8] text-[#1a3a72]",
};

const stats = [
  { num: "4",  label: "Years studying CS" },
  { num: "5",  label: "Projects completed" },
  { num: "10+", label: "Technologies" },
  { num: "1",  label: "Published paper" },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section id="hero" className="min-h-[calc(100vh-65px)] flex items-center py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
            <FadeIn>
              <span className="text-accent font-semibold text-base">Hi, I'm</span>
              <h1 className="text-6xl xl:text-8xl font-bold text-ink mt-2 mb-3 tracking-tight">
                Matthew Chang
              </h1>
              <p className="text-lg text-inkMuted font-medium mb-4">
                Backend · Machine Learning · Data Engineering
              </p>
              <p className="text-base text-inkMuted max-w-lg mb-10 leading-relaxed">
                4th-year Computer Science student at SFU. I build backend systems,
                data pipelines, and ML models — and have a published peer-reviewed
                study to show for it.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accentHover transition-colors duration-200 text-sm"
                >
                  Hire Me
                </a>
                <a
                  href="/resume"
                  className="px-6 py-3 stat-card text-inkMuted font-medium rounded-lg hover:border-accent/60 hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <FiDownload />
                  View Resume
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mrfchang03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full stat-card flex items-center justify-center text-inkMuted hover:text-accent transition-colors duration-200"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-chang-976351213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full stat-card flex items-center justify-center text-inkMuted hover:text-accent transition-colors duration-200"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex-shrink-0">
              <Photo />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center stat-card rounded-2xl px-6 py-5">
                  <p className="text-3xl font-bold text-accent">{stat.num}</p>
                  <p className="text-sm text-inkMuted mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-6">
        <div className="container mx-auto">
          <FadeIn>
            <div className="bubble rounded-3xl p-8 xl:p-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Work</span>
              <h2 className="text-4xl font-bold text-ink mt-1 mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <div key={i} className="inset-card rounded-2xl p-6 h-full flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-semibold text-ink">{project.title}</h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${categoryStyles[project.category]}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-inkMuted text-sm leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, j) => (
                        <span key={j} className="text-xs stat-card text-inkMuted px-2.5 py-1 rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent font-medium hover:underline">
                      <FaGithub />
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-6">
        <div className="container mx-auto">
          <FadeIn>
            <div className="bubble rounded-3xl p-8 xl:p-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tech Stack</span>
              <h2 className="text-4xl font-bold text-ink mt-1 mb-8">Skills</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className="inset-card flex flex-col items-center gap-2 p-4 rounded-2xl">
                    <div className="text-3xl text-inkMuted">{skill.icon}</div>
                    <span className="text-xs font-medium text-inkMuted">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-6">
        <div className="container mx-auto">
          <FadeIn>
            <div className="bubble rounded-3xl p-8 xl:p-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">What I Do</span>
              <h2 className="text-4xl font-bold text-ink mt-1 mb-8">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="inset-card rounded-2xl p-6">
                    <h3 className="text-base font-semibold text-ink mb-2">{service.title}</h3>
                    <p className="text-inkMuted text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-6 pb-16">
        <div className="container mx-auto max-w-2xl text-center">
          <FadeIn>
            <div className="bubble rounded-3xl px-10 py-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
              <h2 className="text-4xl font-bold text-ink mt-1 mb-4">
                Let's Work Together
              </h2>
              <p className="text-inkMuted mb-8 leading-relaxed text-sm max-w-md mx-auto">
                I'm actively looking for internship and co-op opportunities. If
                you're interested in working together, feel free to reach out.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <a
                  href="mailto:mrfchang03@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accentHover transition-colors duration-200 text-sm"
                >
                  <FiMail />
                  mrfchang03@gmail.com
                </a>
                <a
                  href="tel:+17783192748"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stroke bg-canvas text-inkMuted font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-200 text-sm"
                >
                  <FiPhone />
                  (+1) 778 319 2748
                </a>
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/mrfchang03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-stroke bg-canvas flex items-center justify-center text-inkMuted hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-chang-976351213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-stroke bg-canvas flex items-center justify-center text-inkMuted hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
