import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#FF6A00] blur-[100px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#FF8C00] blur-[100px] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4 text-black">Get in Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Feel free to connect for collaborations, projects, or conversations around software, AI, and modern web experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <motion.a 
              whileHover={{ y: -5 }}
              href="mailto:ruthram667@gmail.com"
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#FF6A00]/50 hover:bg-[#FF6A00]/5 transition-all flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(255,106,0,0.3)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Email</h3>
              <p className="text-[#FF6A00] font-medium">ruthram667@gmail.com</p>
            </motion.a>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#FF6A00]/50 hover:bg-[#FF6A00]/5 transition-all flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(255,106,0,0.3)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Phone & Social</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+919363931903" className="text-[#FF6A00] hover:text-black transition-colors font-medium">+91 93639 31903</a>
                <a href="https://www.linkedin.com/in/ruthra-moorthy-51a0383a7" target="_blank" rel="noreferrer" className="text-[#FF6A00] hover:text-black transition-colors font-medium">LinkedIn</a>
                <a href="https://github.com/ruthram667-tech" target="_blank" rel="noreferrer" className="text-[#FF6A00] hover:text-black transition-colors font-medium">GitHub</a>
                <a href="https://instagram.com/mr_ruth_07" target="_blank" rel="noreferrer" className="text-[#FF6A00] hover:text-black transition-colors font-medium">Instagram</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-500 py-12 text-sm font-medium">
        Built with React, Tailwind, and Framer Motion.
      </p>
    </section>
  );
};

export default Contact;
