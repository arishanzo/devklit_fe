
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp,  Sparkles, Send, CheckCircle2, X } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-to-Top Button visibility
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-transparent text-white border-t border-white/5 relative overflow-hidden flex flex-col justify-center">
      
      {/* Background ambient light element */}
      <div id="footer-glow" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-950/5 blur-[120px] pointer-events-none" />

      <div id="footer-container" className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP ROW: Newsletter & Social Grid */}
        <div id="footer-top-row" className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/5 items-center">
          
          {/* Newsletter Panel */}
          <div>
            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">Newsletter Index</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4 max-w-sm">
              Subscribe to receiving occasional project reviews, technology insights, and core architectural telemetry.
            </p>

            {subscribed ? (
              <div id="footer-subscribed-box" className="flex items-center gap-2 text-emerald-400 font-mono text-xs animate-[fadeIn_0.3s_ease-out]">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                <span>SUBSCRIBED: {newsletterEmail.toLowerCase()}</span>
              </div>
            ) : (
              <form id="footer-newsletter-form" onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="enter_tunnel_email@gmail.com"
                  className="flex-1 bg-black border border-white/5 px-4 py-2.5 rounded-xl text-xs focus:border-blue-500 focus:outline-none font-mono text-zinc-300 placeholder-zinc-700"
                />
                <button
                  id="footer-email-submit"
                  type="submit"
                  className="px-4 py-2.5 bg-neutral-900 border border-white/10 hover:border-blue-400/30 text-xs font-mono text-blue-400 hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3 h-3" /> Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Social Links Panel */}
          <div className="flex flex-col md:items-end justify-center">
            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Core Handles</h4>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaThreads, href: 'https://twitter.com', label: 'Twitter' },
              ].map((soc, idx) => (
                <a
                  id={`footer-soc-link-${soc.label.toLowerCase()}`}
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-neutral-900 border border-white/5 hover:border-blue-500/20 hover:text-blue-400 rounded-xl flex items-center justify-center transition-all group"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: Sitemap Sitemap Navigation Grid */}
        <div id="footer-mid-row" className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          {/* Sitemap Node 1 */}
          <div>
            <h5 className="font-mono text-zinc-500 uppercase tracking-widest mb-4">MODULES</h5>
            <ul className="space-y-2 font-light">
              <li><button onClick={() => onNavigate('home')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">00_Hero_Index</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">01_Vision_About</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">02_Capabilities</button></li>
              <li><button onClick={() => onNavigate('projects')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">03_Case_Studies</button></li>
            </ul>
          </div>

          {/* Sitemap Node 2 */}
          <div>
            <h5 className="font-mono text-zinc-500 uppercase tracking-widest mb-4">RESOURCES</h5>
            <ul className="space-y-2 font-light">
              <li><button onClick={() => onNavigate('tech')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">04_Tech_Matrix</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">05_Contact_Tunnel</button></li>
              <li><a href="https://github.com" className="text-zinc-400 hover:text-white transition-colors">06_Open_Source</a></li>
              <li><a href="https://vercel.com" className="text-zinc-400 hover:text-white transition-colors">07_Production_Logs</a></li>
            </ul>
          </div>

          {/* Sitemap Node 3 */}
          <div>
            <h5 className="font-mono text-zinc-500 uppercase tracking-widest mb-4">SYSTEM_SLA</h5>
            <ul className="space-y-2 font-mono text-[10px] text-zinc-500">
              <li>Uptime: <span className="text-emerald-400">99.998%</span></li>
              <li>Edge Latency: <span className="text-blue-400 font-semibold">14ms</span></li>
              <li>Bundle Target: <span className="text-purple-400 font-semibold">sub_15kb</span></li>
              <li>TLS: <span className="text-violet-400 font-semibold">AES_256_GCM</span></li>
            </ul>
          </div>

          {/* Sitemap Node 4: Brand indicator & Time */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex flex-col md:items-end gap-1">
              <span className="font-bold text-white tracking-tight flex items-center gap-1">
                NEXUS LABS <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">EST. 2026 CALIFORNIA</span>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Scroll to Top */}
        <div id="footer-bottom-row" className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            <span>© {new Date().getFullYear()} NEXUS LABS. INC. ALL RIGHTS REGISTERED BY DYNAMIC SLA.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>DESIGNED BY NEXUS • OPTIMIZED FOR EDGE</span>
            
            {/* Scroll-To-Top button */}
            <button
              id="footer-scroll-to-top"
              onClick={scrollToTop}
              className={`p-2 rounded-full bg-[#121212] border border-white/10 hover:border-blue-500/50 text-zinc-400 hover:text-blue-400 transition-all duration-300 ${
                showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 animate-pulse" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
