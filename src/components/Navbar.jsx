import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";

const Navbar = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

      <nav className="fixed w-full z-50 bg-[rgba(11,26,51,0.4)] backdrop-blur-lg shadow-lg border-b border-white/30 py-2 md:py-3">
        <div className="flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            TejasCrafts
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[rgba(11,26,51,0.9)] md:bg-transparent md:backdrop-blur-none backdrop-blur-lg p-2 md:p-0 space-y-3 md:space-y-0 md:space-x-3 text-center md:text-left`}
          >
            {["home", "about", "experience", "skills", "project", "contact"].map(
              (id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`px-2 py-1 text-lg md:text-lg rounded-md transition-all duration-300 block md:inline ${
                    activeSection === id
                      ? "bg-blue-400 text-white shadow-md scale-105"
                      : "text-gray-300 hover:bg-blue-400 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowChatbot(true)}
            className="hidden md:block px-3 py-1 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 text-sm md:text-base"
          >
            💬 Let's Talk
          </button>
        </div>
      </nav>


      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  );
};

export default Navbar;
