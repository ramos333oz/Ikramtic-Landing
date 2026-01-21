import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
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
      <Navbar onBriefingRequest={() => setIsBriefingOpen(true)} />

      <main>
        <Hero onBriefingRequest={() => setIsBriefingOpen(true)} />
        <Features />
        <TechSpecs />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 text-center">
        <p className="font-mono text-gray-600 text-xs">
          © 2025 IKRAMATIC TACTICAL SYSTEMS. ALL RIGHTS RESERVED.<br/>
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