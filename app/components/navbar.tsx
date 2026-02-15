"use client";

import Link from "next/link";
import DesktopNavbar from "./ui/DesktopNavbar";
import MobileNavbar from "./ui/MobileNavbar";
import { ThemeToggle } from "./ui/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black border-b-2 border-white/60 sticky w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dr.Baha&apos;a Almomani
          </span>
          <span className="text-[#00ff99]">.</span>
        </Link>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> */}
        {/* <ThemeToggle /> */}
        <MobileNavbar />
        {/* </div> */}
        <DesktopNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
