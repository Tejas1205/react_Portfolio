import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { label: "HTML", percentage: 95, color: "#ff6b6b" },
  { label: "CSS", percentage: 85, color: "#4dabf7" },
  { label: "JavaScript", percentage: 80, color: "#ffca28" },
  { label: "React", percentage: 70, color: "#61dafb" },
  { label: "Python", percentage: 80, color: "#ffd54f" },
  { label: "SQL", percentage: 70, color: "#6c5ce7" },
  { label: "Node.js", percentage: 45, color: "#ff9f43" },
  { label: "Tailwind CSS", percentage: 50, color: "#00cec9" },
];

const Skill = () => {
  const [progressValues, setProgressValues] = useState(skillsData.map(() => 0));
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setProgressValues(skillsData.map((skill) => skill.percentage));
    } else {
      setProgressValues(skillsData.map(() => 0));
    }
  }, [inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-100 px-4 sm:px-8 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-200">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800"
        >
          🚀 My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-gray-200 shadow-lg rounded-xl flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-purple-300/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4">
                <CircularProgressbar
                  value={progressValues[index]}
                  text={`${progressValues[index]}%`}
                  styles={buildStyles({
                    textColor: "#2d3436",
                    pathColor: skill.color,
                    trailColor: "#dfe6e9",
                    textSize: "16px",
                    pathTransitionDuration: 1.5,
                  })}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{skill.label}</h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center">Proficiency in {skill.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skill;
