import React from 'react';

function App() {
  return (
    <div className="resume-container">
      {/* ═══════════ PAGE 1 ═══════════ */}
      <section className="resume-page">
        <div className="header">
          <div>
            <div className="name serif">Igor Trefilov</div>
          </div>
          <div className="contact">
            <span className="role">AI &amp; Blockchain Systems Architect</span>
            <br />
            <a href="https://github.com/krlan" target="_blank" rel="noopener noreferrer">github.com/krlan</a>
            <span className="sep">·</span>
            <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer">x.com/trefeelove</a>
            <span className="sep">·</span>
            <a href="mailto:i@sigma.club">i@sigma.club</a>
            <span className="sep">·</span>
            <span className="loc">St. Petersburg, Russia</span>
          </div>
        </div>

        {/* Four strongest numeric badges */}
        <div className="metrics">
          <div className="metric">
            <span className="metric-value serif">6<span className="unit">yrs</span></span>
            <span className="metric-label">building blockchain &amp; DeFi systems</span>
          </div>
          <div className="metric">
            <span className="metric-value serif">$50k</span>
            <span className="metric-label">NFT launch profit in 7 days</span>
          </div>
          <div className="metric">
            <span className="metric-value serif">50k+</span>
            <span className="metric-label">consumers served on FinTech platform</span>
          </div>
          <div className="metric">
            <span className="metric-value serif">40%</span>
            <span className="metric-label">user session retention increase</span>
          </div>
        </div>

        <section>
          <div className="section-title">Summary</div>
          <div className="summary">
            Self-taught systems architect who builds AI automation pipelines and decentralized protocols from zero. 6+ years of engineering experience across crypto, DeFi, and AI platforms. Strong first-principles execution: bringing complex software concepts to production in weeks, from smart contracts to real-time edge databases.
          </div>
        </section>

        <section>
          <div className="section-title">Experience<span className="sub">2016 - Present · AI agents, on-chain registries, yield strategies</span></div>

          {/* Timeline: three-step long-range arc */}
          <div className="timeline">
            <div className="tl-step">
              <div className="tl-top"><div className="tl-year serif">2016</div><div className="tl-head">FinTech &amp; E-commerce</div></div>
              <div className="tl-body">Managed financial software roadmaps and scaled digital sales operations.</div>
            </div>
            <div className="tl-step">
              <div className="tl-top"><div className="tl-year serif">2019</div><div className="tl-head">DeFi &amp; Web3</div></div>
              <div className="tl-body">Conducted protocol audits and designed custom yield restaking vaults.</div>
            </div>
            <div className="tl-step">
              <div className="tl-top"><div className="tl-year serif">2023</div><div className="tl-head">AI Engineering</div></div>
              <div className="tl-body">Pivoted platforms to voice AI agents, Convex Edge, and Solana programs.</div>
            </div>
          </div>

          {/* Project block 1: LeverBrain */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">LeverBrain</span>
              <span className="proj-kind">· Decentralized AI skill marketplace</span>
              <span className="proj-role">founder &amp; ceo</span>
            </div>
            <div className="proj-lines">
              <div className="proj-row">
                <div className="proj-label">Role</div>
                <div className="proj-text">Founded 2024. Designed and deployed an on-chain licensing registry and purchasing access ledger to settle modular AI agent skill payloads.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Actions</div>
                <div className="proj-text">Wrote Solana smart contracts in Anchor/Rust settling microtransactions in USDC; validated wallet signatures and Program Derived Addresses (PDAs) on the edge via Helius RPC nodes; built live capability card rendering in Convex.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Impact</div>
                <div className="proj-text">Achieved <span className="hl">sub-50ms render times</span> for skill cards; settled all microtransactions directly on-chain; launched glassmorphism Next.js 15 operator UI.</div>
              </div>
            </div>
          </div>

          {/* Project block 2: Sigma Club */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">Sigma Club</span>
              <span className="proj-kind">· AI-powered learning platform</span>
              <span className="proj-role">founder &amp; product lead</span>
            </div>
            <div className="proj-lines">
              <div className="proj-row">
                <div className="proj-label">Role</div>
                <div className="proj-text">Founded 2023. Engineered an AI-driven collaborative learning portal to foster personalized growth paths and interest matching within online communities.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Actions</div>
                <div className="proj-text">Architected matching algorithms, knowledge gap analysis pipelines, and learning plans; integrated Google Gemini and Anthropic Claude APIs using React, TypeScript, and Supabase.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Impact</div>
                <div className="proj-text">Delivered initial minimum viable product (MVP) in <span className="hl">under 4 weeks</span>; achieved a <span className="hl">40% increase</span> in user session retention.</div>
              </div>
            </div>
          </div>

          {/* Project block 3: DeFi/Web3 Consulting */}
          <div className="project">
            <div className="proj-head">
              <span className="proj-name serif">DeFi/Web3 Consulting</span>
              <span className="proj-kind">· Protocol audits &amp; yield strategies</span>
              <span className="proj-role">blockchain specialist</span>
            </div>
            <div className="proj-lines">
              <div className="proj-row">
                <div className="proj-label">Role</div>
                <div className="proj-text">Consulted 2019-Present. Led smart contract audits, custom yield generation, and NFT launches on Ethereum and Solana.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Actions</div>
                <div className="proj-text">Designed yield restaking vaults across Pendle Finance, EigenLayer, and NFTX; authored audited Solidity contracts with OpenZeppelin frameworks; built secure wallet-gated community verification.</div>
              </div>
              <div className="proj-row">
                <div className="proj-label">Impact</div>
                <div className="proj-text">Generated <span className="hl">$50k+ in profit within 7 days</span> by executing a custom NFT launch on FTX; managed private asset portfolio using audited vault protocols.</div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ═══════════ PAGE 2 ═══════════ */}
      <section className="resume-page page-break">
        <div className="section-title">Open Source &amp; Indie Work<span className="sub">2017 - Present · Developer tooling &amp; digital operations</span></div>

        <div className="os-intro">
          <span className="hl">First-principles builder.</span> Approach: prototype in public, automate database edge sessions, and write clean CLI tools. Cumulative reach: <span className="strong">320+ stars on GitHub · 4 profitable years in solo e-commerce</span>.
        </div>

        <div className="os-grid">
          <div className="os-item">
            <span className="os-name serif"><a href="https://leverbrain.com" target="_blank" rel="noopener noreferrer">E-commerce Digital</a></span>
            <span className="os-desc">Digital utility store · marketing funnels · solo operator</span>
            <span className="os-star big">★ 4 yrs</span>
          </div>
          <div className="os-item">
            <span className="os-name serif">FinTech Platform</span>
            <span className="os-desc">PM &amp; frontend coder · loan comparison engine</span>
            <span className="os-star big">★ 50k+ users</span>
          </div>
          <div className="os-item">
            <span className="os-name serif">solana-convex-boilerplate</span>
            <span className="os-desc">TypeScript · wallet access signatures for Convex edge DB</span>
            <span className="os-star">★ 48</span>
          </div>
          <div className="os-item">
            <span className="os-name serif">anchor-usdc-licensing</span>
            <span className="os-desc">Rust/Solana · SPL token purchase registry and receipt PDAs</span>
            <span className="os-star">★ 35</span>
          </div>
        </div>

        <div className="os-highlight">
          <span className="tag">Solana</span>Published an open-source Anchor blueprint for SPL-token licensing programs. The repository was starred by developers and integrated by three early-stage AI agent marketplaces.
        </div>

        <section>
          <div className="section-title">Judgment &amp; Conviction</div>
          <div className="convictions">
            <div className="conv-card">
              <div className="conv-head"><span className="year">2019</span>Online restaking vaults</div>
              <div className="conv-body">
                Committed private assets to EigenLayer and Pendle restaking protocols before mainstream adoption. Validated the restaking yield yield thesis, resulting in double-digit APY.
              </div>
            </div>
            <div className="conv-card">
              <div className="conv-head"><span className="year">2023</span>AI Agent Skills pivot</div>
              <div className="conv-body">
                Recognized that LLMs would evolve from chatbots into autonomous agentic workflows. Shifted focus from simple prompts to developing marketplace blueprints.
              </div>
            </div>
            <div className="conv-card">
              <div className="conv-head"><span className="year">2024</span>Zero-trust Edge database</div>
              <div className="conv-body">
                Implemented cryptographic signature verification in serverless edge functions over traditional database sessions, reducing transaction verification latencies by 80%.
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-title">Public Impact</div>

          <div className="handle-strip">
            <span className="handle serif">LeverBrain · <a href="https://leverbrain.com/blog" target="_blank" rel="noopener noreferrer">leverbrain.com/blog</a></span>
            <span className="follower">12k+ unique reads</span>
            <span className="desc">Technical guides on Solana smart contract security and building low-latency edge caching with Convex and Helius.</span>
          </div>

          <div className="impact-grid">
            <div>
              <div className="inf-block-title">Selected writing</div>
              <div className="art-row">
                <div className="art-header">
                  <a className="art-title" href="https://leverbrain.com/blog" target="_blank" rel="noopener noreferrer">First-Principles AI Agent Orchestration</a>
                  <span className="art-date">2024.03</span>
                </div>
                <div className="art-stats">Shared on X, <span className="em-brand">8k+</span> views; highlighted modular agent deployment.</div>
              </div>
              <div className="art-row">
                <div className="art-header">
                  <a className="art-title" href="https://leverbrain.com/blog" target="_blank" rel="noopener noreferrer">Smart Contract Auditing for High-yield Protocols</a>
                  <span className="art-date">2021.10</span>
                </div>
                <div className="art-stats">DeFi research, <span className="em-brand">4k+</span> views on decentralized finance boards.</div>
              </div>
            </div>

            <div>
              <div className="inf-block-title">Invited talks</div>
              <div className="talk-row">
                <div>
                  <div className="talk-title">Building AI marketplaces on Solana</div>
                  <div className="talk-venue">Web3 Builder Space · 2024</div>
                </div>
                <div className="talk-date">2024.09</div>
              </div>
              <div className="talk-row">
                <div>
                  <div className="talk-title">DeFi Liquidity and Restaking Strategies</div>
                  <div className="talk-venue">DeFi Summit · Online</div>
                </div>
                <div className="talk-date">2022.05</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-title">Core Skills</div>
          <div className="skill-row">
            <div className="skill-label">AI Automation</div>
            <div className="skill-body">Voice AI, RAG pipelines, OpenAI/Claude/Gemini APIs, <span className="em-brand">agentic engineering</span>.</div>
          </div>
          <div className="skill-row">
            <div className="skill-label">Web3 &amp; Solidity</div>
            <div className="skill-body">Solidity smart contracts, Anchor/Rust, Metaplex, <span className="em-brand">DeFi restaking</span> (Pendle, EigenLayer).</div>
          </div>
          <div className="skill-row">
            <div className="skill-label">Full-Stack Dev</div>
            <div className="skill-body">TypeScript, React, Next.js 15, Node.js, <span className="em-brand">Convex database</span>, Supabase.</div>
          </div>
          <div className="skill-row">
            <div className="skill-label">Product Strategy</div>
            <div className="skill-body">0→1 MVP delivery in weeks, Agile roadmaps, <span className="em-brand">high-conversion marketing funnels</span>.</div>
          </div>
          <div className="skill-row">
            <div className="skill-label">Remote Leadership</div>
            <div className="skill-body">8+ years distributed async collaboration, <span className="em-brand">command-line developer tooling</span>.</div>
          </div>
        </section>

        <section className="no-break">
          <div className="section-title">Education</div>
          <div className="edu-row">
            <div>
              <span className="school serif">Higher School of Economics</span>
              <span className="major"> · Saint-Petersburg, Russia · Bachelor of Science in Economics · <span className="em-brand">Declined quant finance grad school</span> to build digital businesses.</span>
            </div>
            <div className="date">2012 - 2016</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;