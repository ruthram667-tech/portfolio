import React from 'react';
import { Link } from 'react-router-dom';

const HydronixCaseStudy = () => {
  return (
    <div className="case-study-wrapper">
      {/* Navigation back */}
      <nav className="max-w-6xl mx-auto px-6 py-6 animate-up">
        <Link to="/" className="text-[#8fd7ff] hover:text-white transition-colors flex items-center gap-2 font-medium">
          &larr; Back to Portfolio
        </Link>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-20 border-b border-white/10 animate-up delay-1">
        <span className="text-[#8fd7ff] text-sm font-bold tracking-widest uppercase mb-4 block">
          IoT • Data Analytics • Machine Learning
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hydronix
        </h1>
        <p className="text-[#acc4ea] text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">
          An event-driven monitoring architecture delivering sub-second telemetry aggregation and predictive water quality analytics.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          <span className="pill">Python</span>
          <span className="pill">TensorFlow</span>
          <span className="pill">React</span>
          <span className="pill">AWS IoT Core</span>
          <span className="pill">PostgreSQL</span>
        </div>
      </header>

      {/* THREE COLUMN GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Challenge */}
          <div className="glass-card p-8 animate-up delay-2">
            <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">
              Environmental monitoring often suffers from a lack of real-time data visualization, making it difficult for stakeholders to identify water contamination trends or patterns at a glance.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-card highlight p-8 animate-up delay-2" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">
              Built a robust IoT ecosystem utilizing ESP32 sensor hardware integrated with a real-time data pipeline. Data is processed through a Python backend using the Pandas library for statistical analysis, then pushed to a live, interactive dashboard that visualizes purity metrics through intuitive dynamic charts.
            </p>
          </div>

          {/* Result */}
          <div className="glass-card p-8 animate-up delay-2" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Result</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">
              Successfully established a functional, data-driven monitoring platform that transforms raw sensor input into actionable environmental intelligence, demonstrating the intersection of hardware integration and advanced data science.
            </p>
          </div>

        </div>
      </section>

      {/* VISUAL DEPTH: ARCHITECTURE & CODE */}
      <section className="max-w-6xl mx-auto px-6 pb-32 animate-up delay-3" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Code Snippet Terminal */}
          <div className="terminal shadow-2xl">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <span className="ml-4 text-xs text-white/40 font-mono">anomaly_detector.py</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-[#8fd7ff] leading-relaxed"><code>{`def predict_anomaly(telemetry_stream):
    """
    Ingests raw sensor stream and outputs
    probability tensor for anomalies.
    """
    normalized_data = preprocess(telemetry_stream)
    
    with torch.no_grad():
        predictions = model(normalized_data)
        
    if predictions.max() > CONFIDENCE_THRESHOLD:
        trigger_alert_pipeline(predictions)
        
    return predictions`}</code></pre>
            </div>
          </div>

          {/* Architecture/3D Placeholder */}
          <div className="h-full min-h-[300px] rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="text-center z-10 p-6">
              <span className="block text-[#acc4ea] font-medium mb-2">System Architecture Diagram</span>
              <span className="text-xs text-white/40">Data flow from IoT sensor &rarr; Cloud &rarr; Dashboard</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8fd7ff]/0 to-[#dcb464]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HydronixCaseStudy;
