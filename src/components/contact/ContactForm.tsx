import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

interface ContactFormProps {
  formData: ContactFormData;
  onChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitted: boolean;
  onReset: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  onChange,
  onSubmit,
  isSubmitting,
  submitted,
  onReset,
}) => {
  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="py-10 px-6 bg-[#e8e2d5] border border-[#c2a26c]/40 text-center space-y-3"
      >
        <CheckCircle2 className="w-10 h-10 text-[#c2a26c] mx-auto" />
        <h3 className="text-xl font-serif text-neutral-900">Thank You! Message Sent</h3>
        <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
          Your inquiry has been received by Platinum Group Client Relations. One of our executives will contact you shortly.
        </p>
        <button
          onClick={onReset}
          className="mt-2 bg-[#c2a26c] text-white px-6 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#b0905c] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[9px] uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
            FULL NAME *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full p-3 bg-white border border-neutral-200 text-xs focus:outline-none focus:border-[#c2a26c] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[9px] uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
            EMAIL ID *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="name@domain.com"
            className="w-full p-3 bg-white border border-neutral-200 text-xs focus:outline-none focus:border-[#c2a26c] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[9px] uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
            PHONE NUMBER *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="e.g. 9820012345"
            className="w-full p-3 bg-white border border-neutral-200 text-xs focus:outline-none focus:border-[#c2a26c] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[9px] uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
            SELECT PROJECT *
          </label>
          <select
            required
            value={formData.project}
            onChange={(e) => onChange('project', e.target.value)}
            className="w-full p-3 bg-white border border-neutral-200 text-xs text-neutral-700 focus:outline-none focus:border-[#c2a26c] transition-colors"
          >
            <option value="" disabled>
              Select Project
            </option>
            <option value="Parksyde">Platinum Parksyde, Kharghar, Navi Mumbai</option>
            <option value="Elysium">Platinum Elysium, Nerul, Navi Mumbai</option>
            <option value="Esquire">Platinum Esquire, Ulwe, Navi Mumbai</option>
            <option value="Reserve">Platinum The Reserve, Kharghar, Navi Mumbai</option>
            <option value="Westwoods">Platinum Westwoods, Seawoods, Navi Mumbai</option>
            <option value="Mansionz">Platinum Mansionz, Seawoods, Navi Mumbai</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[9px] uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
          MESSAGE
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          placeholder="Share your requirements or preferred viewing schedule..."
          className="w-full p-3 bg-white border border-neutral-200 text-xs focus:outline-none focus:border-[#c2a26c] transition-colors resize-none"
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#c2a26c] text-white py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#b0905c] transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? <span>Processing Request...</span> : <><span>SEND MESSAGE</span><Send className="w-3.5 h-3.5" /></>}
      </motion.button>
    </form>
  );
};
