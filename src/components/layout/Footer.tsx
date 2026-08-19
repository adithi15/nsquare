import React from 'react';
import { ThemeMode, NavTab } from '../../types';
import { PhoneCall, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/nsquare';

interface FooterProps {
  theme: ThemeMode;
  maharera?: string;
  onSelectTab?: (tab: NavTab) => void;
}

const COLUMN_TITLE = 'text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-semibold';
const LINK_ITEM = 'block text-left text-[14px] text-white/70 hover:text-[#C5A059] hover:translate-x-1 transition-all duration-300 cursor-pointer';

export const Footer: React.FC<FooterProps> = ({ theme, maharera = 'P52000000000', onSelectTab }) => {
  return (
    <footer className="relative w-full bg-[#0b0b0b] text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-[#C5A059]/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* top row — brand + link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <img
              src="/N-Square-logo.png"
              alt="N Square logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
            {/* <p className="font-serif italic text-lg md:text-xl text-[#C5A059]">{CONTACT.tagline}</p> */}
            <p className="text-[14px] text-white/55 font-light leading-relaxed max-w-sm">
              Two legacies. One vision — building landmarks across Navi Mumbai
              with an unbroken promise of quality and on-time delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className={COLUMN_TITLE} style={{ fontSize: '12px' }}>Quick Links</div>
            <div className="space-y-2.5 text-[14px]">
              <button onClick={() => onSelectTab && onSelectTab('residences')} className={LINK_ITEM}>Home</button>
              <button onClick={() => onSelectTab && onSelectTab('projects')} className={LINK_ITEM}>Projects</button>
              <button onClick={() => onSelectTab && onSelectTab('redevelopment')} className={LINK_ITEM}>Redevelopment</button>
              <button onClick={() => onSelectTab && onSelectTab('legacy')} className={LINK_ITEM}>About Us</button>
              <button onClick={() => onSelectTab && onSelectTab('contact')} className={LINK_ITEM}>Contact Us</button>
            </div>
          </div>

          {/* Reach Us */}
          <div className="lg:col-span-4 space-y-4">
            <div className={COLUMN_TITLE} style={{ fontSize: '12px' }}>Reach Us</div>
            <div className="space-y-3 text-[14px] text-white/70">
              <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 hover:text-[#C5A059] transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059] shrink-0" /> {CONTACT.phone}
              </a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-[#C5A059] transition-colors">
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" /> WhatsApp Concierge
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-[#C5A059] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" /> {CONTACT.email}
              </a>
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" /> {CONTACT.address}
              </p>
            </div>

            {/* Socials */}
            <div className="pt-3 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:-translate-y-0.5 transition-transform duration-300">
                <img src="/socials/facebook.png" alt="Facebook" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:-translate-y-0.5 transition-transform duration-300">
                <img src="/socials/instagram.png" alt="Instagram" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:-translate-y-0.5 transition-transform duration-300">
                <img src="/socials/youtube.png" alt="YouTube" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:-translate-y-0.5 transition-transform duration-300">
                <img src="/socials/linkedin.png" alt="LinkedIn" className="w-9 h-9 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 text-[10px] text-white/45 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="shrink-0 pt-0.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C5A059] shrink-0" />
            Copyrights @ {new Date().getFullYear()} N-Square Developers. All rights reserved.
          </span>
          <div className="text-[9px] text-white/35 font-light leading-relaxed text-left md:text-right max-w-2xl flex items-start gap-2 justify-start md:justify-end">
            <span className="w-1.5 h-1.5 bg-[#C5A059] shrink-0 mt-1" />
            <span>
              Disclaimer: Website content does not constitute a binding offer, contract, or legal disclosure. Images and location details are purely conceptual, indicative, and subject to change; actual products may vary. No accuracy or completeness is guaranteed. Buyers must independently verify all project details and documents on the official RERA website before purchasing.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
