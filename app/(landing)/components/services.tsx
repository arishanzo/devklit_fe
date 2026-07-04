'use client';

import React, { useState } from 'react';
import { Cpu, Layout, Sparkles, Check, Play, RefreshCw, Layers, Zap, Gauge, Code2, Move, ArrowRight } from 'lucide-react';
import { servicesList } from '@/app/lib/servicesList';

export default function Services() {
  // Service 1 States: Golden Ratio Grids
  const [spacingUnit, setSpacingUnit] = useState<4 | 8 | 12 | 16 | 24>(8);

  // Service 2 States: Bundle compilation simulator
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(384);
  const [latency, setLatency] = useState(140);

  // Service 3 States: Physics Engine simulator
  const [stiffness, setStiffness] = useState<'bouncy' | 'linear' | 'snappy'>('snappy');
  const [ballBounce, setBallBounce] = useState(false);

  // Run Bundle Optimization Simulator
  const handleCompileSimulation = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setCompileProgress(0);
    setOptimizedSize(384);
    setLatency(140);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setCompileProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsCompiling(false);
        setOptimizedSize(14.8);
        setLatency(12);
      }
    }, 100);
  };

  return (
    <div className="lg:py-1 bg-transparent text-white relative flex flex-col justify-start">
      {/* Background radial glow */}
      <div id="services-glow" className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-950/5 blur-[180px] pointer-events-none" />

      <div id="services-container" className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div id="services-header" className="mb-6 lg:mb-8 md:flex md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
              Expertise Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
                Without Compromise.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-sans font-light leading-relaxed">
            I build bespoke digital instruments designed to perform at the limits of modern browser rendering, backed by clean type-safe development architectures.
          </p>
        </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {servicesList.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.id}
        className="bg-[#121212] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-8">
            <div
              className={`w-12 h-12 rounded-2xl bg-${service.color}-950/30 border border-${service.color}-500/20 flex items-center justify-center`}
            >
              <Icon className={`w-6 h-6 text-${service.color}-400`} />
            </div>

            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              {service.id} / {service.label}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3">
            {service.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {service.description}
          </p>

          <ul className="space-y-2">
            {service.features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-zinc-300"
              >
                <Check className={`w-4 h-4 text-${service.color}-400`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
          <a href="https://wa.me/+628816982294" target="_blank" rel="noopener noreferrer"
 
          className="group mt-8 w-full flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] px-5 py-4 transition-all duration-300">
  <span className="text-sm font-semibold text-white">
    {service.cta}
  </span>

  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
</a>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
}
