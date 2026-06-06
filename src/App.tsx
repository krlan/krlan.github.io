import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Briefcase, GraduationCap, Wrench, User, Mail, Globe, Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';

// Shared CV Data
const email = "i@sigma.club";
const twitterUrl = "https://x.com/trefeelove";
const webUrl = "https://sigma.club";

const summaryText = "Self-taught engineer (TypeScript, React, Solidity, Python) who builds products from zero. 6+ years in crypto/DeFi, now focused on AI automation — voice AI agents, intelligent email systems, workflow orchestration. Fast execution, end-to-end ownership, concept to production in weeks.";

const experienceData = [
  {
    title: "Founder & CEO | LeverBrain — Solana Skill Marketplace",
    period: "2024 - Present | Remote",
    company: "LeverBrain",
    url: "https://leverbrain.com",
    responsibilities: [
      "Pivoted Leverbrain into a decentralized high-fidelity marketplace for AI agent skills, strategies, and deployment blueprints.",
      "Solana Smart Contracts (Anchor/Rust): Designed and deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USDC using the SPL Token program.",
      "Cryptographic Access Control: Engineered secure backend file delivery in Convex by validating Web3 wallet signatures and querying on-chain receipt PDAs via Helius RPC nodes.",
      "Real-time Architecture (Convex): Built low-latency capability card rendering and metadata caching using Convex (DB & Edge Functions) and Convex File Storage.",
      "Operator Experience: Developed a command-line interface (CLI) and Next.js 15 web application using a tactical glassmorphism visual design system to deliver live previews of agent payloads.",
      "Tech stack: Next.js 15, TypeScript, Solana (Web3.js, Anchor, SPL Token), Helius RPC, Convex (Real-time DB & File Storage), Tailwind CSS, Framer Motion."
    ]
  },
  {
    title: "Founder & Product Lead | Sigma Club — Learning Platform",
    period: "2023 - Present | Remote",
    company: "Sigma Club",
    url: "https://sigma.club/",
    responsibilities: [
      "Building an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.",
      "Architected 3 core AI features: personalized learning paths, interest-based matching, and knowledge gap analysis.",
      "Full-stack development: React, TypeScript, Supabase, Gemini/Claude API — rapid iteration and shipping.",
      "Leveraging AI-assisted development to move fast."
    ]
  },
  {
    title: "Blockchain Specialist & DeFi Strategist",
    period: "2019 - Present | Remote",
    company: "Crypto/DeFi Consulting",
    responsibilities: [
      "6+ years deep in crypto: DeFi protocol analysis, yield strategies, NFT launches, smart contract development.",
      "Generated $50k+ profit in one week launching NFT collection on FTX marketplace day-one.",
      "Developed and executed yield strategies across Pendle Finance, EigenLayer, and NFTX pools.",
      "Wrote and deployed Ethereum smart contracts (Solidity, OpenZeppelin); built on Solana (Metaplex standard).",
      "Built NFT-gated community platforms with wallet auth, on-chain data fetching, and membership verification."
    ]
  },
  {
    title: "Founder | E-commerce Business — Digital Products",
    period: "2017 - 2021 | Remote",
    company: "E-commerce Digital",
    responsibilities: [
      "Built and operated profitable e-commerce store selling digital products to Amazon sellers.",
      "Managed end-to-end: product creation, marketing funnels, customer support, and operations.",
      "4 years profitable until strategic pivot; demonstrated market adaptability."
    ]
  },
  {
    title: "Product Manager | FinTech Startup — Loan Comparison Platform",
    period: "2016 - 2017 | Remote (California-based team)",
    company: "FinTech Platform",
    responsibilities: [
      "Contributed development and product management to a loan comparison platform serving US consumers.",
      "Coordinated fully remote team across multiple timezones; managed sprint planning and stakeholder communication.",
      "First professional remote role — established foundation for 8+ years of distributed work expertise."
    ]
  }
];

const educationData = [
  {
    school: "Free Code Camp",
    degree: "Computer Software Engineering",
    period: "2015 — 2016"
  },
  {
    school: "Higher School of Economics",
    degree: "Bachelor's degree, Economics",
    period: "2012 — 2016",
    description: "Wanted to become an investment banker, but as soon as I deepened in this field, lost all the interest. Soon after, I started to build my way up in web development, because it amazed me how both fun and meaningful work could be."
  },
  {
    school: "CS50 - edX (HarvardX course)",
    degree: "Computer Science",
    period: "2014 — 2015"
  }
];

const skillsData = [
  {
    category: "Expert",
    skills: ["AI Automation", "Voice AI", "LLMs", "RAG", "TypeScript", "React", "Product Strategy", "DeFi/Blockchain", "Remote Leadership"]
  },
  {
    category: "Proficient",
    skills: ["Python", "Solidity", "Node.js", "Next.js", "Supabase", "n8n/Make.com", "LangChain", "OpenAI/Claude/Gemini APIs", "Web3.js/Ethers.js"]
  },
  {
    category: "AI/ML Stack",
    skills: ["OpenAI", "Claude", "Gemini APIs", "Whisper", "ElevenLabs", "OpenRouter", "Custom RAG Pipelines", "Agentic Engineering"]
  },
  {
    category: "Blockchain",
    skills: ["DeFi Protocols", "Pendle", "EigenLayer", "NFTX", "Smart Contracts (Solidity)", "NFTs (ERC-721)", "Metaplex"]
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Russian (Native)"]
  },
  {
    category: "Remote Collaboration",
    skills: ["8+ Years Distributed Work", "Async Workflows", "0→1 Execution", "Rapid Prototyping"]
  }
];

function App() {
  const [theme, setTheme] = useState<'linear' | 'bento' | 'brutalist' | 'editorial'>('linear');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSidebarSection, setActiveSidebarSection] = useState<'overview' | 'experience' | 'skills' | 'education'>('overview');
  const [expandedBrutalistJob, setExpandedBrutalistJob] = useState<number | null>(0);
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

  // Keyboard shortcut listeners for Linear theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (theme !== 'linear') return;
      if (document.activeElement?.tagName === 'INPUT') return; // Ignore when typing in search

      const key = e.key.toLowerCase();
      if (key === 'o') setActiveSidebarSection('overview');
      if (key === 'e') setActiveSidebarSection('experience');
      if (key === 's') setActiveSidebarSection('skills');
      if (key === 'd') setActiveSidebarSection('education');
      if (key === '/') {
        e.preventDefault();
        const searchInput = document.getElementById('linear-search');
        searchInput?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme]);

  // Helper to highlight matching search term
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <span key={i} className="bg-yellow-500/30 text-yellow-200 px-0.5 rounded">{part}</span> 
            : part
        )}
      </>
    );
  };

  // Filter functions
  const filteredExperience = experienceData.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.responsibilities.some(resp => resp.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredSkills = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(cat => cat.skills.length > 0);

  const filteredEducation = educationData.filter(school => 
    school.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (school.description && school.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Layout 1: Linear Dashboard
  const renderLinear = () => (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-8 flex flex-col gap-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Igor Trefilov</h1>
            <p className="text-xs text-[var(--accent)] font-mono mb-2">i@sigma.club</p>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-green-500">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
              open_to_work = true
            </div>
          </div>

          {/* Navigation Links with Key Indicators */}
          <nav className="flex flex-col gap-1 font-mono text-xs text-[var(--text-muted)]">
            {(
              [
                { id: 'overview', label: 'Overview', key: 'O' },
                { id: 'experience', label: 'Experience', key: 'E' },
                { id: 'skills', label: 'Skills', key: 'S' },
                { id: 'education', label: 'Education', key: 'D' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSidebarSection(item.id);
                  const el = document.getElementById(`linear-${item.id}`);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex justify-between items-center px-3 py-2 rounded-lg transition-colors text-left ${
                  activeSidebarSection === item.id 
                    ? 'bg-[#181a25] text-white border border-[var(--border)]' 
                    : 'hover:bg-[#12131a]/50 hover:text-[var(--text)]'
                }`}
              >
                <span>{item.label}</span>
                <kbd className="px-1.5 py-0.5 text-[9px] rounded font-semibold">{item.key}</kbd>
              </button>
            ))}
          </nav>

          <div className="border-t border-[var(--border)] pt-4 font-mono text-[10px] text-[var(--text-muted)]">
            <p className="mb-1">Press <kbd className="px-1 py-0.5 rounded">/</kbd> to search</p>
            <p>© 2026 Igor Trefilov</p>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Command Search bar */}
        <div className="relative linear-panel rounded-xl p-1.5 flex items-center">
          <Search className="w-4 h-4 ml-3 text-[var(--text-muted)]" />
          <input
            id="linear-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to filter CV... (Solana, Convex, Python, PM)"
            className="w-full bg-transparent text-sm text-white px-3 py-2 focus:outline-none placeholder-[var(--text-muted)] font-mono"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')} 
              className="text-xs text-[var(--text-muted)] hover:text-white mr-3 font-mono"
            >
              clear
            </button>
          )}
        </div>

        {/* Overview */}
        <div id="linear-overview" className="linear-panel p-6 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-wider font-mono">
            <User className="w-4 h-4 text-[var(--accent)]" />
            <span>Profile Overview</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {highlightText(summaryText, searchQuery)}
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-4 mt-2">
            <div><span className="text-white font-mono font-semibold mr-1">6+ Years</span> Crypto/DeFi</div>
            <div><span className="text-white font-mono font-semibold mr-1">5+ Products</span> Built & Shipped</div>
            <div><span className="text-white font-mono font-semibold mr-1">Email:</span> <a href={`mailto:${email}`}>{email}</a></div>
          </div>
        </div>

        {/* Experience */}
        <div id="linear-experience" className="linear-panel p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-wider font-mono border-b border-[var(--border)] pb-3">
            <Briefcase className="w-4 h-4 text-[var(--accent)]" />
            <span>Work Experience</span>
          </div>

          <div className="flex flex-col gap-6">
            {filteredExperience.map((job, idx) => (
              <div key={idx} className="border-b border-[var(--border)] last:border-none pb-5 last:pb-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-sm font-semibold text-white font-mono">
                    {highlightText(job.title, searchQuery)}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-muted)] mt-1 md:mt-0">{job.period}</span>
                </div>
                <ul className="text-xs text-[var(--text-muted)] space-y-2 mt-3 pl-4 list-disc">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">
                      {highlightText(resp, searchQuery)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {filteredExperience.length === 0 && (
              <p className="text-xs text-[var(--text-muted)] italic text-center py-4 font-mono">No matching experiences found.</p>
            )}
          </div>
        </div>

        {/* Skills */}
        <div id="linear-skills" className="linear-panel p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-wider font-mono border-b border-[var(--border)] pb-3">
            <Wrench className="w-4 h-4 text-[var(--accent)]" />
            <span>Technical Skills</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((cat, idx) => (
              <div key={idx} className="bg-[#12131a]/40 border border-[var(--border)] p-4 rounded-xl">
                <h4 className="text-xs font-bold text-[var(--accent)] font-mono mb-2 uppercase tracking-wide">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-[#1c1e2d]/50 text-white text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)]">
                      {highlightText(skill, searchQuery)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="linear-education" className="linear-panel p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-wider font-mono border-b border-[var(--border)] pb-3">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span>Education</span>
          </div>
          <div className="flex flex-col gap-4">
            {filteredEducation.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-[var(--accent)] pl-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-xs font-semibold text-white font-mono">{edu.school}</h4>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono">{edu.period}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] italic font-mono mb-1">{edu.degree}</p>
                {edu.description && (
                  <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                    {highlightText(edu.description, searchQuery)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Layout 2: Bento Grid (Modular Bento.me Style)
  const renderBento = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto max-w-4xl mx-auto p-4 md:p-0">
      {/* 1. Header Card (Spans 2 columns on desktop) */}
      <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between min-h-[180px]">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <h1 className="text-3xl font-bold text-white tracking-tight">Igor Trefilov</h1>
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
          </div>
          <p className="text-sm text-pink-400 font-mono">Product Architect & Full-Stack Builder</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-[var(--text-muted)] mt-4 pt-4 border-t border-[var(--border)]">
          <a href={`mailto:${email}`} className="hover:text-pink-400 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" /> {email}
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">x.com/trefeelove</a>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">sigma.club</a>
        </div>
      </div>

      {/* 2. Status Card */}
      <div className="bento-card p-6 flex flex-col justify-between">
        <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-2">AVAILABILITY</div>
        <div className="text-lg font-bold text-white leading-tight">Remote Open to Work</div>
        <div className="flex gap-4 font-mono text-[10px] mt-4 pt-3 border-t border-[var(--border)]">
          <div><span className="text-pink-400 block font-semibold text-sm">6+ Yrs</span> Crypto</div>
          <div><span className="text-pink-400 block font-semibold text-sm">5+</span> Products</div>
        </div>
      </div>

      {/* 3. About Me / Bio Card */}
      <div className="bento-card p-6">
        <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-pink-400" /> BIO
        </div>
        <p className="text-xs leading-relaxed text-[var(--text-muted)]">
          {summaryText}
        </p>
      </div>

      {/* 4. Skills Card (Spans 2 columns) */}
      <div className="bento-card p-6 md:col-span-2">
        <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5 text-pink-400" /> TECH SYSTEM
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skillsData.slice(0, 4).map((cat, idx) => (
            <div key={idx}>
              <h4 className="text-[10px] font-bold text-pink-400 uppercase tracking-wider mb-1.5 font-mono">{cat.category}</h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-mono">
                {cat.skills.slice(0, 5).join(", ")}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Experience List Card (Spans 3 columns) */}
      <div className="bento-card p-6 md:col-span-3">
        <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-4 flex items-center gap-1.5 border-b border-[var(--border)] pb-2">
          <Briefcase className="w-3.5 h-3.5 text-pink-400" /> EXPERIENCES
        </div>
        <div className="flex flex-col gap-6">
          {experienceData.map((job, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 border-b border-[var(--border)] last:border-none pb-6 last:pb-0">
              <div className="md:w-1/3">
                <h4 className="text-xs font-bold text-white font-mono group-hover:text-pink-400 transition-colors">
                  {job.company}
                </h4>
                <p className="text-[10px] text-[var(--text-muted)] font-mono mt-0.5">{job.period}</p>
                {job.url && (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-pink-400/70 hover:text-pink-400 font-mono mt-1 inline-block">
                    visit website →
                  </a>
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white mb-2">{job.title.split(" | ")[1]}</p>
                <ul className="text-xs text-[var(--text-muted)] space-y-1.5 list-disc pl-4">
                  {job.responsibilities.slice(0, 3).map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">{resp}</li>
                  ))}
                  {job.responsibilities.length > 3 && (
                    <li className="text-[10px] text-pink-400/50 list-none pl-0 font-mono mt-1">
                      + {job.responsibilities.length - 3} more technical achievements
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Education Grid (Spans 3 columns) */}
      <div className="bento-card p-6 md:col-span-3">
        <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-4 flex items-center gap-1.5 border-b border-[var(--border)] pb-2">
          <GraduationCap className="w-3.5 h-3.5 text-pink-400" /> EDUCATION
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-[var(--border)] p-4 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-white font-mono mb-1">{edu.school}</h4>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{edu.degree}</p>
              </div>
              <span className="text-[9px] font-mono text-pink-400 mt-3 block">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Layout 3: Cyber-Brutalist
  const renderBrutalist = () => (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto font-mono text-black">
      {/* Header Container */}
      <div className="brutalist-panel p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
        <div>
          <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-1">IGOR TREFILOV</h1>
          <p className="text-sm font-bold bg-purple-300 border-2 border-black inline-block px-2 py-0.5 rounded">
            AI & WEB3 ARCHITECT // SHIPS QUICKLY
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs border-t-2 md:border-t-0 md:border-l-2 border-black pt-3 md:pt-0 md:pl-4">
          <a href={`mailto:${email}`} className="hover:text-purple-600 block">MAIL: {email}</a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 block">X: @trefeelove</a>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 block">WEB: sigma.club</a>
        </div>
      </div>

      {/* Summary Box */}
      <div className="brutalist-panel p-6 bg-pink-200">
        <h2 className="text-lg font-black uppercase mb-2 border-b-2 border-black pb-1">⚡ THE STUFF I BUILD</h2>
        <p className="text-xs leading-relaxed font-semibold">{summaryText}</p>
      </div>

      {/* Accordion Experience */}
      <div className="brutalist-panel p-6 bg-white">
        <h2 className="text-lg font-black uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> EXPERIENCE [CLICK TO OPEN]
        </h2>
        <div className="flex flex-col gap-4">
          {experienceData.map((job, idx) => {
            const isOpen = expandedBrutalistJob === idx;
            return (
              <div key={idx} className="border-2 border-black rounded overflow-hidden">
                <button
                  onClick={() => setExpandedBrutalistJob(isOpen ? null : idx)}
                  className={`w-full flex justify-between items-center p-3 text-left font-bold text-xs transition-colors ${
                    isOpen ? 'bg-purple-300 border-b-2 border-black' : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                >
                  <span className="uppercase">{job.title.split(" | ")[1]}</span>
                  <span>{isOpen ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white p-4 overflow-hidden"
                    >
                      <div className="flex justify-between text-[10px] font-bold text-neutral-600 mb-3 uppercase tracking-wider">
                        <span>COMPANY: {job.company}</span>
                        <span>PERIOD: {job.period}</span>
                      </div>
                      <ul className="text-xs space-y-2 pl-4 list-disc font-medium">
                        {job.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="brutalist-panel p-6 bg-purple-200">
        <h2 className="text-lg font-black uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
          <Wrench className="w-5 h-5" /> SYSTEM CAPABILITIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="bg-white border-2 border-black p-3 rounded shadow-[2px_2px_0px_#000]">
              <h4 className="text-xs font-extrabold uppercase border-b border-black pb-1 mb-2 text-purple-700">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="brutalist-badge text-[9px] font-bold px-1.5 py-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education panel */}
      <div className="brutalist-panel p-6 bg-white">
        <h2 className="text-lg font-black uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> TRAINING DEGREES
        </h2>
        <div className="flex flex-col gap-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="border-2 border-black p-3 bg-neutral-50 rounded">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-xs font-black uppercase">{edu.school}</h4>
                <span className="text-[9px] font-bold text-neutral-500">{edu.period}</span>
              </div>
              <p className="text-[10px] font-bold text-purple-700">{edu.degree}</p>
              {edu.description && (
                <p className="text-[10px] text-neutral-700 mt-2 leading-normal border-t border-dashed border-neutral-300 pt-2 font-medium">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Layout 4: Calm Editorial Split
  const renderEditorial = () => (
    <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto text-stone-900 md:p-8">
      {/* Left Column (Sticky info) */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="sticky top-12 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 editorial-header">Igor Trefilov</h1>
            <p className="text-xs font-mono tracking-widest uppercase text-stone-500 mb-6">Builder & Strategist</p>
            
            <div className="flex flex-col gap-2 font-mono text-[11px] text-stone-500 border-t border-stone-200 pt-4">
              <a href={`mailto:${email}`} className="hover:text-stone-900 block">{email}</a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 block">x.com/trefeelove</a>
              <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 block">sigma.club</a>
              <span className="text-stone-400 mt-4">open to remote engagements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Scroll content) */}
      <div className="flex-1 flex flex-col gap-10">
        {/* Intro */}
        <div className="editorial-card pb-8">
          <p className="text-sm leading-relaxed text-stone-700 font-serif italic text-justify">
            {summaryText}
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="section-title">Professional Experience</h2>
          <div className="flex flex-col gap-8 mt-4">
            {experienceData.map((job, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-1">
                  <h3 className="text-xs font-mono font-bold tracking-wide uppercase">{job.company}</h3>
                  <span className="text-[10px] font-mono text-stone-500">{job.period.split(" | ")[0]}</span>
                </div>
                <h4 className="text-sm font-semibold text-stone-900 italic font-serif mt-1">
                  {job.title.split(" | ")[1]}
                </h4>
                <ul className="text-xs text-stone-600 space-y-2 mt-2 pl-4 list-disc">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="grid grid-cols-1 gap-6 mt-4">
            {skillsData.map((cat, idx) => (
              <div key={idx} className="border-b border-stone-100 pb-3 last:border-none">
                <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-1.5">{cat.category}</h4>
                <p className="text-xs text-stone-800 font-serif leading-relaxed">
                  {cat.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="section-title">Academic Background</h2>
          <div className="flex flex-col gap-6 mt-4">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-mono font-bold uppercase">{edu.school}</h4>
                  <span className="text-[10px] font-mono text-stone-500">{edu.period}</span>
                </div>
                <p className="text-xs text-stone-700 italic font-serif mb-1">{edu.degree}</p>
                {edu.description && (
                  <p className="text-xs text-stone-500 leading-relaxed font-sans">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 pb-20">
      {/* Dynamic Background components */}
      {theme === 'bento' && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-500/5 rounded-full blur-3xl ambient-blob-1 pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-3xl ambient-blob-2 pointer-events-none" />
        </>
      )}

      {/* Render selected Theme */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={theme}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl mx-auto p-4 md:p-8 min-h-screen"
        >
          {theme === 'linear' && renderLinear()}
          {theme === 'bento' && renderBento()}
          {theme === 'brutalist' && renderBrutalist()}
          {theme === 'editorial' && renderEditorial()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Tweaks/Theme Selector widget */}
      {showTweaks && (
        <div className="fixed bottom-6 right-6 z-[10000] no-print">
          <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-800 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[210px] text-xs font-mono text-neutral-400">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-1.5">
              <span className="font-semibold text-neutral-200 uppercase tracking-widest text-[9px] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-green-400" /> SELECT DESIGN STYLE
              </span>
            </div>
            
            <div className="flex flex-col gap-1.5">
              {(
                [
                  { id: 'linear', label: 'Linear SaaS', tagline: 'Dark Command Center' },
                  { id: 'bento', label: 'Bento Grid', tagline: 'Modular Personal Board' },
                  { id: 'brutalist', label: 'Cyber-Brutalist', tagline: 'Retro Hacker Panel' },
                  { id: 'editorial', label: 'Calm Editorial', tagline: 'Nordic Paper Layout' },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setTheme(option.id);
                    setSearchQuery(''); // clear query on switch
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl transition-all duration-150 flex flex-col ${
                    theme === option.id
                      ? 'bg-green-500/10 text-green-400 font-semibold border border-green-500/20'
                      : 'hover:bg-neutral-800/80 text-neutral-400 border border-transparent'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold">{option.label}</span>
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