import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import SkillCategory from './SkillCategory';

const skillsData = [
  {
    category: "Expert",
    description: "AI Automation (Voice AI, LLMs, RAG), TypeScript, React, Product Strategy, DeFi/Blockchain, Remote Leadership"
  },
  {
    category: "Proficient",
    description: "Python, Solidity, Node.js, Next.js, Supabase, n8n/Make.com, LangChain, OpenAI/Claude/Gemini APIs, Web3.js/Ethers.js"
  },
  {
    category: "AI/ML Stack",
    description: "OpenAI, Claude, Gemini APIs, Whisper, ElevenLabs, OpenRouter, Custom RAG Pipelines, Agentic Engineering"
  },
  {
    category: "Blockchain",
    description: "DeFi Protocols (Pendle, EigenLayer, NFTX), Smart Contracts (OpenZeppelin), NFTs (ERC-721, Metaplex)"
  },
  {
    category: "Languages",
    description: "English (Fluent), Russian (Native)"
  },
  {
    category: "Remote",
    description: "8+ Years Remote Work, Async Communication, 0→1 Product Building, Rapid Prototyping"
  }
];

const Skills: React.FC = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
        {skillsData.map((skill, index) => (
          <SkillCategory 
            key={index} 
            category={skill.category}
            description={skill.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;