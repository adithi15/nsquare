import React from 'react';
import { ThemeMode } from '../types';
import { motion } from 'framer-motion';
import { Eye, Target, Sparkles, Building, Compass, Layers, ShieldCheck, UserCheck, Cpu, Award } from 'lucide-react';

interface LegacySectionProps {
  theme?: ThemeMode;
  onOpenVisitModal?: () => void;
}

// Side Label Helper Component - Fixed positioning to align directly on screen margin
const SideLabel = ({ text, className = "text-neutral-400" }: { text: string; className?: string }) => (
  <div className="hidden lg:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
    <span className={`block [writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap ${className}`}>
      {text}
    </span>
  </div>
);

export const LegacySection: React.FC<LegacySectionProps> = ({ onOpenVisitModal }) => {
  const FIRST_GEN_LEADERS = [
    {
      name: 'Late Shri. Dharamshi Patel',
      role: 'Founding Co-Founder & Visionary',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      bio: "A visionary leader and one of the founding pillars of Platinum Group, Late Shri. Dharamshi Patel possessed unparalleled business acumen and a deep commitment to excellence. With his innovative strategies and unwavering dedication, he laid the foundation for the group's success, leaving behind a legacy of integrity and determination that continues to inspire generations."
    },
    {
      name: 'Shri. Virchand Visaria',
      role: 'Co-Founder & Strategic Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      bio: "Renowned for his sharp intellect and strategic foresight, Shri. Virchand Visaria played a pivotal role in shaping the trajectory of Platinum Group. As a co-founder, his astute decision-making and entrepreneurial spirit were instrumental in navigating the group through challenges and towards prosperity. His commitment to innovation and ethical business practices remains integral to the group's ethos."
    },
    {
      name: 'Shri. Girish Chheda',
      role: 'Co-Founder & Innovation Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      bio: "A dynamic leader and forward-thinking entrepreneur, Shri. Girish Chheda brought a wealth of expertise and passion to Platinum Group. His relentless pursuit of excellence and penchant for innovation have been instrumental in driving the group's growth and diversification. With a strong focus on customer satisfaction and sustainable development, he has been pivotal in steering the group towards new heights of success."
    }
  ];

  const SECOND_GEN_LEADERS = [
    {
      name: 'Ramesh D. Patel',
      department: 'Acquisition & Planning',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      bio: "As the head of Acquisition & Planning at Platinum Group, Ramesh D. Patel plays a crucial role in identifying strategic opportunities for growth and expansion. With a keen understanding of market dynamics and a strategic vision, he spearheads the group's efforts in acquiring new ventures and real estate assets. His meticulous planning and thorough analysis ensure that each acquisition aligns seamlessly with the group's overarching goals, contributing to its sustained success and market leadership."
    },
    {
      name: 'Jignesh V. Visaria',
      department: 'Purchase & Execution',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      bio: "At Platinum Group, Jignesh V. Visaria assumes a pivotal role in Purchase & Execution, overseeing the seamless execution of projects from inception to completion. With an eye for detail and a commitment to excellence, he manages the procurement process efficiently, ensuring timely acquisition of materials and resources while optimizing costs. Jignesh's leadership ensures that projects are executed with precision and adherence to quality standards, driving customer satisfaction and enhancing the group's reputation for delivering exceptional results."
    },
    {
      name: 'Pratik G. Chheda',
      department: 'Sales & Accounts',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      bio: "Pratik G. Chheda serves as the linchpin of Sales & Accounts at Platinum Group, driving revenue generation and financial management with finesse. With a focus on fostering strong client relationships and implementing effective sales strategies, he leads the team in achieving sales targets and maximizing profitability. Pratik's astute financial acumen ensures meticulous oversight of accounts, budgeting, and financial planning, thereby safeguarding the group's financial health and sustainability."
    }
  ];

  const IDEOLOGY_ITEMS = [
    { title: 'Palatial Space Planning', desc: 'Room to live, breathe, and grow', icon: <Building className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Bespoke Lifestyle', desc: 'Luxury that reflects your personal legacy', icon: <Sparkles className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Excellence In Architecture', desc: 'Design that defies convention', icon: <Compass className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Efficient Structure', desc: 'Built smart to last longer', icon: <Layers className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Transparency', desc: 'No surprises, only clarity', icon: <ShieldCheck className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Customer Centricity', desc: 'You’re always the priority', icon: <UserCheck className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Technology Focused', desc: 'Future-ready, today', icon: <Cpu className="w-5 h-5 text-[#c2a26c]" /> },
    { title: 'Unmatched Quality', desc: 'Ahead of expectations, always', icon: <Award className="w-5 h-5 text-[#c2a26c]" /> }
  ];

  return (
    <div className="w-full bg-[#f4efe6] text-neutral-800 font-sans pb-20 select-none">
      
      {/* 1. HERO BANNER WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
            alt="City Skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        </div>

        {/* Side Label */}
        <SideLabel text="ABOUT PLATINUM" className="text-white/50" />

        <span className="absolute bottom-4 right-6 text-[9px] uppercase tracking-widest text-white/40 z-10">
          Images For Representation Purpose Only
        </span>
      </section>

      {/* 2. OVERLAPPING BEIGE HERO INTRO CARD */}
      <section className="relative z-20 px-6 md:px-16 max-w-5xl mx-auto w-full -mt-40 md:-mt-52">
        <div className="bg-[#f4e3ca] p-8 md:p-12 shadow-2xl border border-neutral-300/60 text-left space-y-4">
          <h1 className="text-2xl md:text-4xl font-serif text-neutral-900 leading-snug tracking-wide">
            Discover The Excellence,<br />
            Live The Luxury
          </h1>
          <p className="text-xs md:text-[13px] text-neutral-700 font-light leading-relaxed max-w-3xl">
            With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Visaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
          </p>
          <p className="text-xs md:text-[13px] text-neutral-700 font-light leading-relaxed max-w-3xl">
            In the near future too, the group aims to continually redefine its benchmarks and transform skylines with grandeur.
          </p>
        </div>
      </section>

      {/* 3. FIRST GENERATION SECTION */}
      <section className="relative w-full pt-20 pb-20 px-6 md:px-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Office Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80 backdrop-brightness-75" />
        </div>

        {/* Side Label */}
        <SideLabel text="FIRST GENERATION" className="text-white/60" />

        <div className="relative z-10 max-w-6xl mx-auto pl-4 lg:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 text-white">
            <div className="md:col-span-5 space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                The Pioneers Of<br />
                Platinum Group’s Successful Legacy
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs md:text-[13px] text-white/80 font-light leading-relaxed">
                The first generation of Platinum Group's leaders, who laid the foundation in 2006, were visionary pioneers who spearheaded the company's initial growth. Their bold leadership, innovative strategies, and unwavering commitment paved the way for Platinum Group's emergence as a prominent player in their industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FIRST_GEN_LEADERS.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/4.2] w-full bg-neutral-900 border border-white/20">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#c2a26c]" />
                </div>

                <div className="text-white space-y-1.5 pt-1">
                  <h3 className="text-sm font-medium tracking-wide">
                    {leader.name}
                  </h3>
                  <p className="text-[11px] text-white/70 font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECOND GENERATION SECTION */}
      <section className="relative w-full pt-16 pb-20 px-6 md:px-20 overflow-hidden">
        
        {/* Side Label */}
        <SideLabel text="SECOND GENERATION" className="text-neutral-400" />

        <div className="max-w-7xl mx-auto pl-4 lg:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5 space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 leading-tight">
                Carrying The Baton Of<br />
                Growth Into The Future
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                The second generation of Platinum Group's visionaries, inheriting a legacy of innovation and success, further propelled the company's trajectory with their forward-thinking approaches. Building upon the foundation laid by their predecessors, they diversified operations, embraced emerging technologies, and expanded market reach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SECOND_GEN_LEADERS.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/4.5] w-full bg-neutral-200 border border-neutral-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#c2a26c]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-neutral-900 tracking-wide">
                    {leader.name}
                  </h3>
                  <p className="text-[11px] text-[#c2a26c] font-normal">
                    ({leader.department})
                  </p>
                  <p className="text-[11px] text-neutral-600 font-light leading-relaxed pt-1">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISION · MISSION · BELIEF SECTION */}
      <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
            alt="Architecture Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Side Label */}
        <SideLabel text="VISION · MISSION · BELIEF" className="text-white/60" />

        <div className="relative z-10 max-w-6xl mx-auto pl-4 lg:pl-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-serif text-[#c8a165]">
              The Pillars That Determine Our Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6">
                <Eye className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Vision</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                To establish itself as a thought leader across all verticals of the real estate industry & own a name synonymous with crafting world-class assets.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6">
                <Target className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Mission</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                To be a prudent, tactical and path-breaking realtor that specializes in landmark creations as an ode to the world of real estate.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6">
                <Sparkles className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Belief</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Committed to innovation, creativity and sustainability, we construct landmark marvels embracing our principles and values that shape our success to deliver with zero compromises on quality, standardization and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR IDEOLOGY SECTION */}
      <section className="relative w-full pt-16 pb-12 px-6 md:px-20 overflow-hidden">
        
        {/* Side Label */}
        <SideLabel text="OUR IDEOLOGY" className="text-neutral-400" />

        <div className="max-w-7xl mx-auto pl-4 lg:pl-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">
              Discover The Commitment,<br />Live The Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {IDEOLOGY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 border-r last:border-r-0 border-neutral-300/40 px-3">
                <div className="mb-2">
                  {item.icon}
                </div>
                <h4 className="text-xs font-medium text-neutral-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-500 font-light leading-normal max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Footer Trigger */}
      {onOpenVisitModal && (
        <section className="px-6 md:px-20 max-w-7xl mx-auto pt-8">
          <div className="bg-neutral-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white">Experience The Platinum Legacy Firsthand</h3>
              <p className="text-xs text-neutral-400 font-light">Schedule an exclusive private preview or project briefing with our corporate advisors.</p>
            </div>
            <button
              onClick={onOpenVisitModal}
              className="bg-[#c2a26c] text-white px-6 py-3 text-xs tracking-wider uppercase font-medium hover:bg-[#b0905c] transition-colors shrink-0"
            >
              Schedule Private Preview
            </button>
          </div>
        </section>
      )}

    </div>
  );
};