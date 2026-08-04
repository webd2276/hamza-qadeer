import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES, TECH_PILLS } from '../data/portfolioData';
import { TagBadge } from './TagBadge';
import { TagVariant } from '../types';
import { Layout, Code2, Database, Lock, Server, Settings, Workflow } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-[#00FF41]" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Database: <Database className="w-5 h-5 text-purple-400" />,
  Lock: <Lock className="w-5 h-5 text-amber-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Settings: <Settings className="w-5 h-5 text-cyan-400" />,
  Workflow: <Workflow className="w-5 h-5 text-[#00FF41]" />
};

const VARIANT_ROTATION: TagVariant[] = ['default-green', 'progress', 'review', 'planning'];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-mono text-xs sm:text-sm text-[#00FF41] tracking-widest uppercase">
            [ TECHNICAL_MATRIX ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Skills &amp; <span className="text-[#00FF41] green-text-glow">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41] rounded-full mt-1" />
        </div>

        {/* Tech Pills Banner */}
        <div className="mb-16 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#00FF41]/40 transition-all">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#00FF41] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
            <span>PRIMARY TECH ECOSYSTEM</span>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {TECH_PILLS.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="px-3.5 py-1.5 rounded-lg bg-[#121212] border border-white/10 text-white font-mono text-xs sm:text-sm hover:border-[#00FF41] hover:text-[#00FF41] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all cursor-default flex items-center gap-1.5"
              >
                <span className="text-[#00FF41]">&gt;</span>
                {pill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className={`bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-[#00FF41]/50 hover:shadow-[0_0_24px_rgba(0,255,65,0.25)] transition-all ${
                category.title.includes('Automation') ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#00FF41]/5 border-[#00FF41]/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 group-hover:border-[#00FF41]/40 transition-colors">
                      {ICON_MAP[category.iconName] || <Code2 className="w-5 h-5 text-[#00FF41]" />}
                    </div>
                    <h3 className="font-mono text-base font-bold text-white group-hover:text-[#00FF41] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-white/30">
                    [SEC_0{idx + 1}]
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.items.map((item, itemIdx) => {
                    const variant = VARIANT_ROTATION[(idx + itemIdx) % VARIANT_ROTATION.length];
                    return (
                      <TagBadge key={item} variant={variant} size="sm">
                        {item}
                      </TagBadge>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
