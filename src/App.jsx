// src/App.jsx
// Root application component — assembles all sections

import { ThemeProvider } from './context/ThemeContext';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Projects      from './components/Projects';
import Education     from './components/Education';
import CodingProfiles from './components/CodingProfiles';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      {/*
        Outer wrapper applies CSS variable-based bg and text colors.
        Sections alternate between var(--bg-primary) and var(--bg-secondary)
        for visual rhythm without needing hardcoded colors.
      */}
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

        {/* ── Sticky navigation ── */}
        <Navbar />

        {/* ── Page sections ── */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <CodingProfiles />
          <Contact />
        </main>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
