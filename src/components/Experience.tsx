import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ExperienceEntry from './ExperienceEntry';

const experienceData = [
  {
    title: "<strong><a href='https://leverbrain.com' target='_blank' rel='noopener noreferrer'>LeverBrain</a></strong>, Remote -- Founder & CEO",
    period: "Jan 2024 -- Present",
    responsibilities: [
      "Pivoted Leverbrain into a decentralized high-fidelity marketplace for AI agent skills, strategies, and deployment blueprints.",
      "<strong>Solana Smart Contracts (Anchor/Rust):</strong> Designed and deployed the on-chain licensing registry and purchase access ledger, settling microtransactions in USDC using the SPL Token program.",
      "<strong>Cryptographic Access Control:</strong> Engineered secure backend file delivery in Convex by validating Web3 wallet signatures and querying on-chain receipt PDAs via Helius RPC nodes.",
      "<strong>Real-time Architecture (Convex):</strong> Built low-latency capability card rendering and metadata caching using Convex (DB & Edge Functions) and Convex File Storage.",
      "<strong>Operator Experience:</strong> Developed a command-line interface (CLI) and Next.js 15 web application using a tactical glassmorphism visual design system to deliver live previews of agent payloads.",
      "Tech stack: Next.js 15, TypeScript, Solana (Web3.js, Anchor, SPL Token), Helius RPC, Convex (Real-time DB & File Storage), Tailwind CSS, Framer Motion."
    ]
  },
  {
    title: "<strong><a href='https://sigma.club/' target='_blank' rel='noopener noreferrer'>Sigma Club</a></strong>, Remote -- Founder & Product Lead",
    period: "Jun 2023 -- Present",
    responsibilities: [
      "Building an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.",
      "Architected 3 core AI features: personalized learning paths, interest-based matching, and knowledge gap analysis.",
      "Full-stack development: React, TypeScript, Supabase, Gemimni/Claude API — rapid iteration and shipping.",
      "Leveraging AI-assisted development to move fast."
    ]
  },
  {
    title: "<strong>DeFi/Web3 Consulting</strong>, Remote -- Blockchain Specialist & DeFi Strategist",
    period: "Jan 2019 -- Present",
    responsibilities: [
      "<strong>6+ years</strong> deep in crypto: DeFi protocol analysis, yield strategies, NFT launches, smart contract development.",
      "Generated <strong>$50k+ profit in one week</strong> launching NFT collection on FTX marketplace day-one.",
      "Developed and executed yield strategies across Pendle Finance, EigenLayer, and <a href='https://youtu.be/Rlpa2kRMAAY' target='_blank' rel='noopener noreferrer'>NFTX pools</a>.",
      "Wrote and deployed Ethereum smart contracts (Solidity, OpenZeppelin); built on Solana (Metaplex standard).",
      "Built NFT-gated community platforms with wallet auth, on-chain data fetching, and membership verification."
    ]
  },
  {
    title: "<strong>E-commerce Business</strong>, Remote -- Founder",
    period: "Jan 2017 -- Dec 2021",
    responsibilities: [
      "Built and operated profitable e-commerce store selling digital products to Amazon sellers.",
      "Managed end-to-end: product creation, marketing funnels, customer support, and operations.",
      "<strong>4 years profitable</strong> until strategic pivot; demonstrated market adaptability."
    ]
  },
  {
    title: "<strong>FinTech Platform</strong>, Remote -- Product Manager",
    period: "Mar 2016 -- Nov 2017",
    responsibilities: [
      "Contributed development and product management to a loan comparison platform serving US consumers.",
      "Coordinated fully remote team across multiple timezones; managed sprint planning and stakeholder communication.",
      "First professional remote role — established foundation for <strong>8+ years of distributed work expertise</strong>."
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