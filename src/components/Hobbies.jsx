import React, { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaFootballBall, FaMusic, FaPaintBrush, FaCamera, FaCode, FaBook, FaSwimmer, FaGamepad } from 'react-icons/fa';

const hobbies = [
  { name: 'Football', icon: <FaFootballBall /> },
  { name: 'Music', icon: <FaMusic /> },
  { name: 'Graphic Design', icon: <FaPaintBrush /> },
  { name: 'Photography', icon: <FaCamera /> },
  { name: 'Coding', icon: <FaCode /> },
  { name: 'Reading', icon: <FaBook /> },
  { name: 'Swimming', icon: <FaSwimmer /> },
  { name: 'Gaming', icon: <FaGamepad /> },
];

const Hobbies = () => {
  const [activeHobby, setActiveHobby] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="hobbies" ref={ref}>
      <div className="py-12 sm:py-16 bg-gradient-to-t from-[#dbeafe] to-[#dbeafe] px-6 sm:px-12 flex items-center justify-center">
        <div
          className={`w-full max-w-6xl bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-200
          transition-all duration-[1500ms] ease-in-out
          ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 animate-fade-in-down">
            🎯 Things I Love To Do
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 animate-fade-in">
            Discover my favorite hobbies that inspire creativity and fun!
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <button
                key={index}
                onClick={() => setActiveHobby(hobby.name)}
                className={`relative group p-6 sm:p-6 w-full rounded-xl shadow-lg transition-all duration-[1500ms] ease-in-out
                  ${
                    activeHobby === hobby.name
                      ? 'bg-gradient-to-tr from-blue-500 to-purple-600 text-white scale-105 shadow-2xl'
                      : 'bg-white/30 border border-gray-300 text-gray-800 hover:bg-gradient-to-tr from-purple-200 to-blue-200 hover:scale-105'
                  }
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="text-2xl sm:text-3xl mb-2 transition-transform group-hover:rotate-12 animate-pulse">
                  {hobby.icon}
                </div>
                <p className="font-semibold text-sm sm:text-base">{hobby.name}</p>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-500 group-hover:shadow-xl"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;