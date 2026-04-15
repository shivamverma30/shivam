// src/components/Navbar.jsx
// Sticky navigation bar with dark/light toggle and mobile menu

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { personal } from '../data';

// Navigation links — add or remove sections as needed
const navLinks = [
  { label: 'About',     href: '#about'    },
  { label: 'Skills',    href: '#skills'   },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education'},
  { label: 'Profiles',  href: '#profiles' },
  { label: 'Contact',   href: '#contact'  },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[80] premium-nav-shell backdrop-blur-md border-b shadow-sm"
      style={{
        position: 'fixed',
        top: 0,
        backgroundColor: 'var(--navbar-bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <motion.a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="font-mono font-bold text-sm sm:text-lg flex items-center gap-0 tracking-tight flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-accent">&lt;</span>
            <span className="lowercase" style={{ color: 'var(--text-primary)' }}>{personal.shortName}</span>
            <span className="text-accent">/&gt;</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent bg-accent/10'
                    : 'hover:text-accent hover:bg-accent/5'
                }`}
                style={{ color: activeSection === link.href.slice(1) ? undefined : 'var(--text-secondary)' }}
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-all duration-200 hover:bg-accent/10"
              style={{ color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun className="w-5 h-5 text-amber-400" /> : <HiMoon className="w-5 h-5" />}
            </motion.button>

            {/* Resume button (desktop) */}
            <motion.a
              href={personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-primary text-sm py-2 px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-accent/10 transition-colors"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="section-wrapper py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={personal.resumeLink}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="btn-primary text-center mt-2"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
