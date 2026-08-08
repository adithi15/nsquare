import React from 'react';
import { Building2 } from 'lucide-react';

export const ContactMap: React.FC = () => (
  <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
    <div className="overflow-hidden border border-neutral-300/60 shadow-xl relative">
      <div className="bg-neutral-900 text-white px-6 py-3 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-[#c2a26c]" />
          <span className="text-xs uppercase tracking-widest font-medium">
            N-Square Developers — Google Maps Navigation
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-[#c2a26c] bg-[#c2a26c]/10 px-3 py-1 rounded-full border border-[#c2a26c]/30">
          Navi Mumbai, Maharashtra
        </span>
      </div>

      <iframe
        title="N-Square Developers Location Map"
        src="https://www.google.com/maps?q=Kharghar,+Navi+Mumbai&output=embed"
        width="100%"
        height="420"
        className="border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);
