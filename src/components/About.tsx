import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/portfolioData';
import { ShieldCheck, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00FF41]" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
  Clock: <Clock className="w-6 h-6 text-amber-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-purple-400" />
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden scroll-mt-36 sm:scroll-mt-40 lg:scroll-mt-44">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FF41]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-mono text-xs sm:text-sm text-[#00FF41] tracking-widest uppercase">
            {ABOUT_DATA.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            About <span className="text-[#00FF41] green-text-glow">Hamza Qadeer</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41] rounded-full mt-1" />
        </div>

        {/* Bio Box & Core Skill Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#00FF41]/40 hover:shadow-[0_0_24px_rgba(0,255,65,0.15)] transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41]">
                <CheckCircle className="w-4 h-4 text-[#00FF41]" />
                <span>[FULL_STACK_DEV_IDENTIFIER]</span>
              </div>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                {ABOUT_DATA.bio}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF41]" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Scalable Code</span>
              </div>
            </div>
          </motion.div>

          {/* Right Core Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center gap-6 group hover:border-[#00FF41]/40 transition-all"
          >
            <h3 className="font-mono text-lg font-bold text-white flex items-center justify-between">
              <span>Core Engineering Mastery</span>
              <span className="text-xs text-[#00FF41]">[SYSTEM_METRICS]</span>
            </h3>

            <div className="space-y-5">
              {ABOUT_DATA.coreSkillBars.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <span className="text-[#00FF41] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#121212] border border-white/10 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-[#00FF41]/70 to-[#00FF41] rounded-full shadow-[0_0_12px_rgba(0,255,65,0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Feature Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 relative group hover:border-[#00FF41]/50 hover:shadow-[0_0_24px_rgba(0,255,65,0.25)] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#121212] border border-white/10 group-hover:border-[#00FF41]/40 transition-colors">
                  {ICON_MAP[feature.iconName] || <ShieldCheck className="w-6 h-6 text-[#00FF41]" />}
                </div>
                <span className="font-mono text-xs text-white/30">{feature.codeTag}</span>
              </div>

              <div>
                <h4 className="font-mono text-base font-bold text-white group-hover:text-[#00FF41] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 font-sans mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
