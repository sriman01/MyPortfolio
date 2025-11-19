import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Programming Languages
  { name: "C++", level: 60, category: "Language", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", level: 65, category: "Language", color: "from-yellow-400 to-yellow-600" },
  { name: "Python", level: 50, category: "Language", color: "from-green-500 to-green-700" },
  { name: "TypeScript", level: 70, category: "Language", color: "from-blue-400 to-blue-600" },
  
  // Frontend
  { name: "React", level: 80, category: "Frontend", color: "from-cyan-400 to-cyan-600" },
  { name: "React Native", level: 30, category: "Frontend", color: "from-cyan-400 to-cyan-600" },
  // { name: "Redux Toolkit", level: , category: "Frontend", color: "from-purple-500 to-purple-700" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", color: "from-teal-400 to-teal-600" },
  { name: "CSS", level: 80, category: "Frontend", color: "from-blue-400 to-blue-600" },
  
  // Backend
  { name: "Node.js", level: 60, category: "Backend", color: "from-green-500 to-green-700" },
  { name: "Express.js", level: 75, category: "Backend", color: "from-gray-500 to-gray-700" },
  { name: "Spring Boot", level: 70, category: "Backend", color: "from-green-600 to-green-800" },
  
  // Databases
  { name: "MongoDB", level: 60, category: "Database", color: "from-green-400 to-green-600" },
  { name: "SQL", level: 60, category: "Database", color: "from-blue-500 to-blue-700" },
  
  // DevOps & Cloud
  { name: "Docker", level: 80, category: "DevOps", color: "from-blue-500 to-blue-700" },
  { name: "AWS", level: 50, category: "DevOps", color: "from-orange-500 to-orange-700" },
  { name: "Nginx", level: 60, category: "DevOps", color: "from-green-600 to-green-800" },
  { name: "Git & GitHub", level: 80, category: "DevOps", color: "from-purple-500 to-purple-700" },
];

const categories = ["All", "Language", "Frontend", "Backend", "Database", "DevOps"];

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24" id="skill">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "glass-effect border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="card-hover glass-effect rounded-2xl p-6 border border-yellow-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <span className="text-sm text-yellow-500 font-semibold">{skill.level}%</span>
            </div>
            
            <div className="mb-2">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{skill.category}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                className="text-yellow-500"
              >
                {skill.level >= 85 ? "Expert" : skill.level >= 70 ? "Advanced" : "Intermediate"}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
