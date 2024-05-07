"use client"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { Press_Start_2P } from "next/font/google"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import { TiSocialLinkedinCircular } from "react-icons/ti"

import Link from "next/link"

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] })

const Hero = () => {
  return (
    <div
      className="h-[calc(100dvh-96px)] w-full mx-auto flex justify-center items-center"
      id="hero"
    >
      <div className="p-8 h-full w-full flex justify-center items-center flex-col ">
        <div>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              lineHeight: 1.5,
              display: "block",
            }}
            sequence={[`Hello, I'm\nAbood Eraqi\nFrontend Developer.`, 1000]}
            repeat={Infinity}
            speed={10}
            className={`text-center ${pressStart.className} text-5xl h-full max-sm:text-3xl`}
          />
        </div>
        <div className="w-full h-fit  p-4 flex  justify-center items-center gap-4  max-sm:flex-col">
          <a
            href="https://drive.google.com/file/d/1zR_jKxNHa5R_xNJ09qoTlOwao2NgupR1/view?usp=drive_link"
            className="px-4 py-2 rounded-3xl cursor-pointer text-lg font-bold border border-slate-900    hover:text-white hover:bg-slate-900 dark:hover:bg-[#fff] dark:hover:text-slate-900  dark:border-white"
            download={true}
            target="_blank"
          >
            Download CV
          </a>
          <button className="px-4 py-2 rounded-3xl cursor-pointer text-lg font-bold border-slate-900 border bg-slate-900  text-[#fff] hover:bg-inherit hover:border-slate-900 hover:text-slate-900 dark:border-white dark:bg-inherit dark:hover:bg-[#fff]  ">
            Contact Info
          </button>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
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
  )
}

export default Hero
