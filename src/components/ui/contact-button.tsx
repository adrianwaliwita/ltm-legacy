'use client';

import React from 'react';

interface ContactButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ContactButton = ({ children, onClick, className = '' }: ContactButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to CTA section
      const element = document.querySelector('#cta');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-red-700 hover:bg-red-800 text-white px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-700/40 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
};