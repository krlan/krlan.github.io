import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-white">Bachelor of Science in Economics</h3>
        <p className="text-xs text-neutral-500 font-mono">Higher School of Economics · Saint-Petersburg · 2016</p>
      </motion.div>
    </Section>
  );
};

export default Education;