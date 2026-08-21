import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { ChevronDown, Check, Loader2 } from 'lucide-react';
import { ContactHero, ContactInfo, ContactMap } from '../components/contact';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTACT_TEMPLATE_ID
} from '../lib/emailjs';

interface ContactPageProps {
  theme?: ThemeMode;
}

const CONNECTIONS = [
  'Redevelopment Enquiry',
  'New Customer',
  'Existing Customer',
  'Channel Partner',
  'Vendor / Supplier',
  'Investor',
  'Corporate Enquiry',
  'General Enquiry',
  'Media / Press',
  'Careers'
];

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    connection: '',
    phoneNumber: '',
    emailId: '',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name:    formValues.fullName,
          phone:        formValues.phoneNumber,
          email:        formValues.emailId,
          connection:   formValues.connection || 'Not specified',
          message:      formValues.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormValues({ fullName: '', connection: '', phoneNumber: '', emailId: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full flex flex-col pb-0 bg-[#f8f6f0] text-neutral-800 font-sans overflow-hidden">
      <ContactHero />

      <section className="relative z-20 px-4 md:px-8 max-w-[1320px] mx-auto w-full -mt-6 md:-mt-8 mb-16 md:mb-20 ">
        <div className="p-6 md:p-10 bg-[#f3e8db] shadow-none border-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch lg:ml-8">
            <div className="lg:col-span-5 bg-[#faf6ee] p-5 md:p-7 rounded-none ">
              <ContactInfo />
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center items-center self-stretch">
              <div className="w-[1px] h-[80%] min-h-[260px] bg-white" />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="serif italic text-xl text-neutral-900">Message Sent Successfully</h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you for reaching out to us. Our concierge desk will contact you shortly to address your inquiry.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#b88a33] underline hover:text-[#9c7423] font-medium cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-bold mb-6">
                    Please fill out the form below and let us know what you are looking for so we
                    <br />
                    can create your custom solution and provide you with an estimate quote.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs text-[#808080] font-medium mb-1.5" htmlFor="fullName">
                        Full Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formValues.fullName}
                        onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                        className="w-full bg-white border border-[#808080] px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#b88e4c] transition-colors rounded-none"
                      />
                    </div>

                    {/* Choose your connection */}
                    <div className="relative">
                      <label className="block text-xs text-[#808080] font-medium mb-1.5">
                        Choose your connection
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-white border border-[#808080] px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#b88e4c] flex items-center justify-between text-left cursor-pointer transition-colors rounded-none"
                      >
                        <span className="truncate">{formValues.connection || "Select"}</span>
                        <ChevronDown className="w-4 h-4 text-[#808080] shrink-0" />
                      </button>

                      {isDropdownOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-30 cursor-default"
                            onClick={() => setIsDropdownOpen(false)}
                          />
                          <div className="absolute left-0 right-0 mt-1 z-40 bg-white border border-[#d8c3a5] shadow-lg max-h-60 overflow-y-auto rounded-none">
                            {CONNECTIONS.map((conn) => (
                              <button
                                key={conn}
                                type="button"
                                onClick={() => {
                                  setFormValues({ ...formValues, connection: conn });
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-2.5 text-xs text-neutral-800 hover:bg-[#fcf8f2] hover:text-black transition-colors font-medium border-b border-neutral-100 last:border-0 cursor-pointer rounded-none"
                              >
                                {conn}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs text-[#808080] font-medium mb-1.5" htmlFor="phoneNumber">
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        required
                        value={formValues.phoneNumber}
                        onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
                        className="w-full bg-white border border-[#808080] px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#b88e4c] transition-colors rounded-none"
                      />
                    </div>

                    {/* Email ID */}
                    <div>
                      <label className="block text-xs text-[#808080] font-medium mb-1.5" htmlFor="emailId">
                        Email ID
                      </label>
                      <input
                        type="email"
                        id="emailId"
                        value={formValues.emailId}
                        onChange={(e) => setFormValues({ ...formValues, emailId: e.target.value })}
                        className="w-full bg-white border border-[#808080] px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#b88e4c] transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="pt-1">
                    <label className="block text-xs text-[#808080] font-medium mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formValues.message}
                      onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                      className="w-full bg-white border border-[#808080] px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#b88e4c] transition-colors resize-none rounded-none"
                    />
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[10px] leading-relaxed text-neutral-600 font-light mt-4">
                    "I authorise N Square Developers & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC."
                  </p>

                  {/* Error Message */}
                  {sendError && (
                    <p className="text-[11px] text-red-600 bg-red-50 border border-red-200 px-3 py-2 mt-2 leading-relaxed">
                      {sendError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="bg-[#c5a059] text-black px-7 sm:px-8 py-3 text-[12px] uppercase tracking-[0.35em] font-bold hover:bg-[#D4B575] transition-all rounded-none shadow-[0_8px_25px_rgba(0,0,0,0.3)] cursor-pointer pointer-events-auto disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
    </div>
  );
};
