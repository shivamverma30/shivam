// src/components/Contact.jsx
// Contact form with animated input fields

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal, profiles } from '../data';

export default function Contact() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NOTE: This submits via mailto: link.
  // To use a real backend (EmailJS, Formspree, etc.), replace the handler below.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate a short delay then open mailto
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const contactDetails = [
    { icon: <HiMail className="w-4 h-4" />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <HiPhone className="w-4 h-4" />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <HiLocationMarker className="w-4 h-4" />, label: 'Location', value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="section-wrapper">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">06. contact</p>
          <h2 className="section-title">Contact Details</h2>
          <div className="w-12 h-1 rounded-full bg-accent mt-3" />
          <p className="mt-4 text-sm max-w-md" style={{ color: 'var(--text-secondary)' }}>
            I am open to internship opportunities, collaborations, and project discussions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Detail cards */}
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="card p-4 flex items-center gap-4"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,212,170,0.1)', color: '#00D4AA' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-accent transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaGithub className="w-5 h-5" />,   href: profiles.github,   label: 'GitHub'   },
                { icon: <FaLinkedin className="w-5 h-5" />, href: profiles.linkedin, label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl card hover:text-accent hover:-translate-y-1 transition-all duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name */}
              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Briefly share the role, project, or opportunity."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary justify-center mt-2 disabled:opacity-70"
                whileHover={{ scale: status === 'sending' ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>✅ Message Sent!</>
                ) : (
                  <>
                    <HiPaperAirplane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'sent' && (
                <p className="text-xs text-center text-accent font-mono">
                  Thanks! I'll get back to you soon. 🎉
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
