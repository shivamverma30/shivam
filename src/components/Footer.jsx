// src/components/Footer.jsx
// Footer with social links and copyright

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiHeart } from 'react-icons/hi';
import { personal, profiles } from '../data';

const socialLinks = [
  { icon: <FaGithub className="w-4 h-4" />,     href: profiles.github,     label: 'GitHub'     },
  { icon: <FaLinkedin className="w-4 h-4" />,   href: profiles.linkedin,   label: 'LinkedIn'   },
  { icon: <SiLeetcode className="w-4 h-4" />,   href: profiles.leetcode,   label: 'LeetCode'   },
  { icon: <FaHackerrank className="w-4 h-4" />, href: profiles.hackerrank, label: 'HackerRank' },
];

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t py-8 sm:py-10"
      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
    >
      <div className="section-wrapper">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a
              href="#hero"
              className="font-mono font-bold text-base flex items-center gap-0 tracking-tight"
              onClick={() => scrollTo('#hero')}
            >
              <span className="text-accent">&lt;</span>
              <span className="lowercase" style={{ color: 'var(--text-primary)' }}>{personal.shortName}</span>
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              {personal.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs hover:text-accent transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-colors hover:text-accent hover:bg-accent/10"
                style={{ color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.15, y: -2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright line */}
        <div
          className="mt-8 pt-6 border-t text-center text-xs flex flex-col sm:flex-row items-center justify-center gap-1"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
        >
          <span>© {year} {personal.name}. Built with</span>
          <HiHeart className="w-3.5 h-3.5 text-red-400 mx-0.5" />
          <span>love by Shivam Verma</span>
        </div>
      </div>
    </footer>
  );
}
