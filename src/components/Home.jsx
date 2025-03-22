import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import imgd from "../assets/mainpageimg.jpg";
import resume from "./Data/pdf/Tejas Rakhunde Resume (1) (1).pdf";
import supabase from "../supabase"; // ✅ Import Supabase client

export const Home = () => {
  const [views, setViews] = useState(0); // ✅ State for page views

  const controls = useAnimation();
  const homeRef = useRef(null);
  const isInView = useInView(homeRef, { once: false, amount: 0.3 });

  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Initialized", engine);
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);


  useEffect(() => {
    const fetchAndUpdateViews = async () => {
      const { data, error } = await supabase
        .from("page_views")
        .select("views")
        .eq("id", 1)
        .single();

      if (error) {
        console.error("Error fetching views:", error);
        return;
      }

      const currentViews = data?.views || 0;
      setViews(currentViews);

    
      const { error: updateError } = await supabase
        .from("page_views")
        .update({ views: currentViews + 1 })
        .eq("id", 1);

      if (updateError) {
        console.error("Error updating views:", updateError);
      } else {
        setViews(currentViews + 1);
      }
    };

    fetchAndUpdateViews();
  }, []);

  
  return (

    
    <section
    id="home"
    ref={homeRef}
    className="relative px-4 sm:px-6 lg:px-12 xl:px-24 py-20 overflow-hidden w-full home-container"
  >
   <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: true },
    background: { color: "transparent" },
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },
      color: { value: ["#ff7b00", "#ff007b", "#00ffee", "#00ff7b", "#ffea00"] }, // 🎨 Vibrant Colors
      shape: { type: "circle" },
      opacity: { 
        value: 0.8, 
        animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false }
      }, 
      size: { 
        value: 3.5, 
        random: true,
        animation: { enable: true, speed: 4, minimumValue: 1, sync: false }
      },
      move: { 
        enable: true, 
        speed: 2,  // 🔥 More Dynamic Movement
        outModes: "bounce"
      },
      links: {
        enable: true,
        distance: 140, // 🔗 Improved connectivity
        color: "#ffffff",
        opacity: 0.5,
        width: 1.2,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, // 🖱️ Stronger Hover Effect
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.8 } },
        repulse: { distance: 150, duration: 0.5 },
        push: { quantity: 6 },
      },
    },
    detectRetina: true,
  }}
/>

   
    <div className="absolute inset-0 -z-10 w-full h-full">
      <img src={imgd} alt="Background" className="w-full h-full object-cover" />
    </div>
  
 
    <motion.div
      className="relative z-10 max-w-5xl mx-auto p-5 md:p-12 lg:p-16 border-4 border-white/60 rounded-3xl backdrop-blur-md text-center mt-5 home-content"
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
  
   
      <p className="text-white text-lg mt-2">👀 Views: {views}</p>
 
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 buttons">
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
<div className="flex flex-col md:flex-row gap-6 mt-12">
  {/* 💡 Vision Card */}
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
