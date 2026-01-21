import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TechSpecs } from './components/TechSpecs';
import { Contact } from './components/Contact';
import { TacticalBriefing } from './components/TacticalBriefing';

const App: React.FC = () => {
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-[#3B82F6] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3B82F6] clip-path-polygon flex items-center justify-center font-bold text-white font-mono">
              IK
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">IKRA<span className="text-[#EF4444]">SIM</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">THE FLEET</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">SPECS</a>
            <button 
              onClick={() => setIsBriefingOpen(true)}
              className="text-[#3B82F6] border border-[#3B82F6]/50 px-4 py-1 hover:bg-[#3B82F6] hover:text-white transition-all"
            >
              AI BRIEFING
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero onBriefingRequest={() => setIsBriefingOpen(true)} />
        <Features />
        <TechSpecs />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 text-center">
        <p className="font-mono text-gray-600 text-xs">
          © 2025 IKRASIM TACTICAL SYSTEMS. ALL RIGHTS RESERVED.<br/>
          RESTRICTED ACCESS. UNAUTHORIZED USE IS PROHIBITED.
        </p>
      </footer>

      {/* Gemini AI Modal */}
      <TacticalBriefing 
        isOpen={isBriefingOpen} 
        onClose={() => setIsBriefingOpen(false)} 
      />
    </div>
  );
};

export default App;