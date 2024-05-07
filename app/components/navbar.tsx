"use client"

import DesktopNavbar from "./ui/DesktopNavbar"
import MobileNavbar from "./ui/MobileNavbar"
import { ThemeToggle } from "./ui/ThemeToggle"

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#hero"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AboodEraqi.
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ThemeToggle />
          <MobileNavbar />
        </div>
        <DesktopNavbar />
      </div>
    </nav>
  )
}

export default Navbar
