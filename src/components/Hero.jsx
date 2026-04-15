// src/components/Hero.jsx
// Landing / hero section with animated intro, floating blobs, and CTA buttons

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal, profiles } from '../data';

// Words to cycle through in the typewriter effect
const roles = [
  'Applied AI & Full-Stack Developer',
  'Building Scalable ML & Web Solutions',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00D4AA, transparent)' }}
        />
        <div
          className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00A8FF, transparent)' }}
        />
      </div>

      <div className="section-wrapper relative z-10 pt-20 sm:pt-24 pb-14 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                backgroundColor: 'rgba(0,212,170,0.1)',
                borderColor: 'rgba(0,212,170,0.3)',
                color: '#00D4AA',
              }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {personal.availableForWork ? 'Available for SDE / AI Engineer Internships and Full-Time Roles' : 'Currently Unavailable'}
            </motion.div>

            {/* Greeting + Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-mono mb-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {/* 👈 Edit personal.name in data.js */}
              {personal.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-2xl font-mono mb-3 min-h-9 flex items-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="text-accent mr-2">$</span>
              <span className="inline-block whitespace-pre-wrap break-words">{displayed}</span>
              <span className="ml-0.5 typewriter-cursor" />
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base leading-relaxed max-w-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              {/* 👈 Edit personal.intro in data.js */}
              {personal.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-primary w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <HiArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.a
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-outline w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                Find me on:
              </span>
              {[
                { icon: <FaGithub />,   href: profiles.github,   label: 'GitHub'   },
                { icon: <FaLinkedin />, href: profiles.linkedin, label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-xl transition-all hover:text-accent hover:bg-accent/10"
                  style={{ color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <span className="text-xl">{icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            className="flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative hero-avatar-zone">
              {/* Avatar circle */}
              <div
                className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center text-7xl font-bold avatar-glow relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,168,255,0.15))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(0,212,170,0.3)',
                }}
              >
                {/* Profile Photo */}
                <img
                  src="/profile.png"
                  alt="Shivam Verma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="w-4 h-4 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
