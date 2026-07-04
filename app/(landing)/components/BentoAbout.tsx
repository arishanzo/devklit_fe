'use client';


import React, { useState, useEffect, useRef } from 'react';
import { User, Shield, Zap, Sparkles, MapPin, Play, Pause, RefreshCw, Layers, Award, Terminal, Activity, ArrowRight, Music, Smile } from 'lucide-react';

export default function BentoAbout() {
  // Soundwave visualizer state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVibe, setAudioVibe] = useState<'lofi' | 'synthwave' | 'ambient'>('lofi');
  const [waveAmplitudes, setWaveAmplitudes] = useState<number[]>([12, 24, 36, 18, 42, 30, 24, 16, 32, 48, 20, 10, 28, 38, 14, 25, 30, 12, 18, 24]);
  const waveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Philosophy state slider values
  const [perfVal, setPerfVal] = useState(95);
  const [designVal, setDesignVal] = useState(90);
  const [scaleVal, setScaleVal] = useState(85);

  // Location card states
  const [utcTime, setUtcTime] = useState('');

  // Update UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setUtcTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Audio wave movement simulator
  useEffect(() => {
    if (isPlaying) {
      waveTimerRef.current = setInterval(() => {
        setWaveAmplitudes((prev) =>
          prev.map(() => {
            const baseMultiplier = audioVibe === 'synthwave' ? 55 : audioVibe === 'ambient' ? 22 : 36;
            return Math.floor(Math.random() * baseMultiplier) + 8;
          })
        );
      }, 100);
    } else {
      if (waveTimerRef.current) clearInterval(waveTimerRef.current);
      setWaveAmplitudes([12, 14, 12, 10, 16, 12, 10, 11, 14, 15, 12, 10, 11, 14, 13, 11, 12, 10, 12, 14]);
    }

    return () => {
      if (waveTimerRef.current) clearInterval(waveTimerRef.current);
    };
  }, [isPlaying, audioVibe]);

  // Handle philosophy slider dependency balance
  const adjustPhilosophy = (type: 'perf' | 'design' | 'scale', value: number) => {
    if (type === 'perf') {
      setPerfVal(value);
      // Reduce others slightly to simulate resource trade-off constraints!
      setDesignVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - perfVal) * 0.4))));
      setScaleVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - perfVal) * 0.3))));
    } else if (type === 'design') {
      setDesignVal(value);
      setPerfVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - designVal) * 0.5))));
      setScaleVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - designVal) * 0.2))));
    } else {
      setScaleVal(value);
      setPerfVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - scaleVal) * 0.3))));
      setDesignVal((prev) => Math.max(40, Math.min(100, Math.floor(prev - (value - scaleVal) * 0.4))));
    }
  };

  return (
    <div className="lg:py-1 bg-transparent text-white relative flex flex-col justify-start">
      {/* Background Glow Node */}
      <div id="about-glow" className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-950/10 blur-[150px] pointer-events-none" />

      <div id="about-container" className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div id="about-header" className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">Tentang Kami</span>
          </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
  Perjalanan Kami, <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
    Membangun Solusi Digital yang Berdampak.
  </span>
</h2>
        </div>

        {/* Bento Grid */}
        <div id="about-bento-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          
          {/* CARD 1: Company Journey & Profile */}
          <div
            id="about-card-company"
            className="md:col-span-2 md:row-span-2 bg-[#121212] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Top glass reflection gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            
            
             <span className="text-xl font-bold font-mono text-gray-400">
        Perjalanan Perusahaan
      </span>
              {/* Timeline */}
<div className="relative mt-8">
  {/* Vertical Line */}
  <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-white/10 to-emerald-500/60" />

  <div className="space-y-8">


    {/* Step */}
    <div className="relative pl-14 group">
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-400/30">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
      </div>

      <span className="text-xs font-mono text-blue-400">
        2022
      </span>

      <h5 className="mt-1 text-lg font-semibold text-white">
        Awal Berdiri
      </h5>

      <p className="mt-2 text-sm leading-7 text-neutral-400">
        Memulai perjalanan sebagai studio digital dengan fokus membantu
        UMKM memiliki website profesional yang cepat, modern, dan mudah
        ditemukan melalui mesin pencari.
      </p>
    </div>

    {/* Step */}
    <div className="relative pl-14 group">
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/10 border border-violet-400/30">
        <div className="w-2.5 h-2.5 rounded-full bg-violet-400 group-hover:scale-125 transition-transform" />
      </div>

      <span className="text-xs font-mono text-violet-400">
        2024
      </span>

      <h5 className="mt-1 text-lg font-semibold text-white">
        Ekspansi Layanan
      </h5>

      <p className="mt-2 text-sm leading-7 text-neutral-400">
        Menambahkan layanan pengembangan aplikasi mobile, UI/UX Design,
        serta SEO untuk mendukung transformasi digital yang lebih lengkap.
      </p>
    </div>

    {/* Step */}
    <div className="relative pl-14 group">
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-400/30">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
      </div>

      <span className="text-xs font-mono text-emerald-400">
        Sekarang
      </span>

      <h5 className="mt-1 text-lg font-semibold text-white">
        Ratusan Proyek Selesai
      </h5>

      <p className="mt-2 text-sm leading-7 text-neutral-400">
        Telah dipercaya ratusan klien dari berbagai industri dengan
        solusi digital yang scalable, berorientasi performa, dan siap
        mendukung pertumbuhan bisnis.
      </p>
    </div>

  </div>

            </div>

            {/* Bottom mini-code blocks for engineering touch */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-500">
                <Smile className="w-4 h-4 text-blue-400" />
                <span>
                  Kepuasan Pelanggan: <span className="text-blue-400">95 %</span>
                </span>
              </div>
              <div className="text-neutral-500">
                <span>
                  projects: <span className="text-blue-400">250+ delivered</span>
                </span>
              </div>
              <div className="text-neutral-600 group-hover:text-neutral-400 transition-colors flex items-center gap-1">
                <span>Explore our journey</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div
            id="about-card-stats"
            className="bg-[#121212] border border-white/5 rounded-[32px] p-6 hover:border-white/10 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">STATISTIK KAMI</span>
                <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
              </div>
              <div className="space-y-4">
                {[
                  { value: '3+', label: 'Tahun Pengalaman Pengembangan', percent: 'w-full' },
                  { value: '250+', label: 'Proyek Berhasil Diselesaikan', percent: 'w-[99%]' },
                  { value: '100%', label: 'Tingkat Ketepatan Penyelesaian Proyek', percent: 'w-full' },
                  { value: '4.9★', label: 'Tingkat Kepuasan Klien', percent: 'w-[98%]' },
                ].map((stat, idx) => (
                  <div id={`about-stat-row-${idx}`} key={idx} className="group/stat">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[11px] font-mono text-neutral-400 group-hover/stat:text-white transition-colors">{stat.label}</span>
                      <span className="text-base font-bold font-mono text-blue-400">{stat.value}</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-400 rounded-full" style={{ width: stat.percent.replace('w-[', '').replace('%]', '%').replace('w-full', '100%') }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

       
          </div>

       
       {/* CARD 3: Google Maps */}
<div
  id="about-card-location"
  className="bg-[#121212] border border-white/5 rounded-[32px] p-6 hover:border-white/10 transition-all duration-300 flex flex-col"
>
  <div className="flex items-center justify-between mb-4">
    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
      <MapPin className="w-3.5 h-3.5 text-blue-400" />
      Lokasi Kami
    </span>

    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
      OPEN
    </span>
  </div>

  {/* Google Maps */}
  <div className="overflow-hidden rounded-2xl border border-white/5 h-56">
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps?q=-7.121381568770574,112.40562222327179&z=15&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full bg-gray-900"
    />
  </div>

  <div className="mt-5">
    <h4 className="text-white font-semibold">
      Devklit Tech
    </h4>

    <p className="text-sm text-neutral-400 mt-2">
      Melayani pembuatan website, aplikasi, UI/UX, dan solusi digital
      untuk bisnis di seluruh Indonesia.
    </p>
  </div>
</div>

     
        </div>
      </div>
    </div>
  );
}
