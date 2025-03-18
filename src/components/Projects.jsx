import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import p1 from "../assets/p1.png";
import p2 from "../assets/tea.png";
import p3 from "../assets/app.png";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
    image: p1,
  },
  {
    title: 'E-commerce Platform',
    description: 'An e-commerce web application for organic tea products with secure payment integration.',
    image: p2,
  },
  {
    title: 'Social Media App',
    description: 'A startup idea combining features of Facebook, Instagram, and YouTube for social interaction and content sharing.',
    image: p3,
  },
];

const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section id="project" ref={ref} className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 ">
      <motion.div animate={controls} className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-5">🚀 My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group bg-white/10 backdrop-blur-lg rounded-3xl p-5 overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <button
                  onClick={() => alert('Project is under working!')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                >
                  View Project <FaArrowRight />
                </button>
              </div>

              {/* Graphics Shape */}
              <div className="absolute -top-5 -right-5 bg-purple-500 h-20 w-20 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
