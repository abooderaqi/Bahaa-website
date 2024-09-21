"use client"

import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"
const services = [
  {
    num: "01",
    title: "Front-End Development (React.js, Next.js)",
    description: `Crafting intuitive and responsive user interfaces using modern JavaScript frameworks.
     Building single-page applications (SPAs) that load fast and work seamlessly across devices.
     Optimizing websites for performance, SEO, and accessibility.`,
    href: "#",
  },
  {
    num: "02",
    title: "Back-End Development",
    description: `Setting up and managing back-end services using technologies like Node.js, Supabase, and Prisma.
    Creating RESTful APIs and GraphQL endpoints to handle secure data transactions and real-time functionality.
    Implementing user authentication, authorization, and secure data storage.`,
    href: "#",
  },
  {
    num: "03",
    title: "Database Design & Management",
    description: `Designing and implementing scalable database schemas using Prisma.
    Integrating cloud-based storage solutions like Supabase for real-time databases.`,
    href: "#",
  },
  {
    num: "04",
    title: "Responsive Design & UX/UI",
    description: `Creating mobile-first, responsive designs that look great on all devices.
    Conducting user testing and optimizing websites based on user feedback.`,
    href: "#",
  },
  {
    num: "05",
    title: "Maintenance & Support",
    description: `Offering ongoing website maintenance, security updates, and performance optimizations.
    Regular monitoring and troubleshooting to ensure smooth operations.`,
    href: "#",
  },
]
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
                <div className="border-b dark:border-white/20 border-slate-900 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
