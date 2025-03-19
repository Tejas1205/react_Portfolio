import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Eye } from "lucide-react";
import imgd from "../assets/mainpageimg.jpg";
import resume from "./Data/pdf/Tejas Rakhunde Resume (1) (1).pdf";

export const Home = () => {
  const controls = useAnimation();
  const homeRef = useRef(null);
  const isInView = useInView(homeRef, { once: false, amount: 0.3 });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // View Count with Animation
  const [views, setViews] = useState(0);
  const [displayViews, setDisplayViews] = useState(0);

  useEffect(() => {
    const storedViews = parseInt(localStorage.getItem("pageViews"), 10) || 0;
    
    if (!sessionStorage.getItem("viewed")) {
      const newViews = storedViews + 1; // Increase by only 1
      localStorage.setItem("pageViews", newViews);
      sessionStorage.setItem("viewed", "true"); // Prevent multiple updates in the same session
      setViews(newViews);

      let start = displayViews;
      let end = newViews;
      let duration = 2000;
      let stepTime = 30;
      let steps = duration / stepTime;
      let increment = (end - start) / steps;

      let current = start;
      let interval = setInterval(() => {
        current += increment;
        setDisplayViews(Math.round(current));
        if (current >= end) {
          clearInterval(interval);
          setDisplayViews(end);
        }
      }, stepTime);

      return () => clearInterval(interval);
    } else {
      setViews(storedViews);
      setDisplayViews(storedViews);
    }
  }, []);

  return (
    <section id="home" ref={homeRef} className="relative px-4 sm:px-6 lg:px-12 xl:px-24 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={imgd} alt="Background" className="w-full h-full object-cover" />
      </div>

      <Particles
        id="tsparticles-bg"
        init={particlesInit}
        className="absolute inset-0 w-full h-full -z-10"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 100 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 140, links: { opacity: 0.6 } } },
          },
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-5 md:p-12 lg:p-16 border-4 border-white/60 rounded-3xl backdrop-blur-md text-center mt-5"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">Welcome</h1>
        <p className="text-white/90 my-4 text-lg md:text-xl">
          "Bringing ideas to life through innovative designs and cutting-edge development."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href={resume}
            download
            className="px-5 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 text-lg font-semibold"
          >
            📄 Download Resume
          </a>
          <button
            className="px-5 py-3 bg-white/10 border text-white rounded-full shadow-md hover:bg-blue-500 text-lg font-semibold"
            onClick={() => {
              window.location.href = "mailto:rakhundetejas8@gmail.com?subject=🚀 Excited to Connect – Let's Work Together!";
            }}
          >
            💼 Hire Me
          </button>
        </div>

        {/* Eye Icon with Animated View Count */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-4 text-white text-lg font-semibold"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <Eye size={24} />
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            {displayViews} Views
          </motion.span>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <motion.div
            className="p-6 md:p-8 lg:p-10 border-2 border-white/25 rounded-3xl backdrop-blur-lg bg-white/10 w-full md:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">💡 My Vision</h2>
            <p className="text-white/90 text-lg mt-2">
              Crafting innovative solutions that merge design with technology, ensuring unique and impactful user experiences.
            </p>
          </motion.div>

          <motion.div
            className="p-6 md:p-8 lg:p-10 border-2 border-white/25 rounded-3xl backdrop-blur-lg bg-white/10 w-full md:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">🚀 My Mission</h2>
            <p className="text-white/90 text-lg mt-2">
              Delivering high-quality development projects with creative designs that push boundaries and exceed expectations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
