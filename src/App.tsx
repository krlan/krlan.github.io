import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const email = "i@sigma.club";
const twitterUrl = "https://x.com/trefeelove";
const webUrl = "https://leverbrain.com";

const summaryText = "Self-taught engineer (TypeScript, React, Solidity, Python) who builds products from zero. 6+ years in crypto/DeFi, now focused on AI automation — voice AI agents, intelligent email systems, workflow orchestration. Fast execution, end-to-end ownership, concept to production in weeks.";

const experienceData = [
  {
    title: "LeverBrain, Remote -- Founder & CEO",
    period: "Jan 2024 -- Present",
    company: "LeverBrain",
    url: "https://leverbrain.com",
    responsibilities: [
      "Pivoted LeverBrain into a decentralized high-fidelity marketplace for artificial intelligence (AI) agent skills and modular deployment blueprints.",
      "Solana Smart Contracts (Anchor/Rust): Designed and deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USD Coin (USDC) using the Solana Program Library (SPL) Token program.",
      "Cryptographic Access Control: Engineered secure backend file delivery in Convex by validating Web3 wallet signatures and querying on-chain receipt Program Derived Addresses (PDAs) via Helius remote procedure call (RPC) nodes.",
      "Real-time Architecture (Convex): Built low-latency capability card rendering and metadata caching using Convex (DB & Edge Functions) and Convex File Storage, achieving sub-50ms render times.",
      "Operator Experience: Developed a command-line interface (CLI) and Next.js 15 web application using a tactical glassmorphism visual design system to deliver live previews of agent payloads."
    ]
  },
  {
    title: "Sigma Club, Remote -- Founder & Product Lead",
    period: "Jun 2023 -- Present",
    company: "Sigma Club",
    url: "https://sigma.club/",
    responsibilities: [
      "Designed and launched an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.",
      "Architected three core AI features—personalized learning paths, interest-based matching algorithms, and knowledge gap analysis pipelines—resulting in a 40% increase in user session retention.",
      "Implemented the full-stack codebase using React, TypeScript, and Supabase, integrating Google Gemini and Anthropic Claude APIs to ship the initial minimum viable product (MVP) in under 4 weeks.",
      "Utilized modern developer tools and prompt engineering to accelerate the development lifecycle by 3x."
    ]
  },
  {
    title: "DeFi/Web3 Consulting, Remote -- Blockchain Specialist & DeFi Strategist",
    period: "Jan 2019 -- Present",
    company: "DeFi/Web3 Consulting",
    responsibilities: [
      "Conducted deep protocol analysis and yield strategy execution in decentralized finance (DeFi), leading smart contract security audits and non-fungible token (NFT) launches.",
      "Generated $50k+ in profit within 7 days by architecting and executing the day-one launch of a custom NFT collection on the FTX marketplace.",
      "Designed and deployed custom yield strategies across Pendle Finance, EigenLayer restaking protocols, and NFTX liquidity pools, managing a private asset portfolio.",
      "Authored and deployed audited Ethereum smart contracts using Solidity and OpenZeppelin frameworks, and developed Solana minting protocols following the Metaplex standard.",
      "Built secure NFT-gated community platforms featuring Web3 wallet authentication, real-time on-chain data fetching, and automated membership verification."
    ]
  },
  {
    title: "E-commerce Digital, Remote -- Founder",
    period: "Jan 2017 -- Dec 2021",
    company: "E-commerce Digital",
    responsibilities: [
      "Founded and scaled a profitable e-commerce store selling specialized digital utility products to Amazon sellers, generating consistent monthly cash flow.",
      "Directed all operations end-to-end, including digital product design, high-converting marketing funnels, automated customer support pipelines, and vendor relations.",
      "Maintained profitability for 4 consecutive years, managing a solo operation before executing a strategic acquisition/pivot."
    ]
  },
  {
    title: "FinTech Platform, Remote -- Product Manager",
    period: "Mar 2016 -- Nov 2017",
    company: "FinTech Platform",
    responsibilities: [
      "Managed product roadmap and contributed frontend code for a financial technology (FinTech) loan comparison platform serving over 50,000 US consumers.",
      "Coordinated sprint planning, backlog grooming, and remote team workflows across 3 continents using Agile methodologies.",
      "Established high-performance remote communication protocols, building a foundation for 8+ years of successful distributed engineering execution."
    ]
  }
];

const skillsData = [
  { category: "Expert", skills: ["AI Automation", "Voice AI", "LLMs", "RAG", "TypeScript", "React", "Product Strategy", "DeFi/Blockchain"] },
  { category: "Proficient", skills: ["Python", "Solidity", "Node.js", "Next.js", "Supabase", "n8n/Make.com", "LangChain", "Anchor/Rust"] },
  { category: "AI/ML Stack", skills: ["OpenAI", "Claude", "Gemini APIs", "Whisper", "ElevenLabs", "Custom RAG Pipelines", "Agentic Engineering"] },
  { category: "Blockchain", skills: ["DeFi Protocols", "DeFi Yield", "EigenLayer", "NFTX", "Solidity Smart Contracts", "Metaplex"] }
];

const educationData = [
  {
    school: "Higher School of Economics",
    degree: "Bachelor of Science in Economics",
    period: "Sep 2012 -- Jun 2016",
    description: "Focused on quantitative analysis and financial modeling. Deepened in web development and software engineering during studies, pursuing building independent products from zero."
  }
];

function App() {
  const [theme, setTheme] = useState<'original' | 'anthropic' | 'openai' | 'ats-classic'>('original');
  const [showTweaks, setShowTweaks] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get('theme');
    if (urlTheme && ['original', 'anthropic', 'openai', 'ats-classic'].includes(urlTheme)) {
      setTheme(urlTheme as any);
    }
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // 1. ORIGINAL LAYOUT
  const renderOriginal = () => (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 py-8">
      <Header />
      <Skills />
      <Experience />
      <Education />
    </div>
  );

  // 2. ANTHROPIC LAYOUT (Clean Serif Editorial)
  const renderAnthropic = () => (
    <div className="max-w-3xl mx-auto font-sans selection:bg-[#e05c3e]/20 text-[#191919] py-16 px-6 lg:px-8">
      <header className="border-b border-[#e8e2d5] pb-8 mb-10">
        <h1 className="text-5xl font-bold font-serif mb-3 text-[#191919] tracking-tight">
          Igor Trefilov
        </h1>
        <p className="text-lg text-[#e05c3e] font-serif italic mb-6">
          AI Automations & Blockchain Systems Architect
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#66625b]">
          <span>remote</span>
          <span>·</span>
          <a href={`mailto:${email}`} className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">{email}</a>
          <span>·</span>
          <a href="https://github.com/krlan" target="_blank" rel="noopener noreferrer" className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">github.com/krlan</a>
          <span>·</span>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">x.com/trefeelove</a>
          <span>·</span>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">leverbrain.com</a>
        </div>
      </header>

      {/* Technical Expertise (Skills) */}
      <section className="flex flex-col gap-6 mb-12">
        <h2 className="text-2xl font-bold font-serif border-b border-[#e8e2d5] pb-2 text-[#191919]">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e05c3e]">
                {cat.category}
              </h4>
              <p className="text-sm text-[#66625b] leading-relaxed">
                {cat.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional History (Experience) */}
      <section className="flex flex-col gap-8 mb-12">
        <h2 className="text-2xl font-bold font-serif border-b border-[#e8e2d5] pb-2 text-[#191919]">
          Professional History
        </h2>
        <div className="flex flex-col gap-8">
          {experienceData.map((job, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-lg font-serif font-bold text-[#191919]">
                  {job.company} — <span className="font-normal italic text-[#66625b]">{job.title.split(" -- ")[1]}</span>
                </h3>
                <span className="text-xs font-mono text-[#66625b] mt-1 md:mt-0">{job.period}</span>
              </div>
              <ul className="list-disc pl-5 text-sm text-[#66625b] space-y-2 mt-2 leading-relaxed">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} dangerouslySetInnerHTML={{ __html: resp }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Foundation (Education) */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold font-serif border-b border-[#e8e2d5] pb-2 text-[#191919]">
          Academic Foundation
        </h2>
        <div className="flex flex-col gap-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h4 className="text-base font-serif font-bold text-[#191919]">
                  <strong>{edu.school}</strong>, Saint-Petersburg, Russia -- {edu.degree}
                </h4>
                <span className="text-xs font-mono text-[#66625b]">{edu.period}</span>
              </div>
              {edu.description && (
                <p className="text-xs text-[#66625b] leading-relaxed mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // 3. OPENAI LAYOUT (Corporate Dark Homepage Style)
  const renderOpenAI = () => (
    <div className="max-w-4xl mx-auto text-white selection:bg-neutral-800 py-16 px-6 lg:px-8">
      <header className="border-b border-neutral-900 pb-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 text-white">
            Igor Trefilov
          </h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            Building autonomous AI systems and decentralized blockchain protocols to automate execution at scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500">
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
          <span>/</span>
          <a href="https://github.com/krlan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/krlan</a>
          <span>/</span>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">x.com/trefeelove</a>
          <span>/</span>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">leverbrain.com</a>
        </div>
      </header>

      {/* Technical capabilities (Skills) */}
      <section className="mb-16 border-b border-neutral-900 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">01 / Capabilities</h2>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((cat, idx) => (
              <div key={idx} className="border border-neutral-900 p-6 rounded-lg hover:border-neutral-800 transition-colors">
                <h4 className="text-xs font-mono font-bold text-white mb-2 uppercase tracking-wide">
                  {cat.category}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {cat.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience grid layout */}
      <section className="mb-16 border-b border-neutral-900 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">02 / Selected Experience</h2>
          <div className="md:col-span-2 flex flex-col gap-10">
            {experienceData.map((job, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {job.title.split(" -- ")[0]} — <span className="text-neutral-400 font-light text-sm">{job.title.split(" -- ")[1]}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">{job.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 mt-2">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed pl-3 border-l border-neutral-800 hover:border-white transition-colors" dangerouslySetInnerHTML={{ __html: resp }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Foundation (Education) */}
      <section className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">03 / Education</h2>
          <div className="md:col-span-2 flex flex-col gap-4">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-base font-bold text-white">
                    <strong>{edu.school}</strong>, Saint-Petersburg, Russia -- {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                </div>
                {edu.description && (
                  <p className="text-xs text-neutral-500 leading-relaxed mt-2">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // 7. ATS CLASSIC LAYOUT (Standard Printable Grayscale Paper)
  const renderATSClassic = () => (
    <div className="max-w-2xl mx-auto flex flex-col gap-3 py-6 px-6">
      <Header />
      <Skills />
      <Experience />
      <Education />
    </div>
  );

  // Selector menu widget
  const renderSelector = () => (
    showTweaks && (
      <div className="fixed bottom-6 right-6 z-[10000] no-print">
        <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[230px] text-xs font-mono text-neutral-400">
          <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-1.5">
            <span className="font-semibold text-neutral-200 uppercase tracking-widest text-[9px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-400" /> CHOOSE THEME LAYOUT
            </span>
          </div>
          
          <div className="flex flex-col gap-1.5">
            {(
              [
                { id: 'original', label: 'Original CV', tagline: 'Classic Green & Dark' },
                { id: 'anthropic', label: 'Anthropic Site', tagline: 'Warm Serif Marketing' },
                { id: 'openai', label: 'OpenAI Site', tagline: 'Minimalist Black & White' },
                { id: 'ats-classic', label: 'ATS Classic', tagline: 'Printable Grayscale Paper' }
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
    )
  );

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.div 
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'original' && renderOriginal()}
          {theme === 'anthropic' && renderAnthropic()}
          {theme === 'openai' && renderOpenAI()}
          {theme === 'ats-classic' && renderATSClassic()}
        </motion.div>
      </AnimatePresence>

      {renderSelector()}
    </div>
  );
}

export default App;