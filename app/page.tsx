import Hero from "./components/hero"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import AboutMe from "./components/about"

export default function Home() {
  return (
    <div className="min-h-[100dvh] mx-auto flex justify-center items-center flex-col ">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
