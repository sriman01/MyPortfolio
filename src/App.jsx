import "./App.css";
import Achievements from "./components/achiements/Achievements";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
function App() {
  return (
    <>
      <div className="" style={{ fontFamily: "Poppins" }}>
        <div className="sticky top-0 min-w-full z-50">
          <Navbar />
        </div>
        <section id="hero">
          <Hero />
        </section>
        <div className=" bg-[#FCFAFA] h-20 flex items-center justify-center font-bold text-lg  xl:text-2xl"><span className=" text-yellow-500">#OPEN</span>TOWORK</div>
         <section id="skill">
          <Skill />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section>
          <Achievements />
        </section>
        <section id="contact">
          <GetInTouch />
        </section>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
