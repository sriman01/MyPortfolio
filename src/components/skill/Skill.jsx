import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Languages
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", category: "Language", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Language", color: "from-yellow-400 to-yellow-600" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Language", color: "from-green-500 to-green-700" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Language", color: "from-blue-400 to-blue-600" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png", category: "Language", color: "from-orange-500 to-orange-700" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", category: "Language", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Language", color: "from-green-500 to-green-700" },
  
  // Framework/Library
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Framework/Library", color: "from-gray-700 to-black" },
  { name: "Remix.js", icon: "https://cdn.simpleicons.org/remix/000000", category: "Framework/Library", color: "from-blue-800 to-purple-800" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Framework/Library", color: "from-cyan-400 to-cyan-600" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Framework/Library", color: "from-cyan-400 to-cyan-600" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000", category: "Framework/Library", color: "from-gray-500 to-gray-700" },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring/6DB33F", category: "Framework/Library", color: "from-green-600 to-green-800" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", category: "Framework/Library", color: "from-teal-400 to-teal-600" },
  { name: "CSS", icon: "https://imgs.search.brave.com/WNztbPjzoOpVpQ10NFAiWmf5I6GtJ4ahDJd1ZebkbzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni85OTE0Lzk5MTQ0/ODUucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs", category: "Framework/Library", color: "from-blue-400 to-blue-600" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "Database", color: "from-green-400 to-green-600" },
  { name: "Postgres", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png", category: "Database", color: "from-green-400 to-green-600" },
  
  // Tools
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "Tools", color: "from-blue-500 to-blue-700" },
  { name: "AWS", icon: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png", category: "Tools", color: "from-orange-500 to-orange-700" },
  { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639", category: "Tools", color: "from-green-600 to-green-800" },
  { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github/181717", category: "Tools", color: "from-purple-500 to-purple-700" },
];

const categories = ["All", "Language", "Framework/Library", "Tools" , "Database"];

const SkillCard = ({ skill, variants, idx }) => {
  const [imgError, setImgError] = React.useState(false);
  
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05, y: -10 }}
      className="card-hover glass-effect rounded-2xl p-6 border border-yellow-500/20 flex flex-col items-center justify-center gap-4"
    >
      <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center p-3`}>
        {!imgError ? (
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xl font-bold`}>
            {skill.name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-white text-center">{skill.name}</h3>
    </motion.div>
  );
};

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
          <SkillCard key={idx} skill={skill} variants={itemVariants} idx={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;

