import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profilePic from "../assets/my1.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-100 px-4 sm:px-6 md:px-12 flex items-center justify-center"
    >
      <motion.div
        className="w-full max-w-6xl bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 1 }}
        >
          👤 About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">

          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-purple-300 transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={profilePic} alt="Tejas Rakhunde" className="w-full h-full object-cover" />
          </motion.div>

          {/* About Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
              Hi, I'm <span className="text-blue-500 font-semibold">Tejas Rakhunde</span>, a passionate developer with a background in Electronics and Telecommunication Engineering. I'm dedicated to full-stack development, focusing on Python and React.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
              I am also the founder of a startup focused on smart vending machine solutions. My mission is to revolutionize automated retail by integrating advanced technology, providing convenient and efficient self-service experiences for modern consumers.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              I value continuous learning, creativity, and problem-solving. Whether it's coding, marketing, or innovating in the tea industry, I strive to excel in every field.
            </p>
          </motion.div>
        </div>

       
        <motion.div
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.div
            className="p-4 sm:p-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl shadow-lg border border-gray-300 hover:border-transparent hover:shadow-purple-300 transition-transform duration-500 hover:scale-105 hover:ring-4 hover:ring-purple-400/50"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">🚀 My Work</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Actively developing a unique social platform that merges features of Facebook, Instagram, and YouTube. Designed for speed and ease of use, it helps users connect, share, and grow.
            </p>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl shadow-lg border border-gray-300 hover:border-transparent hover:shadow-purple-300 transition-transform duration-500 hover:scale-105 hover:ring-4 hover:ring-purple-400/50"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">🤖 Smart Vending Machines</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Offering innovative vending solutions with a wide range of products, from snacks to beverages. Our smart machines ensure cashless payments, real-time inventory tracking, and a seamless customer experience.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
