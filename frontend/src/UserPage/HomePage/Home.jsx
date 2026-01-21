import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Home(){
    return(
        <>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        </>
    )
}