import React from 'react';
import { Link } from 'react-router-dom';

const CalculatorCaseStudy = () => {
  return (
    <div className="case-study-wrapper">
      <nav className="max-w-6xl mx-auto px-6 py-6 animate-up">
        <Link to="/" className="text-[#8fd7ff] hover:text-white transition-colors flex items-center gap-2 font-medium">
          &larr; Back to Portfolio
        </Link>
      </nav>
      
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-20 border-b border-white/10 animate-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-[#8fd7ff] text-sm font-bold tracking-widest uppercase mb-4 block">Tooling • Logic • Python</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Engineering Calculator Suite</h1>
        <p className="text-[#acc4ea] text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">A practical utility set for technical calculations, designed with clarity, speed, and usability in mind.</p>
        <div className="flex flex-wrap gap-3">
          <span className="pill">Python</span>
          <span className="pill">UI Design</span>
          <span className="pill">Algorithms</span>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Engineers often switch between multiple disconnected tools for unit conversions and technical formulas, leading to fragmented workflows and potential calculation errors.</p>
          </div>
          <div className="glass-card highlight p-8 animate-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Developed a centralized, Python-based utility suite focused on modularity and high-precision outputs. The architecture leverages clean logic separation to ensure that each calculation module remains decoupled from the interface, allowing for rapid scaling and easy maintenance.</p>
          </div>
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Result</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">A highly efficient, user-centric toolset that streamlines complex engineering tasks, providing a professional environment for rapid data verification and technical problem-solving.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 animate-up" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="terminal shadow-2xl">
            <div className="terminal-header">
              <div className="terminal-dots"><div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div></div>
              <span className="ml-4 text-xs text-white/40 font-mono">math_engine.py</span>
            </div>
            <div className="p-6 overflow-x-auto"><pre className="text-sm font-mono text-[#8fd7ff] leading-relaxed"><code>{`def compute_structural_load(matrix_tensor):
    """
    Evaluates stress factors across the beam
    matrix in constant time.
    """
    optimized_matrix = np.linalg.inv(matrix_tensor)
    
    if np.any(optimized_matrix > SAFE_LIMIT):
        raise OverloadError("Threshold exceeded")
        
    return optimized_matrix.sum(axis=1)`}</code></pre></div>
          </div>
          <div className="h-full min-h-[300px] rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="text-center z-10 p-6">
              <span className="block text-[#acc4ea] font-medium mb-2">Computation Architecture Diagram</span>
              <span className="text-xs text-white/40">Data Input &rarr; Vector Processing &rarr; UI Rendering</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8fd7ff]/0 to-[#dcb464]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorCaseStudy;
