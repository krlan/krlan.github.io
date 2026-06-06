import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ExperienceEntry from './ExperienceEntry';

const experienceData = [
  {
    title: "Founder & CEO | <a href='https://leverbrain.com' target='_blank' rel='noopener noreferrer'>LeverBrain</a> — AI Automation Agency",
    period: "2024 - Present | Remote",
    responsibilities: [
      "Founded an AI automation agency building custom AI agents for businesses — specializing in voice AI, email automation, translation, and recruiting solutions.",
      "<strong>Voice AI Agents:</strong> Building conversational agents for customer support, appointment booking, and lead qualification using Twilio, Vapi, ElevenLabs, and custom LLM integrations.",
      "<strong>Email Automation:</strong> Developing intelligent email responders and outreach sequences powered by GPT-4/Claude with CRM integrations (HubSpot, Salesforce).",
      "<strong>AI Translation:</strong> Implementing real-time multilingual translation pipelines for global business communication using Whisper and LLM-based translation.",
      "<strong>Recruiting Automation:</strong> Creating AI-powered hiring tools — resume parsing, candidate scoring, automated outreach, and interview scheduling systems.",
      "Tech stack: LangChain, Gemimni/Claude/OpenAI API, Whisper, ElevenLabs, Vapi, n8n, Make.com, custom RAG pipelines, Twilio, SendGrid."
    ]
  },
  {
    title: "Founder & Product Lead | <a href='https://sigma.club/' target='_blank' rel='noopener noreferrer'>Sigma Club</a> — Learning Platform",
    period: "2023 - Present | Remote",
    responsibilities: [
      "Building an AI-powered collaborative learning platform designed to foster personalized growth paths within communities.",
      "Architected 3 core AI features: personalized learning paths, interest-based matching, and knowledge gap analysis.",
      "Full-stack development: React, TypeScript, Supabase, Gemimni/Claude API — rapid iteration and shipping.",
      "Leveraging AI-assisted development to move fast."
    ]
  },
  {
    title: "Blockchain Specialist & DeFi Strategist",
    period: "2019 - Present | Remote",
    responsibilities: [
      "<strong>6+ years</strong> deep in crypto: DeFi protocol analysis, yield strategies, NFT launches, smart contract development.",
      "Generated <strong>$50k+ profit in one week</strong> launching NFT collection on FTX marketplace day-one.",
      "Developed and executed yield strategies across Pendle Finance, EigenLayer, and <a href='https://youtu.be/Rlpa2kRMAAY' target='_blank' rel='noopener noreferrer'>NFTX pools</a>.",
      "Wrote and deployed Ethereum smart contracts (Solidity, OpenZeppelin); built on Solana (Metaplex standard).",
      "Built NFT-gated community platforms with wallet auth, on-chain data fetching, and membership verification."
    ]
  },
  {
    title: "Founder | E-commerce Business — Digital Products",
    period: "2017 - 2021 | Remote",
    responsibilities: [
      "Built and operated profitable e-commerce store selling digital products to Amazon sellers.",
      "Managed end-to-end: product creation, marketing funnels, customer support, and operations.",
      "<strong>4 years profitable</strong> until strategic pivot; demonstrated market adaptability."
    ]
  },
  {
    title: "Product Manager | FinTech Startup — Loan Comparison Platform",
    period: "2016 - 2017 | Remote (California-based team)",
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