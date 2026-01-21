import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBriefingRequest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBriefingRequest }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <nav 
        className={`
          relative flex items-center justify-between px-6 py-3 
          transition-all duration-500 ease-out border border-white/10
          ${scrolled 
            ? 'w-[90%] md:w-[60%] bg-black/80 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
            : 'w-[95%] md:w-[80%] bg-black/40 backdrop-blur-md rounded-2xl'
          }
        `}
      >
        {/* Tactical Corner Accents */}
        <div className="absolute top-0 left-4 w-2 h-0.5 bg-[#3B82F6]/50"></div>
        <div className="absolute bottom-0 right-4 w-2 h-0.5 bg-[#3B82F6]/50"></div>

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 bg-[#3B82F6] clip-path-polygon flex items-center justify-center font-bold text-white font-mono z-10 relative group-hover:bg-[#2563EB] transition-colors">
              IM
            </div>
            {/* Logo Glow */}
            <div className="absolute inset-0 bg-[#3B82F6] blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <span className="font-bold text-xl tracking-tighter text-white font-sans hidden sm:block">
            <span className="text-[#3B82F6]">IKRA</span>MATIC
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
          <a href="#" className="text-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Targeting</a>
          <a href="#" className="text-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Arsenal</a>
          <a href="#" className="text-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">Intel</a>
        </div>

        {/* Action Button */}
        <button 
          onClick={onBriefingRequest}
          className="group relative px-5 py-2 overflow-hidden rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 hover:border-[#3B82F6] transition-all duration-300"
        >
           <div className="absolute inset-0 bg-[#3B82F6]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
           <span className="relative font-mono text-xs font-bold text-[#3B82F6] group-hover:text-white flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse"></span>
             BRIEFING
           </span>
        </button>
      </nav>
    </div>
  );
};
