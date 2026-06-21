import React from 'react';
import { PROJECTS } from '../data/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ selectedSkill }) => {
  const filteredProjects = PROJECTS.filter(project => {
    if (selectedSkill === 'All') return true;
    return project.tags.includes(selectedSkill) || project.category === selectedSkill;
  });

  return (
    <section id="projects" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-black">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are a few projects that reflect my interest in building useful, modern, and interactive software.
            {selectedSkill !== 'All' && <span className="text-[#FF6A00] font-semibold ml-2">Filtering by: {selectedSkill}</span>}
          </p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative flex flex-col p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden cursor-pointer hover:-translate-y-2 hover:border-[#FF6A00] hover:shadow-[0_4px_20px_rgba(255,106,0,0.15)] transition-all duration-300 min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <p className="text-[#FF6A00] uppercase tracking-widest text-xs font-bold mb-3 z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.5)]"></span>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-black mb-3 z-10 group-hover:text-[#FF6A00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 z-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium group-hover:border-[#FF6A00]/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto z-10">
                  {project.link ? (
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-[#FF6A00] transition-colors">
                      View Case Study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 cursor-not-allowed">
                      Case Study Coming Soon
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-600 text-lg border border-gray-200 rounded-2xl bg-gray-50 mt-6">
            No projects found matching this skill. Try selecting another!
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
