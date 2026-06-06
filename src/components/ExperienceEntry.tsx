import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceEntryProps {
  title: string;
  period: string;
  responsibilities: string[];
  index: number;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ 
  title, 
  period, 
  responsibilities,
  index
}) => {
  return (
    <motion.div 
      className="experience-entry"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className="details">{period}</p>
      <ul>
        {responsibilities.map((responsibility, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * idx + 0.2 }}
            dangerouslySetInnerHTML={{ __html: responsibility }}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceEntry;