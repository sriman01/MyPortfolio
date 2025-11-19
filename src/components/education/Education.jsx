import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Education = () => {
  const education = [
    {
      icon: <AccountBalanceIcon className="w-8 h-8" />,
      degree: "B.Tech (Hons.)",
      institution: "IIIT RANCHI",
      field: "Computer Science and Engineering",
      grade: "CGPA: 8.55",
      period: "2020 - 2024",
      description: "Specialized in Full Stack Development, Data Structures, Algorithms, and Software Engineering"
    },
    {
      icon: <SchoolIcon className="w-8 h-8" />,
      degree: "Intermediate",
      institution: "IGSI College, Mandu",
      field: "PCM with Computer Science",
      grade: "Percentage: 81.6%",
      period: "2018 - 2020",
      description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#1a1a2e]/50 to-transparent" id="education">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Edu<span className="gradient-text">cation</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          My academic journey and qualifications
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-yellow-500 transform md:-translate-x-1/2"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-[#0a0a0a] transform md:-translate-x-1/2 z-10"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
              >
                <div className="glass-effect rounded-2xl p-6 border border-yellow-500/20 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-black flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                      <p className="text-xl font-semibold text-yellow-500 mb-2">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300 font-medium">{edu.field}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold border border-yellow-500/30">
                        {edu.grade}
                      </span>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
