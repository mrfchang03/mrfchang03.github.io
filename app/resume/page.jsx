"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython 
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiCplusplus, SiMysql, SiC } from "react-icons/si";
import { SiR } from "react-icons/si";

// Helper to render clickable values (URLs, email, phone)
const renderFieldValue = (value) => {
  const isUrl = /^https?:\/\//i.test(value);
  if (isUrl) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-accent hover:underline break-all"
      >
        {value}
      </a>
    );
  }
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (isEmail) {
    return (
      <a href={`mailto:${value}`} className="text-xl text-accent hover:underline">
        {value}
      </a>
    );
  }
  const digits = value.replace(/\s+/g, "");
  const isPhone = /^\+?\d[\d()\-+ ]+\d$/.test(value);
  if (isPhone) {
    return (
      <a href={`tel:${digits}`} className="text-xl text-accent hover:underline">
        {value}
      </a>
    );
  }
  return <span className="text-xl">{value}</span>;
};

// about data
const about = {
  title: "About me",
  description:
    "I’m a 3rd-year Computer Science student at Simon Fraser University passionate about building software that solves real problems. I enjoy learning quickly, collaborating with teams, and exploring new tools to bring ideas to life. Outside of coding, you can usually find me listening to music, working out, or playing badminton",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Matthew Chang",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 778 319 2748",
    },
    {
      fieldName: "Email",
      fieldValue: "mrfchang03@gmail.com",
    },
    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/mrfchang03",
      icon: "/assets/resume/icons/github.svg",
      label: "GitHub",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/matthew-chang-976351213/",
      icon: "/assets/resume/icons/linkedin.svg",
      label: "LinkedIn",
    },
  ],
};

// experience data (Projects & Research)
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Projects & Experience",
  description:
    "Selected projects and research work highlighting React/Next.js, API integration, and data processing.",
  items: [
    {
      company: "Team Project",
      position: "Rave Routes — Full-Stack Web App",
      duration: "May 2024 – Present",
      link: "https://github.com/mrfchang03/Rave-Routes",
      bullets: [
        "Developing a web app for music fans to track favorite artists’ live performances and plan travel (flights & hotels).",
        "Integrated OpenAI API to generate personalized itineraries and packing lists.",
        "Utilized Amadeus API for real-time flight and hotel data; implemented artist tracking and event listings.",
        "Built a responsive UI in React; Flask backend for REST endpoints (NLP + third-party API orchestration).",
      ],
    },
    {
      company: "Personal Project",
      position: "Pomodoro Chrome Extension",
      duration: "Jan 2024 – Feb 2024",
      link: "https://github.com/zachjohnston/pomodoro-extension",
      bullets: [
        "Built a Chrome extension integrating the Pomodoro technique with lo-fi YouTube streams to boost focus.",
        "Implemented multi-tab sync and visual progress indicators for work/rest cycles.",
        "JavaScript, HTML, CSS, YouTube API for async communication and dynamic UI updates.",
      ],
    },
    // 🔻 UPDATED: Independent Research (recruiter-friendly)
    {
      company: "Independent Research",
      position: "Cancer Research Data Collaboration",
      duration: "2025",
      link: "https://github.com/mrfchang03/Population_Geographical-Statistics",
      bullets: [
        "Processed and linked 1.3M Canadian postal codes (PCCF) from raw .txt files using Python/pandas, building a reproducible ETL pipeline.",
        "Mapped postal codes to Statistics Canada census divisions for national geospatial analysis; prepared validated datasets for an IR disparities study (submitted to CMAJ).",
        "Optimized large-scale joins and QA with Arrow strings/chunked I/O; documented data hygiene, validation checks, and outputs.",
      ],
    },
    {
      company: "Personal Project",
      position: "Portfolio Website",
      duration: "2025",
      link: "https://mrfchang03.github.io/", 
      bullets: [
        "Designed and developed a personal portfolio website to showcase projects, resume, and contact information.",
        "Built with React, Next.js, Tailwind CSS for responsive design and modern UI components.",
        "Implemented smooth animations with Framer Motion and reusable components for scalability.",
      ],
    },
  ],
};

// education data (left as-is; customize later if you like)
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Continuously learning fundamentals and shipping projects alongside coursework.",
  items: [
    {
      institution: "Simon Fraser University",
      degree: "BSc, Computer Science (In progress)",
      duration: "2021 — Present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I enjoy working across the stack, from building APIs with Python and Node.js to creating responsive web apps with React and Next.js. I’m comfortable with tools like TailwindCSS, SQL, and Pandas, and I’m always eager to pick up new technologies to improve my work.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaPython />, name: "python" },
    { icon: <SiCplusplus />, name: "c++" },
    { icon: <SiC />, name: "c" },
    { icon: <SiMysql />, name: "sql" },
    { icon: <SiR />, name: "R / RStudio" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] p-6 rounded-xl flex flex-col justify-start items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl max-w-[260px] min-h-[60px] text-left hover:underline text-accent"
                          >
                            {item.position}
                          </a>
                        ) : (
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-left">
                            {item.position}
                          </h3>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.bullets && (
                          <ul className="list-disc list-inside text-white/70 text-sm mt-2 space-y-1">
                            {item.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>

                      {item.fieldName === "Email" ? (
                        <a
                          href={`mailto:${item.fieldValue}`}
                          className="text-accent hover:underline"
                        >
                          {item.fieldValue}
                        </a>
                      ) : item.icon ? (
                        <a
                          href={item.fieldValue}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-[#2a2a30] px-3 py-1.5 text-sm text-accent hover:bg-[#32323a] transition"
                        >
                          <img src={item.icon} alt={item.label} className="h-4 w-4" />
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-xl">{item.fieldValue}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
