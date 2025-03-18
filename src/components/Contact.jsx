import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
        } else {
          entry.target.classList.remove("animate-fade-up");
          entry.target.classList.add("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/movevdpn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("✅ Message Sent Successfully!");
        setIsSubmitted(true);
        e.target.reset();
      } else {
        alert("❌ Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("⚠️ An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#0b1a33] px-4 py-12 sm:px-8 ">
      <div className="absolute inset-0 bg-gradient-to-br from-[#162447] via-[#1f4068] to-[#1b1b2f] opacity-30 blur-3xl"></div>

      <div className="container mx-auto relative z-10 flex flex-col gap-10 items-center">
      <h2 className="text-5xl font-extrabold text-center text-white mt-5">
  📬 Get in Touch
</h2>

        <p className="text-gray-400 text-lg italic text-center max-w-xl mb-6">
          We'd love to hear from you! Whether you have a question, want to collaborate, or just say hi 👋, reach out to us!
        </p>

        <div className="w-full max-w-4xl bg-[#162447]/80 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-700">

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"

          >
            <input
              type="text"
              name="name"
              placeholder="👤 Your Name"
              className="w-full p-4 rounded-lg bg-[#1f4068] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="📧 Your Email"
              className="w-full p-4 rounded-lg bg-[#1f4068] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="💬 Your Message"
              rows="4"
              className="col-span-2 w-full p-4 rounded-lg bg-[#1f4068] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="col-span-2 w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-transform hover:scale-105 animate-pulse"
            >
              🚀 Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.facebook.com/tejas.rakhunde" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:scale-125 transition-transform">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/tejas_rakhunde_2001" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:scale-125 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tejas-rakhunde-863962214" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 hover:scale-125 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Tejas1205" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-500 hover:scale-125 transition-transform">
              <FaGithub />
            </a>
            <a href="https://wa.me/+917038729187" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-500 hover:scale-125 transition-transform">
              <FaWhatsapp />
            </a>
            <a href="https://x.com/RakhundeTejas" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:scale-125 transition-transform">
              <FaTwitter />
            </a>
          </div>
        </div>

        <footer className="text-gray-500 text-center mt-10">
          &copy; 2025 Tejas Rakhunde. Feel free to contact us anytime! 🌟
        </footer>
      </div>
    </section>
  );
};

export default Contact;
