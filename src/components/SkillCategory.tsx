import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  category: string;
  description: string;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, description, index }) => {
  return (
    <motion.div 
      className="skills-category"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h4>{category}</h4>
      <p>{description}</p>
    </motion.div>
  );
};

export default SkillCategory;