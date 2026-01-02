'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MarqueeHorizontal from '../ui/marquee-horizontal';

// Font styles matching the AboutSection
const headingStyles = {
  primaryCenter: "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-black text-center",
  gradient: "bg-gradient-to-br from-[#ff4444] to-[#C10007] bg-clip-text text-transparent",
};

const bodyTextStyles = {
  description: "text-lg md:text-xl leading-relaxed text-gray-600",
};

// Divider component
const DividerRedCenter = () => {
  return (
    <div className="w-20 md:w-40 h-[2px] bg-gradient-to-br from-[#ff4444] to-[#C10007] mt-[2vh] md:mt-[2vh] mb-[4vh] md:mb-[6vh] mx-auto"></div>
  );
};

export function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Team images from the public/team directory
  const teamImages = [
    { img: '/team/WhatsApp Image 2025-09-19 at 10.56.45.jpeg', alt: 'Team member 4' },

    { img: '/team/WhatsApp Image 2025-09-19 at 10.56.46.jpeg', alt: 'Team member 5' },
    { img: '/team/WhatsApp Image 2025-09-19 at 10.56.47.jpeg', alt: 'Team member 6' },
    { img: '/team/WhatsApp Image 2025-09-19 at 10.56.48.jpeg', alt: 'Team member 7' },
  ];

  const teamStats = [
    { title: 'Skilled Professionals', number: '50+', description: 'Expert team members across all departments' },
    { title: 'Years of Experience', number: '300+', description: 'Combined decades of industry expertise' },
    { title: 'International Standards', number: '100%', description: 'Compliance with global quality certifications' },
    { title: 'Customer Satisfaction', number: '100%', description: 'Consistently exceeding client expectations' }
  ];

  return (
    <section id="team" ref={ref} className="py-[10vh] md:py-[15vh] ">
      <div className="container mx-auto px-[5vw]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-[8vh] "
        >
          <div className={`${headingStyles.primaryCenter} mb-4`}>
            OUR{' '}
            <span className={`${headingStyles.gradient}`}>TEAM</span>
          </div>
          <DividerRedCenter />
          <div className={`${bodyTextStyles.description} max-w-3xl mx-auto`}>
            Skilled professionals dedicated to delivering excellence 
            through collaboration and expertise.
          </div>
        </motion.div>
        {/* Team Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 transition-all duration-300">
                <div className={`text-5xl md:text-6xl font-bold mb-3 ${headingStyles.gradient}`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {stat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Marquee Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:mt-[10vh] relative"
        >
          <div className="w-screen relative left-1/2 transform -translate-x-1/2">
            <MarqueeHorizontal items={teamImages} />
          </div>
        </motion.div>


      </div>
    </section>
  );
}