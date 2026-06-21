import React from 'react';
import { EXPERIENCE } from '../data/constants';

const Experience = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-black">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused on building practical, polished, and data-aware products with an eye for usability and technical depth.
          </p>
        </div>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200/0 before:via-gray-300 before:to-gray-200/0">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] shadow-[0_0_15px_rgba(255,106,0,0.3)] absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0 z-10 text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#FF6A00] hover:shadow-[0_4px_20px_rgba(255,106,0,0.15)] transition-all duration-300">
                <p className="text-[#FF6A00] text-sm uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></span>
                  {exp.time}
                </p>
                <h3 className="text-xl font-semibold text-black mb-2">{exp.role}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exp.summary}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-[#FF6A00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
