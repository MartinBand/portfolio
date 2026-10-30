import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Projects from '../sections/Projects.jsx'
import Experience from '../sections/Experience.jsx'
import Contact from '../sections/Contact.jsx'
import { experience } from '../data/profile.js'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {experience.length > 0 && <Experience />}
      <Contact />
    </>
  )
}
