'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Font styles matching the AboutSection
const headingStyles = {
  primaryCenter: "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-black text-center",
  gradient: "bg-gradient-to-br from-[#ff4444] to-[#C10007] bg-clip-text text-transparent",
};

const bodyTextStyles = {
  description: "text-lg md:text-xl leading-relaxed text-gray-600",
  cardDescription: "text-base leading-relaxed text-gray-600",
};

// Divider component
const DividerRedCenter = () => {
  return (
    <div className="w-20 md:w-40 h-[2px] bg-gradient-to-br from-[#ff4444] to-[#C10007] mt-[2vh] md:mt-[2vh] mb-[4vh] md:mb-[6vh] mx-auto"></div>
  );
};

export function SegmentsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const segments = [
    { 
      title: 'Industrial & Robotics', 
      description: 'Advanced automation systems and robotic applications requiring precise connectivity solutions.',
      image: '/segments/robotics.jpg',
      alt: 'Industrial robotics and automation systems'
    },
    { 
      title: 'Automotive', 
      description: 'Durable wire harness solutions for modern vehicles and transportation systems.',
      image: '/segments/auto.jpg',
      alt: 'Automotive wire harness applications'
    },
    { 
      title: 'Electronics', 
      description: 'Compact and reliable connections for consumer and commercial electronic devices.',
      image: '/segments/5.jpg',
      alt: 'Electronic device wire harnesses'
    },
    { 
      title: 'Telecommunications', 
      description: 'High-performance connectivity infrastructure for communication networks.',
      image: '/segments/telecom.png',
      alt: 'Telecommunications equipment'
    },
    { 
      title: 'Renewable Energy', 
      description: 'Sustainable wire solutions for solar, wind, and clean energy systems.',
      image: '/segments/renewable.jpg',
      alt: 'Renewable energy systems'
    },
    { 
      title: 'Aerospace & Defense', 
      description: 'High-reliability wire harnesses for aerospace applications and defense systems in demanding environments.',
      image: '/segments/aerospace.png',
      alt: 'Aerospace and defense systems'
    }
  ];

  return (
    <section id="segments" ref={ref} className="py-[10vh] md:py-[15vh]">
      <div className="container mx-auto px-[5vw]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-[8vh] md:mb-[12vh]"
        >
          <div className={`${headingStyles.primaryCenter} mb-4`}>
            INDUSTRY{' '}
            <span className={`${headingStyles.gradient}`}>SEGMENTS</span>
          </div>
          <DividerRedCenter />
          <div className={`${bodyTextStyles.description} max-w-3xl mx-auto`}>
            Serving critical industries where precision and reliability 
            are essential for success.
          </div>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              {/* Modern Card Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 h-full min-h-[420px] max-h-[480px] md:min-h-[340px] md:max-h-[520px] flex flex-col">
                {/* Image Section with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={segment.image}
                    alt={segment.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-24"></div>
                </div>

                {/* Content Section with Modern Spacing */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                    {segment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {segment.description}
                  </p>
                  
                  {/* Modern CTA */}
 
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-100 group-hover:ring-red-100 transition-colors pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}