import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/nsquare';

// Direct concierge cards — every row is a real frontend-only action (tel / wa.me / mailto)
export const ContactInfo: React.FC = () => (
  <div className="space-y-6 ">
    <div className="space-y-1">
      <span className="text-[12px] uppercase tracking-[0.25em] text-[#b88e4c] font-medium block">
        DIRECT CONCIERGE
      </span>
      <p className="text-[14px] leading-relaxed text-neutral-600 font-light pt-1">
        Solution to all your queries is just a tap away <br />— Call, WhatsApp or Email us directly.
      </p>
    </div>

    <div className="space-y-4 pt-2">
      <div className="flex items-center space-x-4 p-4 bg-[#e9e3d5] rounded-none">
        <div className="w-10 h-10 rounded-full bg-[#b88e4c] flex items-center justify-center text-neutral-900 shrink-0">
          <MapPin className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[12px] uppercase tracking-wider text-[#b88e4c] font-semibold">
            CORPORATE OFFICE ADDRESS:
          </h6>
          <p className="text-[14px] text-neutral-700 leading-snug font-light">
            Office No. 601, Above Namastey Salon, <br />The Pacific, Sector 13 Kharghar,
            <br />
            Navi Mumbai, Maharashtra - 410210
          </p>
        </div>
      </div>

      <a
        href={CONTACT.phoneHref}
        className="flex items-center space-x-4 p-4 bg-[#e9e3d5] rounded-none"
      >
        <div className="w-10 h-10 rounded-full bg-[#b88e4c] flex items-center justify-center text-neutral-900 shrink-0">
          <Phone className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[12px] uppercase tracking-wider text-[#b88e4c] font-semibold">
            CALL:
          </h6>
          <p className="text-[14px] text-neutral-700 font-light">+91 {CONTACT.phone}</p>
        </div>
      </a>

      <a
        href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hello N-Square! I would like to know more about your projects.')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-4 p-4 bg-[#e9e3d5] rounded-none"
      >
        <div className="w-10 h-10 rounded-full bg-[#b88e4c] flex items-center justify-center text-neutral-900 shrink-0">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[12px] uppercase tracking-wider text-[#b88e4c] font-semibold">
            WHATSAPP:
          </h6>
          <p className="text-[14px] text-neutral-700 font-light">
            +91 {CONTACT.phone} — chat with our concierge
          </p>
        </div>
      </a>

      <a
        href={`mailto:${CONTACT.email}`}
        className="flex items-center space-x-4 p-4 bg-[#e9e3d5] rounded-none"
      >
        <div className="w-10 h-10 rounded-full bg-[#b88e4c] flex items-center justify-center text-neutral-900 shrink-0">
          <Mail className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h6 className="text-[12px] uppercase tracking-wider text-[#b88e4c] font-semibold">
            EMAIL:
          </h6>
          <p className="text-[14px] text-neutral-700 font-light">{CONTACT.email}</p>
        </div>
      </a>
    </div>
  </div>
);


