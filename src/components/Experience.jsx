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
      className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white/60 backdrop-blur-lg border border-gray-300 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 p-6 overflow-hidden"
    >
      <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#e1bee7] via-[#ffccbc] to-[#ffe0b2] blur-3xl rounded-full left-6 top-6 opacity-20 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>

      <div className="relative z-10 mb-4 md:mb-0">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-4 border-[#b39ddb] group-hover:ring-4 group-hover:ring-[#9575cd] transition-all duration-500"
        >
          <img
            src={imgs}
            alt={data.title}
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
          />
        </motion.div>
      </div>

      <div className="flex-1 z-10 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5e35b1] to-[#7e57c2]">
          {data.title}
        </h3>
        <p className="text-gray-500 text-base md:text-lg">{data.client}</p>

        <div className="mt-3 text-gray-600 space-y-1 text-sm md:text-base">
          <p><strong>📍 Location:</strong> {data.location}</p>
          <p><strong>📅 Duration:</strong> {data.duration}</p>
        </div>

        <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-700 text-sm md:text-base">
          {data.description && data.description.map((exp, index) => (
            <li
              key={index}
              className="hover:text-[#26a69a] hover:translate-x-2 transition-all duration-300"
            >
              {exp}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#ffccbc] to-[#d1c4e9] opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl"></div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="experience" className="py-10 sm:py-16 bg-gradient-to-br from-[#dbeafe] to-[#dbeafe] px-4 sm:px-8 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-300" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7e57c2] to-[#5e35b1] tracking-wide"
        >
          🚀 My Work Experience
        </motion.h2>

        <div className={`space-y-6 sm:space-y-8 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {experienceData.map((data, index) => (
            <ExperienceCard key={data.id} data={data} delay={index * 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
