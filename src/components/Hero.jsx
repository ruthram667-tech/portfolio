import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Send, Instagram, Code, MessageCircle } from 'lucide-react';
import Particles from './Particles';

const typingWords = ["Web Development", "UI/UX Design", "Machine Learning", "IoT Solutions"];

const Hero = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-start overflow-hidden bg-white" id="top">
      {/* Background Particles Layer */}
      <Particles />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex flex-col items-start"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-2">
            Hi There,
          </h2>
          <h1 className="text-6xl md:text-7xl font-black text-black mb-4">
            I'm Ruthramoorthy <span className="text-[#FF6A00]">S B</span>
          </h1>
          
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-8 flex items-center h-10">
            I Am Into <span className="text-[#D90000] ml-2">{text}</span><span className="text-[#D90000] animate-pulse">|</span>
          </h3>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about" 
            className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-4 rounded-full font-bold text-base tracking-wide hover:bg-gray-800 transition-colors mb-10 shadow-lg"
          >
            About Me <span>↓</span>
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { Icon: Linkedin, href: "#", name: "Linkedin" },
              { Icon: Github, href: "https://github.com/ruthram667-tech", name: "Github" },
              { Icon: Twitter, href: "#", name: "Twitter" },
              { Icon: MessageCircle, href: "https://wa.me/919363931903", name: "WhatsApp" },
              { Icon: Instagram, href: "https://instagram.com/mr_ruth_07", name: "Instagram" },
              { Icon: Code, href: "#", name: "Dev" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                title={social.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#ff8c00] hover:text-white transition-colors shadow-md border-2 border-black hover:border-[#ff8c00]"
              >
                <social.Icon size={20} strokeWidth={2.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

