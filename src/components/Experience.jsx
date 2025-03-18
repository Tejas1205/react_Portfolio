import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import experienceData from "./Data/experience.json";
import imgs from "../assets/aa.webp";

const ExperienceCard = ({ data, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay }}
      className="group relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-md border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 sm:p-6 overflow-hidden w-full"
    >
      <div className="relative z-10 flex justify-center sm:justify-start">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md border-2 border-[#b39ddb]"
        >
          <img
            src={imgs}
            alt={data.title}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-[#5e35b1]">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{data.client}</p>
        <div className="mt-2 text-gray-600 text-xs sm:text-sm">
          <p><strong>📍 Location:</strong> {data.location}</p>
          <p><strong>📅 Duration:</strong> {data.duration}</p>
        </div>
        <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700 text-xs sm:text-sm">
          {data.description && data.description.map((exp, index) => (
            <li key={index} className="hover:text-[#26a69a] hover:translate-x-1 transition-all duration-300">
              {exp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="experience" className="py-8 sm:py-12 bg-gradient-to-br from-[#dbeafe] to-[#dbeafe] px-4 sm:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-5 sm:p-8 border border-gray-200" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#5e35b1]"
        >
          🚀 My Work Experience
        </motion.h2>

        <div className={`space-y-4 sm:space-y-6 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {experienceData.map((data, index) => (
            <ExperienceCard key={data.id} data={data} delay={index * 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;