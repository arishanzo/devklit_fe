
'use client';

import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { FolderKanban} from 'lucide-react';
import { projects } from '@/app/lib/Projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'motion' | 'web3' | 'ai'>('all');


  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);


     const scrollRef = useRef<HTMLDivElement>(null);
    
        useEffect(() => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;
    
            let scrollInterval: NodeJS.Timeout | null = null;
            let currentIndex = 0;
            const cardWidth = scrollContainer.clientWidth * 0.85 + 32; // 85vw + gap
    
            const startAutoScroll = () => {
                scrollInterval = setInterval(() => {
                    currentIndex++;
                    if (currentIndex >= 3) {
                        currentIndex = 0;
                    }
                    scrollContainer.scrollTo({
                        left: currentIndex * cardWidth,
                        behavior: 'smooth'
                    });
                }, 3000);
            };
    
            const stopAutoScroll = () => {
                if (scrollInterval) clearInterval(scrollInterval);
            };
    
            // Only run on mobile
            if (window.innerWidth < 768) {
                startAutoScroll();
                scrollContainer.addEventListener('touchstart', stopAutoScroll);
            }
    
            return () => {
                stopAutoScroll();
                scrollContainer.removeEventListener('touchstart', stopAutoScroll);
            };
        }, []);
    

  return (
    <div className="lg:py-1 bg-transparent text-white relative flex flex-col justify-start">
      {/* Background ambient lighting */}
      <div id="projects-bg-glow" className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-[120px] pointer-events-none" />

      <div id="projects-container" className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div id="projects-header" className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FolderKanban className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">PORTOFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
           Proyek Digital yang Telah Kami Wujudkan.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
             Jelajahi website, aplikasi, dan platform Saas
            </span>
          </h2>
        </div>

        {/* Dynamic Category Filters */}
        <div id="projects-filter-row" className="flex flex-wrap gap-2 mb-4 lg:mb-6">
          {[
           { id: "all", label: "Semua" },
  { id: "Website", label: "Website" },
  { id: "Mobile App", label: "Mobile App" },
  { id: "SaaS", label: "SaaS" },
          ].map((filter) => (
            <button
              id={`project-filter-${filter.id}`}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all tracking-wider uppercase border cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid Layout */}
        <div id="projects-bento-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0 && activeFilter === 'all';
            return (
             <div
  key={project.id}
  className={`group bg-[#121212] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/10 transition-all duration-500 ${
    isLarge ? "md:col-span-2" : ""
  }`}
>
  {/* Thumbnail */}
  <div className="relative h-15 overflow-hidden">
   
    <span
      className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-mono uppercase border backdrop-blur-md"
      style={{
        color: project.accent,
        borderColor: `${project.accent}40`,
      }}
    >
      {project.category}
    </span>
  </div>

  {/* Content */}
  <div className="p-8 flex flex-col gap-6">

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">
        {project.title}
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        {project.subtitle}
      </p>
    </div>

    {/* Tech */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-zinc-900 text-xs text-zinc-400"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* CTA */}
    <div className="flex gap-3 mt-auto">

      <a
        href={'project.demo'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 rounded-xl bg-white text-black font-medium flex items-center justify-center hover:bg-zinc-200 transition"
      >
        Live Demo
      </a>

    </div>

  </div>
</div>
            );
          })}
        </div>

        {/* Testimoni Section */}
                <div className=" py-8">
                 
                    {/* Testimonial Cards */}
                    <div ref={scrollRef} className="flex md:grid md:grid-cols-3 gap-2 overflow-x-auto snap-x snap-mandatory md:overflow-visible scrollbar-hide pb-4">
                        {/* Testimonial 1 */}
                        <article className="group relative bg-[#121212] p-8 rounded-2xl  hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                            <div className="absolute top-4 right-4 text-blue-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <img src="https://ui-avatars.com/api/?name=Ahmad+Rizki&background=2563eb&color=fff&size=56" alt="Ahmad Rizki" className="w-14 h-14 rounded-full object-cover" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Ahmad Rizki</h4>
                                        <p className="text-sm text-gray-600">CEO, PT Teknologi Maju</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Solusi digital yang diberikan sangat membantu transformasi bisnis kami. Tim profesional dan responsif dalam setiap kebutuhan.
                                </p>
                            </div>
                        </article>

                        {/* Testimonial 2 */}
                           <article className="group relative bg-[#121212] p-8 rounded-2xl  hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                                         <div className="absolute top-4 right-4 text-purple-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <img src="https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=9333ea&color=fff&size=56" alt="Siti Nurhaliza" className="w-14 h-14 rounded-full object-cover" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Siti Nurhaliza</h4>
                                        <p className="text-sm text-gray-600">Director, CV Digital Solusi</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Implementasi sistem yang cepat dan efisien. Hasil melebihi ekspektasi kami. Highly recommended!
                                </p>
                            </div>
                        </article>

                        {/* Testimonial 3 */}
                           <article className="group relative bg-[#121212] p-8 rounded-2xl  hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                                         <div className="absolute top-4 right-4 text-indigo-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <img src="https://ui-avatars.com/api/?name=Budi+Santoso&background=4f46e5&color=fff&size=56" alt="Budi Santoso" className="w-14 h-14 rounded-full object-cover" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Budi Santoso</h4>
                                        <p className="text-sm text-gray-600">CTO, PT Inovasi Digital</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Partnership yang luar biasa. Teknologi yang diterapkan sangat sesuai dengan kebutuhan bisnis kami.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
      </div>
    </div>
  );
}
