import React from 'react';

export const RedevelopmentHero: React.FC = () => {
  return (
    <section className="relative w-full h-[75vh] min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/branding/redevelopment-hero.jpg"
          alt="Navi Mumbai Skyline"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
        <img
          src="/assets/branding/think_redevelopment_text.png"
          alt="Think Redevelopment, Think N Square"
          className="w-full max-w-[600px] h-auto object-contain select-none"
        />
      </div>
    </section>
  );
};
