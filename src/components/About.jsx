// src/components/About.jsx
// About section with bio and quick-stat highlights

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { personal, about } from '../data';

// Reusable fade-in wrapper
function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-wrapper">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12">
            <p className="text-accent font-mono text-sm mb-2">01. about</p>
            <h2 className="section-title">Professional Summary</h2>
            <div className="w-12 h-1 rounded-full bg-accent mt-3" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* LEFT — Bio paragraphs */}
          <div className="space-y-5">
            {about.bio.map((para, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {/* 👈 Edit about.bio in data.js */}
                  {para}
                </p>
              </FadeIn>
            ))}

            {/* Contact info */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <HiLocationMarker className="text-accent w-4 h-4 flex-shrink-0" />
                  {/* 👈 Edit personal.location in data.js */}
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <HiMail className="text-accent w-4 h-4 flex-shrink-0" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {/* 👈 Edit personal.email in data.js */}
                    {personal.email}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — Highlights grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((item, i) => (
                <FadeIn key={item.label} delay={0.15 * (i + 1)} direction="right">
                  <div
                    className="card p-5 hover:border-accent/40 group"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <p className="text-xs font-mono mb-1 text-accent">{item.label}</p>
                    <p
                      className="font-semibold text-sm leading-snug group-hover:text-accent transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {/* 👈 Edit about.highlights in data.js */}
                      {item.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Fun fact card */}
            <FadeIn delay={0.5}>
              <div
                className="mt-4 p-5 rounded-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,170,0.1), rgba(0,168,255,0.1))', border: '1px solid rgba(0,212,170,0.2)' }}
              >
                <p className="text-xs font-mono text-accent mb-1">// highlights</p>
                <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                  Delivered AI and full-stack products end-to-end, from model experimentation to secure APIs, deployed on{' '}
                  <span className="text-accent font-semibold">Streamlit</span>, <span className="text-accent font-semibold">Vercel</span>, and{' '}
                  <span className="text-accent font-semibold">Render</span>.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
