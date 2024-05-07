import EndCard from "./ui/endCard"
import FrontCard from "./ui/frontCard"

const Experience = () => {
  return (
    <div
      className="h-fit w-full  mx-auto flex flex-col gap-y-20 lg:p-[9.8rem] container max-sm:p-0 md:p-8 md:mb-8 sm:p-8 sm:mb-8"
      id="experienceSection"
    >
      <div className="flex flex-col justify-center items-center gap-1 ">
        <p className="text-[0.9rem]">Explore My</p>
        <h1 className="text-5xl font-bold">Experience</h1>
      </div>
      <div className="flex justify-center items-center gap-6 ">
        <div className="flex  justify-center  items-center flex-col gap-4 h-full w-full">
          <div className="lg:flex lg:flex-row w-full h-full lg:justify-center  lg:items-center  gap-8  max-sm:flex-col md:flex-col">
            <FrontCard />
            <EndCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
