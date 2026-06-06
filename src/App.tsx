import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Layers, ChevronDown, Folder, File, Code, GitBranch, Sparkles, Send, MessageSquare, Terminal
} from 'lucide-react';

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
      "Solana Smart Contracts (Anchor/Rust): Deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USDC.",
      "Cryptographic Access Control: Engineered Convex backend delivery by validating Web3 signatures and querying receipts via Helius RPC.",
      "Real-time Architecture (Convex): Built low-latency capability card rendering and metadata caching using Convex DB & File Storage.",
      "Operator Experience: Developed CLI and Next.js 15 web application with tactical glassmorphism to deliver live agent previews."
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
      "Full-stack development: React, TypeScript, Supabase, Gemini/Claude API — rapid iteration and shipping."
    ]
  },
  {
    title: "Blockchain Specialist & DeFi Strategist",
    period: "2019 - Present | Remote",
    company: "DeFi/Web3 Consulting",
    responsibilities: [
      "6+ years deep in crypto: DeFi protocol analysis, yield strategies, NFT launches, smart contract development.",
      "Generated $50k+ profit in one week launching NFT collection on FTX marketplace day-one.",
      "Developed yield strategies across Pendle Finance, EigenLayer, and NFTX pools."
    ]
  },
  {
    title: "Founder | E-commerce Business — Digital Products",
    period: "2017 - 2021 | Remote",
    company: "E-commerce Digital",
    responsibilities: [
      "Built and operated profitable e-commerce store selling digital products to Amazon sellers.",
      "Managed end-to-end: product creation, marketing funnels, customer support, and operations."
    ]
  },
  {
    title: "Product Manager | FinTech Startup — Loan Comparison Platform",
    period: "2016 - 2017 | Remote (California-based team)",
    company: "FinTech Platform",
    responsibilities: [
      "Contributed development and product management to a loan comparison platform serving US consumers.",
      "Coordinated fully remote team across multiple timezones; managed sprint planning and stakeholder communication."
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
    degree: "Bachelor's degree, Economics",
    period: "2012 — 2016",
    description: "Deepened in web development during studies, pursuing building products from zero instead of traditional investment banking."
  }
];

function App() {
  const [theme, setTheme] = useState<'original' | 'anthropic' | 'openai' | 'cursor' | 'zed' | 'developer-ide'>('original');
  const [showTweaks, setShowTweaks] = useState(true);
  
  // Tab/scroll focus state for Developer IDE layout
  const [activeFile, setActiveFile] = useState<'Header.tsx' | 'Summary.md' | 'Experience.tsx' | 'Skills.ts' | 'Education.tsx'>('Experience.tsx');

  // Interactive Cursor Chat State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: 'What are Igor\'s core competencies?' },
    { sender: 'ai', text: 'Igor specializes in building 0→1 products using TypeScript, React, and Solidity/Solana, with a strong focus on custom AI automation agents (voice AI, workflow automation).' }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const scrollToIDESection = (file: 'Header.tsx' | 'Summary.md' | 'Experience.tsx' | 'Skills.ts' | 'Education.tsx') => {
    setActiveFile(file);
    const container = document.getElementById('ide-scroll-container');
    const target = document.getElementById(`ide-sec-${file}`);
    if (container && target) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const relativeTop = targetRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: relativeTop - 20, behavior: 'smooth' });
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "Igor specializes in AI automation pipeline development and Web3 on-chain frameworks. Send him an email at i@sigma.club!";
      const query = userMsg.toLowerCase();
      if (query.includes('email') || query.includes('contact')) {
        reply = "You can email Igor directly at i@sigma.club or connect with him on Twitter at @trefeelove.";
      } else if (query.includes('solana') || query.includes('leverbrain') || query.includes('rust')) {
        reply = "Igor pivoted LeverBrain to a Solana AI Skill Marketplace, implementing SPL Token USDC licensing Rust contracts and Convex caches.";
      } else if (query.includes('crypto') || query.includes('defi')) {
        reply = "Igor has 6+ years in DeFi protocol analysis, smart contract coding (Solidity), and designing yield farms/vault structures.";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  // 1. ORIGINAL LAYOUT
  const renderOriginal = () => (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 py-8">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
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
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">x.com/trefeelove</a>
          <span>·</span>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e05c3e] transition-colors underline underline-offset-4">sigma.club</a>
        </div>
      </header>

      {/* Integrated Editorial Bio (No box, clean serif flow) */}
      <section className="mb-12">
        <p className="text-xl lg:text-2xl font-serif text-[#191919] leading-relaxed tracking-tight">
          {summaryText}
        </p>
      </section>

      <section className="flex flex-col gap-8 mb-12">
        <h2 className="text-2xl font-bold font-serif border-b border-[#e8e2d5] pb-2 text-[#191919]">
          Professional History
        </h2>
        <div className="flex flex-col gap-8">
          {experienceData.map((job, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-lg font-serif font-bold text-[#191919]">
                  {job.company} — <span className="font-normal italic text-[#66625b]">{job.title.split(" | ")[0]}</span>
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

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold font-serif border-b border-[#e8e2d5] pb-2 text-[#191919]">
          Academic Foundation
        </h2>
        <div className="flex flex-col gap-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h4 className="text-base font-serif font-bold text-[#191919]">{edu.school}</h4>
                <span className="text-xs font-mono text-[#66625b]">{edu.period}</span>
              </div>
              <p className="text-sm text-[#66625b] italic">{edu.degree}</p>
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
            Sleek developer of high-efficiency artificial intelligence automation pipelines and decentralized smart contract networks.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500">
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
          <span>/</span>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">x.com/trefeelove</a>
          <span>/</span>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">sigma.club</a>
        </div>
      </header>

      {/* Intro section */}
      <section className="mb-16 border-b border-neutral-900 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">01 / Profile Overview</h2>
          <div className="md:col-span-2 text-xl font-light text-neutral-200 leading-relaxed font-sans">
            {summaryText}
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
                    {job.company} — <span className="text-neutral-400 font-light text-sm">{job.title.split(" | ")[0]}</span>
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

      {/* Technical capabilities */}
      <section className="mb-16 border-b border-neutral-900 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">03 / Capabilities</h2>
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

      {/* Academic Foundation */}
      <section className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">04 / Education</h2>
          <div className="md:col-span-2 flex flex-col gap-4">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-base font-bold text-white">{edu.school}</h4>
                  <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                </div>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">{edu.degree}</p>
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

  // 4. CURSOR LAYOUT (Glassy SaaS Gradient Page Style)
  const renderCursor = () => (
    <div className="max-w-4xl mx-auto text-slate-200 selection:bg-[#38bdf8]/20 py-16 px-6 lg:px-8">
      {/* Hero Section */}
      <header className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-sky-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-6">
          <Sparkles className="w-3 h-3 text-sky-400" /> Active Build Interface
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-4">
          Igor Trefilov
        </h1>
        <p className="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed mb-6">
          Architecting state-of-the-art AI automation strategies and high-execution on-chain Solana protocols.
        </p>
        <div className="flex justify-center gap-6 text-xs font-mono text-slate-500">
          <a href={`mailto:${email}`} className="hover:text-sky-400 transition-colors">{email}</a>
          <span>·</span>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">x.com/trefeelove</a>
          <span>·</span>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">sigma.club</a>
        </div>
      </header>

      {/* Summary Box */}
      <section className="mb-16 p-6 rounded-2xl bg-slate-900/40 backdrop-blur border border-slate-800/80 shadow-[0_0_30px_-15px_rgba(56,189,248,0.15)]">
        <h3 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">// Executive Overview</h3>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          {summaryText}
        </p>
      </section>

      {/* Experience Showcases */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
          // Product & Protocol Deployments
        </h2>
        <div className="flex flex-col gap-6">
          {experienceData.map((job, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0a0e14]/50 border border-slate-800 hover:border-sky-500/25 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {job.company} — <span className="text-slate-400 font-light text-sm">{job.title.split(" | ")[0]}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">{job.period}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed list-none pl-0">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-sky-500" dangerouslySetInnerHTML={{ __html: resp }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills features grid */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
          // Core Engine Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur border border-slate-800/80">
              <h4 className="text-xs font-mono font-bold text-sky-400 mb-3 uppercase tracking-wide flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-1 rounded bg-slate-800/50 border border-slate-700/40 text-[10px] font-mono text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Background */}
      <section className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur border border-slate-800/80">
        <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-4">
          // Education Background
        </h2>
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between items-baseline">
              <h4 className="text-base font-bold text-white">{edu.school}</h4>
              <span className="text-xs font-mono text-slate-500">{edu.period}</span>
            </div>
            <p className="text-xs text-sky-400/80 font-mono mt-0.5">{edu.degree}</p>
            {edu.description && (
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );

  // 5. ZED LAYOUT (Slate/Charcoal Marketing Grid Page Style)
  const renderZed = () => (
    <div className="max-w-4xl mx-auto text-[#abb2bf] selection:bg-[#e5c07b]/20 py-16 px-6 lg:px-8 font-sans">
      <header className="border-b border-[#21252e] pb-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="font-mono text-xs text-[#e5c07b] mb-2 font-semibold tracking-wide">
            ZED.DEV / IGOR_TREFILOV_CV
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
            Igor Trefilov
          </h1>
          <p className="text-sm font-mono text-[#5c6370]">
            Fast-execution AI automation & custom blockchain engineering.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs font-mono text-[#5c6370] text-left md:text-right">
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">x.com/trefeelove</a>
          <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">sigma.club</a>
        </div>
      </header>

      {/* Profile summary */}
      <section className="mb-12 border-b border-[#21252e] pb-10">
        <h2 className="text-xs font-mono uppercase text-[#e5c07b] tracking-wider mb-4">
          // Profile Summary
        </h2>
        <p className="text-base leading-relaxed text-[#abb2bf] font-light font-mono">
          {summaryText}
        </p>
      </section>

      {/* Experience details */}
      <section className="mb-12 border-b border-[#21252e] pb-10">
        <h2 className="text-xs font-mono uppercase text-[#e5c07b] tracking-wider mb-6">
          // Professional Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experienceData.map((job, idx) => (
            <div key={idx} className="border-l border-[#21252e] pl-4">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-base font-bold text-white font-mono">
                  {job.company} — <span className="text-[#e5c07b] font-light text-xs">{job.title.split(" | ")[0]}</span>
                </h3>
                <span className="text-xs font-mono text-[#5c6370]">{job.period}</span>
              </div>
              <ul className="space-y-2 text-xs text-[#abb2bf] mt-3 list-disc pl-4">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: resp }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical skills */}
      <section className="mb-12 border-b border-[#21252e] pb-10">
        <h2 className="text-xs font-mono uppercase text-[#e5c07b] tracking-wider mb-6">
          // Technical Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="bg-[#15181e] border border-[#21252e] p-5 rounded">
              <h4 className="text-xs font-mono font-bold text-[#e5c07b] mb-3 uppercase tracking-wide">
                {cat.category}
              </h4>
              <p className="text-xs text-[#abb2bf] leading-relaxed">
                {cat.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="pb-10">
        <h2 className="text-xs font-mono uppercase text-[#e5c07b] tracking-wider mb-4">
          // Education
        </h2>
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between items-baseline">
              <h4 className="text-base font-bold text-white font-mono">{edu.school}</h4>
              <span className="text-xs font-mono text-[#5c6370]">{edu.period}</span>
            </div>
            <p className="text-xs text-[#e5c07b] font-mono mt-0.5">{edu.degree}</p>
            {edu.description && (
              <p className="text-xs text-[#5c6370] leading-relaxed mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );

  // 6. DEVELOPER IDE LAYOUT (Unified Document Scroll Workspace)
  const renderDeveloperIDE = () => (
    <div className="max-w-[1250px] mx-auto py-6 px-4 md:px-6 font-mono text-slate-300 select-text">
      {/* Mock Editor Workspace */}
      <div className="bg-[#0b0e14] border border-[#222735] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-140px)] md:h-[720px] max-h-[85vh]">
        {/* IDE Titlebar */}
        <div className="bg-[#0e111a] border-b border-[#222735] px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" /> krlan-workspace - Igor_Trefilov_CV
          </div>
          <div className="w-10" />
        </div>

        {/* Workspace Layout */}
        <div className="flex flex-1 flex-col md:flex-row min-h-0">
          
          {/* File Explorer Tree (Left) */}
          <div className="w-full md:w-[200px] bg-[#07090f] border-r border-[#222735] p-3 flex flex-col gap-4 select-none">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1 flex items-center gap-1">
                <ChevronDown className="w-3.5 h-3.5" /> Workspace Outline
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-1.5 px-2 py-1 text-slate-400">
                  <Folder className="w-3.5 h-3.5 text-indigo-400" /> <span className="font-semibold">src</span>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1 text-slate-400">
                  <Folder className="w-3.5 h-3.5 text-indigo-400" /> <span className="font-semibold">components</span>
                </div>
                
                {/* File list buttons */}
                {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                  <button
                    key={file}
                    onClick={() => scrollToIDESection(file)}
                    className={`flex items-center gap-2 pl-8 pr-2 py-1 text-left rounded-md transition-colors ${
                      activeFile === file ? 'bg-[#1b1f2b] text-indigo-400 font-semibold' : 'text-slate-400 hover:bg-[#12151f]'
                    }`}
                  >
                    <File className={`w-3.5 h-3.5 ${file.endsWith('tsx') || file.endsWith('ts') ? 'text-indigo-400' : 'text-orange-400'}`} />
                    <span className="truncate">{file}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Interactive Chat Panel nested inside sidebar */}
            <div className="border-t border-[#222735] pt-4 mt-auto">
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1 flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-indigo-400" /> Chat Copilot
              </div>
              <div className="bg-[#0e111a] border border-[#222735] p-2 rounded-md max-h-[140px] overflow-y-auto text-[10px] leading-relaxed text-slate-400 space-y-2">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={msg.sender === 'user' ? 'text-indigo-400' : 'text-slate-300'}>
                    <strong className="uppercase text-[8px] tracking-wide block text-slate-500">{msg.sender === 'user' ? 'User' : 'AI'}</strong>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="mt-2 flex gap-1">
                <input
                  type="text"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  placeholder="Ask copilot..."
                  className="w-full bg-[#12151f] border border-[#222735] rounded px-2 py-1 text-[10px] focus:outline-none focus:border-indigo-500 placeholder-slate-600 text-slate-200"
                />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded p-1 text-[10px]">
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Scrolling Editor Workspace Panel (Middle) */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0d0e12]">
            {/* IDE Tabs list */}
            <div className="bg-[#0e111a] border-b border-[#222735] flex overflow-x-auto select-none">
              {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                <button
                  key={file}
                  onClick={() => scrollToIDESection(file)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs border-r border-[#222735] transition-colors ${
                    activeFile === file ? 'bg-[#0d0e12] text-indigo-400 font-semibold border-t-2 border-indigo-500' : 'bg-[#0e111a] text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{file}</span>
                </button>
              ))}
            </div>

            {/* Path indicator */}
            <div className="px-4 py-1 text-[10px] text-slate-500 border-b border-[#131722] font-mono select-none">
              src &gt; components &gt; {activeFile}
            </div>

            {/* Vertical Scroll CV Pane (The whole CV is visible at once) */}
            <div id="ide-scroll-container" className="flex-1 overflow-y-auto p-8 space-y-12 scroll-smooth select-text bg-[#090a0d]">
              {/* Section 1: Header */}
              <div 
                id="ide-sec-Header.tsx" 
                className={`transition-all duration-300 ${
                  activeFile === 'Header.tsx' 
                    ? 'opacity-100 pl-4 border-l-2 border-indigo-500' 
                    : 'opacity-35 pl-4 border-l border-transparent'
                }`}
              >
                <div className="text-[10px] text-slate-600 mb-2 font-mono select-none">// Component: Header.tsx</div>
                <Header />
              </div>

              {/* Section 2: Summary */}
              <div 
                id="ide-sec-Summary.md" 
                className={`transition-all duration-300 ${
                  activeFile === 'Summary.md' 
                    ? 'opacity-100 pl-4 border-l-2 border-indigo-500' 
                    : 'opacity-35 pl-4 border-l border-transparent'
                }`}
              >
                <div className="text-[10px] text-slate-600 mb-2 font-mono select-none">// Document: Summary.md</div>
                <Summary />
              </div>

              {/* Section 3: Experience */}
              <div 
                id="ide-sec-Experience.tsx" 
                className={`transition-all duration-300 ${
                  activeFile === 'Experience.tsx' 
                    ? 'opacity-100 pl-4 border-l-2 border-indigo-500' 
                    : 'opacity-35 pl-4 border-l border-transparent'
                }`}
              >
                <div className="text-[10px] text-slate-600 mb-2 font-mono select-none">// Component: Experience.tsx</div>
                <Experience />
              </div>

              {/* Section 4: Skills */}
              <div 
                id="ide-sec-Skills.ts" 
                className={`transition-all duration-300 ${
                  activeFile === 'Skills.ts' 
                    ? 'opacity-100 pl-4 border-l-2 border-indigo-500' 
                    : 'opacity-35 pl-4 border-l border-transparent'
                }`}
              >
                <div className="text-[10px] text-slate-600 mb-2 font-mono select-none">// Dataset: Skills.ts</div>
                <Skills />
              </div>

              {/* Section 5: Education */}
              <div 
                id="ide-sec-Education.tsx" 
                className={`transition-all duration-300 ${
                  activeFile === 'Education.tsx' 
                    ? 'opacity-100 pl-4 border-l-2 border-indigo-500' 
                    : 'opacity-35 pl-4 border-l border-transparent'
                }`}
              >
                <div className="text-[10px] text-slate-600 mb-2 font-mono select-none">// Component: Education.tsx</div>
                <Education />
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="bg-[#0e111a] border-t border-[#222735] px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-500 select-none">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-slate-300"><GitBranch className="w-3 h-3 text-indigo-400" /> master</span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-4">
                <span>TypeScript JSX</span>
                <span>Compiled successfully</span>
              </div>
            </div>

          </div>
        </div>
      </div>
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
                { id: 'cursor', label: 'Cursor Site', tagline: 'Glowing Cosmic SaaS' },
                { id: 'zed', label: 'Zed Site', tagline: 'Refined Slate Marketing' },
                { id: 'developer-ide', label: 'Developer IDE', tagline: 'Workspace Tab Scroll' }
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
          {theme === 'cursor' && renderCursor()}
          {theme === 'zed' && renderZed()}
          {theme === 'developer-ide' && renderDeveloperIDE()}
        </motion.div>
      </AnimatePresence>

      {renderSelector()}
    </div>
  );
}

export default App;