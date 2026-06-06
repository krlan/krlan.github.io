import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState<'classic' | 'terminal' | 'glass' | 'editorial' | 'deck'>('classic');
  const [activeDeckTab, setActiveDeckTab] = useState<'summary' | 'experience' | 'education' | 'skills'>('summary');
  const [showTweaks, setShowTweaks] = useState(true);

  useEffect(() => {
    // Set theme class on body
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

  const deckTabs = [
    { id: 'summary', label: 'Summary', component: <Summary /> },
    { id: 'experience', label: 'Experience', component: <Experience /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'skills', label: 'Skills', component: <Skills /> }
  ] as const;

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Ambient background blobs for Glass theme */}
      {theme === 'glass' && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-sky-500/10 rounded-full blur-3xl ambient-blob-1 pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-3xl ambient-blob-2 pointer-events-none" />
        </>
      )}

      {/* Retro scanlines for Terminal theme */}
      {theme === 'terminal' && <div className="terminal-scanlines" />}

      <AnimatePresence mode="wait">
        <motion.div 
          key={theme}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`max-w-4xl mx-auto p-6 lg:p-8 print:p-4 min-h-screen ${
            theme === 'glass' ? 'glass-panel bg-white/5 border border-white/10 rounded-xl my-6' : ''
          }`}
        >
          {theme === 'terminal' ? (
            <div className="border border-[var(--border)] rounded p-6 bg-black/90 font-mono shadow-[0_0_20px_rgba(0,255,102,0.15)] relative">
              <div className="flex justify-between items-center border-b border-[var(--border)] pb-2 mb-6 text-xs text-[var(--accent)]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-ping"></span>
                  igor_trefilov_cv.sh
                </span>
                <span>v3.5.0-LATEST</span>
              </div>
              
              <Header />
              <Summary />
              <Experience />
              <Education />
              <Skills />
            </div>
          ) : theme === 'deck' ? (
            <div className="flex flex-col gap-6">
              <Header />
              
              {/* Tab selector for Card Deck theme */}
              <div className="flex flex-wrap gap-2 border-b border-[var(--border)] pb-4 font-mono text-xs">
                {deckTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDeckTab(tab.id)}
                    className={`px-3 py-1.5 rounded transition-all duration-200 ${
                      activeDeckTab === tab.id
                        ? 'bg-[var(--accent)] text-black font-semibold shadow-md'
                        : 'bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--border)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Animated card transition */}
              <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDeckTab}
                    initial={{ opacity: 0, rotateY: 45, x: 50 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    exit={{ opacity: 0, rotateY: -45, x: -50 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-xl shadow-xl"
                  >
                    {deckTabs.find((t) => t.id === activeDeckTab)?.component}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // Classic, Glass, and Editorial scroll layout
            <>
              <Header />
              <Summary />
              <Experience />
              <Education />
              <Skills />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating Tweaks/Theme Selector widget */}
      {showTweaks && (
        <div className="fixed bottom-6 right-6 z-[10000] no-print">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-3 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[200px] text-xs font-mono text-neutral-400">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-1.5 mb-1">
              <span className="font-semibold text-neutral-200 uppercase tracking-wider text-[10px]">TWEAKS / STYLE</span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </div>
            
            <div className="flex flex-col gap-1">
              {(
                [
                  { id: 'classic', label: 'Classic Dark' },
                  { id: 'terminal', label: 'Cyberpunk CLI' },
                  { id: 'glass', label: 'Glassmorphism' },
                  { id: 'editorial', label: 'Nordic Light' },
                  { id: 'deck', label: '3D Card Deck' },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  className={`w-full text-left px-2 py-1 rounded transition-colors duration-150 flex justify-between items-center ${
                    theme === option.id
                      ? 'bg-green-500/10 text-green-400 font-semibold border border-green-500/20'
                      : 'hover:bg-neutral-800 text-neutral-400'
                  }`}
                >
                  <span>{option.label}</span>
                  {theme === option.id && <span className="text-[10px]">●</span>}
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