import Cards from "./ui/Cards"

const Projects = () => {
  return (
    <div
      className="h-fit w-full mx-auto flex flex-col gap-y-20 lg:mb-0 p-[9.8rem] container max-sm:p-8 max-sm:mb-8 md:p-8 md:mb-8 sm:p-8 sm:mb-8"
      id="projectsSection"
    >
      <div className="flex flex-col justify-center items-center gap-1 ">
        <p className="text-[0.9rem]">Browse My Recent</p>
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <div className="flex justify-center items-center gap-6  ">
        <div className="flex  justify-center  items-center flex-col gap-4 h-full w-full ">
          <div className="lg:flex w-full h-full justify-center items-center gap-8  md:grid md:grid-cols-2 max-sm:flex-col ">
            <Cards
              projectName="Omnifood"
              image="https://i.imgur.com/hly2Tov.png"
              gitHub="https://github.com/abooderaqi/Omnifood"
              liveUrl="https://aboodomnifood.netlify.app/"
            />
            <Cards
              projectName="World Wise"
              image="https://i.imgur.com/RBpNdTo.png"
              gitHub="https://github.com/abooderaqi/worldwise"
              liveUrl="https://aboodworldwise.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
