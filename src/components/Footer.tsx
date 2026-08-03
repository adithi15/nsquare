import React from 'react';
import { ThemeMode, NavTab } from '../types';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  maharera?: string;
  onSelectTab?: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, maharera = 'P51800029341', onSelectTab }) => {
  return (
    <footer className={`w-full bg-[#101010] text-white py-16 border-t border-white/10 ${theme === 'dark' ? '' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.35em] text-gold font-bold">Quick Links</div>
          <div className="space-y-2 text-[11px] text-white/75">
            <button onClick={() => onSelectTab && onSelectTab('residences')} className="block hover:text-gold transition-colors text-left">Home</button>
            <button onClick={() => onSelectTab && onSelectTab('projects')} className="block hover:text-gold transition-colors text-left">Projects</button>
            <button onClick={() => onSelectTab && onSelectTab('legacy')} className="block hover:text-gold transition-colors text-left">About Us</button>
            <button onClick={() => onSelectTab && onSelectTab('legacy')} className="block hover:text-gold transition-colors text-left">Team</button>
            <button className="block hover:text-gold transition-colors text-left">Career</button>
            <button onClick={() => onSelectTab && onSelectTab('contact')} className="block hover:text-gold transition-colors text-left">Contact Us</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.35em] text-gold font-bold">Ongoing Projects</div>
          <div className="space-y-2 text-[11px] text-white/75">
            <div>Platinum Parksyde</div>
            <div>Platinum Elysium</div>
            <div>Platinum Esquire</div>
            <div>Platinum The Reserve</div>
            <div>Platinum Mansionz</div>
            <div>Platinum Westwoods</div>
            <div>Platinum Oakwoods</div>
            <div>Platinum Sicily</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.35em] text-gold font-bold">Help Center</div>
          <div className="space-y-2 text-[11px] text-white/75">
            <button className="block hover:text-gold transition-colors text-left">Terms & Conditions</button>
            <button className="block hover:text-gold transition-colors text-left">Privacy Policy</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.35em] text-gold font-bold">Follow Us</div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/theplatinumgroup.co.in/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white/80 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/the_platinumgroup_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/80 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/@the_PlatinumGroup?si=oTySlnoW82KArTQl" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-white/80 hover:text-gold transition-colors"><Youtube className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/company/theplatinumgrp/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
          <div className="text-[11px] text-white/60">Corporate Office: Platinum House, Worli, Mumbai</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 border-t border-white/10 pt-6 text-[10px] text-white/50 flex flex-col md:flex-row justify-between gap-3">
        <span>Copyrights @ {new Date().getFullYear()}</span>
        <span>Design & Developed by Thoughtinteract</span>
      </div>
    </footer>
  );
};
