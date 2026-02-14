"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { name: "home", path: "/" },
  {
    name: "about",
    path: "/about",
  },
  // {
  //   name: "work",
  //   path: "/work",
  // },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "research",
    path: "/research",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const DesktopNavbar = () => {
  const pathname = usePathname();
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-inherit dark:border-gray-700">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "dark:text-white dark:border-b-2 dark:border-[#00ff99] text-slate-900 border-b-slate-900"
              } capitalize`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
