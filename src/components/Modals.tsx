import React, { useState } from 'react';
import { Property, ThemeMode, ScheduleVisitForm, RequestBrochureForm } from '../types';
import { X, CheckCircle2, Download, Calendar, Phone, Mail, User } from 'lucide-react';

interface BrochureModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ property, isOpen, onClose, theme }) => {
  const [form, setForm] = useState<RequestBrochureForm>({
    name: '',
    email: '',
    phone: '',
    propertyId: property?.id || 'aurum-villas',
    receiveOnWhatsApp: true,
  });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  const handleReset = () => {
    setDownloaded(false);
    onClose();
  };

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

        {downloaded ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl serif italic">E-Brochure Dispatched</h3>
              <p className="text-xs opacity-80 max-w-sm mx-auto">
                We have generated and dispatched the high-resolution brochure for <span className="text-gold font-semibold">{property.title}</span> to {form.email}.
              </p>
            </div>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={property.image}
                download={`${property.title}-Brochure.jpg`}
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-[#D4B575]"
              >
                <Download className="w-4 h-4" />
                <span>Direct Digital Download</span>
              </a>
              <button
                onClick={handleReset}
                className="text-xs underline opacity-60 hover:opacity-100 cursor-pointer py-2"
              >
                Return to Showcase
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold block mb-1">Digital Portfolio Access</span>
              <h3 className="text-2xl serif italic">Request Brochure for {property.title}</h3>
              <p className="text-xs opacity-70 mt-1">{property.subtitle} — {property.location}</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gold absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full pl-10 pr-3 py-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                      theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gold absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full pl-10 pr-3 py-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                      theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gold absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`w-full pl-10 pr-3 py-3 rounded-md border text-xs focus:outline-none focus:border-gold ${
                      theme === 'dark' ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-neutral-300 text-black'
                    }`}
                  />
                </div>
              </div>

              <label className="flex items-center space-x-3 cursor-pointer text-xs opacity-80 pt-1">
                <input
                  type="checkbox"
                  checked={form.receiveOnWhatsApp}
                  onChange={(e) => setForm({ ...form, receiveOnWhatsApp: e.target.checked })}
                  className="accent-[#C5A059] w-4 h-4"
                />
                <span>Send PDF floor plans directly to WhatsApp</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-black py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4B575] transition-all rounded-sm cursor-pointer shadow-lg"
            >
              Dispatch Digital Brochure
            </button>
          </form>
        )}
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
  const [form, setForm] = useState<ScheduleVisitForm>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    propertyId: property?.id || 'aurum-villas',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

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

        {confirmed ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl serif italic">Private Visit Scheduled</h3>
              <p className="text-xs opacity-80 max-w-sm mx-auto">
                Your exclusive site appointment for <span className="text-gold font-semibold">{property.title}</span> is reserved for <span className="text-gold font-semibold">{form.date}</span> at <span className="text-gold font-semibold">{form.timeSlot}</span>.
              </p>
              <p className="text-[10px] opacity-60">Our Private Chauffeur protocol confirmation will be sent to your email.</p>
            </div>
            <button
              onClick={() => { setConfirmed(false); onClose(); }}
              className="bg-gold text-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-[#D4B575]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold block mb-1">VIP Site Experience</span>
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest opacity-60 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              Confirm Site Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
