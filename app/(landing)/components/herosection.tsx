'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowRight,Terminal, ArrowUpRight, MapPin } from 'lucide-react';
import TechStackDev from './techStackDev';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroProps) {
  const [utcTime, setUtcTime] = useState('');

  // Update real-time clock for top location tag
  useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };
        setUtcTime(now.toLocaleTimeString("id-ID", options) + " WIB");
        };
    updateTime();
    const interval = setInterval(updateTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-transparent text-white flex flex-col justify-center w-full h-full"
    >
      {/* Top Location and Real-time Zone Label */}
      <div 
        id="hero-location-badge"
        className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm tracking-widest font-mono uppercase mb-6"
      >
        <MapPin className="w-4 h-4 text-zinc-600" />
        <span>Lamongan Jawa Timur</span>
        <span className="text-zinc-700">•</span>
        <span className="text-zinc-400 font-semibold">{utcTime || ''}</span>
      </div>

      {/* Main Big Elegant Heading */}
      <h1
        id="hero-heading"
        className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight font-sans leading-[1.12] text-white max-w-2xl"
      >
       Tingkatkan Visibilitas <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-300 filter drop-shadow-sm">
        Website Modern, Cepat, & Ramah SEO.
        </span>
      </h1>

      {/* Subtitle / Intro sentence */}
    <p 
  id="hero-subtitle" 
  className="mt-6 text-sm sm:text-base text-zinc-400 max-w-xl font-sans font-light leading-relaxed text-justify"
>
  Tingkatkan kehadiran bisnis Anda di dunia digital dengan website modern, cepat, dan ramah SEO. Kami membantu Anda membangun situs profesional yang mudah ditemukan di Google, aman, dan siap mendukung pertumbuhan online Anda.
</p>

       <div id="Tech" className="flex flex-wrap gap-2 mt-8">
        <TechStackDev />
       </div>
    
      {/* Interactive Action Buttons */}
      <div id="hero-actions" className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <button
          id="hero-primary-btn"
          onClick={() => onNavigate('projects')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
        >
          Telusuri Proyek
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a href="https://wa.me/+628816982294" target="_blank" rel="noopener noreferrer"
          id="hero-secondary-btn"
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-white/5 text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
        >
          <Terminal className="w-4 h-4 text-blue-400" />
          <span>Kontak Kami</span>
        </a>
      </div>

     
        {/* Capsule Category Tags */}
      <div id="hero-capsule-tags" className="flex flex-wrap gap-2 mt-8">
        {[
          '120+ Pelanggan Kami',
          '99.9% Jaminan Waktu Aktif',
          '24/7 Dukungan Teknis',
          '250+ Aplikasi Terselesaikan ',
        ].map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#121212] hover:bg-[#1A1A1A] border border-white/5 text-zinc-300 px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-colors duration-300 cursor-default"
            id={`hero-tag-${idx}`}
          >
            {tag}
          </span>
        ))}
      </div>

     
    </div>
  );
}
