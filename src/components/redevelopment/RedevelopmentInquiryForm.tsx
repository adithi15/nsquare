import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_REDEVELOPMENT_TEMPLATE_ID
} from '../../lib/emailjs';

interface RedevelopmentInquiryFormProps {
  isDark: boolean;
}

export const RedevelopmentInquiryForm: React.FC<RedevelopmentInquiryFormProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    societyName: '',
    area: '',
    societyAddress: '',
    message: ''
  });
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.phone || !formData.societyName || !formData.area || !formData.societyAddress) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!isNotRobot) {
      setErrorMessage('Please confirm that you are not a robot.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REDEVELOPMENT_TEMPLATE_ID,
        {
          name:             formData.name,
          email:            formData.email,
          phone:            formData.phone,
          society_name:     formData.societyName,
          area:             formData.area,
          society_address:  formData.societyAddress,
          message:          formData.message || 'No message provided.',
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMessage('Failed to send. Please try again or contact us directly at info@nsquaredevelopers.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      societyName: '',
      area: '',
      societyAddress: '',
      message: ''
    });
    setDocumentFile(null);
    setIsNotRobot(false);
    setFormSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 overflow-hidden flex items-center justify-center border-t border-neutral-300/10 dark:border-white/5">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/branding/redevelopment-contact.jpg"
          alt="Navi Mumbai skyline"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Column: Dark Translucent Card with description */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 sm:p-10 md:p-12 text-white/95 rounded-none shadow-2xl">
            <p className="text-xs sm:text-sm md:text-base leading-snug font-light font-sans tracking-wide text-left">
              By choosing N Square as your redevelopment partner, you can move forward with confidence, knowing that your society is in capable hands. We are committed to transparent dealings, quality construction, timely execution, and creating lasting value for every member.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-snug font-medium font-sans tracking-wide mt-2 text-[#C5A059]">
              A trusted partner for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 w-full">
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-black/60 backdrop-blur-md border border-white/10 p-8 sm:p-10 text-center text-white rounded-none shadow-2xl space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#C5A059] uppercase tracking-wider">
                  Thank You!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your redevelopment inquiry has been submitted successfully. Our team will review the details and get in touch with you shortly.
                </p>
                <button
                  onClick={handleResetForm}
                  className="bg-[#C5A059] hover:bg-[#B08F4C] text-white font-sans text-xs font-bold uppercase tracking-wider px-6 py-3 transition-all duration-300 cursor-pointer active:scale-95 shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                {errorMessage && (
                  <div className="bg-red-900/60 border border-red-500/30 text-red-200 p-3 text-xs uppercase tracking-wider font-semibold text-center">
                    {errorMessage}
                  </div>
                )}

                {/* Desktop 2x3 Grid for first 5 inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                  />
                  <input
                    type="text"
                    name="societyName"
                    value={formData.societyName}
                    onChange={handleInputChange}
                    placeholder="Society Name"
                    required
                    className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                  />
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Area"
                    required
                    className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                  />
                  <div className="hidden md:block" /> {/* Layout placeholder next to Area */}
                </div>

                {/* Full-width inputs */}
                <input
                  type="text"
                  name="societyAddress"
                  value={formData.societyAddress}
                  onChange={handleInputChange}
                  placeholder="Society Address"
                  required
                  className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 h-12 w-full rounded-none font-sans text-sm shadow-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  className="bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] px-4 py-3 min-h-[96px] w-full rounded-none font-sans text-sm shadow-sm resize-y"
                />

                {/* Styled Document File Input */}
                <div className="relative w-full">
                  <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mb-1.5 font-semibold">
                    Upload Documents
                  </label>
                  <div className="flex items-center bg-white text-neutral-800 rounded-none h-12 px-2 shadow-sm">
                    <label className="bg-neutral-100 hover:bg-neutral-200 border border-black px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold cursor-pointer select-none shrink-0 text-neutral-700 transition-colors rounded">
                      Choose File
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setDocumentFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <span className="px-4 text-xs text-neutral-500 truncate">
                      {documentFile ? documentFile.name : 'No file chosen'}
                    </span>
                  </div>
                </div>

                {/* Mock reCAPTCHA Card */}
                <div className="flex items-center justify-between bg-[#f9f9f9] border border-[#d3d3d3] rounded-sm p-3 w-72 shadow-sm text-neutral-800">
                  <div className="flex items-center space-x-3.5">
                    <input
                      type="checkbox"
                      id="recaptcha-check"
                      checked={isNotRobot}
                      onChange={(e) => setIsNotRobot(e.target.checked)}
                      className="w-6 h-6 border-2 border-[#c1c1c1] rounded-sm bg-white cursor-pointer accent-[#C5A059] focus:ring-0 focus:outline-none"
                    />
                    <label htmlFor="recaptcha-check" className="text-[13px] font-sans font-normal text-[#2d2d2d] select-none cursor-pointer">
                      I'm not a robot
                    </label>
                  </div>
                  <div className="flex flex-col items-center justify-center pl-4 pr-1">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-[8px] text-[#555] font-sans font-light mt-0.5 tracking-tighter">reCAPTCHA</span>
                    <div className="flex space-x-1 mt-0">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[7px] text-[#555] hover:underline">Privacy</a>
                      <span className="text-[7px] text-[#555]">-</span>
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[7px] text-[#555] hover:underline">Terms</a>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#8f2b2b] hover:bg-[#a63c3c] disabled:bg-neutral-500 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300 cursor-pointer active:scale-95 shadow-md rounded-none w-auto flex items-center justify-center min-w-[120px]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
