import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

const About = ({ selectedSkill, setSelectedSkill }) => {
  return (
    <section id="about" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-black">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I’m a curious developer building practical software with a strong interest in web experiences, machine learning, and data-driven products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <motion.article 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 transition-all relative overflow-hidden"
          >
            {/* Background glowing accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6A00]/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl mb-4 font-bold text-black flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full border border-[#FF6A00] flex items-center justify-center bg-[#FF6A00]/10 shadow-[0_0_8px_rgba(255,106,0,0.2)]">
                <svg className="w-4 h-4 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </span>
              What I do
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              I enjoy frontend design, software project development, technical documentation, system design, and research-backed problem solving. I also like blending AI and data science ideas into useful applications.
            </p>
          </motion.article>
          
          <motion.article 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 transition-all"
          >
            <h3 className="text-xl mb-2 font-bold text-black">Skills & Filtering</h3>
            <p className="text-gray-600 text-sm mb-6">Click a skill to filter my projects below.</p>
            <div className="flex flex-wrap gap-2.5" aria-label="Skills list">
              {SKILLS.map(skill => (
                <button 
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedSkill === skill 
                      ? 'border-[#FF6A00] text-[#FF6A00] bg-[#FF6A00]/10 shadow-[0_0_8px_rgba(255,106,0,0.2)]' 
                      : 'border-gray-200 text-gray-600 bg-gray-50 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 hover:bg-[#FF6A00]/5'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default About;

