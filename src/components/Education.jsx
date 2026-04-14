// src/components/Education.jsx
// Education timeline cards

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data';

function EducationCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline line (desktop only) */}
      {index < education.length - 1 && (
        <div
          className="absolute left-6 top-16 w-0.5 h-full hidden lg:block"
          style={{ backgroundColor: 'var(--border)' }}
        />
      )}

      <div className="card p-6 hover:border-accent/30 transition-all duration-300 group">
        <div className="flex gap-5">

          {/* Icon bubble */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,168,255,0.15))', border: '1px solid rgba(0,212,170,0.2)' }}
          >
            {item.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Period badge */}
            <span
              className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-full mb-2"
              style={{ backgroundColor: 'rgba(0,212,170,0.1)', color: '#00D4AA' }}
            >
              {item.period}
            </span>

            {/* Degree */}
            <h3
              className="text-base font-bold leading-snug mb-0.5 group-hover:text-accent transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              {/* 👈 Edit education in data.js */}
              {item.degree}
            </h3>

            {/* Institution */}
            <p className="text-sm font-semibold text-accent mb-0.5">{item.institution}</p>
            <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
              {item.fullName}
            </p>

            {/* Grade */}
            <span
              className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-lg mb-3"
              style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              {item.grade}
            </span>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="education" className="py-20 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="section-wrapper">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">04. education</p>
          <h2 className="section-title">Academic Background</h2>
          <div className="w-12 h-1 rounded-full bg-accent mt-3" />
        </motion.div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-5 sm:gap-6">
          {education.map((item, i) => (
            <EducationCard key={item.institution + item.period} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
