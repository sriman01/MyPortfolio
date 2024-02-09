import "./App.css";
import Achievements from "./components/achiements/Achievements";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import { motion } from "framer-motion";

const scrollVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const appearVariant = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.8,
    },
  },
}

const simpleVariant = {
  hidden: { opacity: 0, y: -75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  },
}

function App() {
  return (
    <>
      <div className="" style={{ fontFamily: "Poppins" }}>
        <div className="sticky top-0 min-w-full z-50">
          <Navbar />
        </div>
        <motion.section
          variants={simpleVariant}
          initial="hidden"
          animate={"visible"}
          id="hero"
        >
          <Hero />
          <motion.div className=" bg-[#FCFAFA] h-20 flex items-center justify-center font-bold text-lg  xl:text-2xl" variants={simpleVariant} initial="hidden" whileInView={"visible"}>
            <span className=" text-yellow-500">#OPEN</span>TOWORK
          </motion.div>
        </motion.section>

        <motion.section
          id="skill"
          variants={scrollVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <Skill />
        </motion.section>

        <motion.section id="education" variants={appearVariant} initial="hidden" whileInView={"visible"}>
          <Education />
        </motion.section>


        <motion.section
          id="projects"
          variants={simpleVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <Projects />
        </motion.section>

        <motion.section variants={appearVariant} initial="hidden" whileInView={"visible"}>
          <Achievements />
        </motion.section>

        <motion.section id="contact" variants={scrollVariant} initial="hidden" whileInView={"visible"}>
          <GetInTouch />
        </motion.section>

        <motion.section variants={simpleVariant} initial="hidden" whileInView={"visible"}>

        <Footer />
        </motion.section>
      </div>
    </>
  );
}

export default App;
