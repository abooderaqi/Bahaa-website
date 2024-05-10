import { FaAward } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
const AboutMe = () => {
  return (
    <div
      className="h-fit w-full mx-auto flex flex-col gap-y-20 p-[9.8rem] container max-sm:p-8 max-sm:mb-8 md:p-8 md:mb-8 sm:p-8 sm:mb-8"
      id="aboutSection"
    >
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-[0.9rem]">Get To Know Me More</p>
        <h1 className="text-5xl font-bold">About Me</h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex  justify-center  items-center flex-col gap-4 h-full w-full ">
          <div className=" flex w-full h-full justify-center items-center  gap-4 max-md:flex-col max-md:items-center max-md:justify-center ">
            <div className="border border-slate-900 flex flex-col justify-center items-center  rounded-3xl w-full p-[1.5rem] text-center text-lg  dark:border-white max-sm:text-xl max-sm:font-bold">
              <span>
                <FaAward size={40} />
              </span>
              <h3>Experience</h3>
              <p>
                2 years <br />
                Frontend Developer
              </p>
            </div>
            <div className="border border-slate-900 flex flex-col justify-center items-center  rounded-3xl w-full p-[1.5rem]  text-center text-lg  dark:border-white max-sm:text-xl max-sm:font-bold">
              <span>
                <TbCertificate size={40} />
              </span>
              <h3>Education</h3>
              <p>
                B.SE. Bachelors Degree <br />
                JUST University
              </p>
            </div>
          </div>
          <div>
            <p className="text-center font-bold text-lg  text-balance max-sm:text-center max-sm:text-xl mt-10  sm:text-center sm:text-xl">
              Hey there! I&apos;m Abood, a passionate frontend developer with
              two years of experience in crafting digital experiences that both
              look great and function flawlessly.
              <br />
              <br /> My journey into the world of web development started with a
              fascination for how websites can bring ideas to life and create
              meaningful interactions with users. During my career, I&apos;ve
              had the opportunity to work on a variety of projects, from
              single-page applications to complex web platforms. I specialize in
              HTML, CSS, and JavaScript, with a keen eye for detail and a knack
              for creating responsive and intuitive designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
