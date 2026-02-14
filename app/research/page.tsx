"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
const research = [
  {
    num: "01",
    title: "English Literature and Cultural Studies",
    description: `Espionage and spy fiction, Postcolonial theory and imperial narratives, Narrative identity, morality, and ideology, Literature, power, and culture. `,
    href: "#",
  },
  {
    num: "02",
    title: "Security and Strategic Studies",
    description: `National and international security, Intelligence operations and strategic analysis, Conflict resolution and peace studies, Military communication and strategic leadership.`,
    href: "#",
  },
  {
    num: "03",
    title: "Linguistics and Academic Communication",
    description: `Applied linguistics, Academic writing, discourse analysis, English for professional and military purposes.`,
    href: "#",
  },
  {
    num: "04",
    title: "Political and Legal Humanities",
    description: `International relations and geopolitics, Legal translation and terminology, Comparative law and ethics.`,
    href: "#",
  },
];
const Research = () => {
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
          {research.map((research, index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-1 justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {research.num}
                  </div>
                  <Link
                    href={research.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-slate-900 text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                  {research.title}
                </h2>
                <p className="text-white/60">{research.description}</p>
                <div className="border-b dark:border-white/20 border-slate-900 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
