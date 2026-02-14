import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
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
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  gap-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className="block dark:focus:bg-slate-700 dark:[&.active]:bg-slate-700 capitalize  focus:bg-slate-400  [&.active]:bg-slate-400  py-2 px-3 hover:bg-gray-300 text-slate-900 dark:text-[#fff] rounded md:bg-transparent dark:hover:bg-gray-700 md:hover:text-slate-700 md:dark:hover:text-slate-500 md:dark:text-[#fff] md:p-0 "
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
