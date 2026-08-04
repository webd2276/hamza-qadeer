import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data/portfolioData';
import { Hero3DScene } from './Hero3DScene';
import { ArrowDownRight, Terminal, Sparkles, CheckCircle2, ShieldCheck, Code, Globe, Cpu } from 'lucide-react';
import hamzaPortrait from '../../assets/hamza.png';

interface HeroProps {
  onOpenResume?: () => void;
  onToggleTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onToggleTerminal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-36 sm:pt-40 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Matrix Grid Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 matrix-scanline opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text & Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A0A0A] border border-white/10 px-3.5 py-1.5 rounded-full w-max text-xs sm:text-sm font-mono text-white/80 group hover:border-[#00FF41] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
              <span className="text-[#00FF41] font-semibold">{HERO_DATA.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {HERO_DATA.headlinePrefix}
              <span className="text-[#00FF41] green-text-glow font-extrabold relative inline-block">
                {HERO_DATA.name}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed font-sans">
              {HERO_DATA.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-[#00FF41] text-[#050505] font-mono text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </motion.a>

              {onOpenResume && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenResume}
                  className="px-6 py-3.5 rounded-xl bg-[#0A0A0A] border border-[#00FF41]/40 text-[#00FF41] font-mono text-sm font-bold flex items-center gap-2 hover:border-[#00FF41] hover:bg-[#00FF41]/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </motion.button>
              )}

              {onToggleTerminal && (
                <button
                  onClick={onToggleTerminal}
                  className="px-4 py-3.5 rounded-xl bg-[#121212] border border-white/10 text-white/80 font-mono text-xs hover:text-[#00FF41] hover:border-[#00FF41]/50 transition-all flex items-center gap-1.5"
                >
                  <Terminal className="w-4 h-4 text-[#00FF41]" />
                  <span>[CLI_MODE]</span>
                </button>
              )}
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
              {HERO_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 flex flex-col gap-1 relative overflow-hidden group hover:border-[#00FF41]/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all"
                >
                  <span className="absolute top-2 right-2 font-mono text-[10px] text-white/30">
                    {stat.tag}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00FF41] font-mono green-text-glow flex items-center gap-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Developer Portrait + 3D Hologram Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] mx-auto group">
              {/* Glowing Background Radial Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00FF41]/20 via-[#00FF41]/5 to-transparent blur-xl group-hover:from-[#00FF41]/30 transition-all duration-500 pointer-events-none" />

              {/* Behind 3D Canvas Vibe */}
              <div className="absolute inset-0 opacity-40 rounded-3xl overflow-hidden pointer-events-none">
                <Hero3DScene />
              </div>

              {/* Main Portrait Frame */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#00FF41]/40 bg-[#0A0A0A]/90 shadow-[0_0_30px_rgba(0,255,65,0.2)] group-hover:border-[#00FF41] group-hover:shadow-[0_0_45px_rgba(0,255,65,0.35)] transition-all duration-300">
                {/* Tech Scanlines & Corner Accents */}
                <div className="absolute inset-0 matrix-scanline opacity-15 pointer-events-none z-20" />
                <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#050505]/80 border border-[#00FF41]/30 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
                  <span className="text-[10px] font-mono text-[#00FF41] tracking-wider uppercase font-bold">
                    VERIFIED DEV
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-30 p-1.5 rounded-lg bg-[#050505]/80 border border-white/10 text-[#00FF41] backdrop-blur-md">
                  <Cpu className="w-4 h-4 animate-spin-slow" />
                </div>

                {/* Developer Image */}
                <img
                  src={hamzaPortrait}
                  alt="Hamza Qadeer - Full Stack & WordPress Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top max-h-[520px] filter brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom Overlay Gradient & Details */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent p-4 sm:p-5 flex flex-col gap-1 text-left border-t border-[#00FF41]/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-1.5">
                      Hamza Qadeer
                      <ShieldCheck className="w-4 h-4 text-[#00FF41]" />
                    </span>
                    <span className="text-[10px] font-mono bg-[#00FF41]/20 text-[#00FF41] px-2 py-0.5 rounded border border-[#00FF41]/30">
                      PK (GMT+5)
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#00FF41] flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" />
                    <span>Full Stack & WordPress Developer</span>
                  </p>

                  <div className="flex items-center gap-2 pt-1.5 text-[11px] font-mono text-white/60">
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-[#00FF41]" /> 50+ Projects
                    </span>
                    <span>•</span>
                    <span className="text-[#00FF41]">100% Success Rate</span>
                  </div>
                </div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 z-30 bg-[#0A0A0A] border border-[#00FF41]/50 rounded-xl px-3 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF41]" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-mono font-bold text-white">READY FOR HIRE</span>
                  <span className="text-[9px] font-mono text-white/50">FREELANCE / FULL-TIME</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
