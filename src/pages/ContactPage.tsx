import React, { useMemo, useState } from 'react';
import { ThemeMode } from '../types';
import { MessageCircle, PhoneCall, Clock, CalendarCheck } from 'lucide-react';
import { ContactHero, ContactInfo, ContactMap } from '../components/contact';
import { CONTACT, ONGOING_PROJECTS, COMPLETED_PROJECTS } from '../data/nsquare';

interface ContactPageProps {
  theme?: ThemeMode;
}

const VISIT_STEPS = [
  { step: '01', title: 'Reach Out', text: 'Tap WhatsApp or call — our concierge answers within minutes.' },
  { step: '02', title: 'Pick Your Slot', text: 'Choose a day and time that suits your family.' },
  { step: '03', title: 'Private Tour', text: 'Walk the actual site, model flat and amenities with our team.' },
];

export const ContactPage: React.FC<ContactPageProps> = ({ theme = 'light' }) => {
  const visitProjects = useMemo(() => [...ONGOING_PROJECTS, ...COMPLETED_PROJECTS], []);
  const [selectedProject, setSelectedProject] = useState(visitProjects[0]?.name ?? '');

  const visitHref = `${CONTACT.whatsappHref}?text=${encodeURIComponent(
    `Hello N-Square! I would like to schedule a private site visit for ${selectedProject}. Please share available slots.`
  )}`;

  return (
    <div className="w-full flex flex-col space-y-12 pb-16 bg-[#f8f6f0] text-neutral-800 font-sans overflow-hidden">
      <ContactHero />

      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pt-4">
        <div className="p-8 md:p-14 bg-[#f4efe6] shadow-xl border border-neutral-300/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full">
              <div className="w-[1px] h-80 bg-neutral-300/60" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8c7445] mb-2">Concierge Desk</p>
              <h3 className="serif italic text-2xl md:text-3xl font-light text-neutral-900 leading-tight">
                Plan a Private Visit
              </h3>
              <p className="text-[11px] leading-relaxed text-neutral-600 font-light mt-3 mb-6">
                No typing needed — pick a project, tap a channel and our concierge is one second away.
              </p>

              {/* Project picker — zero typing */}
              <label className="block text-[9px] uppercase tracking-[0.3em] text-neutral-500 mb-2" htmlFor="visit-project">
                Project you wish to visit
              </label>
              <select
                id="visit-project"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full bg-white border border-neutral-300/70 px-4 py-3 text-xs tracking-wide text-neutral-800 focus:outline-none focus:border-[#c2a26c] transition-colors mb-5 cursor-pointer"
              >
                {visitProjects.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} — {p.location}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <a
                  href={visitHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c2a26c] text-white py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#b0905c] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Schedule via WhatsApp
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="bg-neutral-900 text-white py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" /> Call Concierge
                </a>
              </div>

              {/* Visit flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-neutral-300/60 pt-6">
                {VISIT_STEPS.map((s) => (
                  <div key={s.step}>
                    <span className="serif italic text-2xl text-[#c2a26c]">{s.step}</span>
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-neutral-900 font-semibold mt-1.5 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-[11px] leading-relaxed text-neutral-500 font-light">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-5 border-t border-neutral-300/60">
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  <Clock className="w-3.5 h-3.5 text-[#c2a26c]" /> Visits 10 AM – 7 PM · All Days
                </span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#c2a26c]" /> Same-Day Slots Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
    </div>
  );
};
