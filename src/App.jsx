import "./App.css";
import Achievements from "./components/achiements/Achievements";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      <Navbar />
      
      {/* Open to Work Banner */}
      {/* <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/20 to-yellow-500/10 border-y border-yellow-500/30 py-3 md:py-4 sticky top-[72px] md:top-20 z-40 backdrop-blur-sm glass-effect">
        <div className="text-center">
          <span className="text-yellow-500 font-bold text-base md:text-lg lg:text-xl">
            #
          </span>
          <span className="block text-gray-400 text-xs md:text-sm mt-1">Available for new opportunities</span>
        </div>
      </div> */}

      <section id="hero">
        <Hero />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="education">
        <Education />
      </section>

      {/* <section id="projects">
        <Projects />
      </section> */}

      <section id="achievements">
        <Achievements />
      </section>

      <section id="contact">
        <GetInTouch />
      </section>

      <Footer />
    </div>
  );
}

export default App;
