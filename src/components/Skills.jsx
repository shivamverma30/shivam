// src/components/Skills.jsx
// Skills displayed in category tabs with animated progress bars

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiJavascript, SiPython, SiReact, SiMongodb,
  SiHtml5, SiTailwindcss, SiGithub,
  SiMysql, SiBootstrap, SiVercel, SiCloudinary,
  SiPytorch, SiStreamlit, SiRazorpay, SiRender
} from 'react-icons/si';
import {
  FaJava, FaCss3Alt, FaNodeJs, FaServer,
  FaCode, FaTerminal, FaGitAlt, FaLock, FaProjectDiagram
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { skills } from '../data';

// Map icon string names → actual React icon components
const ICON_MAP = {
  SiJava:              <FaJava />,
  SiJavascript:        <SiJavascript />,
  SiPython:            <SiPython />,
  SiCplusplus:         <FaCode />,
  SiReact:             <SiReact />,
  SiNodedotjs:         <FaNodeJs />,
  SiExpress:           <FaServer />,
  SiMongodb:           <SiMongodb />,
  SiHtml5:             <SiHtml5 />,
  SiCss3:              <FaCss3Alt />,
  SiTailwindcss:       <SiTailwindcss />,
  SiGit:               <FaGitAlt />,
  SiGithub:            <SiGithub />,
  SiVisualstudiocode:  <VscVscode />,
  SiPostman:           <FaTerminal />,
  SiMysql:             <SiMysql />,
  SiBootstrap:         <SiBootstrap />,
  SiVercel:            <SiVercel />,
  SiCloudinary:        <SiCloudinary />,
  SiPytorch:           <SiPytorch />,
  SiStreamlit:         <SiStreamlit />,
  SiRazorpay:          <SiRazorpay />,
  SiRender:            <SiRender />,
  FaServer:            <FaServer />,
  FaLock:              <FaLock />,
  FaProjectDiagram:    <FaProjectDiagram />,
};

// Tab definitions
const TABS = [
  { key: 'languages',  label: 'Languages',   emoji: '💻' },
  { key: 'frameworks', label: 'Frameworks',  emoji: '🧩' },
  { key: 'tools',      label: 'Tools',       emoji: '🔧' },
  { key: 'concepts',   label: 'Concepts',    emoji: '🧠' },
];

/* ── Individual skill card with progress bar ── */
function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="card p-4 hover:border-accent/30 transition-all group"
    >
      {/* Icon + Name row */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all group-hover:scale-110"
          style={{ backgroundColor: 'rgba(0,212,170,0.1)', color: '#00D4AA' }}
        >
          {ICON_MAP[skill.icon] || '●'}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            {skill.name}
          </p>
          <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            {skill.level}%
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-20 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="section-wrapper">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">02. skills</p>
          <h2 className="section-title">What I Work With</h2>
          <div className="w-12 h-1 rounded-full bg-accent mt-3" />
        </motion.div>

        {/* Tab selectors */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'text-gray-900 shadow-md'
                  : 'hover:bg-accent/10 hover:text-accent'
              }`}
              style={
                activeTab === tab.key
                  ? { backgroundColor: '#00D4AA' }
                  : { backgroundColor: 'var(--card-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }
              }
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills grid — animated on tab change */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills[activeTab].map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-xs font-mono mt-10"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Focused on practical engineering, clean architecture, and shipping maintainable products.
        </motion.p>
      </div>
    </section>
  );
}
