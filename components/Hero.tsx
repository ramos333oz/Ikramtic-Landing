import React from 'react';

interface HeroProps {
  onBriefingRequest: () => void;
}

const DroneVisualizer: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Central Targeting Ring - subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] opacity-20">
         <div className="absolute inset-0 border border-[#3B82F6] rounded-full animate-[spin_20s_linear_infinite]"></div>
         <div className="absolute inset-4 border border-dashed border-[#3B82F6] rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
      </div>

      {/* Right Side Drone Status Panel - Interactive Component */}
      <div className="absolute top-1/2 right-10 md:right-24 -translate-y-1/2 w-64 md:w-80 p-6 bg-black/40 backdrop-blur-sm border-l-2 border-[#3B82F6] hidden lg:block">
        <div className="flex justify-between items-center mb-4 border-b border-[#3B82F6]/30 pb-2">
          <span className="text-[#3B82F6] font-mono text-xs font-bold tracking-widest">DRONE_FEED_01</span>
          <span className="text-red-500 font-mono text-xs animate-pulse">● LIVE</span>
        </div>
        
        {/* Wireframe Drone Representation (CSS-made) */}
        <div className="relative h-48 w-full border border-[#3B82F6]/10 bg-[#3B82F6]/5 mb-4 flex items-center justify-center overflow-hidden">
           {/* Grid Floor */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom animate-[pulse_4s_infinite]"></div>
           
           {/* Drone Object */}
           <div className="relative w-16 h-16 animate-[bounce_3s_infinite_ease-in-out]">
              {/* Body */}
              <div className="absolute inset-0 bg-[#3B82F6]/20 border border-[#3B82F6] transform rotate-45"></div>
              {/* Rotors */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-white/30 rounded-full animate-spin"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-white/30 rounded-full animate-spin"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border border-white/30 rounded-full animate-spin"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-white/30 rounded-full animate-spin"></div>
              
              {/* Scanning Beam */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[60px] border-t-[#3B82F6]/20"></div>
           </div>
        </div>

        {/* Telemetry Data */}
        <div className="space-y-2 font-mono text-[10px] text-[#3B82F6]/80">
          <div className="flex justify-between">
            <span>ALTITUDE</span>
            <span>2,400 FT</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full w-[70%] bg-[#3B82F6] animate-[pulse_2s_infinite]"></div>
          </div>
          
          <div className="flex justify-between pt-1">
            <span>AIRSPEED</span>
            <span>180 KTS</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full w-[45%] bg-[#3B82F6]"></div>
          </div>

          <div className="flex justify-between pt-1">
            <span>BATTERY</span>
            <span>84%</span>
          </div>
           <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full w-[84%] bg-[#00FF41]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Hero: React.FC<HeroProps> = ({ onBriefingRequest }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Cockpit View" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000000_100%)]"></div>
      </div>

      {/* Interactive Drone Overlay */}
      <DroneVisualizer />

      {/* HUD Corner Data */}
      <div className="absolute top-24 left-10 text-[#3B82F6]/60 font-mono text-xs space-y-1 hidden md:block z-10">
         <p>SYS.STATUS: <span className="text-[#3B82F6] animate-pulse">OPTIMAL</span></p>
         <p>LAT: 34.0522 N</p>
         <p>LON: 118.2437 W</p>
      </div>

      {/* Main Content - Positioned Bottom Left */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold font-mono text-white tracking-tighter uppercase leading-[0.9] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-6">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#EF4444]">Warfare</span>.<br/>
            Zero-Risk Simulation.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light border-l-4 border-[#3B82F6] pl-6 bg-black/60 backdrop-blur-md py-4">
            Elite training solutions for Air, Ground, and Unmanned operations. 
            Experience the future of tactical readiness with IkraSim's hyper-realistic engine.
          </p>
        </div>
      </div>
    </section>
  );
};