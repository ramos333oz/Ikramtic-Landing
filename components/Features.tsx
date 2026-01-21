import React from 'react';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  imageSrc: string;
  videoSrc?: string;
  align: 'left' | 'right';
  index: string;
  color: 'blue' | 'red';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  id, title, subtitle, description, specs, imageSrc, videoSrc, align, index, color
}) => {
  // Color classes map
  const colors = {
    blue: {
      text: 'text-[#3B82F6]',
      border: 'border-[#3B82F6]',
      bg: 'bg-[#3B82F6]',
      shadow: 'shadow-[#3B82F6]',
      accent: 'border-[#3B82F6]/50'
    },
    red: {
      text: 'text-[#EF4444]',
      border: 'border-[#EF4444]',
      bg: 'bg-[#EF4444]',
      shadow: 'shadow-[#EF4444]',
      accent: 'border-[#EF4444]/50'
    }
  };

  const theme = colors[color];

  return (
    <section id={id} className="relative h-screen w-full overflow-hidden flex items-center snap-start bg-black">
      {/* Background Media Placeholder */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-80 mix-blend-screen hover:scale-105 transition-transform duration-[20s]"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-[20s]"
          />
        )}
        {/* Seamless Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]`}></div>
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className={`relative z-20 max-w-7xl mx-auto px-6 w-full flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="max-w-2xl relative">
          
          {/* Large Index Number Background */}
          <div className="absolute -top-32 -left-10 text-[180px] font-mono font-bold text-white/5 select-none pointer-events-none leading-none">
            {index}
          </div>

          <div className={`relative bg-black/60 backdrop-blur-md border border-gray-800 p-8 md:p-12 overflow-hidden group hover:border-gray-600 transition-all duration-500`}>
            
            {/* Animated Scanning Line on top border */}
            <div className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-${color === 'blue' ? 'blue-500' : 'red-500'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[shimmer_2s_infinite]`}></div>

            {/* Tactical Corners */}
            <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${theme.border} opacity-80`}></div>
            <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${theme.border} opacity-80`}></div>
            <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${theme.border} opacity-80`}></div>
            <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${theme.border} opacity-80`}></div>

            {/* Content */}
            <div className="flex items-center gap-3 mb-4">
               <div className={`h-[1px] w-8 ${theme.bg}`}></div>
               <h4 className={`${theme.text} font-mono text-sm tracking-[0.3em] uppercase`}>{subtitle}</h4>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white uppercase mb-8 leading-none tracking-tight">
              {title}
            </h2>
            
            <p className={`text-gray-300 text-lg leading-relaxed mb-10 border-l-2 ${theme.accent} pl-6`}>
              {description}
            </p>

            <div className="space-y-4">
              <h5 className="text-gray-500 font-mono text-xs uppercase mb-4 tracking-wider flex items-center gap-2">
                System Specs <div className="h-[1px] flex-1 bg-gray-800"></div>
              </h5>
              {specs.map((spec, i) => (
                <div key={i} className={`flex items-center text-sm font-mono text-gray-400 group-hover:text-white transition-colors`}>
                  <div className={`w-1.5 h-1.5 ${theme.bg} mr-4 rotate-45`}></div>
                  {spec}
                </div>
              ))}
            </div>

            {/* Decorative Data Code */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-700 opacity-50 hidden md:block text-right">
              SEC_SECTOR_{index}<br/>
              V.4.2.0_STABLE
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      id: "jets",
      title: "Jet Simulators",
      subtitle: "Aerial Dominance",
      description: "Experience 9G forces in a 6-DOF motion platform. 1:1 cockpit replication for F-35, F-22, and Eurofighter Typhoon models with next-gen photogrammetry.",
      specs: ["6-DOF Motion Platform", "Photorealistic Photogrammetry", "Multi-Role Configurable"],
      imageSrc: "https://images.unsplash.com/photo-1559819614-81dd9add6128?q=80&w=1920&auto=format&fit=crop", 
      videoSrc: `${import.meta.env.BASE_URL}videos/jet.mp4`,
      align: "left",
      color: "blue"
    },
    {
      id: "drones",
      title: "Drone Systems",
      subtitle: "Unmanned Superiority",
      description: "Master remote piloting for UAV/UAS assets. Includes realistic signal latency, jamming simulation, and thermal optics for surgical precision.",
      specs: ["Signal Latency Emulation", "Electronic Warfare Suite", "Swarm Logic AI"],
      imageSrc: "https://images.unsplash.com/photo-1506947411487-a5673826e6e6?q=80&w=1920&auto=format&fit=crop", 
      videoSrc: `${import.meta.env.BASE_URL}videos/drone-3.mp4`,
      align: "right",
      color: "blue"
    },
    {
      id: "ballistics",
      title: "Ballistics / Guns",
      subtitle: "Ground Forces",
      description: "Precision infantry training. Recoil-simulated platforms connected to a dynamic ballistics engine that accounts for wind, humidity, and Coriolis effect.",
      specs: ["Haptic Recoil Feedback", "Environmental Physics", "Squad Link Integration"],
      imageSrc: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1920&auto=format&fit=crop", 
      videoSrc: `${import.meta.env.BASE_URL}videos/minigun.mp4`,
      align: "left",
      color: "red"
    }
  ];

  return (
    <div className="flex flex-col bg-black">
      {features.map((f, i) => (
        <FeatureSection 
          key={f.id}
          {...f}
          align={f.align as 'left' | 'right'}
          index={`0${i + 1}`}
          color={f.color as 'blue' | 'red'}
        />
      ))}
    </div>
  );
};