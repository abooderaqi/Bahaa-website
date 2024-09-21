"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "./WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Omnifood",
    description:
      "Omnifood is a cutting-edge restaurant website designed to offer users a seamless food ordering and delivery experience. Built with modern web technologies, Omnifood features a user-friendly interface where customers can browse menus, customize orders, and make secure online payments. The platform is optimized for mobile and desktop, ensuring a smooth experience on any device.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    live: "https://aboodomnifood.netlify.app/",
    image: "/ominifood.JPG",
    github: "https://github.com/abooderaqi/Omnifood",
  },
  {
    num: "02",
    category: "fullstack",
    title: "MYA Boutique",
    description: `Mya Boutique is a modern e-commerce platform built with Next.js, offering a seamless and responsive online shopping experience. 
    The app utilizes React Query for efficient data fetching and caching, and Zustand for managing client-side state, ensuring smooth user interactions. 
    With a Prisma-powered database and Supabase for real-time data and authentication, Mya Boutique is designed for scalability, security, and performance.
    The platform features an intuitive product catalog, secure checkout, and mobile-friendly design, making it ideal for fashion and retail businesses.`,
    stack: [
      { name: "Next js" },
      { name: "Tailwind css" },
      { name: "Prisma" },
      { name: "Postgre" },
    ],
    live: "https://mya-ecru.vercel.app/",
    image: "/mya.JPG",
    github: "https://github.com/abooderaqi/MYA.git",
  },
]
const Projects = () => {
  const [project, setProject] = useState(projects.at(0))
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none mb-20">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project?.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {project?.category}
              </h2>
              <p className="text-white/60">{project?.description}</p>
              <ul className="flex gap-4">
                {project?.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#00ff99]">
                      {item.name}
                      {index !== project?.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* live Link */}
                <Link href={project?.live as string} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github Link */}
                <Link href={project?.github as string} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#00ff99] hover:bg-[#00ff99] text-slate-900 w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
