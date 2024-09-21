"use client"

import { TypeAnimation } from "react-type-animation"
import { Press_Start_2P, Anton, Dancing_Script } from "next/font/google"
import { IoLogoGithub } from "react-icons/io"
import { TiSocialLinkedinCircular } from "react-icons/ti"

import Link from "next/link"

const pressStart = Dancing_Script({ weight: "400", subsets: ["latin"] })

const Hero = () => {
  return (
    <section
      className="h-[calc(100dvh-72px)] w-screen mx-auto flex flex-col justify-center items-center max-sm:h-full max-sm:mb-10 overflow-x-hidden"
      id="hero"
    >
      <div className="flex flex-col px-5 h-full w-full lg:flex lg:flex-row  justify-center items-center">
        <div className="flex flex-1 h-full justify-center items-center">
          <div>
            <h1>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                  display: "block",
                }}
                sequence={[
                  `Hello, I'm\nAbood Eraqi\nFrontend Developer.`,
                  1000,
                ]}
                repeat={Infinity}
                speed={10}
                className={`text-center ${pressStart.className} text-7xl h-full max-sm:text-5xl font-bold`}
              />
            </h1>
          </div>
        </div>
        <div className="md:w-1/2 bg-red-500 w-fit h-fit p-4 flex justify-center items-center gap-4 flex-col ">
          <div className="flex gap-4">
            <Link
              href="https://drive.google.com/file/d/1zR_jKxNHa5R_xNJ09qoTlOwao2NgupR1/view?usp=drive_link"
              className="px-4 py-2 rounded-xl cursor-pointer text-lg font-bold border border-slate-900 hover:text-white hover:bg-slate-900 dark:hover:bg-[#fff] dark:hover:text-slate-900  dark:border-white"
              download={true}
              target="_blank"
            >
              Download CV
            </Link>
            <Link
              href="#contactSection"
              className="px-4 py-2 rounded-xl cursor-pointer text-lg font-bold border-slate-900 border bg-slate-900  text-[#fff] hover:bg-inherit hover:border-slate-900 hover:text-slate-900 dark:border-white dark:bg-inherit dark:hover:bg-[#fff]  "
            >
              Contact Info
            </Link>
          </div>

          <div className="flex flex-cols w-auto">
            <Link
              href="https://github.com/abooderaqi"
              target="_blank"
              className="h-full w-auto "
            >
              <IoLogoGithub size={40} className="cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abedalrhman-eraqi-4168b5252/"
              target="_blank"
              className="h-full w-auto"
            >
              <TiSocialLinkedinCircular className="cursor-pointer" size={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
