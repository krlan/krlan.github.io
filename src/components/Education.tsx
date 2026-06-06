import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <motion.div 
        className="education-entry"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-[var(--text)]">
          <strong>Higher School of Economics</strong>, Saint-Petersburg, Russia -- Bachelor of Science in Economics
        </h3>
        <p className="details mt-0.5">Sep 2012 -- Jun 2016</p>
      </motion.div>
    </Section>
  );
};

export default Education;