"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Academic proofreading and editing",
    href: "#",
  },
  {
    num: "02",
    title: "Thesis and dissertation guidance",
    href: "#",
  },
  {
    num: "03",
    title: "Research proposal design and methodology support",
    href: "#",
  },
  {
    num: "04",
    title:
      "Arabic ↔ English translation for academic, legal, military, and professional documents",
    href: "#",
  },
  {
    num: "05",
    title: "Journal submission guidance and publication consultancy",
    href: "#",
  },
  {
    num: "06",
    title: "Online training and workshops",
    href: "#",
  },
  {
    num: "07",
    title: "Consultation & Pricing Policy",
    description:
      "Consultation is offered to discuss project scope, timelines, and requirements. Pricing is based on project complexity, academic level, and duration. Discounts are offered for long-term collaborations, institutional projects, and postgraduate students.",
    href: "#",
  },
  {
    num: "08",
    title: "Academic Integrity & Professional Disclaimer",
    description:
      "Dr. Almomani adheres strictly to international standards of academic integrity. Consulting services do not include ghostwriting; all work guides researchers in producing original scholarly output. Confidentiality and respect for intellectual property are guaranteed.",
    href: "#",
  },
  {
    num: "09",
    title: "MISSION STATEMENT",
    description:
      "To advance global scholarship through rigorous interdisciplinary research, literary and security studies, and ethical mentorship while fostering critical thinking and scholarly excellence among students and researchers.",
    href: "#",
  },
  {
    num: "10",
    title: "ACADEMIC PHILOSOPHY",
    description:
      "Literature, research, and security studies are not only intellectual pursuits but tools to understand power, morality, and cultural identity. My philosophy integrates interdisciplinary analysis, ethical scholarship, and culturally responsive pedagogy to produce meaningful and impactful academic work.",
    href: "#",
  },
  {
    num: "11",
    title: "Online Training Courses",
    description: `Advanced English Language Course, Research Methodology and Academic Writing, IELTS and TOEFL Preparation Programs, Academic Writing for Publication and Trainer of Trainers (ToT) Programs.`,
    note: "All courses are structured, certificate-ready, and designed for global academic standards.",
    href: "#",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-1 justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-slate-900 text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <p className="text-[#00ff99]">{service.note}</p>
                <div className="border-b dark:border-white/20 border-slate-900 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
