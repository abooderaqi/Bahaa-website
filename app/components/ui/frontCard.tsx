import { BiSolidBadgeCheck } from "react-icons/bi"

const FrontCard = () => {
  return (
    <div className="border border-slate-900 flex flex-wrap flex-row  justify-around  gap-4 rounded-3xl w-full p-[1.5rem] text-center text-lg  dark:border-white sm:border-none sm:grid sm:grid-cols-2 max-sm:border-none max-sm:text-center md:grid md:grid-cols-2 md:border-none">
      <h1 className="text-3xl font-bold text-[#a5a1a1]  md:col-span-2 md:text-center md:mb-2 sm:col-span-2 max-sm:text-2xl">
        Frontend Development
      </h1>

      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col text-start">
          <h3 className="font-bold">HTML</h3>
          <p className="text-[#a5a1a1]">Experienced</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col  text-start">
          <h3 className="font-bold">CSS</h3>
          <p className="text-[#a5a1a1]">Experienced</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col  text-start">
          <h3 className="font-bold">JavaScript</h3>
          <p className="text-[#a5a1a1]">Experienced</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col  text-start">
          <h3 className="font-bold">TypeScript</h3>
          <p className="text-[#a5a1a1]">Intermediate</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col  text-start">
          <h3 className="font-bold">React JS</h3>
          <p className="text-[#a5a1a1]">Experienced</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <BiSolidBadgeCheck size={20} />
        </span>
        <div className="flex flex-col  text-start">
          <h3 className="font-bold">Next JS</h3>
          <p className="text-[#a5a1a1]">Experienced</p>
        </div>
      </div>
    </div>
  )
}

export default FrontCard
