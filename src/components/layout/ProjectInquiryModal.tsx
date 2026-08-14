import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Mail, MapPin, Building, ChevronRight, Check } from 'lucide-react';
import { CONTACT, ONGOING_PROJECTS, COMPLETED_PROJECTS, UPCOMING_PROJECTS } from '../../data/nsquare';
import { ThemeMode } from '../../types';

export interface ProjectInquiryData {
  projectName: string;
  projectLocation?: string;
  projectImage?: string;
  projectStatus?: string;
}

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectInquiryData | null;
  theme?: ThemeMode;
}

const INQUIRY_INTENTS = [
  { id: 'brochure', label: 'E-Brochure & Floorplans', msg: 'share the e-brochure and floor plans' },
  { id: 'visit', label: 'Schedule Site Visit', msg: 'schedule a private site visit' },
  { id: 'pricing', label: 'Pricing & Payment Plans', msg: 'share the pricing details and payment schedule' },
  { id: 'general', label: 'General Inquiry', msg: 'connect with me regarding unit availability' },
];

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const allProjects = React.useMemo(() => [
    ...ONGOING_PROJECTS.map((p) => ({ name: p.name, location: `${p.location}, Navi Mumbai`, image: p.image, status: 'Ongoing' })),
    ...COMPLETED_PROJECTS.map((p) => ({ name: p.name, location: `${p.location}, Navi Mumbai`, image: p.image, status: 'Completed' })),
    ...UPCOMING_PROJECTS.map((p) => ({ name: p.name, location: `${p.location}, Navi Mumbai`, image: p.image, status: 'Upcoming' })),
  ], []);

  const [selectedProjectName, setSelectedProjectName] = useState<string>('');
  const [selectedIntent, setSelectedIntent] = useState(INQUIRY_INTENTS[0].id);

  useEffect(() => {
    if (project?.projectName) {
      setSelectedProjectName(project.projectName);
    } else if (allProjects.length > 0) {
      setSelectedProjectName(allProjects[0].name);
    }
  }, [project, allProjects, isOpen]);

  if (!isOpen) return null;

  const currentProjectDetails = allProjects.find((p) => p.name === selectedProjectName) || {
    name: selectedProjectName || 'N-Square Project',
    location: project?.projectLocation || 'Navi Mumbai',
    image: project?.projectImage || '/assets/branding/city-aerial.jpg',
    status: project?.projectStatus || 'Ongoing',
  };

  const activeIntentObj = INQUIRY_INTENTS.find((i) => i.id === selectedIntent) || INQUIRY_INTENTS[0];

  const dynamicWhatsAppText = `Hello N-Square Developers, I would like to ${activeIntentObj.msg} for *${currentProjectDetails.name}* (${currentProjectDetails.location}). Please assist me.`;
  const dynamicWhatsAppHref = `${CONTACT.whatsappHref}?text=${encodeURIComponent(dynamicWhatsAppText)}`;

  const emailSubject = `Inquiry: ${currentProjectDetails.name} — ${activeIntentObj.label}`;
  const emailBody = `Hello N-Square Team,\n\nI am interested in ${currentProjectDetails.name} located at ${currentProjectDetails.location}.\n\nRequirement: ${activeIntentObj.label}\n\nPlease share the relevant details, brochure and floor plans.\n\nThank you.`;
  const dynamicMailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 text-white my-auto flex flex-col"
        >
          {/* Header Banner with Project Thumbnail */}
          <div className="relative h-32 sm:h-36 bg-neutral-900 overflow-hidden shrink-0">
            <img
              src={currentProjectDetails.image}
              alt={currentProjectDetails.name}
              className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/65 to-black/60" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer border border-white/10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-3 left-6 right-16">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A059] font-bold block mb-1">
                Project Concierge
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal truncate">
                {currentProjectDetails.name}
              </h3>
              <p className="text-[11px] text-white/60 font-light flex items-center gap-1.5 truncate mt-0.5">
                <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                <span>{currentProjectDetails.location}</span>
                <span className="text-white/30">·</span>
                <span className="text-[#C5A059] font-medium">{currentProjectDetails.status}</span>
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-7 space-y-6">
            
            {/* 1. Project Selector */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2 font-medium">
                Selected Project
              </label>
              <div className="relative">
                <select
                  value={selectedProjectName}
                  onChange={(e) => setSelectedProjectName(e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/15 px-4 py-3 rounded-xl text-xs text-white appearance-none focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer pr-10 font-medium"
                >
                  <optgroup label="Ongoing Landmarks" className="bg-[#1c1c1c] text-white">
                    {ONGOING_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {p.location} (Ongoing)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Completed Projects" className="bg-[#1c1c1c] text-white">
                    {COMPLETED_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {p.location} (Completed)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Upcoming Projects" className="bg-[#1c1c1c] text-white">
                    {UPCOMING_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {p.location} (Upcoming)
                      </option>
                    ))}
                  </optgroup>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                  <Building className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
            </div>

            {/* 2. Quick Requirement Intent Pills */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2.5 font-medium">
                I Am Looking For
              </label>
              <div className="grid grid-cols-2 gap-2">
                {INQUIRY_INTENTS.map((intent) => {
                  const isSelected = selectedIntent === intent.id;
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setSelectedIntent(intent.id)}
                      className={`text-left px-3.5 py-2.5 rounded-lg text-[11px] font-medium transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? 'bg-[#C5A059]/15 border-[#C5A059] text-white shadow-sm'
                          : 'bg-[#1c1c1c]/80 border-white/10 text-neutral-300 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-1">{intent.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Dynamic Direct Connect Actions */}
            <div className="space-y-3 pt-1">
              {/* WhatsApp (Primary) */}
              <a
                href={dynamicWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-[#25D366] hover:bg-[#20ba59] text-black p-4 rounded-xl flex items-center justify-between transition-all duration-200 shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-black">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-[11px] text-black/80 font-medium">
                      Instant response & e-brochure for {currentProjectDetails.name}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-black/70 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Call & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Direct Call */}
                <a
                  href={CONTACT.phoneHref}
                  className="group bg-[#1c1c1c] hover:bg-[#252525] border border-white/15 hover:border-[#C5A059]/60 p-3.5 rounded-xl flex items-center justify-between transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs text-white">Call Concierge</h4>
                      <p className="text-[10px] text-neutral-400 font-light">+91 885 885 8835</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={dynamicMailHref}
                  className="group bg-[#1c1c1c] hover:bg-[#252525] border border-white/15 hover:border-[#C5A059]/60 p-3.5 rounded-xl flex items-center justify-between transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs text-white">Email Us</h4>
                      <p className="text-[10px] text-neutral-400 font-light">info@nsquaredevelopers.com</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Footer Trust Note */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400 font-light">
              <span>Direct Developer Desk · Navi Mumbai</span>
              <span>Available 10 AM – 7 PM</span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
