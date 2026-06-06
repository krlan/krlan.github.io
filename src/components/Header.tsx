import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="mb-5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <h1 className="text-3xl font-bold text-white">Igor Trefilov</h1>
        <span className="font-mono text-xs text-green-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          open to work
        </span>
      </div>
      <p className="text-neutral-400 text-sm mb-3">AI & Blockchain builder who ships</p>
      
      {/* Stats bar */}
      <div className="flex gap-6 mb-3 font-mono text-xs">
        <span><span className="text-green-500">6+</span> <span className="text-neutral-500">Years Crypto</span></span>
        <span><span className="text-green-500">5+</span> <span className="text-neutral-500">Products Shipped</span></span>
      </div>
      
      <div className="font-mono text-xs text-neutral-500 flex flex-wrap gap-4">
        <span>remote</span>
        <span className="text-neutral-700">·</span>
        <a href="mailto:igor@sigma.club" className="hover:text-green-500 transition-colors">igor@sigma.club</a>
        <span className="text-neutral-700">·</span>
        <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">x.com/trefeelove</a>
        <span className="text-neutral-700">·</span>
        <a href="https://sigma.club" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">sigma.club</a>
      </div>
    </motion.header>
  );
};

export default Header;