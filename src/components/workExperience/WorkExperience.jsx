import React from "react";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";

const WorkExperience = () => {
  const experiences = [
    {
      icon: <WorkIcon className="w-8 h-8" />,
      company: "Growth Jockey",
      position: "SDE-1",
      period: "Apr 2024 - Present",
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "Built a Comprehensive Platform Backend using Spring Boot to handle leads, events, journeys, and all dispositions with hierarchy-based authorization. Created a generic system adaptable for both multibrand sellers and single brand sellers, providing a scalable solution for business management.",
        "Created a Generic Admin Panel using Remix.js to handle e-commerce and D2C platforms, enabling easy management of products, variants, inventory, and orders with a scalable and reusable architecture.",
        "Collaborated with a team to develop a Centralized Admin Panel, for managing blogs and media across multiple sites, improving operational efficiency by 50%.",
        "Delivered 7+ client projects, enhancing code quality, enabling fast UI development and contributing to business growth as requirement.",
        "Created Athena, a platform to capture user activity data, including pre-site load interactions, for optimizing user experience and precise ad control.",
      ]
    }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-[#1a1a2e]/50 w-full" id="experience">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          My professional journey and contributions
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        onViewportEnter={() => setIsVisible(true)}
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            animate={isVisible ? "visible" : "hidden"}
            className="card-hover relative overflow-hidden glass-effect rounded-2xl p-8 border border-yellow-500/20"
          >
            {/* Decorative gradient background */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-10 rounded-full blur-3xl`}></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-black flex-shrink-0`}
                >
                  {exp.icon}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.company}</h3>
                    <span className="px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-bold border border-yellow-500/30">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <BusinessIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">{exp.position}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => {
                    const isHighlighted = achievement.toLowerCase().includes("generic admin panel") || 
                                         achievement.toLowerCase().includes("comprehensive platform");
                    return (
                      <li 
                        key={idx} 
                        className={`text-base leading-relaxed flex items-start gap-2 ${
                          isHighlighted 
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-500 p-4 rounded-r-lg" 
                            : "text-gray-300"
                        }`}
                      >
                        <span className={`mt-1.5 ${isHighlighted ? "text-yellow-400 text-xl" : "text-yellow-500"}`}>
                          {isHighlighted ? "⭐" : "•"}
                        </span>
                        <span className={isHighlighted ? "text-white font-semibold" : ""}>
                          {achievement}
                        </span>
                        {isHighlighted && (
                          <span className="ml-auto px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                            Featured
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Experience badge */}
              <div className="mt-6 pt-6 border-t border-yellow-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-500 text-sm font-semibold">Full Stack Development Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperience;

