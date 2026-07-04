import { Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6';

interface SocialDockProps {
  onNavigate: (sectionId: string) => void;
}

export default function SocialDock({ onNavigate }: SocialDockProps) {
  const socials = [
    { icon: FaInstagram, href: 'https://github.com', label: 'GitHub' },
                 { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                 { icon: FaThreads, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div
      id="social-left-floating-dock"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center z-50"
    >
      <div 
        id="social-dock-container"
        className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full py-6 px-3 flex flex-col gap-4 items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group/social-dock"
      >
        {/* Subtle vertical trace line */}
        <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-white/5 pointer-events-none" />

        {/* Brand Indicator at the top of the pill */}
        <div 
          id="social-dock-top-indicator"
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 p-[1px] flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 relative z-10 group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-full h-full bg-[#060606] rounded-full flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:text-teal-400 transition-colors" />
          </div>
          {/* Hover Tooltip (Right sliding) */}
          <span className="absolute left-12 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/90 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
            SECURE_CONNECTION
          </span>
        </div>

        {/* Divider */}
        <div className="w-6 h-[1px] bg-white/10 relative z-10" />

        {/* Social Navigation Items inside the Pill */}
        <div className="flex flex-col gap-3 relative z-10">
          {socials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                id={`social-dock-item-${item.label.toLowerCase()}`}
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 relative group cursor-pointer"
                aria-label={item.label}
              >
                <Icon className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110 text-zinc-400 group-hover:text-emerald-400" />

                {/* Hover Tooltip sliding to the Right */}
                <span className="absolute left-14 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/95 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item.label}
                  <ExternalLink className="w-2.5 h-2.5 opacity-55" />
                </span>
              </a>
            );
          })}

          {/* Mail icon that navigates to the contact slide */}
          <button
            id="social-dock-item-mail"
            onClick={() => onNavigate('contact')}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 relative group cursor-pointer"
            aria-label="EMAIL"
          >
            <Mail className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110 text-zinc-400 group-hover:text-emerald-400" />
            <span className="absolute left-14 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/95 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              CONTACT ME
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-6 h-[1px] bg-white/10 relative z-10" />

        {/* Secure connection indicator button at the bottom of the pill */}
        <div
          id="social-dock-status-indicator"
          onClick={() => onNavigate('contact')}
          className="w-9 h-9 rounded-full bg-neutral-900 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center cursor-pointer transition-colors group relative z-10"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
          <div className="w-2 h-2 rounded-full bg-emerald-500 relative" />
          <span className="absolute left-12 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/90 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl flex flex-col gap-0.5">
            <span className="text-emerald-400 font-bold">PORTFOLIO_ACTIVE</span>
            <span className="text-[8px] text-zinc-500">SSL_ENCRYPTED</span>
          </span>
        </div>
      </div>
    </div>
  );
}
