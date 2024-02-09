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

  return (
    <div className=" flex items-center justify-between text-white bg-slate-600 py-3 px-[2rem] width-[fit] overflow-x-hidden z-40">
      <div className="text-2xl font-extrabold cursor-pointer">
        Sri<span className="text-yellow-500">man</span>
      </div>
      <div className="hidden md:flex gap-[1rem] text-lg font-medium">
        <a href="#hero" className="nav hover:text-yellow-500 cursor-pointer">
          Home
        </a>
        <a href="#skill" className="nav hover:text-yellow-500 cursor-pointer">
          Skill
        </a>
        <a href="#education" className="nav hover:text-yellow-500 cursor-pointer">
          Education
        </a>
        <a href="#projects" className="nav hover:text-yellow-500 cursor-pointer">
          Projects
        </a>
        <a href="#contact" className="nav hover:text-yellow-500 cursor-pointer">
          Contact
        </a>
      </div>

      <div className="md:hidden menu text-2xl cursor-pointer">
        {!openNav && <MenuRoundedIcon onClick={() => setOpenNav(true)} />}
      </div>
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            key="menu"
            className={`absolute text-lg font-medium bg-slate-900 top-0 right-0 h-[80vh] w-[220px] px-10 py-20 z-50 rounded-l-lg`}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute top-6 right-8 cursor-pointer">
              <ClearRoundedIcon onClick={() => setOpenNav(false)} />
            </div>
            <div className=" h-[80%] flex flex-col justify-around items-center ">
              <a href="#hero" className="nav hover:text-yellow-500 cursor-pointer" onClick={() => setOpenNav(false)} >
                Home
              </a>
              <a href="#skill" className="nav hover:text-yellow-500 cursor-pointer" onClick={() => setOpenNav(false)} >
                Skill
              </a>
              <a href="#education" className="nav hover:text-yellow-500 cursor-pointer" onClick={() => setOpenNav(false)} >
                Education
              </a>
              <a href="#projects" className="nav hover:text-yellow-500 cursor-pointer" onClick={() => setOpenNav(false)} >
                Projects
              </a>
              <a href="#contact" className="nav hover:text-yellow-500 cursor-pointer" onClick={() => setOpenNav(false)} >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
