import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Copy, Check, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { HERO_DATA, CONTACT_DATA, ABOUT_DATA, SKILLS_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const resumeViewUrl = 'https://drive.google.com/file/d/1IAOLq-idA1TrKrfF1WoXWs1t4oJUMP4u/view?usp=drive_link';
  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1IAOLq-idA1TrKrfF1WoXWs1t4oJUMP4u';

  if (!isOpen) return null;

  const rawResumeText = `
HAMZA QADEER - FULL STACK & WORDPRESS DEVELOPER
Email: ${CONTACT_DATA.email} | Phone/WhatsApp: ${CONTACT_DATA.phone} | Location: ${CONTACT_DATA.location}

PROFILE SUMMARY:
${ABOUT_DATA.bio}

CORE SKILLS:
- WordPress Development: Custom Themes, Plugin Customization, WooCommerce, Speed Optimization, Security Hardening
- Frontend: HTML5, CSS3, JavaScript, Responsive Design
- Backend: PHP, MySQL, Custom Admin Panels
- APIs & Automation: REST APIs, N8n Workflows, Webhook Triggers, WhatsApp Bot Integration

PROJECT HIGHLIGHTS:
1. LA Forge (https://laforge.com.pk/) - Custom WordPress business website with high performance.
2. Fourteenstartravels (https://fourteenstartravels.ae/) - E-Commerce platform with WooCommerce integration.

EXPERIENCE:
- Senior Full Stack & WordPress Developer (3+ Years)
  Built 50+ custom web systems, e-commerce stores, and N8n automated business pipelines.
  Achieved 100% client satisfaction score across global remote projects.
  `;

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-3xl bg-[#0A0A0A] border border-[#00FF41]/50 rounded-2xl p-6 sm:p-8 my-8 relative shadow-[0_0_50px_rgba(0,255,65,0.25)] space-y-6 max-h-[85vh] overflow-y-auto"
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-sm text-[#00FF41] font-bold">
              <FileText className="w-5 h-5" />
              <span>[CURRICULUM_VITAE_INSPECTOR]</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#121212] text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Header Contact Block */}
          <div className="bg-[#121212] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-mono text-white">Hamza Qadeer</h2>
                <p className="text-sm font-mono text-[#00FF41] mt-0.5">
                  Full Stack &amp; WordPress Developer | N8n Automation Specialist
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={resumeViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-white font-mono text-xs hover:border-[#00FF41] hover:text-[#00FF41] transition-all flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW RESUME</span>
                </a>

                <button
                  onClick={handleCopyText}
                  className="px-3.5 py-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-white font-mono text-xs hover:border-[#00FF41] hover:text-[#00FF41] transition-all flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00FF41]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY RESUME'}</span>
                </button>

                <a
                  href={resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#00FF41] text-[#050505] font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:shadow-[0_0_25px_rgba(0,255,65,0.5)] transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs text-white/70 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>{CONTACT_DATA.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>{CONTACT_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>{CONTACT_DATA.location}</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-3">
            <h3 className="font-mono text-base font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#00FF41]" />
              <span>Professional Experience</span>
            </h3>

            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 space-y-2">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-mono text-sm font-bold text-white">Full Stack &amp; WordPress Developer</h4>
                  <p className="text-xs text-[#00FF41] font-mono">Independent Consultant / Remote Ops</p>
                </div>
                <span className="font-mono text-xs text-white/40">2023 — Present</span>
              </div>
              <ul className="text-xs text-white/70 font-sans space-y-1.5 pt-2 list-disc pl-4">
                <li>Architected 50+ custom WordPress, WooCommerce, and full-stack web applications.</li>
                <li>Built custom PHP backends, REST API endpoints, and database schemas in MySQL.</li>
                <li>Designed N8n automation workflows connecting webhooks, WhatsApp bots, and CRMs.</li>
                <li>Maintained 100% client satisfaction rating across international contracts.</li>
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 space-y-2">
              <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#00FF41]" />
                <span>Education</span>
              </h3>
              <p className="text-xs font-mono text-white/90">Bachelor's Degree in Computer Science / Web Systems</p>
              <p className="text-[11px] font-mono text-white/50">Core: Software Engineering, Data Structures, Web Security</p>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 space-y-2">
              <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00FF41]" />
                <span>Key Certifications</span>
              </h3>
              <p className="text-xs font-mono text-white/90">WordPress Architect &amp; N8n Workflow Pro</p>
              <p className="text-[11px] font-mono text-white/50">Full-Stack Security &amp; E-Commerce Optimization</p>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
