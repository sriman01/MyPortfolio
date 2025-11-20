import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    display: "none",
    opacity: 0,
    x: "100%",
  },
  visible: {
    display: "block",
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 flex items-center justify-between text-white py-4 px-6 md:px-12 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl md:text-3xl font-extrabold cursor-pointer gradient-text"
      >
        Sri<span className="text-yellow-500">man</span>
      </motion.div>
      <div className="hidden md:flex gap-8 text-base font-medium">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.a
          href="#skill"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Skills
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.a
          href="#experience"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        <motion.a
          href="#education"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Education
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
        {/* <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a> */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer hover:text-yellow-500 transition-colors duration-300 group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
      </div>

      <div className="md:hidden menu text-2xl cursor-pointer">
        {!openNav && <MenuRoundedIcon onClick={() => setOpenNav(true)} />}
      </div>
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            key="menu"
            className="absolute text-lg font-medium bg-[#1a1a2e] top-0 right-0 h-screen w-[280px] px-10 py-20 z-50 rounded-l-2xl border-l border-yellow-500/30"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute top-6 right-8 cursor-pointer text-yellow-500">
              <ClearRoundedIcon onClick={() => setOpenNav(false)} />
            </div>
            <div className="h-[80%] flex flex-col justify-around items-center mt-10">
              <a
                href="#hero"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Home
              </a>
              <a
                href="#skill"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Experience
              </a>
              <a
                href="#education"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Education
              </a>
              {/* <a
                href="#projects"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Projects
              </a> */}
              <a
                href="#contact"
                className="nav hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setOpenNav(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
