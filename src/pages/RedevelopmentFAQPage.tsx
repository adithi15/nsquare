import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeMode } from '../types';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const NEW_FAQ_DATA: FAQItem[] = [
  {
    question: "What documents are required for the redevelopment vetting process?",
    answer: (
      <div className="space-y-3">
        <p>For an initial redevelopment feasibility assessment, the society should provide:</p>
        <ul className="list-disc pl-5 space-y-2 font-light text-[13px] sm:text-[14px]">
          <li>Society Registration Certificate & Bye-Laws</li>
          <li>CIDCO Lease Deed / Land Ownership Documents</li>
          <li>CIDCO/NMMC Approved Layout & Building Plans</li>
          <li>Commencement Certificate & Occupancy Certificate, if available</li>
          <li>Existing Flat/Shop Member List with Carpet Areas</li>
          <li>Conveyance / Deemed Conveyance Documents, if available</li>
          <li>Structural Audit / Structural Stability Report</li>
          <li>Property Tax & Utility Records</li>
          <li>Existing FSI / Development Details</li>
          <li>Society General Body Resolutions / Existing Redevelopment Documents, if applicable</li>
        </ul>
        <p className="mt-2 text-xs opacity-70">Additional documents may be required during the detailed legal, technical, and financial due-diligence process.</p>
      </div>
    )
  },
  {
    question: "Which Buildings Are Eligible for Redevelopment?",
    answer: (
      <div className="space-y-3 font-light text-[13px] sm:text-[14px]">
        <p>A building may be considered for redevelopment based on its plot size, existing building condition, land or lease status, development potential, and applicable regulations.</p>
        <p>Redevelopment feasibility is assessed based on factors such as permissible FSI, existing built-up area, plot size, road width, planning norms, and applicable CIDCO/NMMC regulations and approvals.</p>
        <p>The final redevelopment potential is subject to technical and legal feasibility, statutory approvals, and the required consent of the society and concerned stakeholders.</p>
      </div>
    )
  },
  {
    question: "How Do We Start the Redevelopment Process?",
    answer: (
      <p className="font-light text-[13px] sm:text-[14px]">
        Simply contact N Square Developers and share your basic property and society details. Our team will guide the society through the initial feasibility assessment, redevelopment proposal, commercial evaluation, developer selection, approvals, and project execution.
      </p>
    )
  },
  {
    question: "How are the Society and its Members Protected?",
    answer: (
      <div className="space-y-3 font-light text-[13px] sm:text-[14px]">
        <p>The interests of existing members are protected through the Development Agreement, Permanent Alternate Accommodation Agreements (PAAA), and other project-related documentation, along with compliance with applicable RERA and statutory requirements.</p>
        <p>The Development Agreement will clearly define the rights and obligations of the society and the developer, members' area entitlement, timelines, transit arrangements, corpus, security mechanisms, and other agreed terms.</p>
        <p>The redevelopment project will be undertaken in accordance with applicable laws, regulatory requirements, and approvals, providing transparency and clarity to all stakeholders.</p>
      </div>
    )
  },
  {
    question: "Whose Responsibility Is It to Obtain the Necessary Approvals?",
    answer: (
      <div className="space-y-3 font-light text-[13px] sm:text-[14px]">
        <p>The developer will be responsible for coordinating and obtaining the necessary statutory approvals and permissions required for the redevelopment, as agreed under the Development Agreement.</p>
        <p>The developer will coordinate with the concerned authorities and appointed consultants throughout the approval process, subject to the society providing the required documents, cooperation, and authorisations.</p>
        <p>The applicable approval-related costs will be borne by the developer as agreed in the redevelopment terms.</p>
      </div>
    )
  },
  {
    question: "What Precautions Should a Housing Society Take to Safeguard the Project?",
    answer: (
      <div className="space-y-3 font-light text-[13px] sm:text-[14px]">
        <p>A housing society should select a developer based not only on the highest offer, but also on the developer’s track record, financial capability, experience, technical expertise, and ability to execute the project.</p>
        <p>All proposals, commercial terms, project details, and commitments should be carefully evaluated and verified before finalising the developer.</p>
        <p>The Development Agreement, project plans, and other legal documents should be reviewed and finalised in consultation with the society’s appointed legal, technical, and financial consultants.</p>
        <p>Transparency, proper documentation, and compliance with applicable laws and regulations should be maintained throughout the redevelopment process.</p>
      </div>
    )
  }
];

interface RedevelopmentFAQPageProps {
  theme: ThemeMode;
}

export const RedevelopmentFAQPage: React.FC<RedevelopmentFAQPageProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
            Redevelopment Process & Vetting FAQs
          </h1>
          <p className={`text-sm sm:text-base font-light ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
            Find detailed information about society eligibility, document checklists, legal safeguards, and project steps.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4">
          {NEW_FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`faq-${index}`}
                className={`border transition-all duration-300 rounded-lg overflow-hidden ${
                  isOpen 
                    ? 'border-[#C5A059] shadow-[0_4px_20px_rgba(197,160,89,0.15)]' 
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]/40 bg-black/[0.02] dark:bg-white/[0.01]'
                }`}
              >
                {/* Header button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between text-left px-6 py-5 transition-all duration-300 font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-wide cursor-pointer select-none focus:outline-none ${
                    isOpen
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-transparent text-neutral-800 dark:text-neutral-200'
                  }`}
                >
                  <span className="flex-1 pr-4">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden font-sans"
                    >
                      <div className={`border-t border-[#C5A059]/20 px-6 py-5 text-sm leading-relaxed ${
                        isDark ? 'bg-white/[0.02] text-neutral-300' : 'bg-black/[0.01] text-neutral-700'
                      }`}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
