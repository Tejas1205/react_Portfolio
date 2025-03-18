import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartLine,
  FaCloud,
  FaLock,
  FaCamera,
  FaPencilRuler,
} from 'react-icons/fa';

const services = [
  { icon: <FaCode size={30} />, title: 'Web Development' },
  { icon: <FaChartLine size={30} />, title: 'SEO Specialist' },
  { icon: <FaLock size={30} />, title: 'Security Expert' },
  { icon: <FaMobileAlt size={30} />, title: 'iOS App Development' },
  { icon: <FaPaintBrush size={30} />, title: 'UI/UX Design' },
  { icon: <FaCamera size={30} />, title: 'Photography' },
  { icon: <FaCloud size={30} />, title: 'Cloud Services' },
  { icon: <FaPencilRuler size={30} />, title: 'Graphic Designer' },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation happens every time the section is revisited
    threshold: 0.3, // Starts animation when 30% of the section is visible
  });

  return (
    <section id="about" ref={ref}>
      <div className="py-12 sm:py-16 bg-gradient-to-t from-from-[#0a0f1e] to-[#dbeafe] px-6 sm:px-12 flex items-center justify-center">
        <div
          className={`w-full max-w-6xl bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-200
            transition-all duration-[2000ms] ease-out transform ${
              inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">✨ What Do I Offer</h2>
          <p className="text-center text-gray-600 mb-12">
            Explore our wide range of services crafted to meet your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 rounded-2xl shadow-lg border border-gray-300 
                hover:border-transparent hover:shadow-purple-300 transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer relative overflow-hidden 
                hover:animate-float hover:ring-4 hover:ring-purple-400/50"
              >
                <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 rounded-full shadow-md 
                group-hover:scale-125 transition-transform duration-700 group-hover:rotate-12">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-all">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
