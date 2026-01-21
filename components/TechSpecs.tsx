import React from 'react';

const SpecItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors px-4">
    <span className="text-gray-500 font-mono text-sm uppercase">{label}</span>
    <span className="text-[#3B82F6] font-mono font-bold">{value}</span>
  </div>
);

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-gray-900/50 bg-[linear-gradient(45deg,rgba(0,0,0,0)_49.9%,rgba(59,130,246,0.05)_50%,rgba(0,0,0,0)_50.1%)] bg-[size:20px_20px]"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-[#3B82F6] font-mono text-sm tracking-widest mb-4">TECHNICAL SPECIFICATIONS</h2>
          <h3 className="text-4xl font-bold text-white uppercase mb-6 leading-tight">Military Grade<br/>Performance</h3>
          <p className="text-gray-400 mb-8">
            Our engines are built on proprietary architecture designed for defense contractors and government agencies. 
            Zero compromise on physics fidelity or data security.
          </p>
          <div className="inline-flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-gray-300">
               <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
               ISO 27001 Certified
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
               <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
               TAA Compliant
            </div>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 border-t border-gray-800">
          <SpecItem label="Physics Engine" value="Newtonian V4.2 (Custom)" />
          <SpecItem label="Terrain Rendering" value="Global Mapper / 1cm Precision" />
          <SpecItem label="AI Logic" value="Adversarial Neural Networks" />
          <SpecItem label="Network Latency" value="< 2ms Local / < 50ms Global" />
          <SpecItem label="Display Resolution" value="8K per Eye / 240Hz" />
          <SpecItem label="Data Encryption" value="AES-256 / Quantum-Ready" />
        </div>
      </div>
    </section>
  );
};