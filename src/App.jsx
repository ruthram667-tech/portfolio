import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [selectedSkill, setSelectedSkill] = useState('All');

  return (
    <div className="relative isolate min-h-screen font-sans flex bg-white text-black overflow-hidden">
      
      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto relative">
        <Navbar />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Hero Section */}
          <div className="lg:col-span-12">
            <Hero />
          </div>

          {/* Statistics Bar */}
          <div className="lg:col-span-12">
            <Stats />
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-12">
            <Services />
          </div>

          {/* Profile & Skills Section */}
          <div className="lg:col-span-12">
            <About selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          </div>

          {/* Latest Projects Gallery */}
          <div className="lg:col-span-12">
            <Projects selectedSkill={selectedSkill} />
          </div>
          
          {/* Additional Sections */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Experience />
            <Contact />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
