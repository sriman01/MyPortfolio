import React from "react";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

const AchievementSection = () => {
  const achievements = [
    {
      title: "TCS CodeVita - Season 11",
      year: "2024",
      username: "sriman45",
      description: "Accomplished an impressive 141st position in the first round, followed by securing the 334th rank in the second round.",
      icon: <EmojiEventsIcon className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
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

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-[#1a1a2e]/50 w-full" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Achieve<span className="gradient-text">ments</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Milestones and accomplishments in my journey
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card-hover relative overflow-hidden glass-effect rounded-2xl p-8 border border-yellow-500/20"
          >
            {/* Decorative gradient background */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl`}></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-black flex-shrink-0`}
                >
                  {achievement.icon}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{achievement.title}</h3>
                    <span className="px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-bold border border-yellow-500/30">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">@{achievement.username}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {achievement.description}
              </p>

              {/* Achievement badge */}
              <div className="mt-6 pt-6 border-t border-yellow-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-500 text-sm font-semibold">Competitive Programming Achievement</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementSection;
