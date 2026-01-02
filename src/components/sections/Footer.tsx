'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Custom Manufacturing', href: '#services' },
      { name: 'Design Support', href: '#services' },
      { name: 'Integration Services', href: '#services' },
      { name: 'Quality Certification', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Industry Segments', href: '#segments' },
      { name: 'Contact', href: '#cta' },
    ],
    contact: [
      { name: 'info@lankatechmanu.com', href: 'mailto:info@lankatechmanu.com' },
      { name: '+94 77 052 6589', href: 'tel:+94770526589' },
      { name: 'Kotugoda, Sri Lanka, Western', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-[5vw] py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/ltm-logo.png"
                  alt="LTM Logo"
                  width={60}
                  height={60}
                  className="mr-3"
                />

              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pioneering excellence in wire harness manufacturing with precision, innovation, and reliability.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons - placeholder for now */}
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer">
                  <span className="text-xs text-gray-600">L</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer">
                  <span className="text-xs text-gray-600">T</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer">
                  <span className="text-xs text-gray-600">M</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © {currentYear} LTM Manufacturing. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}