import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Layers, Terminal, MessageSquare, Send, GitBranch, Folder, File, Code, ChevronRight, ChevronDown, Sparkles 
} from 'lucide-react';

// Central data for the custom rendering layouts
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
  { category: "Blockchain", skills: ["DeFi Protocols", "Pendle", "EigenLayer", "NFTX", "Solidity Smart Contracts", "Metaplex"] }
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
  const [theme, setTheme] = useState<'original' | 'anthropic' | 'openai' | 'cursor' | 'zed'>('original');
  const [showTweaks, setShowTweaks] = useState(true);
  
  // Editor States for Cursor & Zed
  const [activeFile, setActiveFile] = useState<'Header.tsx' | 'Summary.md' | 'Experience.tsx' | 'Skills.ts' | 'Education.tsx'>('Experience.tsx');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  // Interactive Chat State for Cursor
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: 'Highlight Igor\'s top achievements.' },
    { sender: 'ai', text: 'Igor is an expert in AI Automation (Voice AI, LLMs, RAG), TypeScript, React, and DeFi/Solana smart contracts. He pivoted LeverBrain to Solana using Rust/Anchor.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
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

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "Igor is ready to build complex voice AI agents, Convex full-stack apps, or Solana Rust programs. Contact him at i@sigma.club!";
      const query = userMsg.toLowerCase();
      if (query.includes('email') || query.includes('contact')) {
        reply = "You can contact Igor at i@sigma.club or find him on Twitter at @trefeelove.";
      } else if (query.includes('solana') || query.includes('leverbrain') || query.includes('rust')) {
        reply = "For LeverBrain, Igor built Anchor Rust programs for USDC microtransaction licensing, Convex real-time caching, and Helius RPC access checks.";
      } else if (query.includes('crypto') || query.includes('defi')) {
        reply = "Igor has 6+ years in DeFi. He launches NFT collections, develops smart contracts, and sets yield strategies across EigenLayer/Pendle.";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 650);
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

  // 2. ANTHROPIC LAYOUT
  const renderAnthropic = () => (
    <div className="max-w-3xl mx-auto font-sans selection:bg-[#e05c3e]/20 text-[#191919] py-12 px-6 lg:px-8">
      <header className="border-b border-[#e8e2d5] pb-8 mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-3 text-[#191919] tracking-tight">
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

      <section className="bg-[#f7f3eb] p-6 rounded-lg border border-[#e8e2d5] mb-10">
        <p className="text-base lg:text-lg font-serif italic leading-relaxed text-[#191919]">
          "{summaryText}"
        </p>
      </section>

      <section className="flex flex-col gap-8 mb-10">
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

      <section className="flex flex-col gap-6 mb-10">
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

  // 3. OPENAI LAYOUT
  const renderOpenAI = () => (
    <div className="max-w-4xl mx-auto text-white selection:bg-[#10a37f]/30 py-12 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-12 font-sans">
        <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 border-b border-neutral-800 pb-3">
          <span>DOCUMENT REFERENCE: Igor_Trefilov_CV</span>
          <span>CLASSIFICATION: OPEN TO COLLABORATION</span>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-800 pb-8">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tighter mb-2 text-white">
              Igor Trefilov
            </h1>
            <p className="text-sm font-mono text-[#10a37f] uppercase tracking-widest">
              // Artificial Intelligence & Smart Contracts
            </p>
          </div>
          <div className="flex flex-col gap-1 text-xs font-mono text-neutral-400">
            <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">x.com/trefeelove</a>
            <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">sigma.club</a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-neutral-800 pb-8">
          <div className="text-xs font-mono text-[#10a37f] uppercase tracking-widest">[01 / SUMMARY]</div>
          <div className="md:col-span-3 text-sm leading-relaxed text-neutral-300 font-mono">
            {summaryText}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-neutral-800 pb-8">
          <div className="text-xs font-mono text-[#10a37f] uppercase tracking-widest">[02 / EXPERIENCE]</div>
          <div className="md:col-span-3 flex flex-col gap-8">
            {experienceData.map((job, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {job.company} — <span className="text-neutral-400 font-medium">{job.title.split(" | ")[0]}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">{job.period}</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-400 mt-2">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed pl-3 border-l border-neutral-800 hover:border-[#10a37f] transition-colors" dangerouslySetInnerHTML={{ __html: resp }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-neutral-800 pb-8">
          <div className="text-xs font-mono text-[#10a37f] uppercase tracking-widest">[03 / CAPABILITIES]</div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.map((cat, idx) => (
              <div key={idx} className="border border-neutral-800 p-4 rounded hover:border-neutral-700 transition-colors">
                <h4 className="text-xs font-mono font-bold text-white mb-2 uppercase tracking-wide">
                  {cat.category}
                </h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  {cat.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
          <div className="text-xs font-mono text-[#10a37f] uppercase tracking-widest">[04 / EDUCATION]</div>
          <div className="md:col-span-3 flex flex-col gap-4">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-white">{edu.school}</h4>
                  <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                </div>
                <p className="text-xs text-[#10a37f] font-mono">{edu.degree}</p>
                {edu.description && (
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  // Helper code renderer for Cursor/Zed
  const renderSyntaxCode = (file: string) => {
    switch (file) {
      case 'Header.tsx':
        return (
          <div className="text-xs font-mono leading-relaxed select-text">
            <div><span className="text-[#c678dd]">import</span> <span className="text-[#abb2bf]">React</span> <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'react'</span>;</div>
            <br/>
            <div><span className="text-[#c678dd]">export const</span> <span className="text-[#61afef]">Header</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">()</span> <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#abb2bf]">&#123;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;</span><span className="text-[#c678dd]">return</span> <span className="text-[#abb2bf]">(</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">header</span> <span className="text-[#d19a66]">className</span><span className="text-[#56b6c2]">=</span><span className="text-[#98c379]">"profile"</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">h1</span><span className="text-[#56b6c2]">&gt;</span><span className="text-[#e5c07b]">Igor Trefilov</span><span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">h1</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">p</span><span className="text-[#56b6c2]">&gt;</span>AI &amp; Blockchain Builder<span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">p</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">div</span> <span className="text-[#d19a66]">className</span><span className="text-[#56b6c2]">=</span><span className="text-[#98c379]">"contact"</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">a</span> <span className="text-[#d19a66]">href</span><span className="text-[#56b6c2]">=</span><span className="text-[#98c379]">"mailto:i@sigma.club"</span><span className="text-[#56b6c2]">&gt;</span>i@sigma.club<span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">a</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">div</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">header</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;</span>);</div>
            <div><span className="text-[#abb2bf]">&#125;</span>;</div>
          </div>
        );
      case 'Summary.md':
        return (
          <div className="text-xs font-mono leading-relaxed select-text">
            <div className="text-[#e5c07b]"># Profile Executive Summary</div>
            <br/>
            <div className="text-[#abb2bf]">{summaryText}</div>
          </div>
        );
      case 'Experience.tsx':
        return (
          <div className="text-xs font-mono leading-relaxed select-text">
            <div><span className="text-[#c678dd]">export const</span> <span className="text-[#61afef]">experiences</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">[</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&#123;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;role: </span><span className="text-[#98c379]">"Founder &amp; CEO"</span>,</div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;company: </span><span className="text-[#98c379]">"LeverBrain"</span>,</div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;solanaMarketplace: </span><span className="text-[#d19a66]">true</span>,</div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;bullets: [</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#98c379]">"Solana smart contracts (Anchor/Rust) for on-chain USDC licensing"</span>,</div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#98c379]">"Cryptographic accesses signature checks in Convex"</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;]</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&#125;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&#47;&#47; ... and 4 more professional history objects</span></div>
            <div><span className="text-[#abb2bf] font-bold">];</span></div>
          </div>
        );
      case 'Skills.ts':
        return (
          <div className="text-xs font-mono leading-relaxed select-text">
            <div><span className="text-[#c678dd]">export const</span> <span className="text-[#61afef]">skills</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">&#123;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;expert: [</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#98c379]">"AI Automation"</span>, <span className="text-[#98c379]">"Voice AI"</span>, <span className="text-[#98c379]">"LLMs"</span>, <span className="text-[#98c379]">"TypeScript"</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;],</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;proficient: [</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#98c379]">"Python"</span>, <span className="text-[#98c379]">"Solidity"</span>, <span className="text-[#98c379]">"Anchor/Rust"</span>, <span className="text-[#98c379]">"Convex"</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;]</span></div>
            <div><span className="text-[#abb2bf]">&#125;;</span></div>
          </div>
        );
      case 'Education.tsx':
        return (
          <div className="text-xs font-mono leading-relaxed select-text">
            <div><span className="text-[#c678dd]">export const</span> <span className="text-[#61afef]">Education</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">()</span> <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#abb2bf]">&#123;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;</span><span className="text-[#c678dd]">return</span> <span className="text-[#abb2bf]">(</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">div</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">h4</span><span className="text-[#56b6c2]">&gt;</span>Higher School of Economics<span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">h4</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;</span><span className="text-[#e06c75]">p</span><span className="text-[#56b6c2]">&gt;</span>B.S. Economics · 2016<span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">p</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#56b6c2]">&lt;/</span><span className="text-[#e06c75]">div</span><span className="text-[#56b6c2]">&gt;</span></div>
            <div><span className="text-[#abb2bf]">&nbsp;&nbsp;</span>);</div>
            <div><span className="text-[#abb2bf]">&#125;</span>;</div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderActivePreview = () => {
    switch (activeFile) {
      case 'Header.tsx':
        return <Header />;
      case 'Summary.md':
        return <Summary />;
      case 'Experience.tsx':
        return <Experience />;
      case 'Skills.ts':
        return <Skills />;
      case 'Education.tsx':
        return <Education />;
    }
  };

  // 4. CURSOR LAYOUT
  const renderCursor = () => (
    <div className="max-w-[1200px] mx-auto py-6 px-4 md:px-6 font-sans text-slate-200">
      {/* Mock IDE Wrapper */}
      <div className="bg-[#0b0d11] border border-[#212328] rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-[680px]">
        {/* IDE TitleBar */}
        <div className="bg-[#0e1115] border-b border-[#212328] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-slate-400 font-mono select-none">
            Cursor - Igor_Trefilov_CV
          </div>
          <div className="w-10" />
        </div>

        {/* IDE Content split */}
        <div className="flex flex-1 flex-col md:flex-row min-h-0">
          
          {/* Explorer Sidebar */}
          {sidebarExpanded && (
            <div className="w-full md:w-[200px] bg-[#07090c] border-r border-[#212328] p-3 flex flex-col gap-4 select-none">
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1 flex items-center gap-1">
                  <ChevronDown className="w-3.5 h-3.5" /> Workspace: krlan-cv
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-slate-400">
                    <Folder className="w-3.5 h-3.5 text-sky-400" /> <span className="font-semibold">src</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-4 py-1 text-slate-400">
                    <Folder className="w-3.5 h-3.5 text-sky-400" /> <span className="font-semibold">components</span>
                  </div>
                  
                  {/* File item tags */}
                  {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                    <button
                      key={file}
                      onClick={() => setActiveFile(file)}
                      className={`flex items-center gap-2 pl-8 pr-2 py-1 text-left rounded-md transition-colors ${
                        activeFile === file ? 'bg-[#1b1e23] text-sky-400 font-medium' : 'text-slate-400 hover:bg-[#121418]'
                      }`}
                    >
                      <File className={`w-3.5 h-3.5 ${file.endsWith('tsx') || file.endsWith('ts') ? 'text-blue-400' : 'text-orange-400'}`} />
                      <span className="truncate">{file}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Code Panel + Split Preview */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0b0d11]">
            {/* Editor Tabs bar */}
            <div className="bg-[#0e1115] border-b border-[#212328] flex overflow-x-auto select-none">
              {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs border-r border-[#212328] transition-colors ${
                    activeFile === file ? 'bg-[#0b0d11] text-sky-400 border-t-2 border-sky-400' : 'bg-[#0e1115] text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Code className="w-3 h-3" />
                  <span>{file}</span>
                </button>
              ))}
            </div>

            {/* Breadcrumb path */}
            <div className="px-4 py-1 text-[10px] text-slate-500 border-b border-[#181b20] font-mono">
              krlan-cv &gt; src &gt; components &gt; {activeFile}
            </div>

            {/* Main Panel Content Split */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0 overflow-y-auto">
              {/* Left Column: Code View */}
              <div className="p-4 border-b lg:border-b-0 lg:border-r border-[#212328] bg-[#090b0e] font-mono relative overflow-y-auto min-h-[300px]">
                <div className="absolute right-4 top-4 text-[9px] text-slate-600 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                  READONLY
                </div>
                <div className="flex gap-4">
                  {/* Line numbers column */}
                  <div className="text-[10px] text-slate-600 text-right select-none space-y-1 pr-2 border-r border-[#181b20]">
                    {Array.from({ length: 18 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  {/* Actual Code content */}
                  <div className="flex-1 space-y-1 relative">
                    {renderSyntaxCode(activeFile)}
                    <span className="inline-block w-1 h-3.5 bg-sky-400 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Right Column: Live Component Preview */}
              <div className="p-6 bg-[#0c0c0c] overflow-y-auto min-h-[300px] flex flex-col justify-start">
                <div className="text-[9px] font-mono text-slate-500 mb-4 tracking-widest uppercase pb-2 border-b border-[#212328] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-sky-400" /> LIVE COMPONENT PREVIEW
                </div>
                <div className="flex-1">
                  {renderActivePreview()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Cursor AI Chat panel */}
          <div className="w-full md:w-[280px] bg-[#090b0d] border-t md:border-t-0 md:border-l border-[#212328] flex flex-col min-h-[320px]">
            <div className="p-3 bg-[#0d1013] border-b border-[#212328] text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-400" /> MOCK CURSOR CHAT
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 max-h-[360px] md:max-h-none">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col gap-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    {msg.sender === 'user' ? 'User' : 'Claude Agent'}
                  </span>
                  <div className={`text-xs p-2 rounded-lg leading-relaxed max-w-[90%] font-mono ${
                    msg.sender === 'user' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20' : 'bg-slate-800/60 text-slate-300'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleChatSubmit} className="p-3 border-t border-[#212328] flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Ask about Solana, email..."
                className="flex-1 bg-[#12151a] border border-[#212328] rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:border-sky-400 font-mono placeholder-slate-600 text-slate-200"
              />
              <button 
                type="submit" 
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-md p-1.5 flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // 5. ZED LAYOUT
  const renderZed = () => (
    <div className="max-w-[1200px] mx-auto py-6 px-4 md:px-6 font-sans text-[#abb2bf]">
      {/* Mock Zed Window */}
      <div className="bg-[#181b20] border border-[#2b303c] rounded-lg shadow-2xl overflow-hidden flex flex-col min-h-[640px]">
        {/* Top Header tab bar */}
        <div className="bg-[#1e2227] px-4 py-2 flex items-center justify-between border-b border-[#2b303c]">
          <div className="flex items-center gap-4">
            {/* MacOS traffic dots */}
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            {/* Tab layout items */}
            <div className="flex gap-1 text-xs">
              {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 font-mono ${
                    activeFile === file ? 'bg-[#181b20] text-[#e5c07b]' : 'text-[#5c6370] hover:text-[#abb2bf]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${file.endsWith('tsx') ? 'bg-[#61afef]' : 'bg-[#d19a66]'}`} />
                  <span>{file}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="text-[11px] font-mono text-[#5c6370]">
            zed - krlan-cv
          </div>
        </div>

        {/* Mock Workspace split */}
        <div className="flex flex-1 flex-col md:flex-row min-h-0">
          {/* Projects File Tree Panel */}
          <div className="w-full md:w-[180px] bg-[#1e2227] p-3 border-r border-[#2b303c] font-mono text-xs select-none">
            <div className="text-[#5c6370] uppercase font-bold text-[9px] tracking-wider mb-3 px-1 flex items-center gap-1">
              PROJECT OUTLINE
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#abb2bf] px-1 py-0.5">
                <Folder className="w-3.5 h-3.5 text-[#61afef]" /> <span>krlan-cv</span>
              </div>
              {(['Header.tsx', 'Summary.md', 'Experience.tsx', 'Skills.ts', 'Education.tsx'] as const).map(file => (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2 pl-6 pr-2 py-0.5 text-left rounded transition-colors ${
                    activeFile === file ? 'bg-[#282c34] text-[#e5c07b]' : 'text-[#5c6370] hover:text-[#abb2bf]'
                  }`}
                >
                  <File className="w-3.5 h-3.5 text-[#abb2bf]" />
                  <span>{file}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Code View Pane */}
          <div className="flex-1 p-4 bg-[#181b20] border-r border-[#2b303c] font-mono relative overflow-y-auto min-h-[300px] flex flex-col justify-between">
            <div className="flex gap-4">
              <div className="text-right text-[#5c6370] text-[10px] select-none border-r border-[#2b303c] pr-2 space-y-1">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="flex-1 space-y-1 relative">
                {renderSyntaxCode(activeFile)}
                
                {/* Simulated Collaboration Cursor caret */}
                <span className="absolute top-[8px] left-[150px] inline-block">
                  <span className="w-[2px] h-4 bg-[#e5c07b] inline-block animate-pulse" />
                  <span className="bg-[#e5c07b] text-black text-[9px] px-1 rounded absolute top-4 left-[-15px] font-bold shadow-md">
                    krlan
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#2b303c] text-[10px] text-[#5c6370] italic">
              // Toggle layouts at the selector widget below.
            </div>
          </div>

          {/* Rendering Preview Split Pane */}
          <div className="flex-1 p-6 bg-[#0c0c0c] overflow-y-auto min-h-[300px] flex flex-col justify-start">
            <div className="text-[10px] font-mono text-[#5c6370] mb-4 tracking-wider border-b border-[#2b303c] pb-2 flex justify-between items-center">
              <span>LIVE RENDER OUTPUT</span>
              <span className="text-[#e5c07b] text-[9px] bg-[#e5c07b]/10 border border-[#e5c07b]/20 px-1 rounded uppercase">TSX-PREVIEW</span>
            </div>
            <div className="flex-1">
              {renderActivePreview()}
            </div>
          </div>
        </div>

        {/* Bottom Zed Statusbar */}
        <div className="bg-[#1e2227] border-t border-[#2b303c] px-3 py-1 flex items-center justify-between text-[10px] font-mono text-[#5c6370] select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#abb2bf]"><GitBranch className="w-3 h-3 text-[#61afef]" /> master</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-4">
            <span>TypeScript React</span>
            <span>Ln 12, Col 8</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Theme selector panel
  const renderSelector = () => (
    showTweaks && (
      <div className="fixed bottom-6 right-6 z-[10000] no-print">
        <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[230px] text-xs font-mono text-neutral-400">
          <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-1.5">
            <span className="font-semibold text-neutral-200 uppercase tracking-widest text-[9px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-400" /> SELECT DESIGN THEME
            </span>
          </div>
          
          <div className="flex flex-col gap-1.5">
            {(
              [
                { id: 'original', label: 'Original CV', tagline: 'Classic Green & Dark' },
                { id: 'anthropic', label: 'Anthropic', tagline: 'Signature Warm Serif' },
                { id: 'openai', label: 'OpenAI', tagline: 'Stark Futuristic Grid' },
                { id: 'cursor', label: 'Cursor IDE', tagline: 'Interactive Code Workspace' },
                { id: 'zed', label: 'Zed Editor', tagline: 'High-Performance Workspace' }
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
        </motion.div>
      </AnimatePresence>

      {renderSelector()}
    </div>
  );
}

export default App;