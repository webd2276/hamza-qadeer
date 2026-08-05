import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DATA } from '../data/portfolioData';
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Send via WhatsApp message draft or show success modal
    const text = encodeURIComponent(`Hi Hamza, my name is ${formData.name} (${formData.email}). ${formData.message}`);
    window.open(`${CONTACT_DATA.whatsappUrl}?text=${text}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden scroll-mt-36 sm:scroll-mt-40 lg:scroll-mt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-mono text-xs sm:text-sm text-[#00FF41] tracking-widest uppercase">
            [ DIRECT_COMMUNICATION_CHANNEL ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Get In <span className="text-[#00FF41] green-text-glow">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41] rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">

            {/* WhatsApp Quick Chat Card */}
            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A0A0A] border border-[#00FF41]/40 rounded-2xl p-6 flex items-center justify-between group hover:border-[#00FF41] hover:shadow-[0_0_24px_rgba(0,255,65,0.25)] transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-base font-bold text-white group-hover:text-[#00FF41] transition-colors">
                    WhatsApp Chat
                  </h4>
                  <p className="font-mono text-xs text-[#00FF41]">
                    {CONTACT_DATA.whatsapp}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#00FF41] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-[#00FF41]/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#121212] text-blue-400 border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-base font-bold text-white">Email Address</h4>
                  <p className="font-mono text-xs text-white/70">{CONTACT_DATA.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                className="p-2.5 rounded-xl bg-[#121212] border border-white/10 text-white/70 hover:text-[#00FF41] hover:border-[#00FF41] transition-all"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00FF41]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-[#00FF41]/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#121212] text-amber-400 border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-base font-bold text-white">Direct Line</h4>
                  <p className="font-mono text-xs text-white/70">{CONTACT_DATA.phone}</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(CONTACT_DATA.phone, 'phone')}
                className="p-2.5 rounded-xl bg-[#121212] border border-white/10 text-white/70 hover:text-[#00FF41] hover:border-[#00FF41] transition-all"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#00FF41]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-[#121212] text-purple-400 border border-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-base font-bold text-white">Operations Location</h4>
                <p className="font-mono text-xs text-white/70">{CONTACT_DATA.location}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 relative group hover:border-[#00FF41]/40 transition-all">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00FF41]">
                <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
                <span>[SEND_DIRECT_TRANSMISSION]</span>
              </div>
              <span className="font-mono text-xs text-white/40">RESPONSE TIME: &lt; 2 HOURS</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-white/80 mb-1.5 uppercase">
                  Your Name / Brand
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#00FF41] focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all placeholder-white/30"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-white/80 mb-1.5 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#00FF41] focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all placeholder-white/30"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-white/80 mb-1.5 uppercase">
                  Project Scope / Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your WordPress project, web application, or automation needs..."
                  className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#00FF41] focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all placeholder-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00FF41] text-[#050505] font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_35px_rgba(0,255,65,0.5)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>INITIATE WHATSAPP TRANSMISSION</span>
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-[#00FF41]/10 border border-[#00FF41] text-[#00FF41] font-mono text-xs flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Transmission initiated! Opening WhatsApp chat window...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
