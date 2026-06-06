import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ExperienceEntry from './ExperienceEntry';

const experienceData = [
  {
    title: "<strong><a href='https://leverbrain.com' target='_blank' rel='noopener noreferrer'>LeverBrain</a></strong>, Remote -- Founder & CEO",
    period: "Jan 2024 -- Present",
    responsibilities: [
      "Pivoted LeverBrain into a decentralized high-fidelity marketplace for artificial intelligence (AI) agent skills and modular deployment blueprints.",
      "<strong>Solana Smart Contracts (Anchor/Rust):</strong> Designed and deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USD Coin (USDC) using the Solana Program Library (SPL) Token program.",
      "<strong>Cryptographic Access Control:</strong> Engineered secure backend file delivery in Convex by validating Web3 wallet signatures and querying on-chain receipt Program Derived Addresses (PDAs) via Helius remote procedure call (RPC) nodes.",
      "<strong>Real-time Architecture (Convex):</strong> Built low-latency capability card rendering and metadata caching using Convex (DB & Edge Functions) and Convex File Storage, achieving sub-50ms render times.",
      "<strong>Operator Experience:</strong> Developed a command-line interface (CLI) and Next.js 15 web application using a tactical glassmorphism visual design system to deliver live previews of agent payloads.",
      "Tech stack: Next.js 15, TypeScript, Solana (Web3.js, Anchor, SPL Token), Helius RPC, Convex (Real-time DB & File Storage), Tailwind CSS, Framer Motion."
    ]
  },
  {
    title: "<strong><a href='https://sigma.club/' target='_blank' rel='noopener noreferrer'>Sigma Club</a></strong>, Remote -- Founder & Product Lead",
    period: "Jun 2023 -- Present",
    responsibilities: [
      "Designed and launched an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.",
      "Architected three core AI features—personalized learning paths, interest-based matching algorithms, and knowledge gap analysis pipelines—resulting in a 40% increase in user session retention.",
      "Implemented the full-stack codebase using React, TypeScript, and Supabase, integrating Google Gemini and Anthropic Claude APIs to ship the initial minimum viable product (MVP) in under 4 weeks.",
      "Utilized modern developer tools and prompt engineering to accelerate the development lifecycle by 3x."
    ]
  },
  {
    title: "<strong>DeFi/Web3 Consulting</strong>, Remote -- Blockchain Specialist & DeFi Strategist",
    period: "Jan 2019 -- Present",
    responsibilities: [
      "Conducted deep protocol analysis and yield strategy execution in decentralized finance (DeFi), leading smart contract security audits and non-fungible token (NFT) launches.",
      "Generated <strong>$50k+ in profit within 7 days</strong> by architecting and executing the day-one launch of a custom NFT collection on the FTX marketplace.",
      "Designed and deployed custom yield strategies across Pendle Finance, EigenLayer restaking protocols, and NFTX liquidity pools, managing a private asset portfolio.",
      "Authored and deployed audited Ethereum smart contracts using Solidity and OpenZeppelin frameworks, and developed Solana minting protocols following the Metaplex standard.",
      "Built secure NFT-gated community platforms featuring Web3 wallet authentication, real-time on-chain data fetching, and automated membership verification."
    ]
  },
  {
    title: "<strong>E-commerce Business</strong>, Remote -- Founder",
    period: "Jan 2017 -- Dec 2021",
    responsibilities: [
      "Founded and scaled a profitable e-commerce store selling specialized digital utility products to Amazon sellers, generating consistent monthly cash flow.",
      "Directed all operations end-to-end, including digital product design, high-converting marketing funnels, automated customer support pipelines, and vendor relations.",
      "Maintained profitability for 4 consecutive years, managing a solo operation before executing a strategic acquisition/pivot."
    ]
  },
  {
    title: "<strong>FinTech Platform</strong>, Remote -- Product Manager",
    period: "Mar 2016 -- Nov 2017",
    responsibilities: [
      "Managed product roadmap and contributed frontend code for a financial technology (FinTech) loan comparison platform serving over 50,000 US consumers.",
      "Coordinated sprint planning, backlog grooming, and remote team workflows across 3 continents using Agile methodologies.",
      "Established high-performance remote communication protocols, building a foundation for 8+ years of successful distributed engineering execution."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Section title="Experience">
      {experienceData.map((experience, index) => (
        <ExperienceEntry 
          key={index}
          title={experience.title}
          period={experience.period}
          responsibilities={experience.responsibilities}
          index={index}
        />
      ))}
    </Section>
  );
};

export default Experience;