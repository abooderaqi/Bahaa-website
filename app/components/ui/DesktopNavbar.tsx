import Link from "next/link"

const DesktopNavbar = () => {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="#aboutSection"
            className="block dark:focus:text-slate-700 dark:[&.active]:text-slate-700 focus:text-slate-400  [&.active]:text-slate-400 current:bg-red-500 py-2 px-3 text-slate-900 bg-slate-700 rounded md:bg-transparent md:hover:text-slate-700 md:dark:hover:text-slate-500 md:dark:text-[#fff] md:p-0 "
            aria-current="page"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#experienceSection"
            className="block py-2 px-3 dark:focus:text-slate-700 dark:[&.active]:text-slate-700 focus:text-slate-400  [&.active]:text-slate-400 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#projectsSection"
            className="block py-2 px-3 dark:focus:text-slate-700 dark:[&.active]:text-slate-700 focus:text-slate-400  [&.active]:text-slate-400 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#contactSection"
            className="block py-2 px-3 dark:focus:text-slate-700 dark:[&.active]:text-slate-700  focus:text-slate-400  [&.active]:text-slate-400 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNavbar
