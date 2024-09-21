"use client"

import Link from "next/link"
import { ThemeToggle } from "./ui/ThemeToggle"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "works",
    path: "/work",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "contact",
    path: "/contact",
  },
]
const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="w-full h-fit px-[4.8rem] py-[2rem] flex flex-col gap-4 max-sm:px-4  border-t  border-gray-200 dark:border-slate-600">
      <div className="flex justify-center items-center container mx-auto">
        {/* <div className="flex gap-2">
          <ul className={`flex justify-around items-center gap-4 font-bold`}>
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.name === pathname &&
                    "dark:border-b-2 dark:border-white dark:text-white"
                  } capitalize`}
                >
                  {link.name}
                </Link>
              )
            })}
          </ul>
        </div> */}
        {/* <ThemeToggle /> */}
      </div>
      <div>
        <p className="text-center max-sm:text-md max-sm:w-fit font-bold max">
          Copyright &copy; 2024 Abood Eraqi. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
