import React from 'react';

function App() {
  return (
    <div className="resume-container">
      <div className="resume-page">
        {/* HEADER */}
        <header className="header">
          <div>
            <div className="name serif">Igor Trefilov</div>
          </div>
          <div className="contact">
            <span className="role">AI &amp; Blockchain builder who ships</span>
            <br />
            <span className="loc">Remote</span>
            <span className="sep">·</span>
            <a href="mailto:i@sigma.club">i@sigma.club</a>
            <span className="sep">·</span>
            <a href="https://github.com/krlan" target="_blank" rel="noopener noreferrer">github.com/krlan</a>
            <span className="sep">·</span>
            <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer">x.com/trefeelove</a>
            <span className="sep">·</span>
            <a href="https://leverbrain.com" target="_blank" rel="noopener noreferrer">leverbrain.com</a>
          </div>
        </header>

        {/* STATS BAR */}
        <div className="stats-bar font-mono">
          <span><span className="highlight-val">6+</span> Years Crypto</span>
          <span className="sep">·</span>
          <span><span className="highlight-val">5+</span> Products Shipped</span>
          <span className="sep">·</span>
          <span className="status-badge">open to work</span>
        </div>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="section-title">Skills</div>
          <div className="skills-grid">
            <div className="skills-category">
              <h4>Expert</h4>
              <p>AI Automation (Voice AI, LLMs, RAG), TypeScript, React, Product Strategy, DeFi/Blockchain, Remote Leadership</p>
            </div>
            <div className="skills-category">
              <h4>Proficient</h4>
              <p>Python, Solidity, Node.js, Next.js, Supabase, n8n/Make.com, LangChain, OpenAI/Claude/Gemini APIs, Web3.js/Ethers.js</p>
            </div>
            <div className="skills-category">
              <h4>AI/ML Stack</h4>
              <p>OpenAI, Claude, Gemini APIs, Whisper, ElevenLabs, OpenRouter, Custom RAG Pipelines, Agentic Engineering</p>
            </div>
            <div className="skills-category">
              <h4>Blockchain</h4>
              <p>DeFi Protocols (Pendle, EigenLayer, NFTX), Smart Contracts (OpenZeppelin), NFTs (ERC-721, Metaplex)</p>
            </div>
            <div className="skills-category">
              <h4>Languages</h4>
              <p>English (Fluent), Russian (Native)</p>
            </div>
            <div className="skills-category">
              <h4>Remote</h4>
              <p>8+ Years Remote Work, Async Communication, 0→1 Product Building, Rapid Prototyping</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience-section">
          <div className="section-title">Experience</div>

          {/* Project 1 */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">
                <a href="https://leverbrain.com" target="_blank" rel="noopener noreferrer">LeverBrain</a>
              </span>
              <span className="proj-kind">· Decentralized AI skill marketplace</span>
              <span className="proj-role">Founder &amp; CEO</span>
              <span className="proj-period font-mono">Jan 2024 – Present</span>
            </div>
            <ul className="proj-bullets">
              <li>Pivoted LeverBrain into a decentralized high-fidelity marketplace for artificial intelligence (AI) agent skills and modular deployment blueprints.</li>
              <li><strong>Solana Smart Contracts (Anchor/Rust):</strong> Designed and deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USDC using the Solana Program Library (SPL) Token program.</li>
              <li><strong>Cryptographic Access Control:</strong> Engineered secure backend file delivery in Convex by validating Web3 wallet signatures and querying on-chain receipt Program Derived Addresses (PDAs) via Helius RPC nodes.</li>
              <li><strong>Real-time Architecture (Convex):</strong> Built low-latency capability card rendering and metadata caching using Convex (DB &amp; Edge Functions) and Convex File Storage, achieving sub-50ms render times.</li>
              <li><strong>Operator Experience:</strong> Developed a command-line interface (CLI) and Next.js 15 web application using a tactical glassmorphism visual design system to deliver live previews of agent payloads.</li>
              <li><em>Tech stack:</em> Next.js 15, TypeScript, Solana (Web3.js, Anchor, SPL Token), Helius RPC, Convex (Real-time DB &amp; File Storage), Tailwind CSS, Framer Motion.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">
                <a href="https://sigma.club" target="_blank" rel="noopener noreferrer">Sigma Club</a>
              </span>
              <span className="proj-kind">· AI-powered learning platform</span>
              <span className="proj-role">Founder &amp; Product Lead</span>
              <span className="proj-period font-mono">Jun 2023 – Present</span>
            </div>
            <ul className="proj-bullets">
              <li>Designed and launched an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.</li>
              <li>Architected three core AI features—personalized learning paths, interest-based matching algorithms, and knowledge gap analysis pipelines—resulting in a <span className="hl">40% increase</span> in user session retention.</li>
              <li>Implemented the full-stack codebase using React, TypeScript, and Supabase, integrating Google Gemini and Anthropic Claude APIs to ship the initial minimum viable product (MVP) in <span className="hl">under 4 weeks</span>.</li>
              <li>Utilized modern developer tools and prompt engineering to accelerate the development lifecycle by 3x.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">DeFi/Web3 Consulting</span>
              <span className="proj-kind">· Protocol audits &amp; yield strategies</span>
              <span className="proj-role">Blockchain Specialist</span>
              <span className="proj-period font-mono">Jan 2019 – Present</span>
            </div>
            <ul className="proj-bullets">
              <li>Conducted deep protocol analysis and yield strategy execution in decentralized finance (DeFi), leading smart contract security audits and NFT launches.</li>
              <li>Generated <span className="hl">$50k+ in profit within 7 days</span> by architecting and executing the day-one launch of a custom NFT collection on the FTX marketplace.</li>
              <li>Designed and deployed custom yield strategies across Pendle Finance, EigenLayer restaking protocols, and NFTX liquidity pools, managing a private asset portfolio.</li>
              <li>Authored and deployed audited Ethereum smart contracts using Solidity and OpenZeppelin frameworks, and developed Solana minting protocols following the Metaplex standard.</li>
              <li>Built secure NFT-gated community platforms featuring Web3 wallet authentication, real-time on-chain data fetching, and automated membership verification.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">E-commerce Business</span>
              <span className="proj-kind">· Digital utility store</span>
              <span className="proj-role">Founder</span>
              <span className="proj-period font-mono">Jan 2017 – Dec 2021</span>
            </div>
            <ul className="proj-bullets">
              <li>Founded and scaled a profitable e-commerce store selling specialized digital utility products to Amazon sellers, generating consistent monthly cash flow.</li>
              <li>Directed all operations end-to-end, including digital product design, high-converting marketing funnels, automated customer support pipelines, and vendor relations.</li>
              <li>Maintained profitability for 4 consecutive years, managing a solo operation before executing a strategic acquisition/pivot.</li>
            </ul>
          </div>

          {/* Project 5 */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">FinTech Platform</span>
              <span className="proj-kind">· Loan comparison engine</span>
              <span className="proj-role">Product Manager</span>
              <span className="proj-period font-mono">Mar 2016 – Nov 2017</span>
            </div>
            <ul className="proj-bullets">
              <li>Managed product roadmap and contributed frontend code for a financial technology (FinTech) loan comparison platform serving over 50,000 US consumers.</li>
              <li>Coordinated sprint planning, backlog grooming, and remote team workflows across 3 continents using Agile methodologies.</li>
              <li>Established high-performance remote communication protocols, building a foundation for 8+ years of successful distributed engineering execution.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education-section">
          <div className="section-title">Education</div>
          <div className="edu-row">
            <div>
              <span className="school serif">Higher School of Economics</span>
              <span className="major">
                · Saint-Petersburg, Russia · Bachelor of Science in Economics · Focused on quantitative analysis and financial modeling. Deepened in web development and software engineering during studies, pursuing building independent products from zero.
              </span>
            </div>
            <div className="date font-mono">Sep 2012 – Jun 2016</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;