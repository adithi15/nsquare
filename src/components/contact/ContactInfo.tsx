import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/nsquare';

// Direct concierge cards — every row is a real frontend-only action (tel / wa.me / mailto)
export const ContactInfo: React.FC = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <span className="text-[11px] uppercase tracking-[0.25em] text-[#c2a26c] font-medium block">
        DIRECT CONCIERGE
      </span>
      <p className="text-xs leading-relaxed text-neutral-600 font-light pt-1">
        Solution to all your queries is just a tap away — call, WhatsApp or email us directly.
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
            {CONTACT.address}
          </p>
        </div>
      </div>

      <a
        href={CONTACT.phoneHref}
        className="flex items-center space-x-4 p-4 bg-[#e8e2d5] group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#e3dbc8]"
      >
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0 transition-transform group-hover:scale-110">
          <Phone className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            CALL:
          </h6>
          <p className="text-[11px] text-neutral-700 font-light">+91 {CONTACT.phone}</p>
        </div>
      </a>

      <a
        href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hello N-Square! I would like to know more about your projects.')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-4 p-4 bg-[#e8e2d5] group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#e3dbc8]"
      >
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0 transition-transform group-hover:scale-110">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            WHATSAPP:
          </h6>
          <p className="text-[11px] text-neutral-700 font-light">
            +91 {CONTACT.phone} — chat with our concierge
          </p>
        </div>
      </a>

      <a
        href={`mailto:${CONTACT.email}`}
        className="flex items-center space-x-4 p-4 bg-[#e8e2d5] group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#e3dbc8]"
      >
        <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#c2a26c] shrink-0 transition-transform group-hover:scale-110">
          <Mail className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[10px] uppercase tracking-wider text-[#c2a26c] font-semibold">
            EMAIL:
          </h6>
          <p className="text-[11px] text-neutral-700 font-light">{CONTACT.email}</p>
        </div>
      </a>
    </div>
  </div>
);
