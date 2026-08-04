import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Maximize2, Send, CornerDownLeft } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, SKILLS_CATEGORIES, PROJECTS_DATA, CONTACT_DATA } from '../data/portfolioData';

interface HackerTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

export const HackerTerminal: React.FC<HackerTerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'sys.init',
      output: (
        <div className="text-[#00FF41] space-y-1">
          <div>[SYSTEM_READY] Welcome to Hamza Qadeer Portfolio Terminal v2.0</div>
          <div>Type <span className="text-white font-bold">'help'</span> to view available system commands.</div>
        </div>
      )
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-white/80 font-mono text-xs">
            <div>Available Commands:</div>
            <div><span className="text-[#00FF41]">about</span>    - Display developer profile bio &amp; core stats</div>
            <div><span className="text-[#00FF41]">skills</span>   - List technical skills &amp; automation capabilities</div>
            <div><span className="text-[#00FF41]">projects</span> - Output client builds &amp; live production URLs</div>
            <div><span className="text-[#00FF41]">contact</span>  - Print WhatsApp, Email &amp; Phone details</div>
            <div><span className="text-[#00FF41]">resume</span>   - Trigger instant resume viewer modal</div>
            <div><span className="text-[#00FF41]">clear</span>    - Clear terminal buffer output</div>
            <div><span className="text-[#00FF41]">exit</span>     - Close the hacker terminal window</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-white/80 space-y-2 text-xs font-mono">
            <div className="text-[#00FF41] font-bold">{HERO_DATA.person}</div>
            <div>{ABOUT_DATA.bio}</div>
            <div className="text-amber-400">Core Mastery: WordPress (85%) | JS (90%) | PHP &amp; MySQL (95%)</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono text-white/80">
            {SKILLS_CATEGORIES.map(cat => (
              <div key={cat.title}>
                <span className="text-[#00FF41] font-bold">{cat.title}:</span>{' '}
                {cat.items.join(', ')}
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-3 text-xs font-mono text-white/80">
            {PROJECTS_DATA.map(p => (
              <div key={p.id} className="border-l-2 border-[#00FF41] pl-2 space-y-0.5">
                <div className="text-[#00FF41] font-bold">{p.title} ({p.subtitle})</div>
                <div>{p.description}</div>
                <div>Live: <a href={p.liveUrl} target="_blank" rel="noreferrer" className="underline text-blue-400">{p.liveUrl}</a></div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs font-mono text-white/80">
            <div><span className="text-[#00FF41]">WhatsApp:</span> {CONTACT_DATA.whatsapp}</div>
            <div><span className="text-[#00FF41]">Email:</span> {CONTACT_DATA.email}</div>
            <div><span className="text-[#00FF41]">Phone:</span> {CONTACT_DATA.phone}</div>
          </div>
        );
        break;

      case 'resume':
        output = <div className="text-[#00FF41] text-xs">Opening resume modal...</div>;
        if (onOpenResume) onOpenResume();
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <div className="text-red-400 text-xs font-mono">
            Command not recognized: '{cmd}'. Type <span className="text-[#00FF41] font-bold">'help'</span> for list.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-2xl bg-[#050505] border border-[#00FF41]/60 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.3)] flex flex-col h-[500px]"
        >
          {/* Header Bar */}
          <div className="bg-[#0A0A0A] border-b border-white/10 px-4 py-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-[#00FF41] font-bold ml-2 flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>hamza@qadeer-matrix-terminal:~</span>
              </span>
            </div>

            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-4 matrix-scanline">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-white/50">
                  <span className="text-[#00FF41]">hamza@portfolio:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleCommandSubmit} className="bg-[#0A0A0A] border-t border-white/10 p-3 flex items-center gap-2">
            <span className="text-[#00FF41] font-mono font-bold text-sm pl-2">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type command (e.g., help, skills, projects, contact)..."
              autoFocus
              className="flex-1 bg-transparent border-none text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-white/30"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#00FF41] text-[#050505] hover:shadow-[0_0_12px_rgba(0,255,65,0.4)] transition-all"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
