'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { Menu, Close } from '@mui/icons-material';
import { ContactButton } from '../ui/contact-button';

// Navigation items
const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Team', link: '#team' },
  { name: 'Services', link: '#services' },
  { name: 'Segments', link: '#segments' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > prevScrollY ? "down" : "up";
    
    // Show header when at top (less than 50px) or scrolling up
    // Hide header when scrolling down and past 50px
    if (latest < 50) {
      setIsVisible(true);
    } else if (direction === "down" && latest > prevScrollY + 10) {
      setIsVisible(false);
    } else if (direction === "up" && latest < prevScrollY - 10) {
      setIsVisible(true);
    }
    
    setPrevScrollY(latest);
  });
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Desktop Dock-style Header */}
      <motion.div
        className="hidden lg:block fixed top-9 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-8 px-16 py-4 bg-white border border-gray-200 rounded-2xl shadow-xl mx-4">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3 mr-4 cursor-pointer"
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-12 h-12 p-2">
              <Image
                src="/ltm-logo.png"
                alt="LTM Logo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.link)}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 rounded-xl transition-all duration-300 hover:text-red-600 hover:bg-red-50/80 group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff4444] to-[#C10007] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </motion.button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="ml-4">
            <ContactButton className="px-4 py-2 text-sm">
              Contact
            </ContactButton>
          </div>
        </div>
      </motion.div>

      {/* Mobile Full-Width Header */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-lg">
          {/* Mobile Logo Section */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/ltm-logo.png"
                alt="LTM Logo"
                fill
                className="object-contain"
              />
            </div>

          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-red-600 transition-colors relative"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ 
                rotate: isMobileMenuOpen ? 90 : 0,
                opacity: isMobileMenuOpen ? 0 : 1 
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Menu sx={{ fontSize: 24 }} />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                rotate: isMobileMenuOpen ? 0 : -90,
                opacity: isMobileMenuOpen ? 1 : 0 
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Close sx={{ fontSize: 24 }} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation */}
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.link)}
                  className="block w-full text-left px-4 py-3 text-gray-700 font-medium rounded-xl transition-all duration-300 hover:text-red-600 hover:bg-red-50/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Contact Button */}
              <motion.div
                className="pt-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ContactButton className="w-full justify-center py-3">
                  Contact
                </ContactButton>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}