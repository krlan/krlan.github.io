import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0c0c0c] p-6 lg:p-8 max-w-4xl mx-auto print:p-4 min-h-screen"
      >
        <Header />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;