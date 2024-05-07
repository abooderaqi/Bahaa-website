import Link from "next/link"
import { ThemeToggle } from "./ui/ThemeToggle"

const Footer = () => {
  return (
    <footer className="w-full h-fit px-[4.8rem] py-[2.4rem] flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <div className="flex gap-2">
          <ul className="flex justify-around items-center gap-4">
            <li>
              <a href="#aboutSection">About</a>
            </li>
            <li>
              <a href="#experienceSection">Experience</a>
            </li>
            <li>
              <a href="#projectsSection">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
      <div>
        <p className="text-center">
          Copyright &copy; 2024 Abood Eraqi. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
