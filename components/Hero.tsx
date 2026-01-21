import React from 'react';
import { HudButton } from './ui/HudButton';

interface HeroProps {
  onBriefingRequest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBriefingRequest }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Cockpit View" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000000_100%)]"></div>
      </div>

      {/* HUD Elements - Decorative */}
      <div className="absolute inset-0 pointer-events-none z-10">
         {/* Center Reticle */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#3B82F6]/10 rounded-full flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-[#3B82F6]/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-2 h-2 bg-[#3B82F6] rounded-full"></div>
            <div className="absolute w-[620px] h-[1px] bg-[#3B82F6]/20"></div>
            <div className="absolute h-[620px] w-[1px] bg-[#3B82F6]/20"></div>
         </div>

         {/* Corner Data Blocks */}
         <div className="absolute top-24 left-10 text-[#3B82F6]/60 font-mono text-xs space-y-1 hidden md:block">
            <p>SYS.STATUS: <span className="text-[#3B82F6] animate-pulse">OPTIMAL</span></p>
            <p>LAT: 34.0522 N</p>
            <p>LON: 118.2437 W</p>
            <p>ENCRYPTION: AES-256</p>
         </div>
         
         <div className="absolute bottom-24 right-10 text-[#3B82F6]/60 font-mono text-xs text-right space-y-1 hidden md:block">
            <p>NETWORK: SECURE</p>
            <p>USERS: 4,021 ACTIVE</p>
            <p>SIM.UPTIME: 99.99%</p>
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-8">
        <div className="inline-block border border-[#3B82F6]/30 bg-[#3B82F6]/5 px-4 py-1 mb-4 backdrop-blur-sm">
          <p className="font-mono text-[#3B82F6] text-sm tracking-[0.3em] uppercase animate-pulse">
            System Initialized
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#EF4444]">Warfare</span>.<br/>
          Zero-Risk Simulation.
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light border-l-2 border-[#3B82F6] pl-6 text-left bg-black/50 backdrop-blur-md py-4">
          Elite training solutions for Air, Ground, and Unmanned operations. 
          Experience the future of tactical readiness with IkraSim's hyper-realistic engine.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <HudButton 
             onClick={onBriefingRequest} 
             variant="primary" 
             className="w-full md:w-auto text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)]"
             icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
          >
            Request Tactical Briefing
          </HudButton>
          <HudButton 
            variant="secondary" 
            className="w-full md:w-auto text-lg"
            onClick={() => document.getElementById('enlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </HudButton>
        </div>
      </div>
    </section>
  );
};