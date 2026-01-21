import React from 'react';
import { HudButton } from './ui/HudButton';

export const Contact: React.FC = () => {
  return (
    <section id="enlist" className="py-24 px-4 bg-black relative">
       <div className="max-w-3xl mx-auto border border-gray-800 bg-[#080808] p-8 md:p-12 relative">
          {/* Decorative Corners - RED */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#EF4444]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#EF4444]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#EF4444]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#EF4444]"></div>

          <div className="text-center mb-10">
            <h2 className="text-[#EF4444] font-mono text-sm tracking-widest mb-2">SECURE CHANNEL</h2>
            <h3 className="text-3xl font-bold text-white uppercase">Enlist for Deployment</h3>
            <p className="text-gray-500 mt-2 text-sm">Authorized Personnel Only. Responses encrypted.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Callsign / Name</label>
                <input type="text" className="w-full bg-[#0F0F0F] border border-gray-700 p-3 text-white focus:border-[#EF4444] focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Organization</label>
                <input type="text" className="w-full bg-[#0F0F0F] border border-gray-700 p-3 text-white focus:border-[#EF4444] focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase">Secure Email</label>
              <input type="email" className="w-full bg-[#0F0F0F] border border-gray-700 p-3 text-white focus:border-[#EF4444] focus:outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase">Mission Requirements</label>
              <textarea rows={4} className="w-full bg-[#0F0F0F] border border-gray-700 p-3 text-white focus:border-[#EF4444] focus:outline-none transition-colors"></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <HudButton type="submit" variant="danger" className="w-full md:w-auto">
                Transmit Inquiry
              </HudButton>
            </div>
          </form>
       </div>
    </section>
  );
};