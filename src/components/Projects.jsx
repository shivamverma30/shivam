// src/components/Projects.jsx
// Project cards with tech tags, GitHub and Live Demo links

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { projects, profiles } from '../data';

/* ── Single project card ── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      id={`project-${project.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="project-glass-card flex flex-col overflow-hidden group"
    >
      <div className="project-glass-noise" />
      <div className="project-glow-orb" />

      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Title row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'rgba(0,212,170,0.1)', color: '#00D4AA' }}>
                <HiStar className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          {/* Link icons (top right) */}
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="p-1.5 rounded-lg hover:text-accent transition-colors project-icon-btn"
              style={{ color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub className="w-4 h-4" />
            </motion.a>
            {project.live && project.live !== '#' && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="p-1.5 rounded-lg hover:text-accent transition-colors project-icon-btn"
                style={{ color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.2 }}
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 group-hover:text-accent transition-colors leading-snug"
          style={{ color: 'var(--text-primary)' }}
        >
          {/* 👈 Edit projects in data.js */}
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag project-tech-tag">{t}</span>
          ))}
        </div>

        {/* Bottom CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center text-xs py-2"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-xs py-2"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="project-section-bg" />
      <div className="project-section-bg-2" />
      <div className="section-wrapper">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">03. projects</p>
          <h2 className="section-title">Selected Projects</h2>
          <div className="w-12 h-1 rounded-full bg-accent mt-3" />
          <p className="mt-4 text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Current in-progress product followed by deployed projects in applied AI, e-commerce, and property platforms.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href={profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FaGithub className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
