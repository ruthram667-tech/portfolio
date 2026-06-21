import React from 'react';
import { Link } from 'react-router-dom';

const AiCoachCaseStudy = () => {
  return (
    <div className="case-study-wrapper">
      <nav className="max-w-6xl mx-auto px-6 py-6 animate-up">
        <Link to="/" className="text-[#8fd7ff] hover:text-white transition-colors flex items-center gap-2 font-medium">
          &larr; Back to Portfolio
        </Link>
      </nav>
      
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-20 border-b border-white/10 animate-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-[#8fd7ff] text-sm font-bold tracking-widest uppercase mb-4 block">Web Speech API • Machine Learning • React</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">AI Live Coach</h1>
        <p className="text-[#acc4ea] text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">An educational platform with voice-synchronized learning experiences built using browser-native speech APIs.</p>
        <div className="flex flex-wrap gap-3">
          <span className="pill">React</span>
          <span className="pill">Web Speech API</span>
          <span className="pill">Machine Learning</span>
          <span className="pill">UX</span>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Traditional educational platforms lack immersive, real-time feedback mechanisms, often leading to lower engagement rates during self-paced learning sessions.</p>
          </div>
          <div className="glass-card highlight p-8 animate-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">Engineered an AI-driven educational interface using React and the Web Speech API to enable voice-synchronized, interactive learning. The system maps user speech inputs directly to educational content, creating a responsive feedback loop that simulates a 1-on-1 tutoring experience.</p>
          </div>
          <div className="glass-card p-8 animate-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">The Result</h3>
            <p className="text-[#acc4ea] leading-relaxed text-sm">A highly interactive, browser-native platform that enhances learner retention and engagement through real-time speech processing and seamless UX design.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 animate-up" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="terminal shadow-2xl">
            <div className="terminal-header">
              <div className="terminal-dots"><div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div></div>
              <span className="ml-4 text-xs text-white/40 font-mono">speech_handler.js</span>
            </div>
            <div className="p-6 overflow-x-auto"><pre className="text-sm font-mono text-[#8fd7ff] leading-relaxed"><code>{`async function processVoiceCommand(audioStream) {
  // Transcribe and analyze sentiment real-time
  const transcript = await SpeechAPI.recognize(audioStream);
  const intent = await mlModel.classify(transcript);
  
  if (intent.confidence > 0.85) {
    uiStore.updateState(intent.action);
    triggerAudioFeedback(intent.response);
  }
}`}</code></pre></div>
          </div>
          <div className="h-full min-h-[300px] rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="text-center z-10 p-6">
              <span className="block text-[#acc4ea] font-medium mb-2">Voice Event Flow Diagram</span>
              <span className="text-xs text-white/40">Microphone &rarr; Web API &rarr; ML Layer &rarr; UI Sync</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8fd7ff]/0 to-[#dcb464]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiCoachCaseStudy;
