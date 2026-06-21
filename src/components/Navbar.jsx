import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full z-50 bg-transparent py-4 md:py-6 px-4 md:px-12">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Brand Name */}
        <a className="flex items-center gap-2 md:gap-3 font-bold tracking-widest uppercase text-sm md:text-lg text-black hover:opacity-80 transition-opacity" href="#top">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.5)]" aria-hidden="true"></span>
          RUTHRAMOORTHY S B
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {['Home', 'About', 'Projects', 'Experience'].map((item) => (
            <a 
              key={item}
              href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${item === 'Home' ? 'text-[#FF6A00]' : 'text-gray-600 hover:text-black'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex gap-4 items-center">
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-black transition-all bg-transparent border border-black/20 rounded-full hover:border-[#FF6A00] hover:text-[#FF6A00]">
            Contact Me
          </a>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

