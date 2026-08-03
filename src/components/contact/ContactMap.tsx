import React from 'react';
import { Building2 } from 'lucide-react';

export const ContactMap: React.FC = () => (
  <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
    <div className="overflow-hidden border border-neutral-300/60 shadow-xl relative">
      <div className="bg-neutral-900 text-white px-6 py-3 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-[#c2a26c]" />
          <span className="text-xs uppercase tracking-widest font-medium">
            Platinum Corporate Headquarters — Google Maps Navigation
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-[#c2a26c] bg-[#c2a26c]/10 px-3 py-1 rounded-full border border-[#c2a26c]/30">
          CBD Belapur, Navi Mumbai
        </span>
      </div>

      <iframe
        title="Platinum Group Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1937166154607!2d73.0331964!3d19.0111837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3a9732585f5%3A0x9a91212791043410!2sONE%20PLATINUM!5e0!3m2!1sen!2sin!4v1782476140510!5m2!1sen!2sin"
        width="100%"
        height="420"
        className="border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);
