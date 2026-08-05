import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, FileText, Cpu, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_DATA } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollToSection';

interface NavbarProps {
  onOpenResume?: () => void;
  onToggleTerminal?: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Automation', href: '#automation' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onToggleTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pendingMobileSectionRef = useRef<string | null>(null);
  const mobileScrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const focusPoint = window.scrollY + window.innerHeight * 0.35;
      let nextActiveSection = null as string | null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (sectionTop <= focusPoint && sectionBottom > focusPoint) {
          nextActiveSection = sections[i];
          break;
        }

        if (sectionTop <= focusPoint) {
          nextActiveSection = sections[i];
          break;
        }
      }

      if (nextActiveSection) {
        setActiveSection(prev => (prev === nextActiveSection ? prev : nextActiveSection));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || !pendingMobileSectionRef.current) return;

    const targetId = pendingMobileSectionRef.current;
    pendingMobileSectionRef.current = null;

    mobileScrollTimeoutRef.current = window.setTimeout(() => {
      if (scrollToSection(targetId)) {
        setActiveSection(targetId);
      }
      mobileScrollTimeoutRef.current = null;
    }, 350);

    return () => {
      if (mobileScrollTimeoutRef.current !== null) {
        window.clearTimeout(mobileScrollTimeoutRef.current);
        mobileScrollTimeoutRef.current = null;
      }
    };
  }, [mobileMenuOpen]);

  const navigateToSection = (targetId: string, closeMobileMenu: boolean) => {
    if (closeMobileMenu) {
      pendingMobileSectionRef.current = targetId;
      setMobileMenuOpen(false);
      return;
    }

    if (scrollToSection(targetId)) {
      setActiveSection(targetId);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateToSection(href.substring(1), mobileMenuOpen);
  };

  const renderSocialIcon = (key: string) => {
    switch (key) {
      case 'linkedin':
        return <Linkedin className="w-3.5 h-3.5" />;
      case 'github':
        return <Github className="w-3.5 h-3.5" />;
      case 'instagram':
        return <Instagram className="w-3.5 h-3.5" />;
      case 'fiverr':
        return (
          <span className="font-mono text-[10px] font-bold tracking-tighter bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded border border-emerald-500/30">
            Fi
          </span>
        );
      case 'upwork':
        return (
          <span className="font-mono text-[10px] font-bold tracking-tighter bg-green-500/20 text-[#00FF41] px-1 py-0.5 rounded border border-[#00FF41]/30">
            Up
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement & Social Links Bar */}
      <div className="bg-[#050505]/95 border-b border-white/10 text-white/70 py-1.5 px-4 text-xs font-mono backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-4 text-white/60">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="flex items-center gap-1.5 hover:text-[#00FF41] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#00FF41]" />
              <span>{CONTACT_DATA.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00FF41] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00FF41]" />
              <span>{CONTACT_DATA.phone}</span>
            </a>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
            <span className="text-[11px] text-white/50 tracking-wider hidden md:inline">CONNECT:</span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-[#0A0A0A] border border-white/10 text-white/70 hover:text-[#00FF41] hover:border-[#00FF41]/50 hover:shadow-[0_0_8px_rgba(0,255,65,0.3)] transition-all"
                >
                  {renderSocialIcon(social.iconKey)}
                  <span className="text-[11px] font-mono hidden lg:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-3.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={e => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0A0A0A] border border-[#00FF41]/30 flex items-center justify-center group-hover:border-[#00FF41] group-hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all">
              <Cpu className="w-5 h-5 text-[#00FF41]" />
            </div>
            <div className="font-mono text-lg font-bold tracking-tight text-white flex items-center">
              Hamza<span className="text-[#00FF41]">Qadeer</span>
              <span className="text-[#00FF41] animate-pulse ml-0.5">_</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0A0A0A]/80 border border-white/10 px-4 py-1.5 rounded-full shadow-inner">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-mono uppercase tracking-wider transition-colors duration-200 rounded-md ${
                    isActive ? 'text-[#00FF41] font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00FF41] shadow-[0_0_8px_#00FF41]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions (Terminal Toggle + Resume Button) */}
          <div className="hidden md:flex items-center gap-3">
            {onToggleTerminal && (
              <button
                onClick={onToggleTerminal}
                title="Open Hacker Terminal"
                className="p-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-white/70 hover:text-[#00FF41] hover:border-[#00FF41]/50 hover:shadow-[0_0_12px_rgba(0,255,65,0.2)] transition-all"
              >
                <Terminal className="w-4 h-4" />
              </button>
            )}

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#00FF41] text-[#050505] shadow-[0_0_15px_rgba(0,255,65,0.25)] hover:shadow-[0_0_25px_rgba(0,255,65,0.45)] hover:scale-105 active:scale-95 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {onToggleTerminal && (
              <button
                onClick={onToggleTerminal}
                className="p-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-[#00FF41]"
              >
                <Terminal className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-white hover:text-[#00FF41] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
            >
            <div className="px-4 pt-3 pb-6 flex flex-col gap-2">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => navigateToSection(link.href.substring(1), true)}
                    className={`px-4 py-2.5 rounded-lg font-mono text-sm uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 font-bold'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs opacity-50">&gt;</span>
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-around py-2 bg-white/5 rounded-lg border border-white/10">
                  {SOCIAL_LINKS.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="p-2 text-white/80 hover:text-[#00FF41]"
                    >
                      {renderSocialIcon(social.iconKey)}
                    </a>
                  ))}
                </div>

                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00FF41] text-[#050505] font-mono text-sm font-bold shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD / VIEW RESUME</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
