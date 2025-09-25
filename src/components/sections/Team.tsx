'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import Image from 'next/image';

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const teamAspects = [
    { 
      title: 'Leadership', 
      description: 'Experienced professionals driving innovation and customer satisfaction.',
      image: '/WhatsApp Image 2025-08-27 at 10.30.17.jpeg'
    },
    { 
      title: 'Engineering Team', 
      description: 'Experts in design and customization for unique customer requirements.',
      image: '/WhatsApp Image 2025-08-27 at 10.30.20.jpeg'
    },
    { 
      title: 'Production Staff', 
      description: 'Skilled workforce ensuring precision manufacturing.',
      image: '/WhatsApp Image 2025-08-27 at 10.30.22.jpeg'
    },
    { 
      title: 'Quality Control', 
      description: 'Dedicated specialists ensuring compliance with global standards.',
      image: '/WhatsApp Image 2025-08-27 at 10.30.17.jpeg'
    }
  ];

  return (
    <Box id="about" ref={ref} sx={{ py: 12, bgcolor: 'transparent' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ mb: 3, fontWeight: 400 }}
          >
            About{' '}
            <Box component="span" sx={{ fontWeight: 500, color: 'primary.main' }}>
              LTM
            </Box>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}
          >
            At the heart of LTM is a skilled team of engineers, technicians, and industry specialists dedicated to delivering excellence.
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 8 }}>
          {teamAspects.map((aspect, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', height: 300 }}>
                    <Image
                      src={aspect.image}
                      alt={aspect.title}
                      fill
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: aspect.title === 'Quality Control' ? 'center 30%' : 'top' 
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {aspect.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {aspect.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card 
            sx={{ 
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: 'white',
              p: 4,
              textAlign: 'center'
            }}
          >
            <CardContent>
              <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 500 }}>
                Our Vision
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
                Together, we combine decades of knowledge with a forward-thinking approach to build solutions that power industries.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}