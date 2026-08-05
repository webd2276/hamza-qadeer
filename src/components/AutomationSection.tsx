import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUTOMATION_DATA } from '../data/portfolioData';
import { TagBadge } from './TagBadge';
import {
  Workflow,
  Zap,
  Play,
  Github,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
  Target,
  MessageSquare,
  BarChart3,
  Webhook,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-blue-400" />,
  Target: <Target className="w-5 h-5 text-[#00FF41]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-purple-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  Webhook: <Webhook className="w-5 h-5 text-[#00FF41]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
};

export const AutomationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunningTest, setIsRunningTest] = useState<boolean>(false);
  const [testLogs, setTestLogs] = useState<string[]>([]);

  const handleRunPipelineTest = () => {
    setIsRunningTest(true);
    setTestLogs(['[N8N_CORE] Initializing N8n Workflow Execution Engine...']);
    setActiveStep(0);

    setTimeout(() => {
      setTestLogs(prev => [...prev, '[TRIGGER_NODE_01] Incoming Webhook Payload Received from Form Submit']);
      setActiveStep(1);
    }, 800);

    setTimeout(() => {
      setTestLogs(prev => [...prev, '[PROCESS_NODE_02] Filtering spam, transforming JSON schema, running sentiment analysis']);
      setActiveStep(2);
    }, 1600);

    setTimeout(() => {
      setTestLogs(prev => [
        ...prev,
        '[ACTION_NODE_03] Message dispatched to WhatsApp Bot & synced to Google Sheets successfully!',
        '[STATUS: 200 OK] Execution Time: 42ms | Zero Manual Overhead'
      ]);
      setIsRunningTest(false);
    }, 2400);
  };

  return (
    <section id="automation" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden scroll-mt-36 sm:scroll-mt-40 lg:scroll-mt-44">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF41]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0A0A0A] border border-[#00FF41]/40 px-3 py-1 rounded-full text-xs font-mono text-[#00FF41] shadow-[0_0_12px_rgba(0,255,65,0.2)]">
            <Workflow className="w-4 h-4 animate-spin" />
            <span>[N8N_AUTOMATION_ENGINE]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight">
            Automate Your Business with <span className="text-[#00FF41] green-text-glow">N8n Workflows</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl font-sans mt-2">
            {AUTOMATION_DATA.subtitle}
          </p>
          <div className="w-16 h-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41] rounded-full mt-2" />
        </div>

        {/* 3-Step Interactive Process Visualizer */}
        <div className="mb-16 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#00FF41]/50 transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="font-mono text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00FF41]" />
                <span>3-Step Autonomous Pipeline Architecture</span>
              </h3>
              <p className="text-xs font-mono text-white/50 mt-1">
                Zero coding required for clients — 100% automated logic flow
              </p>
            </div>

            <button
              onClick={handleRunPipelineTest}
              disabled={isRunningTest}
              className="px-4 py-2.5 rounded-xl bg-[#00FF41] text-[#050505] font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:shadow-[0_0_25px_rgba(0,255,65,0.5)] transition-all disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isRunningTest ? 'TESTING PIPELINE...' : 'SIMULATE LIVE WORKFLOW'}</span>
            </button>
          </div>

          {/* Steps Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {AUTOMATION_DATA.threeStepProcess.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={stepItem.step}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-[#121212] border-[#00FF41] shadow-[0_0_20px_rgba(0,255,65,0.25)]'
                      : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-extrabold text-[#00FF41]">
                      {stepItem.step}
                    </span>
                    <TagBadge variant={stepItem.badgeVariant} size="sm">
                      {stepItem.title.toUpperCase()}
                    </TagBadge>
                  </div>

                  <h4 className="font-mono text-base font-bold text-white mb-1">
                    {stepItem.title}: <span className="text-white/80 font-normal">{stepItem.description}</span>
                  </h4>

                  <p className="text-xs text-white/60 font-sans mt-3 leading-relaxed">
                    {stepItem.detail}
                  </p>

                  {idx < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00FF41]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Test Logs Console Box */}
          <AnimatePresence>
            {testLogs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 rounded-xl bg-[#050505] border border-[#00FF41]/30 font-mono text-xs text-[#00FF41] space-y-1.5"
              >
                <div className="text-white/40 pb-1 border-b border-white/10 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
                  <span>[EXECUTION_CONSOLE_LOGS]</span>
                </div>
                {testLogs.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed">
                    {log}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Workflow Cards Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AUTOMATION_DATA.workflows.map((wf, idx) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-[#00FF41]/50 hover:shadow-[0_0_24px_rgba(0,255,65,0.25)] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 group-hover:border-[#00FF41]/40 transition-colors">
                    {ICON_MAP[wf.iconName] || <Workflow className="w-5 h-5 text-[#00FF41]" />}
                  </div>
                  <TagBadge variant={wf.badge.variant} size="sm">
                    {wf.badge.name}
                  </TagBadge>
                </div>

                <div>
                  <h4 className="font-mono text-lg font-bold text-white group-hover:text-[#00FF41] transition-colors">
                    {wf.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 font-sans mt-2 leading-relaxed">
                    {wf.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
                {wf.integrations.map(integ => (
                  <span
                    key={integ}
                    className="px-2.5 py-1 rounded-md bg-[#121212] border border-white/10 text-[11px] font-mono text-white/70"
                  >
                    {integ}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {AUTOMATION_DATA.stats.map(stat => (
            <div
              key={stat.label}
              className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 text-center group hover:border-[#00FF41] transition-all"
            >
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00FF41] green-text-glow">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-white/60 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub N8n Repositories */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2 font-mono text-sm text-white font-bold">
              <Github className="w-5 h-5 text-[#00FF41]" />
              <span>Open Source N8n Workflows &amp; AI Repositories</span>
            </div>
            <span className="font-mono text-xs text-[#00FF41]">[GITHUB_SYNC]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AUTOMATION_DATA.githubProjects.map(repo => (
              <a
                key={repo.title}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] border border-white/10 rounded-xl p-5 hover:border-[#00FF41] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h5 className="font-mono text-base font-bold text-white group-hover:text-[#00FF41] transition-colors flex items-center gap-2">
                      <span>{repo.title}</span>
                    </h5>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#00FF41] shrink-0" />
                  </div>
                  <p className="text-xs text-white/70 font-sans leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-xs text-white/50 pt-3 border-t border-white/10">
                  <span className="text-[#00FF41] font-medium">{repo.language}</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
                    {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
