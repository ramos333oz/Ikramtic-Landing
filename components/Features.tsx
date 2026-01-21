import React from 'react';

const FeatureCard = ({ title, desc, specs, delay }: { title: string, desc: string, specs: string[], delay: string }) => (
  <div className={`group relative bg-[#0a0a0a] border border-gray-800 p-8 hover:border-[#3B82F6] transition-all duration-300 overflow-hidden hover:-translate-y-1`} style={{ animationDelay: delay }}>
    {/* Hover scan effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/0 via-[#3B82F6]/5 to-[#3B82F6]/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold font-mono text-white group-hover:text-[#3B82F6] transition-colors uppercase">{title}</h3>
        <svg className="w-8 h-8 text-gray-700 group-hover:text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      
      <p className="text-gray-400 mb-8 leading-relaxed text-sm h-20">
        {desc}
      </p>

      <div className="space-y-2 border-t border-gray-800 pt-4">
        {specs.map((spec, i) => (
          <div key={i} className="flex items-center text-xs font-mono text-gray-500 group-hover:text-[#3B82F6]/80">
            <span className="w-2 h-2 bg-current mr-2 rounded-sm"></span>
            {spec}
          </div>
        ))}
      </div>
      
      {/* Corner Brackets */}
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-4 h-4 border-t-2 border-r-2 border-[#3B82F6]"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-4 h-4 border-b-2 border-l-2 border-[#3B82F6]"></div>
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between border-b border-gray-800 pb-6">
          <div>
             <h2 className="text-[#EF4444] font-mono text-sm tracking-widest mb-2">THE FLEET</h2>
             <h3 className="text-4xl font-bold text-white uppercase">Active Platforms</h3>
          </div>
          <div className="hidden md:block font-mono text-xs text-gray-600">
            SYNCED: 100%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Jet Simulators"
            desc="Experience 9G forces in a 6-DOF motion platform. 1:1 cockpit replication for F-35, F-22, and Eurofighter Typhoon models."
            specs={["6-DOF Motion Platform", "Photorealistic Photogrammetry", "Multi-Role Configurable"]}
            delay="0s"
          />
          <FeatureCard 
            title="Drone Systems"
            desc="Master remote piloting for UAV/UAS assets. Includes realistic signal latency, jamming simulation, and thermal optics."
            specs={["Signal Latency Emulation", "Electronic Warfare Suite", "Swarm Logic AI"]}
            delay="0.2s"
          />
          <FeatureCard 
            title="Ballistics/Guns"
            desc="Precision infantry training. Recoil-simulated platforms connected to a dynamic ballistics engine that accounts for wind and humidity."
            specs={["Haptic Recoil Feedback", "Environmental Physics", "Squad Link Integration"]}
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};