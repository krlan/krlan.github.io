import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';
import { Layers } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'original' | 'anthropic' | 'openai' | 'zed-cursor'>('original');
  const [showTweaks, setShowTweaks] = useState(true);

  useEffect(() => {
    // Add theme class to body for global variable transitions
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    // Listen for edit mode messages from host to toggle Tweaks
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode') {
        setShowTweaks(true);
      } else if (e.data?.type === '__deactivate_edit_mode') {
        setShowTweaks(false);
      }
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen relative transition-colors duration-200 pb-20">
      <AnimatePresence mode="wait">
        <motion.div 
          key={theme}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-6 lg:p-8 max-w-2xl mx-auto print:p-0 min-h-screen"
        >
          <div className="flex flex-col gap-6">
            <Header />
            <Summary />
            <Experience />
            <Education />
            <Skills />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Design Style Selector */}
      {showTweaks && (
        <div className="fixed bottom-6 right-6 z-[10000] no-print">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[220px] text-xs font-mono text-neutral-400">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-1.5">
              <span className="font-semibold text-neutral-200 uppercase tracking-widest text-[9px] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-neutral-400" /> SELECT DESIGN STYLE
              </span>
            </div>
            
            <div className="flex flex-col gap-1.5">
              {(
                [
                  { id: 'original', label: 'Original CV', tagline: 'Green & Dark Classic' },
                  { id: 'anthropic', label: 'Anthropic', tagline: 'Warm Cream Editorial' },
                  { id: 'openai', label: 'OpenAI', tagline: 'Minimalist Off-Black' },
                  { id: 'zed-cursor', label: 'Zed & Cursor', tagline: 'Developer Code IDE' },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl transition-all duration-150 flex flex-col ${
                    theme === option.id
                      ? 'bg-white/10 text-white font-semibold border border-white/20'
                      : 'hover:bg-neutral-800/80 text-neutral-400 border border-transparent'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-white">{option.label}</span>
                    {theme === option.id && <span className="text-[10px] text-green-400">●</span>}
                  </div>
                  <span className="text-[9px] text-neutral-500 font-normal mt-0.5">{option.tagline}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;