// import React from 'react';
// import { motion } from 'framer-motion';
// import { ThemeMode } from '../../types';

// interface CoreValuesSectionProps {
//   theme: ThemeMode;
// }

// // 1. People First Icon
// const PeopleFirstIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="24" cy="11" r="2.8" />
//     <circle cx="16" cy="14.5" r="2.4" />
//     <circle cx="32" cy="14.5" r="2.4" />
//     <path d="M19 22c0-2.8 2.2-5 5-5s5 2.2 5 5" />
//     <path d="M12.5 24c0-2 1.6-3.6 3.5-3.6" />
//     <path d="M32 20.4c1.9 0 3.5 1.6 3.5 3.6" />
//     <path d="M14 36h20a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H22l-4 2-5-1v5a2 2 0 0 0 1 2z" />
//     <path d="M14 30.5v5.5" />
//   </svg>
// );

// // 2. Quality Icon
// const QualityIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="24" cy="18" r="6.5" />
//     <circle cx="24" cy="18" r="3.5" strokeDasharray="2 1.5" />
//     <path d="M21 24.5l-2 7 5-2.2 5 2.2-2-7" />
//     <path d="M13 38c2-4 5-6 8-6m14 6c-2-4-5-6-8-6" />
//     <path d="M13 38v4h5.5m16.5-4v4h-5.5" />
//   </svg>
// );

// // 3. Integrity Icon
// const IntegrityIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M24 7l11 4v9c0 8.5-5 13.5-11 15.5C18 33.5 13 28.5 13 20v-9l11-4z" />
//     <path d="M19.5 22.5l3.5 3.5 6.5-6.5" />
//     <path d="M16 34.5l-3 5.5 5-1.8 3 1.8v-3.5m6 0v3.5l3-1.8 5 1.8-3-5.5" />
//   </svg>
// );

// // 4. Teamwork Icon
// const TeamworkIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="24" cy="14" r="5.5" />
//     <path d="M21.5 14l2 2 3.5-3.5" />
//     <path d="M13 28l6-3 5 3 4-2 7 5-4 4-4-2-4 3-8-4-3-3 1-3z" />
//     <path d="M16 26l-4 3m18-3l4 3" />
//   </svg>
// );

// // 5. Innovation Icon
// const InnovationIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M24 9a10 10 0 0 1 7 17.2c-2 2-3 4-3 5.8h-8c0-1.8-1-3.8-3-5.8A10 10 0 0 1 24 9z" />
//     <path d="M20 36h8m-6 3h4" />
//     <path d="M24 17v7m-3.5-3.5c0-3.5 3.5-5 3.5-5s3.5 1.5 3.5 5" />
//     <path d="M11 20a14.5 14.5 0 0 1 26 0" strokeDasharray="3 2" />
//   </svg>
// );

// // 6. Customer Commitment Icon
// const CustomerCommitmentIcon = ({ className = 'w-7 h-7 text-[#C8A165]' }: { className?: string }) => (
//   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="24" cy="13.5" r="5" />
//     <path d="M21.5 13.5l2 2 3.5-3.5" />
//     <path d="M12.5 28.5l6-3 5 3 4-2 7.5 5-4 4-4-2-4 3-8.5-4-3-3 1-3z" />
//     <path d="M15.5 26.5l-4 3m18-3l4 3" />
//   </svg>
// );

// const VALUES = [
//   {
//     title: 'PEOPLE FIRST',
//     icon: PeopleFirstIcon,
//     description: (
//       <>
//         We place people at the heart of<br />
//         everything we do - our employees,<br />
//         customers, and investors.
//       </>
//     ),
//   },
//   {
//     title: 'QUALITY',
//     icon: QualityIcon,
//     description: (
//       <>
//         We are driven by results and<br />
//         inspired by a relentless pursuit of<br />
//         continuous improvement.
//       </>
//     ),
//   },
//   {
//     title: 'INTEGRITY',
//     icon: IntegrityIcon,
//     description: (
//       <>
//         We are built on honesty.<br />
//         We are driven by transparency.<br />
//         Defined by accountability.
//       </>
//     ),
//   },
//   {
//     title: 'TEAMWORK',
//     icon: TeamworkIcon,
//     description: (
//       <>
//         We approach every project with<br />
//         strong accountability and<br />
//         dedication to deliver on our<br />
//         commitments.
//       </>
//     ),
//   },
//   {
//     title: 'INNOVATION',
//     icon: InnovationIcon,
//     description: (
//       <>
//         We adopt modern technology and<br />
//         creative design approaches to<br />
//         deliver exceptional results.
//       </>
//     ),
//   },
//   {
//     title: 'CUSTOMER COMMITMENT',
//     icon: CustomerCommitmentIcon,
//     description: (
//       <>
//         Customer satisfaction remains the<br />
//         heart of everything we do, from<br />
//         planning to completion.
//       </>
//     ),
//   },
// ];

// export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ theme }) => {
//   const isDark = theme === 'dark';

//   return (
//     <section
//       className={`relative w-full overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#121212]' : 'bg-[#f6eee3]'
//         }`}
//       style={{
//         backgroundImage: 'url(/assets/branding/core-values-columns.png)',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'right bottom',
//         backgroundSize: 'contain',
//       }}
//     >
//       {/* Content wrapper with fixed padding & spacing */}
//       <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-24 relative z-10">
//         <div className="w-full max-w-[560px] lg:max-w-[620px]">

//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="mb-12 lg:mb-14"
//           >
//             <p className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-black/80 mb-1 translate-x-40">
//               OUR CORE VALUES
//             </p>
//             <h2
//               className={`text-2xl sm:text-3xl md:text-[38px] leading-tight font-serif font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#181818]'
//                 }`}
//             >
//               A Legacy Built on Timeless Values
//             </h2>
//           </motion.div>

//           {/* 3x2 Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-12">
//             {VALUES.map((value, idx) => {
//               const IconComponent = value.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   className="flex flex-col items-start"
//                 >
//                   <div className="mb-3.5">
//                     <IconComponent
//                       className="w-7 h-7 text-[#C8A165]"
//                     />
//                   </div>

//                   <h3 className="text-xs md:text-[13px] font-bold uppercase tracking-[0.16em] mb-2 text-[#C8A165]">
//                     {value.title}
//                   </h3>

//                   <p
//                     className={`text-[12px] leading-[1.6] ${isDark ? 'text-neutral-300' : 'text-[#222222]'
//                       }`}
//                   >
//                     {value.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };


import React from 'react';
import { motion } from 'framer-motion';
import { ThemeMode } from '../../types';

interface CoreValuesSectionProps {
  theme: ThemeMode;
}

const VALUES = [
  {
    title: 'PEOPLE FIRST',
    iconSrc: '/assets/icons/people-first.png',
    description: (
      <>
        We place people at the heart of<br />
        everything we do - our employees,<br />
        customers, and investors.
      </>
    ),
  },
  {
    title: 'QUALITY',
    iconSrc: '/assets/icons/quality.png',
    description: (
      <>
        We are driven by results and<br />
        inspired by a relentless pursuit of<br />
        continuous improvement.
      </>
    ),
  },
  {
    title: 'INTEGRITY',
    iconSrc: '/assets/icons/integrity.png',
    description: (
      <>
        We are built on honesty.<br />
        We are driven by transparency.<br />
        Defined by accountability.
      </>
    ),
  },
  {
    title: 'TEAMWORK',
    iconSrc: '/assets/icons/teamwork.png',
    description: (
      <>
        We approach every project with<br />
        strong accountability and<br />
        dedication to deliver on our<br />
        commitments.
      </>
    ),
  },
  {
    title: 'INNOVATION',
    iconSrc: '/assets/icons/innovation.png',
    description: (
      <>
        We adopt modern technology and<br />
        creative design approaches to<br />
        deliver exceptional results.
      </>
    ),
  },
  {
    title: 'CUSTOMER COMMITMENT',
    iconSrc: '/assets/icons/customer-commitment.png',
    description: (
      <>
        Customer satisfaction remains the<br />
        heart of everything we do, from<br />
        planning to completion.
      </>
    ),
  },
];

export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative w-full overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#f3e4cf]'
        }`}
      style={{
        backgroundImage: 'url(/assets/branding/core-values-columns.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: 'contain',
      }}
    >
      {/* Content wrapper */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-24 relative z-10">
        <div className="w-full max-w-[560px] lg:max-w-[620px] md:ml-6 lg:ml-12 xl:ml-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-14"
          >
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-black/80 mb-1 translate-x-40">
              OUR CORE VALUES
            </p>
            <h2
              className={`text-2xl sm:text-3xl md:text-[38px] leading-tight font-serif font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#181818]'
                }`}
            >
              A Legacy Built on Timeless Values
            </h2>
          </motion.div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-12">
            {VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-start"
              >
                {/* 1:1 Matching SVG Graphic */}
                <div className="mb-5 h-12 flex items-center">
                  <img
                    src={value.iconSrc}
                    alt={value.title}
                    className="w-12 h-12 object-contain ml-5"
                  />
                </div>

                <h3 className="text-xs md:text-[13px] font-bold uppercase tracking-[0.16em] mb-2 mt-1 text-[#C8A165] whitespace-nowrap">
                  {value.title}
                </h3>

                <p
                  className={`text-[12px] leading-[1.6] ${isDark ? 'text-neutral-300' : 'text-[#222222]'
                    }`}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};