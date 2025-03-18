import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Chatbot = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [userData, setUserData] = useState({ name: '', email: '', requirement: '', contact: '' });
  const chatEndRef = useRef(null);

  const questions = [
    "👋 Hi! What's your name?",
    "📧 Great! What's your email address?",
    "💬 What can we assist you with today?",
    "📞 Lastly, please provide your contact number.",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const updatedConversation = [...conversation, { sender: 'user', text: input }];
    setConversation(updatedConversation);

    if (step === 0) setUserData((prev) => ({ ...prev, name: input }));
    else if (step === 1) setUserData((prev) => ({ ...prev, email: input }));
    else if (step === 2) setUserData((prev) => ({ ...prev, requirement: input }));
    else if (step === 3) {
      setUserData((prev) => ({ ...prev, contact: input }));

      await fetch('https://formspree.io/f/movevdpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          requirement: `${userData.requirement} | Contact Number: ${input}`,
        }),
      });

      setTimeout(() => {
        setConversation([
          ...updatedConversation,
          { sender: 'bot', text: `✅ Thanks, ${userData.name}! We’ll contact you soon at ${input}. 😊` },
        ]);
      }, 300);
    }

    if (step < questions.length - 1) {
      setTimeout(() => {
        setConversation([...updatedConversation, { sender: 'bot', text: questions[step + 1] }]);
        setStep(step + 1);
      }, 300);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden z-50 animate-fade-in">
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <h3 className="font-semibold text-lg">💬 Chat with Us!</h3>
        <button onClick={onClose} className="hover:text-red-500">
          <FaTimes size={18} />
        </button>
      </div>

      <div className="h-64 overflow-y-auto bg-gray-100 p-3 space-y-2">
        {conversation.length === 0 && <p className="text-gray-600 text-sm">{questions[0]}</p>}
        {conversation.map((msg, index) => (
          <div key={index} className={`text-${msg.sender === 'bot' ? 'left' : 'right'}`}>
            <p className={`inline-block p-2 rounded-lg text-sm ${
              msg.sender === 'bot' ? 'bg-blue-200 text-gray-800' : 'bg-green-200 text-gray-800'
            } shadow`}>
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="✍️ Type your answer..."
          className="w-full p-2 text-gray-800 focus:outline-none"
        />
        <button onClick={handleSend} className="p-2 bg-blue-600 text-white hover:bg-blue-700 transition">
          <FaPaperPlane />
        </button>
      </div>

      <div className="p-2 text-sm bg-gray-200 text-gray-600 flex items-center gap-2">
        <FaPhoneAlt /> <span>Contact Us: +91-7038729187</span>
      </div>
    </div>
  );
};

export default Chatbot;
