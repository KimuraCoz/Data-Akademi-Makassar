import React from 'react';
import { motion } from 'motion/react';

interface AsymmetricCardProps {
  id?: string;
  code?: string;
  title: string;
  subtitle?: string;
  category?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const AsymmetricCard: React.FC<AsymmetricCardProps> = ({
  id,
  code = 'MKS-AC',
  title,
  subtitle,
  category,
  children,
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <div className={`relative group ${className} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {/* Background Shadow/Border offset that creates the "Anti-Grid shadow offset" */}
      <div 
        className="absolute -inset-[1px] rounded-lg transition-all duration-300 translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3"
        style={{
          background: 'linear-gradient(135deg, rgba(94, 0, 6, 0.15) 0%, rgba(213, 62, 15, 0.03) 100%)',
        }}
      />

      {/* Main Card Body */}
      <motion.div
        whileHover={{ y: -3, x: -3 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`relative z-10 w-full h-full p-5 lg:p-6 rounded-lg bg-[#121212]/90 backdrop-blur-md overflow-hidden ${
          isActive ? 'bg-[#181818]' : ''
        }`}
      >
        
        {/* Anti-grid Technical Coordinates or Identifiers */}
        <div className="flex justify-between items-center mb-3 text-[10px] font-mono select-none tracking-widest text-brand-bright/70">
          <span>{code}</span>
          {category && (
            <span className="px-2 py-0.5 rounded bg-brand-deep/35 uppercase text-[9px]">
              {category}
            </span>
          )}
        </div>

        {/* Title details */}
        <div className="mb-4">
          <h4 className="font-display text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-brand-bright transition-colors duration-200">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs font-mono text-gray-400 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Card Main Inner Content */}
        <div className="text-sm leading-relaxed text-gray-300 font-light">
          {children}
        </div>

        {/* Bottom design elements that make this card feel like an architectural blueprint */}
        <div className="mt-5 pt-3 flex justify-between items-center">
          <span className="text-[9px] font-mono text-gray-600 tracking-tighter">COORD // MKS-METRIC</span>
          <div className="flex space-x-1">
            <span className="w-1 h-1 rounded-full bg-brand-bright animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-medium" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
