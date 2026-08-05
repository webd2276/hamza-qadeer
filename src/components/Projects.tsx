import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TagBadge } from './TagBadge';
import { ExternalLink, CheckCircle2, Globe, Layers, ArrowUpRight, X } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden scroll-mt-36 sm:scroll-mt-40 lg:scroll-mt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-mono text-xs sm:text-sm text-[#00FF41] tracking-widest uppercase">
            [ FEATURED_BUILDS ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Client <span className="text-[#00FF41] green-text-glow">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41] rounded-full mt-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00FF41] hover:shadow-[0_0_24px_rgba(0,255,65,0.25)] transition-all relative overflow-hidden"
            >
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-[#00FF41]">
                  <Globe className="w-4 h-4" />
                  <span>[PRODUCTION_DEPLOYS]</span>
                </div>
                <span className="font-mono text-xs text-white/30">0{idx + 1} / 02</span>
              </div>

              {/* Project Image Preview */}
              {project.image && (
                <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#00FF41]/40 transition-all bg-[#121212]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>
              )}

              {/* Title & Description */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-mono text-white group-hover:text-[#00FF41] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#00FF41] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#121212] border border-white/10 text-white hover:text-[#00FF41] hover:border-[#00FF41] hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all flex items-center justify-center"
                    title="Visit Live Site"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet List */}
                {project.keyFeatures && (
                  <ul className="space-y-2 pt-2">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs sm:text-sm text-white/80 font-sans flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech Tags & Live Link CTA */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag.name} variant={tag.variant} size="sm">
                      {tag.name}
                    </TagBadge>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#121212] border border-white/10 text-[#00FF41] font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#00FF41] hover:text-[#050505] hover:border-[#00FF41] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LAUNCH LIVE SITE ({project.title.toUpperCase()})</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-3 rounded-xl bg-[#0A0A0A] border border-white/10 text-white/70 font-mono text-xs hover:text-[#00FF41] hover:border-[#00FF41]/40 transition-all shrink-0"
                    title="View System Breakdown"
                  >
                    <Layers className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Project Detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#0A0A0A] border border-[#00FF41]/50 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-[0_0_40px_rgba(0,255,65,0.25)] space-y-6"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-[#121212] text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#00FF41] uppercase tracking-wider">
                    [PROJECT_ARCHITECTURE_SPEC]
                  </span>
                  <h3 className="text-2xl font-bold font-mono text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-[#00FF41]">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {selectedProject.image && (
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#00FF41]/30">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                <p className="text-sm text-white/80 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-white/60 uppercase">
                    Key Deliverables &amp; Tech Implementations:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures?.map((feat, idx) => (
                      <li key={idx} className="text-xs text-white/90 font-mono flex items-start gap-2">
                        <span className="text-[#00FF41]">&gt;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#00FF41] text-[#050505] font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>OPEN {selectedProject.liveUrl}</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
