import React from 'react';
import { Property, ThemeMode, ScheduleVisitForm } from '../../types';
import { X, Download, Calendar, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/nsquare';

interface BrochureModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

// Pure frontend modal — instant download plus direct reach-out options, no fake dispatch.
export const BrochureModal: React.FC<BrochureModalProps> = ({ property, isOpen, onClose, theme }) => {
  if (!isOpen || !property) return null;

  const whatsappHref = `${CONTACT.whatsappHref}?text=${encodeURIComponent(
    `Hello N-Square, please share the e-brochure and details for ${property.title} (${property.location}).`
  )}`;

  const borderClasses = theme === 'dark' ? 'border-white/10 text-white' : 'border-neutral-300 text-black';
  const ghostButtonClasses = theme === 'dark'
    ? 'border-white/30 text-white hover:border-gold hover:text-gold'
    : 'border-neutral-400 text-neutral-800 hover:border-gold hover:text-gold';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`w-full max-w-lg p-8 rounded-2xl glass-card relative border ${borderClasses}`}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gold/20 text-gold transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center py-4 space-y-6">
          <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold">
            <Download className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold block">E-Brochure Access</span>
            <h3 className="text-2xl serif italic">{property.title}</h3>
            <p className="text-xs opacity-70">{property.subtitle} — {property.location}</p>
          </div>
          <p className="text-xs opacity-80 max-w-sm mx-auto">
            Download the brochure instantly, or reach out to us directly for floor plans, pricing and site visits.
          </p>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={property.image}
              download={`${property.title}-Brochure.jpg`}
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-[#D4B575]"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={`border px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center justify-center space-x-2 transition-colors ${ghostButtonClasses}`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request on WhatsApp</span>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={CONTACT.phoneHref}
                className={`border px-4 py-3 text-[10px] uppercase tracking-[0.15em] font-bold rounded-sm flex items-center justify-center space-x-2 transition-colors ${ghostButtonClasses}`}
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Brochure Request — ${property.title}`)}`}
                className={`border px-4 py-3 text-[10px] uppercase tracking-[0.15em] font-bold rounded-sm flex items-center justify-center space-x-2 transition-colors ${ghostButtonClasses}`}
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ScheduleModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ property, isOpen, onClose, theme }) => {
  const [form, setForm] = React.useState<ScheduleVisitForm>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    propertyId: property?.id || '',
    notes: ''
  });
  const [prepared, setPrepared] = React.useState(false);

  if (!isOpen || !property) return null;

  const visitMessage =
    `Hello N-Square, I would like to schedule a site visit for ${property.title}.%0A` +
    `Name: ${form.name}%0A` +
    `Phone: ${form.phone}%0A` +
    `Preferred Date: ${form.date}%0A` +
    `Preferred Time: ${form.timeSlot}`;
  const whatsappHref = `${CONTACT.whatsappHref}?text=${visitMessage}`;
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Site Visit Request — ${property.title}`)}&body=${visitMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrepared(true);
  };

  const ghostButtonClasses = theme === 'dark'
    ? 'border-white/30 text-white hover:border-gold hover:text-gold'
    : 'border-neutral-400 text-neutral-800 hover:border-gold hover:text-gold';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`w-full max-w-lg p-8 rounded-2xl glass-card relative border ${
        theme === 'dark' ? 'border-white/10 text-white' : 'border-neutral-300 text-black'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gold/20 text-gold transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {prepared ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl serif italic">Visit Request Ready</h3>
              <p className="text-xs opacity-80 max-w-sm mx-auto">
                Your site visit request for <span className="text-gold font-semibold">{property.title}</span> on{' '}
                <span className="text-gold font-semibold">{form.date}</span> at{' '}
                <span className="text-gold font-semibold">{form.timeSlot}</span> is pre-filled below.
                Send it via WhatsApp or email and our team will confirm with you.
              </p>
            </div>
            <div className="pt-2 flex flex-col space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-[#D4B575]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
              <a
                href={mailHref}
                className={`border px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center justify-center space-x-2 transition-colors ${ghostButtonClasses}`}
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </a>
              <button
                onClick={() => { setPrepared(false); onClose(); }}
                className="text-xs underline opacity-60 hover:opacity-100 cursor-pointer py-2"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold block mb-1">Site Visit</span>
              <h3 className="text-2xl serif italic">Schedule Visit to {property.title}</h3>
              <p className="text-xs opacity-70 mt-1">{property.location}</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full p-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                    theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full p-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                    theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`w-full p-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                      theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Preferred Time</label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className={`w-full p-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                      theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                    }`}
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-black py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4B575] transition-all rounded-sm cursor-pointer shadow-lg"
            >
              Prepare Visit Request
            </button>
            <p className="text-[10px] opacity-60 text-center">
              Next step opens WhatsApp or your email app — nothing is sent automatically.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
