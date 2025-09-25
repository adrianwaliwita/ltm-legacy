'use client';

import { motion } from 'framer-motion';
import { Typography, Box, Container, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom components
import { BackgroundBeams } from '../components/ui/background-beams';
import { Spotlight } from '../components/ui/spotlight';
import { ContactButton } from '../components/ui/contact-button';
import { Header } from '../components/sections/Header';
import { AboutSection } from '../components/sections/AboutSection';
import { TeamSection } from '../components/sections/TeamSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SegmentsSection } from '../components/sections/SegmentsSection';
import { CTA } from '../components/sections/CTA';
import { Footer } from '../components/sections/Footer';

function HeroSection() {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '110vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="#ef4444" />
      <BackgroundBeams className="absolute inset-0" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Chip 
              label="Precision Engineering"
              icon={<Box component="span" sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%', animation: 'pulse 2s infinite' }} />}
              sx={{ 
                mb: 4,
                bgcolor: 'rgba(239, 68, 68, 0.1)',
                color: 'primary.main',
                fontWeight: 500,
                '& .MuiChip-icon': { color: 'primary.main' }
              }}
            />
          </motion.div>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              fontWeight: 300,
              lineHeight: 1.1,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Powering Innovation with{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 500,
background: 'linear-gradient(180deg, #f40000, #C10007)',
              WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Precision
            </Box>{' '}
            Wire Solutions
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                mb: 6,
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Advanced manufacturing, rigorous testing, and innovative connectivity solutions 
              for industries worldwide.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div>
                <ContactButton
                  onClick={() => scrollToSection('#services')}
                  className="px-6 py-3 text-base rounded-full flex items-center gap-2"
                >
                  Explore Services
                  <ArrowForwardIcon className="w-4 h-4" />
                </ContactButton>
              </motion.div>
              <motion.div>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="px-6 py-3 text-base font-medium text-red-700 border-2 border-red-700 rounded-full hover:bg-red-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-700/20 active:translate-y-0"
                >
                  Learn More
                </button>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SegmentsSection />
            <TeamSection/>

      <CTA />
      <Footer />
    </Box>
  );
}