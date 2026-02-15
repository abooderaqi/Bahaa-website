"use client";

import { FaGraduationCap, FaIdBadge } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Dr. Baha’ Aldeen Almomani is a PhD graduate in English Language Studies (English Literature) from Sultan Zainal Abidin University (UniSZA), Malaysia, and he is a retired Lieutenant Colonel from the Jordan Armed Forces Language Institute. He has led English departments, managed quality assurance in academic institutions, and taught English and literature to military officers, international cadets, and undergraduate students. His research integrates literary studies with security studies, law, linguistics, and political science, focusing on the ethical, cultural, and ideological dimensions of literature and strategic intelligence. Dr. Almomani offers professional services including academic proofreading, translation (Arabic ↔ English), research consultation, and training in research methodologies. All work strictly adheres to international academic integrity standards.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Baha’Aldeen Almomani",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+962) 7 7206 7647",
    },
    // {
    //   fieldName: "Experience",
    //   fieldValue: "+2 Years",
    // },
    {
      fieldName: "Nationality",
      fieldValue: "Jordanian",
    },
    {
      fieldName: "Email",
      fieldValue: "almomanibaha5@gmail.com | safabaha2008@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic",
    },
  ],
};

const teachingandtraining = {
  icon: <FaIdBadge />,
  items: [
    {
      company:
        "English Literature and Academic Writing (Undergraduate and Graduate Levels)",
      // position: "training Full stack developer",
      // duration: "june 2022 - oct 2022",
    },
    {
      company: "Research Methodology and Academic Supervision",
    },
    {
      company: "English for Military and Security Personnel",
    },
    {
      company: "IELTS & TOEFL Preparation Programs",
    },
    {
      company: "Trainer of Trainers- English Instructors (ToT)",
    },
  ],
};
const education = {
  icon: <FaGraduationCap />,
  title: "My education",
  description: "",
  items: [
    {
      instituation: "Sultan Zainal Abidin University (UniSZA), Malaysia",
      degree: "PhD in English Language Studies (English Literature)",
      duration: "2021 - 2025",
    },
  ],
};
const publications = {
  icon: <FaIdBadge />,
  title: "My publications",
  description: "",
  items: [
    {
      name: "Almomani, B. A. R. S., & Azmi, M. N. B. L",
      title:
        "Espionage and Securitization in the Age of Global Conflict. Security Science Journal, 6(2), 118–137",
      year: "2025",
    },
    {
      name: "Almomani, B. A. R. S., & Azmi, M. N. B. L",
      title:
        "From Ancient Espionage to Cyber Warfare: Evolving Threats and the Need for Modern Legal Frameworks. Tianjin Daxue Xuebao",
      year: "2024",
    },
    {
      name: "Almomani, B. A. R. S",
      title:
        "Jordan’s Path to Peace: His Majesty King Abdullah II’s Vision for Regional Stability. Jilin Journal of University of Science and Technology",
      year: "2024",
    },
    {
      name: "Almomani, B. A. R. S., & Azmi, M. N. B. L",
      title:
        "The Empire’s Hidden Hand: Espionage as Dominion in Kipling’s Kim and Childers’ The Riddle of the Sands. Zenodo. https://doi.org/10.5281/zenodo.14293427",
      year: "2024",
    },
    {
      name: "Almomani, B. A. R. S., & Azmi, M. N. B. L",
      title:
        "Battles of Influence: A Constructivist and Realist Analysis of Great Power Rivalries and Regional Stability in the 21st Century. HRMARS.",
      year: "2024",
    },
    {
      name: "Almomani, B. A. R. S., & Azmi, M. N. B. L",
      title:
        "In the Shadow of Empires: Power and Intrigue in Kipling’s Kim. HRMARS.",
      year: "2024",
    },
  ],
};

const AboutMe = () => {
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
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="teachingandtraining">
              Teaching & Training
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="teachingandtraining" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* <h3 className="text-4xl font-bold">{teachingandtraining.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {teachingandtraining.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {teachingandtraining.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          {/* <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3> */}
                          <div className="flex items-center gap-3">
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span> */}
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-[15px] max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.instituation}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="publications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{publications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {publications.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {publications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">{item.year}</span>
                          <h3 className="text-xs max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60 text-[10px]">
                              {item.name}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-20">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutMe;
