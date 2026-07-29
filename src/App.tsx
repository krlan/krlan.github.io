import React from 'react';

function App() {
  return (
    <div className="resume-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <div className="name serif">Igor Trefilov</div>
        </div>
        <div className="contact">
          <div className="loc-line"><span className="loc">Remote</span></div>
          <div className="contact-links">
            <div>
              <a href="mailto:i@sigma.club">i@sigma.club</a>
              <span className="sep">·</span>
              <a href="https://github.com/krlan" target="_blank" rel="noopener noreferrer">github.com/krlan</a>
            </div>
            <div className="contact-row-2">
              <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer">x.com/trefeelove</a>
              <span className="sep">·</span>
              <a href="https://leverbrain.com" target="_blank" rel="noopener noreferrer">leverbrain.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <div className="stats-bar font-mono">
        <span><span className="highlight-val">6+</span> Years Eng &amp; Product</span>
        <span className="sep">·</span>
        <span><span className="highlight-val">AI-Native</span> Shipping (Claude Code / Cursor)</span>
        <span className="sep">·</span>
        <span><span className="highlight-val">Stack:</span> TS, React, Node, Postgres</span>
      </div>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="section-title">Skills</div>
        <div className="skills-grid">
          <div className="skills-category">
            <h4>Product Ownership</h4>
            <p>0→1 Product Engineering, Roadmap Co-Shaping, Problem Discovery, Metric Definition &amp; Outcome Accountability</p>
          </div>
          <div className="skills-category">
            <h4>Core Tech Stack</h4>
            <p>TypeScript, React, Node.js, PostgreSQL (Supabase/SQL), Next.js, Convex, Python, REST &amp; GraphQL APIs</p>
          </div>
          <div className="skills-category">
            <h4>AI-Native Shipping</h4>
            <p>Claude Code, Cursor, OpenAI / Claude / Gemini APIs, Agentic Engineering, Prototype-as-Spec Workflows</p>
          </div>
          <div className="skills-category">
            <h4>Customer Intelligence</h4>
            <p>Usage Data Mining, Telemetry Analysis, Direct User Advisory, B2B SaaS Support Signal, Retention (+40%)</p>
          </div>
          <div className="skills-category">
            <h4>Engineering Quality</h4>
            <p>Shared Tooling &amp; SDKs, Architecture, Code Reviews, Design Specs, Automated Testing, High-Throughput Systems</p>
          </div>
          <div className="skills-category">
            <h4>Leadership &amp; Voice</h4>
            <p>Cross-Functional Alignment (CS/Sales/Leadership), 8+ Years Remote Execution, Async Design Docs</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="section-title">Experience</div>

        {/* Project 1 */}
        <div className="project">
          <div className="proj-head">
            <div className="proj-title-block">
              <span className="proj-name serif">
                <a href="https://leverbrain.com" target="_blank" rel="noopener noreferrer">LeverBrain</a>
              </span>
              <span className="proj-kind">· Decentralized AI skill marketplace</span>
            </div>
            <div className="proj-meta-block">
              <span className="proj-role">Founder &amp; CEO</span>
              <span className="proj-period font-mono">Jan 2024 – Present</span>
            </div>
          </div>
          <ul className="proj-bullets">
            <li><strong>AI-Native Shipping &amp; Prototyping:</strong> Operated as sole product engineer using <strong>Claude Code</strong> and <strong>Cursor</strong> to ship an AI skill marketplace from zero to production, compressing weeks of spec-writing into days of prototype-as-spec iteration.</li>
            <li><strong>Full-Stack Architecture (TypeScript, Next.js, Convex/Postgres):</strong> Built low-latency capability card rendering, metadata caching, and real-time backend state using <strong>TypeScript</strong>, <strong>Node</strong>, and edge functions with sub-50ms render times.</li>
            <li><strong>Customer Intelligence &amp; UI Execution:</strong> Mined telemetry data and conducted direct customer advisory calls to refine agent capability specifications; designed and shipped a clean, accessible web app and CLI tool.</li>
            <li><strong>Engineering Quality &amp; Tooling:</strong> Built cryptographic wallet verification, on-chain token payment ledgers, and reusable SDKs/CLI tooling to enable engineers and AI agents to ship seamlessly.</li>
            <li><em>Tech stack:</em> TypeScript, React, Next.js 15, Node.js, Convex (DB &amp; Edge Functions), Solana (Anchor/Rust), Tailwind CSS, Claude Code, Cursor.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project">
          <div className="proj-head">
            <div className="proj-title-block">
              <span className="proj-name serif">
                <a href="https://sigma.club" target="_blank" rel="noopener noreferrer">Sigma Club</a>
              </span>
              <span className="proj-kind">· AI-powered learning platform</span>
            </div>
            <div className="proj-meta-block">
              <span className="proj-role">Founder &amp; Product Lead</span>
              <span className="proj-period font-mono">Jun 2023 – Present</span>
            </div>
          </div>
          <ul className="proj-bullets">
            <li><strong>Product Ownership &amp; Roadmap Co-shaping:</strong> Independently scoped and architected an AI collaborative learning platform; pushed back on scope creep to land a functional MVP in customer hands in <span className="hl">under 4 weeks</span>.</li>
            <li><strong>Outcome Accountability &amp; Retention Metrics:</strong> Defined user retention benchmarks before launch and owned feature performance, driving a <span className="hl">40% increase in user session retention</span> via personalized learning paths and gap analysis.</li>
            <li><strong>Full-Stack Stack Fluency (TypeScript, React, Node, PostgreSQL):</strong> Built the complete full-stack codebase in <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Node.js</strong> backed by <strong>PostgreSQL (Supabase)</strong>, integrating Anthropic Claude and Google Gemini APIs.</li>
            <li><strong>AI-Native Workflow:</strong> Leveraged <strong>Claude Code</strong> and <strong>Cursor</strong> for prompt engineering and rapid prototyping, accelerating feature delivery 3x while maintaining production-ready code standards.</li>
          </ul>
        </div>

        {/* HIDDEN PAGE BREAK FOR PRINT / PDF ONLY */}
        <div className="page-break" />

        {/* Project 3 */}
        <div className="project">
          <div className="proj-head">
            <div className="proj-title-block">
              <span className="proj-name serif">DeFi/Web3 Consulting</span>
              <span className="proj-kind">· Protocol audits &amp; yield strategies</span>
            </div>
            <div className="proj-meta-block">
              <span className="proj-role">Lead Architect &amp; Specialist</span>
              <span className="proj-period font-mono">Jan 2019 – Present</span>
            </div>
          </div>
          <ul className="proj-bullets">
            <li><strong>Technical Leadership &amp; Audits:</strong> Led deep technical audits, protocol security analysis, and smart contract architecture for decentralized finance (DeFi) systems.</li>
            <li><strong>Outcome &amp; Commercial Ownership:</strong> Designed and executed the day-one launch of a custom NFT platform, generating <span className="hl">$50k+ in net profit within 7 days</span> with zero security vulnerabilities.</li>
            <li><strong>Cross-Functional Voice &amp; Design Docs:</strong> Authored clear technical design docs and project specifications for executive leadership, engineering teams, and external auditors.</li>
            <li><strong>High-Performance System Engineering:</strong> Built token-gated community platforms featuring real-time Web3 wallet authentication, on-chain indexers, and automated membership verification.</li>
          </ul>
        </div>

        {/* Project 4 */}
        <div className="project">
          <div className="proj-head">
            <div className="proj-title-block">
              <span className="proj-name serif">E-commerce Business</span>
              <span className="proj-kind">· Digital utility store</span>
            </div>
            <div className="proj-meta-block">
              <span className="proj-role">Founder</span>
              <span className="proj-period font-mono">Jan 2017 – Dec 2021</span>
            </div>
          </div>
          <ul className="proj-bullets">
            <li><strong>Customer Intelligence at Scale:</strong> Founded and scaled a profitable B2B digital store serving Amazon sellers, directly analyzing support signals and usage patterns to build targeted digital utility tools.</li>
            <li><strong>End-to-End Product Execution:</strong> Directed product design, automated customer support pipelines, and marketing funnels, maintaining solo profitability for 4 consecutive years prior to acquisition.</li>
          </ul>
        </div>

        {/* Project 5 */}
        <div className="project">
          <div className="proj-head">
            <div className="proj-title-block">
              <span className="proj-name serif">FinTech Platform</span>
              <span className="proj-kind">· Loan comparison engine</span>
            </div>
            <div className="proj-meta-block">
              <span className="proj-role">Product Manager &amp; Engineer</span>
              <span className="proj-period font-mono">Mar 2016 – Nov 2017</span>
            </div>
          </div>
          <ul className="proj-bullets">
            <li><strong>Product Ownership for 50,000+ Users:</strong> Managed product roadmap and contributed frontend <strong>React/TypeScript</strong> code for a FinTech loan comparison engine serving over 50,000 US consumers.</li>
            <li><strong>Cross-Functional Leadership:</strong> Led sprint planning, backlog grooming, and remote team workflows across 3 continents, establishing async communication protocols for distributed execution.</li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education-section">
        <div className="section-title">Education</div>
        <div className="edu-row">
          <div className="edu-head">
            <div>
              <span className="school serif">Higher School of Economics</span>
              <span className="major">· Russia · BSc Economics</span>
            </div>
            <span className="date font-mono">Sep 2012 – Jun 2016</span>
          </div>
          <p className="edu-desc">
            Focused on quantitative analysis and financial modeling. Deepened software engineering and web development skills during studies, pursuing building independent products from zero.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;