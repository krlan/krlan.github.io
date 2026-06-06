import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Summary: React.FC = () => {
  return (
    <Section title="Summary">
      <motion.p 
        className="text-neutral-400 leading-relaxed text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Self-taught engineer (TypeScript, React, Solidity, Python) who builds products from zero. 6+ years in crypto/DeFi, now focused on AI automation — voice AI agents, intelligent email systems, workflow orchestration. Fast execution, end-to-end ownership, concept to production in weeks.
      </motion.p>
    </Section>
  );
};

export default Summary;