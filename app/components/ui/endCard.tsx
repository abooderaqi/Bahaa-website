import { BiSolidBadgeCheck } from "react-icons/bi"

const EndCard = () => {
  return (
    <div className="h-full w-full  p-[1.5rem]">
      <div className="border border-slate-900 flex flex-wrap flex-row  justify-around  gap-4 rounded-3xl w-full p-[1.5rem]  text-lg  dark:border-white max-sm:border-none sm:border-none  sm:grid sm:grid-cols-2 max-sm:text-center max-sm:grid max-sm:grid-cols-2 md:grid md:grid-cols-2 md:border-none">
        <h1 className="text-3xl font-bold text-[#a5a1a1]  md:col-span-2 md:text-center md:mb-2 max-sm:col-span-2 sm:col-span-2 sm:text-center max-sm:text-2xl ">
          Backend Development
        </h1>

        <div className="flex justify-center items-center gap-2">
          <span>
            <BiSolidBadgeCheck size={20} />
          </span>
          <div className="flex flex-col text-start">
            <h3 className="font-bold">PostgreSQL</h3>
            <p className="text-[#a5a1a1]">Basic</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <span>
            <BiSolidBadgeCheck size={20} />
          </span>
          <div className="flex flex-col  text-start">
            <h3 className="font-bold">Node JS</h3>
            <p className="text-[#a5a1a1]">Intermediate</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>
            <BiSolidBadgeCheck size={20} />
          </span>
          <div className="flex flex-col  text-start">
            <h3 className="font-bold">Express JS</h3>
            <p className="text-[#a5a1a1]">Intermediate</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>
            <BiSolidBadgeCheck size={20} />
          </span>
          <div className="flex flex-col  text-start">
            <h3 className="font-bold">Git</h3>
            <p className="text-[#a5a1a1]">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndCard
