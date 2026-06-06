import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { label: "ai automation", text: "Building AI agents: voice, email, translation & recruiting" },
  { label: "revenue", text: "Generated $50k+ in first week launching NFT collection" },
  { label: "shipped", text: "5+ products from concept to production" },
  { label: "experience", text: "8+ years remote work across US, EU, APAC" }
];

const Highlights: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-5"
    >
      <div className="grid grid-cols-2 gap-2">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 * index }}
            className="relative bg-[#111111] border border-[#262626] rounded-md px-3 py-2.5 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-wide mb-0.5">{item.label}</div>
            <span className="text-xs text-zinc-100">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Highlights;
