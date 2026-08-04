import React from 'react';
import { Cpu, Terminal, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">

          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#0A0A0A] border border-[#00FF41]/40 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#00FF41]" />
              </div>
              <span className="text-lg font-bold text-white">
                Hamza<span className="text-[#00FF41]">Qadeer</span>
              </span>
            </div>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Full Stack &amp; WordPress Developer delivering fast, secure, and conversion-focused digital experiences with custom N8n automation.
            </p>
            <div className="text-[11px] text-[#00FF41] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
              <span>SYSTEM STATUS: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#00FF41] font-bold uppercase tracking-wider">
              [ SERVICES ]
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-sans">
              <li className="hover:text-[#00FF41] transition-colors cursor-pointer">
                WordPress Development
              </li>
              <li className="hover:text-[#00FF41] transition-colors cursor-pointer">
                Custom Website Development
              </li>
              <li className="hover:text-[#00FF41] transition-colors cursor-pointer">
                WooCommerce Stores
              </li>
              <li className="hover:text-[#00FF41] transition-colors cursor-pointer">
                Website Optimization &amp; N8n
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#00FF41] font-bold uppercase tracking-wider">
              [ NAVIGATION ]
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-sans">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-[#00FF41] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#00FF41] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-[#00FF41] transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-[#00FF41] transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('automation')} className="hover:text-[#00FF41] transition-colors">
                  Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#00FF41] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Tech Stack Col */}
          <div className="space-y-3">
            <h4 className="text-xs text-[#00FF41] font-bold uppercase tracking-wider">
              [ ARCHITECTURE ]
            </h4>
            <div className="text-xs text-white/60 space-y-1 font-sans">
              <p>Built with React, Three.js, GSAP &amp; Framer Motion</p>
              <p className="text-[11px] text-white/40">Dark Matrix Theme Design System</p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-[#121212] border border-white/10 text-[10px] text-[#00FF41]">
                PHP / MySQL
              </span>
              <span className="px-2 py-1 rounded bg-[#121212] border border-white/10 text-[10px] text-blue-400">
                WordPress
              </span>
              <span className="px-2 py-1 rounded bg-[#121212] border border-white/10 text-[10px] text-amber-400">
                N8n Workflows
              </span>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; 2026 <span className="text-white font-bold">Hamza Qadeer</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Engineered with precision for peak client conversion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
