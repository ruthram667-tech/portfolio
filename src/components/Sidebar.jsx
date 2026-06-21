import React from 'react';
import profileImg from '../data/profile.png';

const CircularProgress = ({ percentage, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 h-16 mb-2">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-gray-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-accent transition-all duration-1000 ease-out"
          strokeWidth="3"
          strokeDasharray={`${percentage}, 100`}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">
        {percentage}%
      </div>
    </div>
    <span className="text-xs text-gray-600 font-medium">{label}</span>
  </div>
);

const LinearProgress = ({ percentage, label }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs mb-2">
      <span className="text-gray-800 font-bold">{label}</span>
      <span className="text-gray-600">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div className="bg-accent h-1 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-[300px] h-screen bg-white flex-shrink-0 flex-col shadow-[10px_0_30px_rgba(0,0,0,0.05)] border-r border-gray-200 z-20 overflow-hidden relative">
      
      {/* Profile Header */}
      <div className="p-8 flex flex-col items-center border-b border-gray-200 bg-gray-50/50 flex-shrink-0">
        <div className="relative mb-4 group cursor-pointer">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-accent transition-colors flex-shrink-0">
            <img src={profileImg} alt="Ruthramoorthy S B" className="w-full h-full object-cover object-top bg-gray-100" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=RSB&background=f9fafb&color=000' }} />
          </div>
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
        </div>
        
        <h2 className="text-lg font-bold text-black mb-2">Ruthramoorthy S B</h2>
        <p className="text-xs text-gray-600 text-center mb-1">AI & Data Science Engineer</p>
        <p className="text-xs text-gray-600 text-center">Full-Stack Developer</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8 relative scrollbar-hide">
        
        {/* Demographics */}
      <div className="p-8 border-b border-gray-200 bg-gray-50/30">
        <div className="flex justify-between mb-2">
          <span className="text-black font-semibold text-sm">Residence:</span>
          <span className="text-gray-600 text-sm">India</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-black font-semibold text-sm">City:</span>
          <span className="text-gray-600 text-sm">Dindugal</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black font-semibold text-sm">Age:</span>
          <span className="text-gray-600 text-sm">19</span>
        </div>
      </div>

      {/* Circular Skills */}
      <div className="p-8 border-b border-gray-200 flex justify-between bg-gray-50/50">
        <CircularProgress percentage={85} label="ML/DL" />
        <CircularProgress percentage={82} label="Python" />
        <CircularProgress percentage={80} label="React" />
      </div>

      {/* Linear Skills */}
      <div className="p-8 border-b border-gray-200 bg-gray-50/30">
        <LinearProgress percentage={85} label="HTML" />
        <LinearProgress percentage={84} label="CSS" />
        <LinearProgress percentage={80} label="JS/TS" />
      </div>

      </div>

      {/* Social Footer */}
      <div className="p-6 bg-gray-50/50 border-t border-gray-200 flex justify-center gap-6 flex-shrink-0">
        <a href="#" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform">
          {/* GitHub Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform">
          {/* LinkedIn Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform">
          {/* Twitter Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
