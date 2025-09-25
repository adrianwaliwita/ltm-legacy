'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { cn } from '@/lib/utils';


// Font styles matching the HeroSection
const headingStyles = {
  primaryLeft: "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-black text-center md:text-left",
  gradient: "bg-gradient-to-br from-[#ff4444] to-[#C10007] bg-clip-text text-transparent",
};

const bodyTextStyles = {
  descriptionLeft: "text-lg md:text-xl leading-relaxed text-gray-600 mt-4",
};

// Divider component
const DividerRedLeft = () => {
  return (
    <div className="w-20 md:w-40 h-[2px] bg-gradient-to-br from-[#ff4444] to-[#C10007] mt-[2vh] md:mt-[2vh] mb-[1vh] md:mb-[2vh] mx-auto md:mx-0"></div>
  );
};

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="md:px-[7%] mx-auto py-20 md:pb-0 h:20vh md:h-[87vh]">
      <div className="flex flex-col md:flex-row items-center w-full h-full">
        {/* Image Component - Left Side */}
        <div className="flex justify-start items-center w-full md:w-[50%] md:order-first md:mb-[10vh] md:px-[%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] px-[2vw]"
          >
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
                "aspect-square hover:scale-[1.02] transition-transform duration-500 ease-out"
              )}
            >
              <Image
                src="/team/WhatsApp Image 2025-09-19 at 10.56.48.jpeg"
                alt="LTM Manufacturing Facility"
                fill
                className="object-cover object-center rounded-md"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-md"></div>
            </div>
          </motion.div>
        </div>

        {/* Content Section - Right Side */}
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[50%] md:order-last">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`${headingStyles.primaryLeft} text-left md:text-left pt-8 md:py-0`}
          >
            {' '}
            <span className={`${headingStyles.gradient}`}>ABOUT</span>
            {' '} US
          </motion.div>

          <div>
            <DividerRedLeft />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className={`${bodyTextStyles.descriptionLeft} text-center md:text-left mt-4`}
            >
              <div className="space-y-6 mb-8">
                <p>
                  Founded with a vision to deliver reliable and innovative connectivity solutions, LTM has grown into a recognized leader in wire harness manufacturing.
                </p>
                <p>
                  We specialize in custom wire harnesses tailored to meet diverse industry needs, from robotics and automation to automotive and electronics. Our facility is equipped with modern technology and guided by international quality standards.
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}