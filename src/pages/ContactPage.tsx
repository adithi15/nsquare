import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { ContactHero, ContactInfo, ContactForm, ContactMap, type ContactFormData } from '../components/contact';

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  project: '',
  message: ''
};

interface ContactPageProps {
  theme?: ThemeMode;
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme = 'light' }) => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitted(false);
  };

  return (
    <div className="w-full flex flex-col space-y-12 pb-16 bg-[#f8f6f0] text-neutral-800 font-sans select-none overflow-hidden">
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
              <p className="text-[11px] leading-relaxed text-neutral-600 font-light mb-6">
                Please fill out the form below and let us know what you are looking for so we can create your custom solution and provide you with an estimate quote.
              </p>

              <ContactForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitted={submitted}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
    </div>
  );
};
