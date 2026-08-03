import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactInfo: React.FC = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a26c] font-medium block">
        DIRECT CONCIERGE
      </span>
      <p className="text-xs leading-relaxed text-neutral-600 font-light pt-1">
        Solution to all your queries is just a call away. Feel free to get in touch with us.
      </p>
    </div>

    <div className="space-y-3 pt-2">
      <div className="flex items-center space-x-4 p-4 bg-[#e8e2d5]">
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0">
          <MapPin className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            CORPORATE OFFICE ADDRESS:
          </h6>
          <p className="text-[11px] text-neutral-700 leading-snug font-light">
            1301, ONE PLATINUM, PLOT NO. 08, SECTOR-15, CBD BELAPUR, NAVI MUMBAI-400614.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-[#e8e2d5]">
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0">
          <Phone className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            CALL:
          </h6>
          <p className="text-[11px] text-neutral-700 font-light">+91 91-22-41276677</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-[#e8e2d5]">
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0">
          <Mail className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            EMAIL:
          </h6>
          <p className="text-[11px] text-neutral-700 font-light">info@theplatinumgroup.co.in</p>
        </div>
      </div>
    </div>
  </div>
);
