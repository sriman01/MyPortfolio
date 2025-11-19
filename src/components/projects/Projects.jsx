import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      imageUrl: "/project-3.png",
      projectName: "Realtime Weather App",
      description: "A real-time weather application with beautiful UI and accurate weather data",
      tech: ["React", "API", "Tailwind CSS"],
      githubLink: "https://github.com/sriman01/weatherApp",
      deployLink: "https://sriman-weatherapp.netlify.app/"
    },
    {
      imageUrl: "/project-1.png",
      projectName: "SHOP|MART - E-Commerce",
      description: "Full-featured e-commerce platform with shopping cart and checkout",
      tech: ["React", "Redux", "API"],
      githubLink: "https://github.com/sriman01/shop-mart",
      deployLink: "https://exquisite-rolypoly-8ab6bc.netlify.app/"
    },
    {
      imageUrl: "/project-2.png",
      projectName: "Pizza Site UI",
      description: "Modern and responsive pizza ordering website with interactive design",
      tech: ["React", "CSS", "JavaScript"],
      githubLink: "https://github.com/sriman01/Pizza-site",
      deployLink: "https://sriman-pizza-site.netlify.app/"
    },
    {
      imageUrl: "/project-4.png",
      projectName: "Todo List App",
      description: "Productive task management application with local storage",
      tech: ["React", "LocalStorage", "CSS"],
      githubLink: "https://github.com/sriman01/todo",
      deployLink: "https://todo-sriman.netlify.app/"
    },
    {
      imageUrl: "/project-5.png",
      projectName: "Simple E-Commerce Site",
      description: "Clean and simple e-commerce solution with product browsing",
      tech: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/sriman01/KHARIDO",
      deployLink: "https://reliable-smakager-72e39d.netlify.app/"
    },
    {
      imageUrl: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      projectName: "Text to Speech Project",
      description: "Web application that converts text to natural-sounding speech",
      tech: ["JavaScript", "Web API", "HTML5"],
      githubLink: "https://github.com/sriman01/TS-Project",
      deployLink: "https://github.com/sriman01/TS-Project"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-[#1a1a2e]/50" id="projects">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A collection of projects showcasing my skills and creativity
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="card-hover group relative overflow-hidden rounded-2xl glass-effect border border-yellow-500/20"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                alt={project.projectName}
                src={project.imageUrl}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap mb-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-semibold rounded-full border border-yellow-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                {project.projectName}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 glass-effect border border-yellow-500/30 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-colors"
                >
                  <GitHubIcon className="w-5 h-5" />
                  <span className="text-sm font-semibold">Code</span>
                </motion.a>
                <motion.a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-500 transition-all"
                >
                  <LaunchIcon className="w-5 h-5" />
                  <span className="text-sm">Live</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
