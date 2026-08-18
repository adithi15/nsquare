import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

export const ContactMap: React.FC = () => (
  <section className="relative w-full h-[450px] md:h-[500px] overflow-hidden bg-neutral-200">
    {/* 1. Map Embed Container */}
    <div className="w-full h-[calc(100%+60px)] -mt-[56px] overflow-hidden">
      <iframe
        title="N-Square Developers Location Map"
        src="https://maps.google.com/maps?q=One+Platinum,+Plot+no+8,+Sector+15,+CBD+Belapur,+Navi+Mumbai,+Maharashtra+400614&z=16&output=embed"
        width="100%"
        height="100%"
        className="border-0 block w-full h-full scale-[1.02]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* 2. Floating Google Maps Address Card */}
    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.25)] p-3.5 max-w-[320px] w-[calc(100%-32px)] border border-neutral-200 font-sans">
      <div className="flex items-start justify-between gap-3">

        {/* Address & Reviews */}
        <div className="space-y-0.5">
          <h4 className="text-[14px] font-semibold text-[#202124] leading-snug">
            ONE PLATINUM
          </h4>
          <p className="text-[12px] text-[#5f6368] leading-relaxed">
            Plot no 8, Sector 15, CBD<br />
            Belapur, Navi Mumbai,<br />
            Maharashtra 400614
          </p>

          <div className="flex items-center gap-1.5 pt-1 text-[12px] text-[#5f6368]">
            <span className="font-medium text-[#202124]">4.5</span>
            <span className="text-[#e37400] text-sm leading-none">★</span>
            <a
              href="https://maps.google.com/?q=ONE+PLATINUM+CBD+Belapur+Navi+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="text-[#1a73e8] underline cursor-pointer"
            >
              (71)
            </a>
            <span className="text-[#70757a] text-[10px] border border-[#70757a] rounded-full w-3.5 h-3.5 inline-flex items-center justify-center font-serif ml-0.5 cursor-pointer">
              i
            </span>
          </div>
        </div>

        {/* Action Buttons: 1st Icon replaced with SquareArrowOutUpRight */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://maps.google.com/?q=ONE+PLATINUM+CBD+Belapur+Navi+Mumbai"
            target="_blank"
            rel="noreferrer"
            title="Open in Google Maps"
            className="w-8 h-8 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] flex items-center justify-center text-[#1a73e8] transition-colors"
          >
            <SquareArrowOutUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=ONE+PLATINUM+Plot+no+8+Sector+15+CBD+Belapur+Navi+Mumbai+400614"
            target="_blank"
            rel="noreferrer"
            title="Get Directions"
            className="w-8 h-8 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] flex items-center justify-center text-white shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 rotate-45 fill-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
);