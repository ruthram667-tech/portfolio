import React from 'react';
import { Link } from 'react-router-dom';

const NewflexCaseStudy = () => {
  return (
    <div className="case-study-wrapper">
      <nav className="max-w-6xl mx-auto px-6 py-6 animate-up">
        <Link to="/" className="text-[#8fd7ff] hover:text-white transition-colors flex items-center gap-2 font-medium">
          &larr; Back to Portfolio
        </Link>
      </nav>
      
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-20 border-b border-white/10 animate-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-[#8fd7ff] text-sm font-bold tracking-widest uppercase mb-4 block">Three.js • UI Engineering • Motion</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Newflex</h1>
        <p className="text-[#acc4ea] text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">A design-heavy technical portfolio built to showcase modern web aesthetics, 3D motion, glassmorphism, and responsive UI systems.</p>
        <div className="flex flex-wrap gap-3">
          <span className="pill">React</span>
          <span className="pill">Three.js</span>
          <span className="pill">Framer Motion</span>
          <span className="pill">Glass UI</span>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Modern portfolios often struggle to balance high-end visual aesthetics with high-performance web standards, leading to slow load times and inconsistent cross-device experiences.</p>
          </div>
          <div className="glass-card highlight p-8 animate-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Architected a high-performance portfolio using React and Three.js, prioritizing a "Glassmorphism" design language. The implementation focuses on GPU-accelerated 3D motion and modular, responsive UI components that maintain a premium, cohesive look without sacrificing site speed.</p>
          </div>
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Result</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">A standout digital presence that serves as a benchmark for modern web design, effectively demonstrating technical proficiency in 3D integration, motion graphics, and advanced CSS utility systems.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 animate-up" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="terminal shadow-2xl">
            <div className="terminal-header">
              <div className="terminal-dots"><div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div></div>
              <span className="ml-4 text-xs text-white/40 font-mono">scene_renderer.jsx</span>
            </div>
            <div className="p-6 overflow-x-auto"><pre className="text-sm font-mono text-[#8fd7ff] leading-relaxed"><code>{`const InteractiveCanvas = ({ geometry }) => {
  const meshRef = useRef();
  
  useFrame(({ clock, mouse }) => {
    // Parallax & continuous rotation
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, 
      mouse.y * Math.PI, 
      0.1
    );
  });

  return (
    <mesh ref={meshRef} material={glassMaterial}>
      <primitive object={geometry} />
    </mesh>
  );
}`}</code></pre></div>
          </div>
          <div className="h-full min-h-[300px] rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="text-center z-10 p-6">
              <span className="block text-[#acc4ea] font-medium mb-2">3D Scene Structure Diagram</span>
              <span className="text-xs text-white/40">Camera &rarr; Lights &rarr; Mesh Ref &rarr; Canvas</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8fd7ff]/0 to-[#dcb464]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewflexCaseStudy;
