import { useState } from 'react';
import { X, Code, Terminal, Cpu, Database, Activity, Globe, ExternalLink, Cpu as Chip, BarChart2, Shield, Settings } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  accent: string;
  codeSnippet: string;
  architecture: { step: string; desc: string }[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code' | 'performance'>('overview');

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto animate-[fadeIn_0.3s_ease-out]"
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-5xl bg-[#121212] border border-white/5 rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-[scaleUp_0.3s_ease-out]"
      >
        {/* Floating Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 hover:border-red-500/50 hover:bg-neutral-900 text-zinc-400 hover:text-red-400 transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Cinematic Visualizer */}
        <div
          id="project-modal-left-panel"
          className="w-full md:w-[40%] bg-gradient-to-b from-[#181818] to-black p-8 flex flex-col justify-between border-r border-white/5 relative overflow-hidden"
        >
          {/* Accent Glow backdrop */}
          <div
            className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-[80px] opacity-20"
            style={{ backgroundColor: project.accent }}
          />

          <div className="relative z-10">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-black/40"
              style={{ color: project.accent }}
            >
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-white mt-6 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 font-sans font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* SVG Code-Generated Futuristic Visualizer for project category */}
          <div id="project-modal-visualizer" className="my-8 relative h-44 border border-white/5 rounded-2xl bg-black/60 overflow-hidden flex items-center justify-center">
            {project.category.includes('Engineering') || project.category.includes('AI') ? (
              <div className="flex flex-col gap-2 items-center text-center">
                <div className="relative w-14 h-14 rounded-full border border-orange-500/30 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center animate-[spin_6s_linear_infinite_reverse]">
                    <Activity className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 animate-pulse mt-2">STREAMING_REALTIME_METRIC</span>
              </div>
            ) : (
              <div className="w-full h-full p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[9px] font-mono text-zinc-500">
                  <span>canvas_rendering.cpp</span>
                  <span className="text-orange-400">GPU_ACCELERATED</span>
                </div>
                {/* Visualizer bars */}
                <div className="flex items-end justify-center gap-1.5 h-16">
                  {[40, 75, 55, 90, 60, 45, 80, 70, 50, 85].map((h, i) => (
                    <div
                      key={i}
                      className="w-2.5 rounded-t bg-gradient-to-t from-orange-600 to-amber-400 transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core high-end client metrics */}
          <div id="project-modal-metrics-grid" className="relative z-10 grid grid-cols-2 gap-4">
            {project.metrics.map((m, idx) => (
              <div id={`project-modal-metric-card-${idx}`} key={idx} className="bg-black/40 border border-white/5 rounded-xl p-3">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">{m.label}</span>
                <span className="text-base font-bold font-mono text-white mt-1 block">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Tabs & Tech specs */}
        <div id="project-modal-right-panel" className="w-full md:w-[60%] bg-[#121212] p-6 md:p-8 overflow-y-auto flex flex-col">
          {/* Navigation Tabs */}
          <div id="project-modal-tab-row" className="flex border-b border-white/5 gap-1.5 pb-4 mb-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'architecture', label: 'System Topology', icon: Database },
              { id: 'code', label: 'Source code', icon: Terminal },
              { id: 'performance', label: 'Impact metrics', icon: Activity },
            ].map((tab) => (
              <button
                id={`project-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content Area */}
          <div id="project-modal-tab-content" className="flex-1">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div id="project-tab-content-overview" className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                <div>
                  <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Project Retrospective</h4>
                  <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed font-light">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">Engineered Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        id={`project-tech-badge-${idx}`}
                        key={idx}
                        className="px-3 py-1 bg-black border border-white/5 rounded-full text-xs font-mono text-blue-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-black border border-white/10 hover:border-orange-500/30 text-zinc-300 hover:text-white text-xs font-bold font-mono tracking-wide flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <FaGithub className="w-4 h-4 text-orange-500" />
                    <span>GITHUB_REPO.md</span>
                  </a>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-400 text-white text-xs font-bold font-mono tracking-wide flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <span>LIVE_PROD_DEPLOY</span>
                  </a>
                </div>
              </div>
            )}

            {/* SYSTEM TOPOLOGY TAB */}
            {activeTab === 'architecture' && (
              <div id="project-tab-content-architecture" className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">Architecture Topology</h4>
                <p className="text-xs text-zinc-500 font-mono mb-4">FLOW_CHANNELS: NODEJS EXPRESS ENGINE & EDGE CACHE</p>
                
                <div className="space-y-4">
                  {project.architecture.map((arch, idx) => (
                    <div id={`project-arch-step-${idx}`} key={idx} className="flex gap-4 p-4 rounded-2xl bg-black/45 border border-white/5 group hover:border-white/10 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-xs font-bold text-blue-400 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{arch.step}</h5>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">{arch.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SOURCE CODE TAB */}
            {activeTab === 'code' && (
              <div id="project-tab-content-code" className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Compiler terminal source</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black p-5 font-mono text-xs overflow-x-auto max-h-[350px] leading-relaxed text-zinc-300 scrollbar-thin">
                  <pre>{project.codeSnippet}</pre>
                </div>
              </div>
            )}

            {/* IMPACT METRICS TAB */}
            {activeTab === 'performance' && (
              <div id="project-tab-content-performance" className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Product Performance Benchmarks</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/45 border border-white/5 rounded-2xl p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-zinc-500 uppercase">Uptime Reliability</span>
                      <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-white">99.998%</div>
                    <div className="h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-emerald-500 rounded-full w-[99.9%]" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-1 font-sans">Multi-region distributed Cloud Run cluster targets.</span>
                  </div>

                  <div className="bg-black/45 border border-white/5 rounded-2xl p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-zinc-500 uppercase">Lighthouse Core Web Vitals</span>
                      <BarChart2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-white">100 / 100</div>
                    <div className="h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-blue-500 rounded-full w-full" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-1 font-sans">First Contentful Paint completed in sub-120ms.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/10 to-purple-950/10 border border-blue-500/10 flex items-start gap-3">
                  <Settings className="w-4.5 h-4.5 text-blue-500 flex-shrink-0 mt-0.5 animate-spin duration-3000" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Dynamic Scaling Matrix Active</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed font-light">
                      This system features custom auto-scaling rules tailored for massive spike workloads. Edge middleware ensures routing remains localized to minimize geographical routing latency.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
