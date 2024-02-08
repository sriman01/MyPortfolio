import React from 'react';
import { motion } from 'framer-motion';

const aboutData = {
    name: 'Clark Thompson',
    dob: 'January 01, 1987',
    address: 'San Francisco, CA 97987, USA',
    email: 'clarkthomp@gmail.com',
    phone: '+1-2234-5678-9-0',
    projectsCompleted: '120',
  };

const AboutMe = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{aboutData.name}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Date of Birth:</span>
            <span>{aboutData.dob}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Address:</span>
            <span>{aboutData.address}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{aboutData.email}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            <span>{aboutData.phone}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Projects Completed:</span>
            <span>{aboutData.projectsCompleted}</span>
          </li>
        </ul>
      </motion.div>
    );
  };
  
  export default AboutMe;