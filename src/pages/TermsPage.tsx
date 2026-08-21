import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeMode } from '../types';

interface TermsPageProps {
  theme: ThemeMode;
}

export const TermsPage: React.FC<TermsPageProps> = ({ theme }) => {
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
            Terms of Use
          </h1>
          <p className={`text-sm sm:text-base font-light ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
            Effective Date: August 20, 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className={`space-y-8 font-sans leading-relaxed text-sm sm:text-[15px] font-light text-justify ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          <p>
            Please read these Terms of Use and disclaimers carefully before accessing or using the N Square Developers website.
          </p>

          <p>
            N Square Developers maintains this website (the “Site”) for general informational and personal use. Your access to and use of the Site is subject to these Terms of Use. N Square Developers reserves the right to modify or update these Terms at any time without prior notice. By accessing or using this Site, you acknowledge and agree to these Terms. If you do not agree with any part of these Terms, please do not use the Site.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Accuracy and Completeness of Information
            </h2>
            <p>
              N Square Developers makes reasonable efforts to provide accurate, current, and reliable information on this Site. However, the information provided is for general guidance only, and N Square Developers does not guarantee that all information is complete, accurate, current, or free from errors or omissions.
            </p>
            <p>
              Project details, specifications, layouts, amenities, images, plans, prices, timelines, and other information displayed on the Site may be subject to change, approval, availability, and applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Modification of the Site
            </h2>
            <p>
              N Square Developers reserves the right to modify, update, suspend, or discontinue any part of the Site, including its content, services, features, or resources, at its sole discretion and without prior notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Your Use of the Site
            </h2>
            <p>
              You may access and download content from the Site solely for personal and non-commercial purposes, provided that all copyright, trademark, and proprietary notices remain intact.
            </p>
            <p>
              Accessing or using the Site does not grant you ownership or any intellectual property rights in its content. You may not copy, reproduce, modify, distribute, publish, display, transmit, sell, or commercially use any content from the Site without the prior written permission of N Square Developers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              No Unlawful or Prohibited Use
            </h2>
            <p>
              You agree not to use the Site for any unlawful, fraudulent, abusive, or prohibited purpose, or in violation of any applicable laws, rules, or regulations in India.
            </p>
            <p>
              You must not attempt to interfere with the security, functionality, or proper operation of the Site or use it to transmit harmful or unauthorized material.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Unsolicited Submissions
            </h2>
            <p>
              N Square Developers does not ordinarily accept unsolicited creative concepts, suggestions, designs, proposals, or other materials from the public.
            </p>
            <p>
              If you voluntarily submit any such material to N Square Developers, you acknowledge that it may be treated as non-confidential and may be used by N Square Developers for legitimate business purposes, subject to applicable law. You agree not to submit any material that infringes the rights of any third party.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Privacy Policy
            </h2>
            <p>
              Any personal information submitted through this Site will be handled in accordance with the N Square Developers Privacy Policy. By providing your information through the Site, you acknowledge and agree to the applicable terms of that Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Disclaimers
            </h2>
            <p>
              The Site and its content are provided on an “as is” and “as available” basis. To the extent permitted by applicable law, N Square Developers makes no express or implied warranties regarding the accuracy, completeness, reliability, availability, suitability, or uninterrupted operation of the Site.
            </p>
            <p>
              N Square Developers shall not be responsible for any loss, damage, claim, or liability arising from errors or omissions in the Site, technical issues, temporary unavailability, third-party content, links to external websites, or your use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, N Square Developers, its affiliates, directors, employees, representatives, or associates shall not be liable for any direct, indirect, incidental, special, consequential, or other damages arising from or related to your access to or use of the Site or reliance on information provided on it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless N Square Developers, its affiliates, directors, officers, employees, representatives, and authorised partners from claims, losses, damages, liabilities, costs, or expenses arising from your misuse of the Site, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Copyright Notice
            </h2>
            <p>
              Unless otherwise stated, all text, photographs, graphics, designs, logos, layouts, videos, and other materials available on this Site are owned by or licensed to N Square Developers and are protected under applicable intellectual property laws.
            </p>
            <p>
              Except for permitted personal use, no material from this Site may be reproduced, copied, modified, distributed, displayed, published, or transmitted without prior written permission from N Square Developers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Trademarks
            </h2>
            <p>
              The N Square Developers name, logo, brand identity, trademarks, service marks, and other intellectual property displayed on the Site belong to or are lawfully used by N Square Developers or their respective owners.
            </p>
            <p>
              Nothing on this Site grants any person a licence or right to use these trademarks or brand elements without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Links to Third-Party Websites
            </h2>
            <p>
              The Site may contain links to websites or resources operated by third parties. These links are provided only for convenience and do not imply endorsement or responsibility by N Square Developers.
            </p>
            <p>
              N Square Developers does not control and is not responsible for the content, accuracy, availability, security, or privacy practices of third-party websites. Accessing such websites is at your own discretion and risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Forward-Looking Information
            </h2>
            <p>
              The Site may contain information relating to future projects, proposed developments, estimated timelines, plans, anticipated amenities, business objectives, or other forward-looking information.
            </p>
            <p>
              Such information is subject to change and may depend on approvals, permissions, market conditions, availability, regulatory requirements, and other factors. Actual outcomes may differ from the information presented on the Site. N Square Developers does not undertake to update such information unless required by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Jurisdiction
            </h2>
            <p>
              N Square Developers operates this Site from Maharashtra, India. These Terms of Use shall be governed by and interpreted in accordance with the applicable laws of India.
            </p>
            <p>
              Subject to applicable law, courts having appropriate jurisdiction in Mumbai, Maharashtra shall have jurisdiction over disputes arising out of or relating to these Terms of Use or your use of the Site.
            </p>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to remain valid and enforceable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#C5A059] tracking-wide">
              Data Records and Communications
            </h2>
            <p>
              N Square Developers may operate project websites, enquiry pages, landing pages, and other digital platforms for its projects and business activities. When you voluntarily submit your personal information through these platforms, you consent to N Square Developers and its authorised representatives using such information to respond to enquiries, provide project information, offer services, and communicate relevant updates.
            </p>
            <p>
              Such communication may include telephone calls, SMS, email, or WhatsApp messages, subject to applicable laws and regulations.
            </p>
            <p>
              For quality assurance, training, security, and record-keeping purposes, communications between you and N Square Developers or its authorised representatives may be monitored or recorded where legally permitted.
            </p>
            <p>
              N Square Developers reserves the right to revise these Terms of Use from time to time. Users are encouraged to review this page periodically for any updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
