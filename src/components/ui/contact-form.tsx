'use client';

import { motion } from 'framer-motion';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={className}
      sx={{
        p: { xs: 4, md: 6 },
        borderRadius: '24px',
        background: 'rgba(239, 68, 68, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(239,68,68,0.05) 0%, transparent 50%)',
          borderRadius: 'inherit',
          zIndex: -1
        }
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          mb: 4,
          textAlign: 'center',
          fontSize: { xs: '1.5rem', md: '2rem' },
          background: 'linear-gradient(180deg, #ef4444, #C10007)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Let&apos;s Start Your Project
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            name="project"
            label="Project Type"
            value={formData.project}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            name="message"
            label="Project Details"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(239, 68, 68, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ef4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.7)',
                '&.Mui-focused': {
                  color: '#ef4444',
                },
              },
            }}
          />
        </Grid>
        <Grid size={12}>
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderRadius: '50px',
                  background: 'linear-gradient(90deg, #ef4444, #C10007)',
                  boxShadow: '0 8px 32px rgba(239, 68, 68, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #dc2626, #991b1b)',
                    boxShadow: '0 12px 40px rgba(239, 68, 68, 0.4)',
                  },
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}