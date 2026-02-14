import { FiDownload } from "react-icons/fi";
import Social from "./components/Social";
import Photo from "./components/Photo";
import Link from "next/link";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto min-h-full py-4 xl:py-0">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span>Web Developer</span> */}
            <h1 className="h2">
              Hey I&apos;m
              <br /> Dr. Baha&apos;Aldeen Raed Suliman Almomani
            </h1>
            <p className="max-w-[500px] mb-9  text-[#00ff99] ">
              Welcome to the professional academic portfolio of Dr. Baha’ Aldeen
              Almomani, a researcher, educator, and retired military officer.
              His work spans English literature, postcolonial and espionage
              studies, security research, linguistics, political science, law,
              and humanities. Dr. Almomani provides academic consulting,
              translation, research supervision, and training globally. Research
              Keywords: Espionage literature, postcolonial studies, security
              studies, narrative identity, translation, military education,
              academic writing.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="#"
                download="cv"
                target="_blank"
                className="uppercase flex items-center gap-2 p-3 border rounded-xl text-[#00ff99] bg-inherit border-[#00ff99] hover:dark:bg-white hover:dark:text-[#00ff99]"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                {/* <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] hover:bg-[#00ff99] hover:dark:text-white hover:text-slate-900 hover:transition-all duration-500"
                /> */}
              </div>
            </div>
          </div>
          <div className="oreder-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
}
