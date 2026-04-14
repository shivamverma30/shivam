// src/components/CodingProfiles.jsx
// Coding platform profile cards

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { profiles } from '../data';

// Platform config — icon, label, color, stat
const platforms = [
  {
    key: 'github',
    label: 'GitHub',
    description: 'Source code, projects, and deployment work',
    icon: <FaGithub />,
    color: '#00D4AA',
    bg: 'rgba(0,212,170,0.08)',
    border: 'rgba(0,212,170,0.2)',
    stat: 'Portfolio source',
  },
  {
    key: 'leetcode',
    label: 'LeetCode',
    description: 'Problem solving and algorithm practice',
    icon: <SiLeetcode />,
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.08)',
    border: 'rgba(255,161,22,0.2)',
    stat: '400+ solved',
  },
  {
    key: 'hackerrank',
    label: 'HackerRank',
    description: 'Programming challenges & certifications',
    icon: <FaHackerrank />,
    color: '#00EA64',
    bg: 'rgba(0,234,100,0.08)',
    border: 'rgba(0,234,100,0.2)',
    stat: '5★ Java',
  },
  {
    key: 'gfg',
    label: 'GeeksforGeeks',
    description: 'Profile used for academic coding and profile verification',
    icon: <SiGeeksforgeeks />,
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.08)',
    border: 'rgba(47,141,70,0.2)',
    stat: 'MCA 2027',
  },
];

function ProfileCard({ platform, url, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="card p-5 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer"
    >
      {/* Icon + link icon */}
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
          style={{ background: platform.bg, color: platform.color, border: `1px solid ${platform.border}` }}
        >
          {platform.icon}
        </div>
        <FaExternalLinkAlt
          className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: platform.color }}
        />
      </div>

      {/* Name */}
      <div>
        <h3
          className="font-bold text-base mb-0.5 group-hover:transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {platform.label}
        </h3>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {platform.description}
        </p>
      </div>

      {/* Stat badge */}
      <div
        className="inline-flex self-start text-xs font-mono px-2.5 py-1 rounded-lg font-semibold"
        style={{ background: platform.bg, color: platform.color, border: `1px solid ${platform.border}` }}
      >
        {/* 👈 Edit codingStats in data.js */}
        {platform.stat}
      </div>
    </motion.a>
  );
}

export default function CodingProfiles() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="profiles" className="py-20 sm:py-24">
      <div className="section-wrapper">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">05. coding profiles</p>
          <h2 className="section-title">Coding Profiles</h2>
          <div className="w-12 h-1 rounded-full bg-accent mt-3" />
          <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Platforms where I solve problems, share code, and keep my profile active.
          </p>
        </motion.div>

        {/* Profile cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, i) => (
            <ProfileCard
              key={platform.key}
              platform={platform}
              url={profiles[platform.key] || '#'}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
