import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AutomationSection } from './components/AutomationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HackerTerminal } from './components/HackerTerminal';
import { ResumeModal } from './components/ResumeModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // GSAP ScrollTrigger subtle reveal triggers across sections
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF41] selection:text-[#050505] font-sans relative overflow-x-hidden">
      {/* Immersive Matrix Background SVG Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10 matrix-grid-bg z-0" />

      {/* Matrix Scanline Subtle Global Layer */}
      <div className="fixed inset-0 pointer-events-none matrix-scanline opacity-15 z-40" />

      {/* Ambient Glass UI Decorative Blobs */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-10 -right-20 w-96 h-96 bg-[#00FF41]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
      />

      {/* Main Single Page Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        />
        <About />
        <Skills />
        <Projects />
        <AutomationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals / Drawers */}
      <HackerTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
