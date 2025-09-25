'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import { ContactButton } from '../ui/contact-button';

export function CareersSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    { title: 'Growth', icon: '📈' },
    { title: 'Innovation', icon: '🔬' },
    { title: 'Collaboration', icon: '🤝' },
    { title: 'Impact', icon: '🌱' }
  ];

  return (
    <Box id="careers" ref={ref} sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h2" align="center" sx={{ mb: 3, fontWeight: 400 }}>
            Build Your{' '}
            <Box component="span" sx={{ fontWeight: 500, color: 'primary.main' }}>
              Career
            </Box>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
          >
            Join innovative professionals shaping the future of connectivity 
            and manufacturing excellence.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  py: 3,
                  '&:hover': {
                    bgcolor: 'rgba(239, 68, 68, 0.05)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2, fontSize: '2.5rem' }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {benefit.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Box textAlign="center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ContactButton className="px-6 py-3 text-base rounded-full">
                View Open Positions
              </ContactButton>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}