'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Container } from '@mui/material';
import { Spotlight } from '../ui/spotlight';
import { useState } from 'react';

export function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };


  return (
    <Box 
      id="cta" 
      ref={ref} 
      sx={{ 
        py: { xs: 8, md: 16 },
        position: 'relative',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      <Spotlight className="absolute -top-20 right-0 md:right-40" fill="#ef4444" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                      color: 'black',

              fontWeight: 300,
              mb: 4,
              lineHeight: 1.1
            }}
          >
            Ready to{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 500,
                background: 'linear-gradient(180deg, #ef4444, #C10007)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Power
            </Box>{' '}
            Your Future?
          </Typography>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center relative"
        >
          <Box
            sx={{
              p: { xs: 6, md: 8 },
              borderRadius: '32px',
              background: 'linear-gradient(90deg, #f40000, #C10007)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, transparent 50%)',
                borderRadius: 'inherit',
                zIndex: -1
              }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Get Started Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                color: 'white',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              From concept to completion, we&apos;re your trusted partner for precision wire solutions. 
              Ready to discuss your next project?
            </Typography>
            
{/* Contact Form */}
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <Typography
                  variant="h4"
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  ✨ Thank you!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ 
                    color: 'white',
                    opacity: 0.9
                  }}
                >
                  We&apos;ll get back to you soon.
                </Typography>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300 resize-none"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-bold text-red-600 bg-white rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            )}
            
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}