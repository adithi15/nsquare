import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeMode } from '../types';

interface PrivacyPolicyPageProps {
  theme: ThemeMode;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ theme }) => {
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full min-h-screen pt-28 pb-20 transition-colors duration-500 bg-gradient-to-b ${
      isDark 
        ? 'from-[#0d0d0d] via-[#0A0A0A] to-[#17140f] text-[#F5F5F5]' 
        : 'from-[#FAF9F6] via-[#f5efe6] to-[#ebdcc5] text-[#121212]'
    }`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">


        {/* Header Title */}
        <div className="space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide leading-tight">
            Privacy Policy
          </h1>
          <p className={`text-sm sm:text-base font-light ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
            Effective Date: August 20, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className={`space-y-6 font-sans leading-relaxed text-sm sm:text-[15px] font-light text-justify ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          <p>
            N Square Developers is committed to protecting the privacy and confidentiality of its customers and visitors. We take reasonable and appropriate measures, in line with applicable laws and industry practices, to safeguard the Personal Information shared with us.
          </p>

          <p>
            Personal Information refers to any information or details relating to an individual that may directly or indirectly identify the person, either by itself or when combined with other information available to N Square Developers.
          </p>

          <p>
            When you voluntarily provide your Personal Information to N Square Developers through our website, enquiry forms, registrations, or other digital channels, you consent to our representatives, affiliates, and authorised business partners contacting you regarding our projects, products, services, enquiries, and related updates.
          </p>

          <p>
            Such communication may include telephone calls, SMS, email, or WhatsApp messages, including information about new projects, promotional offers, events, and other relevant updates. By submitting your contact details, you consent to receiving such communications, subject to applicable laws and regulations.
          </p>

          <p>
            N Square Developers may share relevant Personal Information with its affiliates, consultants, service providers, or authorised business partners where reasonably required to respond to your enquiries, provide services, or assist you in relation to our projects and offerings. Such parties are expected to handle the information responsibly and in accordance with applicable requirements.
          </p>

          <p>
            By providing your Personal Information through our website or any other digital or offline channel, you acknowledge and agree to the terms of this Privacy Policy. N Square Developers reserves the right to update, amend, or modify this Policy from time to time without prior notice. Any changes will be effective upon being published on our website.
          </p>

          <p>
            When you voluntarily contact us by email, submit an enquiry, or fill out a form on our website, we may retain the information provided to respond to your request and provide relevant assistance. The information collected may include your name, email address, mobile number, and other details voluntarily provided by you.
          </p>

          <p>
            You may browse our website without submitting Personal Information. However, if you choose to provide your contact details, you consent to being contacted by call, SMS, email, or WhatsApp regarding N Square Developers’ projects, services, offers, and updates, subject to applicable laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};
