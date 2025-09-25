'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  Build, 
  DesignServices, 
  Settings, 
  VerifiedUser, 
  SupportAgent,
  Cable
} from '@mui/icons-material';

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

export function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { 
      title: 'Custom Manufacturing', 
      description: 'Tailored wire harness solutions designed to meet your unique specifications and requirements.', 
      icon: Build,
      color: '#C10007'
    },
    { 
      title: 'Design Support', 
      description: 'Expert engineering guidance from initial concept through to final product realization.', 
      icon: DesignServices,
      color: '#C10007'
    },
    { 
      title: 'Integration Services', 
      description: 'Complete assembly, testing, and integration solutions for seamless implementation.', 
      icon: Settings,
      color: '#C10007'
    },
    { 
      title: 'Quality Certification', 
      description: 'Rigorous testing and certification ensuring compliance with international standards.', 
      icon: VerifiedUser,
      color: '#C10007'
    },
    { 
      title: 'Ongoing Support', 
      description: 'Long-term partnership with comprehensive maintenance and technical support services.', 
      icon: SupportAgent,
      color: '#C10007'
    },
    { 
      title: 'Cable Assembly', 
      description: 'Expert wire harness and cable assembly services for automotive, industrial, and electronic applications.', 
      icon: Cable,
      color: '#C10007'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-[10vh] md:py-[15vh] bg-white">
      <div className="container mx-auto px-[5vw]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-[8vh] md:mb-[12vh]"
        >
          <div className={`${headingStyles.primaryCenter} mb-4`}>
            OUR{' '}
            <span className={`${headingStyles.gradient}`}>SERVICES</span>
          </div>
          <DividerRedCenter />
          <div className={`${bodyTextStyles.description} max-w-3xl mx-auto`}>
            Comprehensive solutions tailored to meet diverse industry needs 
            with precision and reliability.
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "p-8 rounded-lg border border-red-200 bg-white"
                )}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <IconComponent 
                      sx={{ 
                        color: service.color,
                        fontSize: 40
                      }} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-black mb-4">
                      {service.title}
                    </h3>
                    <p className={`${bodyTextStyles.cardDescription}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}