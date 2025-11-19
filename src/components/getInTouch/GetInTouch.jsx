import React from "react";
import "./getInTouch.css";
import FormSection from "./formSection/FormSection";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden glass-effect border border-yellow-500/20 p-4">
            <img
              className="w-full h-auto rounded-xl object-cover"
              src="/image2.png"
              alt="Contact illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Contact Info Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.a
              href="mailto:srimankumar45@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect border border-yellow-500/20 rounded-xl p-4 text-center hover:bg-yellow-500/10 transition-colors"
            >
              <div className="text-yellow-500 text-2xl mb-2">📧</div>
              <p className="text-white font-semibold text-sm">Email</p>
              <p className="text-gray-400 text-xs mt-1">srimankumar45@gmail.com</p>
            </motion.a>
            
            <motion.a
              href="tel:+919905497178"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect border border-yellow-500/20 rounded-xl p-4 text-center hover:bg-yellow-500/10 transition-colors"
            >
              <div className="text-yellow-500 text-2xl mb-2">📱</div>
              <p className="text-white font-semibold text-sm">Phone</p>
              <p className="text-gray-400 text-xs mt-1">+91 9905497178</p>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <FormSection />
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
