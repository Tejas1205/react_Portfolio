import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";

const Navbar = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50px 0px 0px 0px",
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* ✅ Ice-Effect Navbar */}
      <nav className="fixed w-full z-50 bg- bg-[rgba(11,26,51,0.4)] backdrop-blur-lg shadow-shadow-[0_4px_12px_rgba(0,0,0,0.4)] border-b border-white/30 ">
        <div className="flex flex-wrap justify-between items-center py-3 px-4 md:px-6">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
  TejasCrafts
</div>


          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "project", label: "Project" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 text-sm md:text-base rounded-md transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-blue-400 text-white shadow-md scale-105"
                    : "text-gray-700 hover:bg-blue-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Chatbot Button */}
          <button
  type="button"
  onClick={() => setShowChatbot(true)}
  className="navb"
>
  💬 Let's Talk
</button>



        </div>
      </nav>

      {/* Chatbot Popup */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  );
};

export default Navbar;
