import "./App.css";
import Achievements from "./components/achiements/Achievements";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import Skill2 from "./components/skill2/Skill2";
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
         <section id="skill">
          <Skill2 />
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
