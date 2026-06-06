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
        <h1 className="text-3xl font-bold text-[var(--text)]">Igor Trefilov</h1>
        <span className="font-mono text-xs text-[var(--accent)] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"></span>
          open to work
        </span>
      </div>
      <p className="text-[var(--text-muted)] text-sm mb-3">AI & Blockchain builder who ships</p>
      
      {/* Stats bar */}
      <div className="flex gap-6 mb-3 font-mono text-xs">
        <span><span className="text-[var(--accent)] font-bold">6+</span> <span className="text-[var(--text-muted)]">Years Crypto</span></span>
        <span><span className="text-[var(--accent)] font-bold">5+</span> <span className="text-[var(--text-muted)]">Products Shipped</span></span>
      </div>
      
      <div className="font-mono text-xs text-[var(--text-muted)] flex flex-wrap gap-4">
        <span>remote</span>
        <span className="text-[var(--border)]">·</span>
        <a href="mailto:i@sigma.club" className="hover:text-[var(--accent-dim)] transition-colors">i@sigma.club</a>
        <span className="text-[var(--border)]">·</span>
        <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-dim)] transition-colors">x.com/trefeelove</a>
        <span className="text-[var(--border)]">·</span>
        <a href="https://sigma.club" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-dim)] transition-colors">sigma.club</a>
      </div>
    </motion.header>
  );
};

export default Header;