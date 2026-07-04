'use client';

import { FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6';
import { Mail, ArrowUpRight, Sparkles, Shield, Code } from 'lucide-react';
import Image from 'next/image';

interface ProfileCardProps {
  onNavigate: (sectionId: string) => void;
}

export default function ProfileCard({ onNavigate }: ProfileCardProps) {
  return (
    <div 
      id="profile-sticky-card"
      className="bg-[#121212] border border-white/5 rounded-[32px] p-6 flex flex-col justify-between h-auto shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden group/card relative"
    >
      {/* Background radial soft light overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-600/5 blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-purple-600/5 blur-[50px] pointer-events-none" />

      {/* Top Header section inside the card */}
      <div>
        <div className="flex items-center justify-between mb-4" id="profile-card-top-bar">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-inner-bg border border-white/10 flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-display text-sm font-medium tracking-tight">DevklitTech</span>
          </div>
          <div 
            className="bg-zinc-900/60 border border-white/5 px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-medium tracking-wider text-emerald-400 font-mono"
            id="profile-availability-badge"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
           Layanan 24/7
          </div>
        </div>

        {/* Profile Image Section */}
        <div 
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-square mx-auto lg:mx-0 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover/card:border-white/15 transition-all duration-500 shadow-2xl" 
          id="profile-image-container"
        >
          <Image
            src={'/logohitamputih.png'}
            alt="Nexus Profile Avatar" 
            width={256}
            height={256}
              unoptimized
              loading="eager"
            className="w-full h-full object-cover object-center filter hover:scale-105 transition-transform duration-700 ease-out"
          />
       
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85 pointer-events-none" />
          
          {/* <span 
            className="font-script text-white text-4xl absolute bottom-3 right-4 select-none drop-shadow-lg tracking-wider"
            id="profile-signature-overlay"
          >
            Jayden
          </span> */}
        </div>

      
        <div className="space-y-2 flex flex-col items-center lg:items-start text-center lg:text-left" id="profile-info-text">
          <h2 className="text-2xl font-semibold tracking-tight text-white font-sans">
           DevKlit Technology.
          </h2>
          <p className="text-sm text-zinc-400 font-medium font-mono">
            Patner Digitalisasi Anda
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed font-sans max-w-sm">
            Web Developer | Apps Developer | Software-as-a-Service  (Saas) | Konsultan IT | Optimasi SEO | Design Ui/ux
                     </p>
        </div>
      </div>

      {/* Footer section inside the card with socials & CTA */}
      <div className="mt-6 space-y-4 flex flex-col items-center lg:items-stretch">
        {/* Social media icons */}
        <div className="flex items-center gap-3 justify-center lg:justify-start" id="profile-socials-group">
          {[
                 { icon: FaInstagram, href: 'https://github.com', label: 'GitHub' },
                           { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                           { icon: FaThreads, href: 'https://twitter.com', label: 'Twitter' },
            { icon: Mail, link: '#contact', label: 'Email', isScroll: true }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target={social.isScroll ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={social.isScroll ? (e) => { e.preventDefault(); onNavigate('contact'); } : undefined}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1A1A1A] border border-white/5 text-zinc-400 hover:text-white hover:border-white/15 transition-all duration-300 shadow-md hover:bg-zinc-900 group"
              title={social.label}
              id={`profile-social-link-${idx}`}
            >
              <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Call to action element */}
        <div 
          onClick={() => onNavigate('contact')}
          className="bg-[#1A1A1A] border border-white/5 pl-5 pr-2 py-2 rounded-full flex items-center justify-between hover:border-white/20 hover:bg-[#222] transition-all duration-300 cursor-pointer shadow-lg group/cta w-full max-w-[280px] lg:max-w-none"
          id="profile-cta-work"
        >
        <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono text-center justify-center">
            Hubungi Tim Kami
            </span>

          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
            <ArrowUpRight className="w-5 h-5 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
