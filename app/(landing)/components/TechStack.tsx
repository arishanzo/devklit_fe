'use client';


import React, { useState } from 'react';
import { Cpu, Server, Database, Sparkles, Check, Code, Layout, Blocks, Terminal } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure';
  level: string;
  icon: string;
  glow: string;
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'infrastructure'>('all');
  const [selectedPlannerTech, setSelectedPlannerTech] = useState<string[]>([]);
  const [pipelineOutput, setPipelineOutput] = useState<string | null>(null);

  const techItems: TechItem[] = [
    // Frontend
    { name: 'React 19', category: 'frontend', level: 'Expert', icon: '⚛', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]' },
    { name: 'TypeScript', category: 'frontend', level: 'Expert', icon: 'TS', glow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', icon: 'TW', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]' },
    { name: 'HTML5/CSS3', category: 'frontend', level: 'Expert', icon: 'H5', glow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]' },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 'Expert', icon: 'JS', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]' },
    { name: 'Express', category: 'backend', level: 'Expert', icon: 'EX', glow: 'shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
    { name: 'Rust', category: 'backend', level: 'Advanced', icon: 'RS', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]' },
    { name: 'Python', category: 'backend', level: 'Advanced', icon: 'PY', glow: 'shadow-[0_0_15px_rgba(234,179,8,0.15)]' },
    
    // Databases
    { name: 'PostgreSQL', category: 'database', level: 'Expert', icon: 'PS', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]' },
    { name: 'Redis Cache', category: 'database', level: 'Expert', icon: 'RD', glow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]' },
    { name: 'MongoDB', category: 'database', level: 'Advanced', icon: 'MG', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]' },
    { name: 'Pinecone Db', category: 'database', level: 'Advanced', icon: 'PC', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]' },
    
    // Infrastructure
    { name: 'Docker', category: 'infrastructure', level: 'Expert', icon: 'DK', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]' },
    { name: 'Vercel / Cloud Run', category: 'infrastructure', level: 'Expert', icon: 'VC', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]' },
    { name: 'Git / GitHub', category: 'infrastructure', level: 'Expert', icon: 'GH', glow: 'shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
    { name: 'CI/CD Pipelines', category: 'infrastructure', level: 'Advanced', icon: 'CD', glow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]' },
  ];

  const filteredTech = activeCategory === 'all'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  // Toggle technology selection in Planner
  const togglePlannerTech = (name: string) => {
    setPipelineOutput(null);
    if (selectedPlannerTech.includes(name)) {
      setSelectedPlannerTech(prev => prev.filter(t => t !== name));
    } else {
      if (selectedPlannerTech.length >= 3) {
        return;
      }
      setSelectedPlannerTech(prev => [...prev, name]);
    }
  };

  // Solve Integration Pipeline
  const handleSolvePipeline = () => {
    if (selectedPlannerTech.length === 0) return;
    
    const selected = selectedPlannerTech;
    let explanation = '';

    if (selected.includes('React 19') && selected.includes('Express') && selected.includes('PostgreSQL')) {
      explanation = '✨ PIPELINE RESOLVED: React 19 dispatches typed API requests over HTTPS to the Express server. Express processes queries concurrently, queries the optimized PostgreSQL relational indexes directly with Drizzle ORM, and responds with compressed payloads in ~22ms.';
    } else if (selected.includes('React 19') && selected.includes('Redis Cache') && selected.includes('Express')) {
      explanation = '✨ PIPELINE RESOLVED: Active queries compiled by React 19 are routed via Express middleware. Express verifies cached outputs in Redis first (sub-1ms hit latency). If missed, Express processes query computation and writes-back result to Redis cache layers.';
    } else if (selected.includes('React 19') && selected.includes('Pinecone Db') && selected.includes('Python')) {
      explanation = '✨ PIPELINE RESOLVED: AI vector pipelines. React 19 streams semantic user text prompts to a Python FastAPI endpoint. Python runs the prompt through neural models, maps query vectors to Pinecone vector indexes, and resolves context graphs in ~40ms.';
    } else if (selected.includes('Rust') && selected.includes('Redis Cache') && selected.includes('Docker')) {
      explanation = '✨ PIPELINE RESOLVED: Enterprise speed stack. Low-latency Rust daemon compiles as an optimized scratch Docker image container. Rust loads caching hashes straight in memory-isolated Redis caches, processing up to 450,000 req/s with absolute stability.';
    } else {
      const elementsList = selected.join(' ➔ ');
      explanation = `🚀 PIPELINE RESOLVED: Integrated system architecture [${elementsList}]. System uses high-performance data streams. Component parameters are isolated dynamically within Docker virtual microservice tiers, ensuring decoupled scaling with latency limits.`;
    }

    setPipelineOutput(explanation);
  };

  return (
    <div className="py-4 lg:py-1 bg-transparent text-white relative flex flex-col justify-start">
      <div id="tech-glow" className="absolute top-1/3 left-1/2 w-[550px] h-[550px] rounded-full bg-blue-950/5 blur-[160px] pointer-events-none" />

      <div id="tech-container" className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div id="tech-header" className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Blocks className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">SYSTEM ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Engineered Toolkit, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
              Modern Industry Standards.
            </span>
          </h2>
        </div>

        <div id="tech-layout-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: Technology periodic matrix (Spans 2 columns on lg) */}
          <div id="tech-matrix-panel" className="lg:col-span-2 space-y-6">
            {/* Category Navigation Selector */}
            <div id="tech-nav-filters" className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Stack' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend API' },
                { id: 'database', label: 'Databases' },
                { id: 'infrastructure', label: 'Infrastructure' },
              ].map((cat) => (
                <button
                  id={`tech-filter-btn-${cat.id}`}
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all tracking-wider uppercase border cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-blue-500 text-white border-blue-500 font-bold'
                      : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tech grid items styled like premium chips with custom glowing shadows */}
            <div id="tech-grid" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {filteredTech.map((item, idx) => (
                <div
                  id={`tech-chip-${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                  key={idx}
                  onClick={() => togglePlannerTech(item.name)}
                  className={`bg-[#121212] border rounded-2xl p-4 hover:border-white/20 transition-all duration-300 relative group cursor-pointer flex flex-col justify-between h-28 ${
                    selectedPlannerTech.includes(item.name)
                      ? 'border-blue-500/80 bg-neutral-900/60 shadow-[0_0_20px_rgba(59,130,246,0.25)] scale-[0.98]'
                      : 'border-white/5'
                  }`}
                >
                  {/* Glowing background */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${item.glow}`} />

                  {/* Element Indicator Header */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span>{item.category.toUpperCase().slice(0, 3)}</span>
                    <span className="text-[10px] text-blue-400 font-bold">{item.icon}</span>
                  </div>

                  {/* Name */}
                  <div className="mt-3">
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.name}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">{item.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High-end Interactive Infrastructure Topology Planner */}
          <div
            id="tech-planner-panel"
            className="bg-[#121212] border border-white/5 rounded-[32px] p-6 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">INTEGRATION CONSOLE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Topology Resolver</h3>
              <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed mb-6">
                Click and select up to **3 technologies** from the grid on the left, then trigger the resolve compiler below to see how those nodes integrate under peak workload conditions.
              </p>

              {/* Selected technology bubbles */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-zinc-500 block uppercase">Selected Pipeline Nodes:</span>
                <div className="flex flex-wrap gap-1.5 min-h-[36px] bg-black/45 p-2 rounded-xl border border-white/5">
                  {selectedPlannerTech.map((t) => (
                    <span
                      key={t}
                      onClick={() => togglePlannerTech(t)}
                      className="px-2.5 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-[10px] font-mono text-blue-400 cursor-pointer hover:bg-purple-950/20 hover:border-purple-500/20 hover:text-purple-400 transition-all"
                    >
                      {t} ×
                    </span>
                  ))}
                  {selectedPlannerTech.length === 0 && (
                    <span className="text-[10px] font-mono text-zinc-600 self-center">No nodes selected. Click chips on left.</span>
                  )}
                </div>
              </div>

              {/* Resolved Pipeline Diagram Output */}
              <div className="min-h-[140px] bg-black rounded-2xl p-4 border border-white/5 font-mono text-xs text-zinc-400 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {pipelineOutput ? (
                  <div className="relative z-10 animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex items-center gap-1.5 text-blue-400 mb-2 font-bold text-[10px] border-b border-white/5 pb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>PIPELINE_RESOLVER_STDOUT</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-zinc-300">{pipelineOutput}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full gap-2 relative z-10 py-4">
                    <Code className="w-6 h-6 text-neutral-700 animate-pulse" />
                    <span className="text-[10px] text-zinc-600 uppercase">RESOLVER IDLE. AWAITING NODES.</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                id="tech-solve-btn"
                onClick={handleSolvePipeline}
                disabled={selectedPlannerTech.length === 0}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-violet-400 text-white font-bold text-xs tracking-widest uppercase transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.2)]"
              >
                COMPILE ARCHITECTURE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
